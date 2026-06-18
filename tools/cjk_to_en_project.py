#!/usr/bin/env python3
"""
Translate Chinese (CJK Unified Ideographs) in string values to English.

Targets:
  - Entire assets/ (js, json, prefab, fire, ts — text only)
  - All *.json under repo (except node_modules, library, temp, build, .venv)
  - All *.ts under repo except creator.d.ts (engine typings; do not modify)

Skips:
  - Spine/Skeleton/EnemyAni/Effect JSON (often Chinese in file paths — breaks runtime)
  - tools/translate_cache.json (dictionary uses Chinese keys on purpose)
  - Strings that look like filesystem paths containing CJK (./  or  ../  or .png/.jpg)
"""
from __future__ import annotations

import json
import re
import sys
import time
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
CACHE_MAP_PATH = BASE / "tools" / "translate_cache.json"
MT_CACHE_PATH = BASE / "tools" / "cjk_mt_cache.json"

SKIP_DIR_SUBSTR = (
    "node_modules",
    "library",
    "temp",
    "build",
    ".venv",
    ".git",
)

SKIP_JSON_NAMES = frozenset({"translate_cache.json"})

PATH_HINT_RE = re.compile(r"[/\\][^\"'\\]*[\u4e00-\u9fff]|(?:\.\./|[\u4e00-\u9fff].*[/\\.])")
CJK_RE = re.compile(r"[\u4e00-\u9fff]")


def load_json_map(path: Path) -> dict:
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, obj: dict) -> None:
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8")


def get_translator():
    try:
        from deep_translator import MyMemoryTranslator

        return MyMemoryTranslator(source="zh-CN", target="en-US")
    except ImportError:
        return None


def should_skip_file(path: Path) -> bool:
    if path.name == "creator.d.ts":
        return True
    s = str(path)
    for d in SKIP_DIR_SUBSTR:
        if d in path.parts:
            return True
    if path.name == "creator.d.ts":
        return True
    if path.suffix.lower() == ".json" and path.name in SKIP_JSON_NAMES:
        return True
    if path.suffix.lower() == ".json":
        sp = s.replace("\\", "/")
        if any(
            x in sp
            for x in (
                "/spine/",
                "/Skeleton/",
                "KinghtFallEnemyAni",
                "KinghtFallEffect/",
                "/KinghtFallEnemy/",
            )
        ):
            return True
    return False


def looks_like_risky_path(val: str) -> bool:
    if PATH_HINT_RE.search(val):
        return True
    if val.startswith("./") or val.startswith("../") or ":\\" in val:
        return True
    return False


def translate_string(
    val: str,
    fixed: dict,
    mt_cache: dict,
    translator,
) -> str:
    if val in fixed:
        return fixed[val]
    if val in mt_cache:
        return mt_cache[val]
    if not CJK_RE.search(val):
        return val
    if looks_like_risky_path(val):
        return val
    if translator is None:
        return val
    try:
        out = translator.translate(val)
        time.sleep(0.06)
    except Exception:
        return val
    mt_cache[val] = out
    return out


def sync_textcfg_row_zh_fz_from_en(obj: dict) -> None:
    if not isinstance(obj, dict) or "zh" not in obj or "en" not in obj:
        return
    en = obj["en"]
    if not isinstance(en, str) or not en.strip() or CJK_RE.search(en):
        return
    for k in ("zh", "fz"):
        if k in obj and isinstance(obj[k], str) and CJK_RE.search(obj[k]):
            obj[k] = en


def walk_json_textcfg(obj, fixed: dict, mt_cache: dict, translator) -> None:
    """In-place translate string values; skip 'jp' keys (Japanese locale)."""
    if isinstance(obj, dict):
        sync_textcfg_row_zh_fz_from_en(obj)
        for k, v in list(obj.items()):
            if k == "jp":
                continue
            if isinstance(v, str) and CJK_RE.search(v) and not looks_like_risky_path(v):
                obj[k] = translate_string(v, fixed, mt_cache, translator)
            else:
                walk_json_textcfg(v, fixed, mt_cache, translator)
    elif isinstance(obj, list):
        for item in obj:
            walk_json_textcfg(item, fixed, mt_cache, translator)


def process_json(path: Path, fixed: dict, mt_cache: dict, translator, dry: bool) -> bool:
    raw = path.read_text(encoding="utf-8", errors="ignore")
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return False
    before = json.dumps(data, ensure_ascii=False)
    walk_json_textcfg(data, fixed, mt_cache, translator)
    after = json.dumps(data, ensure_ascii=False)
    if before == after:
        return False
    if not dry:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{'[dry] ' if dry else ''}JSON {path.relative_to(BASE)}")
    return True


def process_plaintext_strings(path: Path, fixed: dict, mt_cache: dict, translator, dry: bool) -> bool:
    raw = path.read_text(encoding="utf-8", errors="ignore")
    if not CJK_RE.search(raw):
        return False
    changed = False

    def repl_dbl(m: re.Match) -> str:
        nonlocal changed
        inner = m.group(1).replace('\\"', '"').replace("\\\\", "\\")
        if looks_like_risky_path(inner):
            return m.group(0)
        if not CJK_RE.search(inner):
            return m.group(0)
        out = translate_string(inner, fixed, mt_cache, translator)
        if out != inner:
            changed = True
        esc = out.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "\\r")
        return '"' + esc + '"'

    pattern = re.compile(r'"((?:[^"\\]|\\.)*[\u4e00-\u9fff](?:[^"\\]|\\.)*)"')
    new_raw = pattern.sub(repl_dbl, raw)
    if path.suffix.lower() in (".js", ".ts"):
        pattern_s = re.compile(r"'((?:[^'\\]|\\.)*[\u4e00-\u9fff](?:[^'\\]|\\.)*)'")

        def repl_sgl(m: re.Match) -> str:
            nonlocal changed
            inner = m.group(1).replace("\\'", "'").replace("\\\\", "\\")
            if looks_like_risky_path(inner):
                return m.group(0)
            if not CJK_RE.search(inner):
                return m.group(0)
            out = translate_string(inner, fixed, mt_cache, translator)
            if out != inner:
                changed = True
            esc = out.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n").replace("\r", "\\r")
            return "'" + esc + "'"

        new_raw = pattern_s.sub(repl_sgl, new_raw)

    if not changed or new_raw == raw:
        return False
    if not dry:
        path.write_text(new_raw, encoding="utf-8")
    print(f"{'[dry] ' if dry else ''}{path.suffix} {path.relative_to(BASE)}")
    return True


def collect_files() -> tuple[list[Path], list[Path]]:
    json_files: list[Path] = []
    text_files: list[Path] = []
    for path in BASE.rglob("*"):
        if not path.is_file() or should_skip_file(path):
            continue
        try:
            rel = path.relative_to(BASE)
        except ValueError:
            continue
        suf = path.suffix.lower()
        if suf == ".json":
            json_files.append(path)
        elif suf == ".ts":
            text_files.append(path)
        elif rel.parts and rel.parts[0] == "assets" and suf in (".js", ".prefab", ".fire"):
            text_files.append(path)
    return sorted(set(json_files)), sorted(set(text_files))


def main() -> None:
    dry = "--dry" in sys.argv
    fixed = load_json_map(CACHE_MAP_PATH)
    mt_cache = load_json_map(MT_CACHE_PATH)
    translator = None if dry else get_translator()
    if translator is None and not dry:
        print("Install: .venv/bin/pip install deep-translator", file=sys.stderr)

    json_files, text_files = collect_files()
    n = 0
    for p in json_files:
        if should_skip_file(p):
            continue
        try:
            if process_json(p, fixed, mt_cache, translator, dry):
                n += 1
        except Exception as e:
            print("ERR", p, e, file=sys.stderr)
    for p in text_files:
        if should_skip_file(p):
            continue
        if p.suffix.lower() == ".json":
            continue
        try:
            if process_plaintext_strings(p, fixed, mt_cache, translator, dry):
                n += 1
        except Exception as e:
            print("ERR", p, e, file=sys.stderr)

    if not dry:
        save_json(MT_CACHE_PATH, mt_cache)
    print("files modified:", n)


if __name__ == "__main__":
    main()
