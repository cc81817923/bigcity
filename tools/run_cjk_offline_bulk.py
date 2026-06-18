#!/usr/bin/env python3
"""
Offline bulk: CJK -> English for assets + all repo .json/.ts using merged dictionaries
and TextCfg zh/fz <- en sync. No network. Skips Spine/Skeleton JSON and creator.d.ts.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent

SKIP_DIR = {"node_modules", "library", "temp", "build", ".venv", ".git"}
SKIP_JSON_NAMES = {"translate_cache.json"}

CJK = re.compile(r"[\u4e00-\u9fff]")
PATHY = re.compile(r"[/\\].*[\u4e00-\u9fff]|[\u4e00-\u9fff].*[/\\]|^\.\./")

# Extra phrases often missing from translate_cache.json
EXTRA = {
    "配置文件加载": "Loading config",
    "加载用户数据": "Loading user data",
    "加载资源": "Loading assets",
    "进入中...": "Entering...",
    "请选择道具": "Please select an item",
    "第{0}名": "#{0}",
    "容错处理,请勿删除": "Fault tolerance — do not remove",
    "注意：当前使用的是本地远程配置文件": "Note: using local remote config",
    "### 未找到锁定点": "### Lock point not found",
    "碰到就要移动的点": "Hit-move point",
}


def load_map() -> dict[str, str]:
    m: dict[str, str] = {}
    for p in (BASE / "tools/translate_cache.json", BASE / "tools/tooltip_zh_en.json"):
        if p.exists():
            m.update(json.loads(p.read_text(encoding="utf-8")))
    m.update(EXTRA)
    # drop self-references
    return {k: v for k, v in m.items() if k != v and CJK.search(k)}


def should_skip(path: Path) -> bool:
    if path.name == "creator.d.ts":
        return True
    for d in SKIP_DIR:
        if d in path.parts:
            return True
    if path.suffix.lower() == ".json" and path.name in SKIP_JSON_NAMES:
        return True
    sp = str(path).replace("\\", "/")
    if path.suffix.lower() == ".json":
        if any(x in sp for x in ("/spine/", "/Skeleton/", "KinghtFallEnemyAni", "KinghtFallEffect/", "/KinghtFallEnemy/")):
            return True
    return False


def looks_pathy(s: str) -> bool:
    return bool(PATHY.search(s)) or s.startswith("./")


def sync_textcfg_row(d: dict) -> None:
    if not isinstance(d, dict) or "zh" not in d or "en" not in d:
        return
    en = d["en"]
    if not isinstance(en, str) or not en.strip():
        return
    if CJK.search(en):
        return
    for k in ("zh", "fz"):
        if k in d and isinstance(d[k], str) and CJK.search(d[k]):
            d[k] = en


def apply_phrase_map(s: str, keys: list[str], m: dict[str, str]) -> str:
    if not s or not CJK.search(s):
        return s
    if looks_pathy(s):
        return s
    out = s
    for k in keys:
        if k in out:
            out = out.replace(k, m[k])
    return out


def walk_json(obj, keys: list[str], m: dict[str, str]) -> None:
    if isinstance(obj, dict):
        sync_textcfg_row(obj)
        for k, v in list(obj.items()):
            if k == "jp":
                continue
            if isinstance(v, str):
                nv = apply_phrase_map(v, keys, m)
                if nv != v:
                    obj[k] = nv
            else:
                walk_json(v, keys, m)
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            if isinstance(item, str):
                nv = apply_phrase_map(item, keys, m)
                if nv != item:
                    obj[i] = nv
            else:
                walk_json(item, keys, m)


def process_json(path: Path, keys: list[str], m: dict[str, str]) -> bool:
    raw = path.read_text(encoding="utf-8", errors="ignore")
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return False
    before = json.dumps(data, ensure_ascii=False)
    walk_json(data, keys, m)
    after = json.dumps(data, ensure_ascii=False)
    if before == after:
        return False
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("JSON", path.relative_to(BASE))
    return True


def process_text(path: Path, keys: list[str], m: dict[str, str]) -> bool:
    raw = path.read_text(encoding="utf-8", errors="ignore")
    if not CJK.search(raw):
        return False
    out = raw
    for k in keys:
        if k in out:
            out = out.replace(k, m[k])
    if out == raw:
        return False
    path.write_text(out, encoding="utf-8")
    print(path.suffix, path.relative_to(BASE))
    return True


def main() -> None:
    m = load_map()
    keys = sorted(m.keys(), key=len, reverse=True)
    n = 0
    for path in sorted(BASE.rglob("*")):
        if not path.is_file() or should_skip(path):
            continue
        suf = path.suffix.lower()
        try:
            rel = path.relative_to(BASE)
        except ValueError:
            continue
        if suf == ".json":
            if process_json(path, keys, m):
                n += 1
        elif suf == ".ts":
            if process_text(path, keys, m):
                n += 1
        elif rel.parts and rel.parts[0] == "assets" and suf in (".js", ".prefab", ".fire"):
            if process_text(path, keys, m):
                n += 1
    print("done, files changed:", n)


if __name__ == "__main__":
    main()
