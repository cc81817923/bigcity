#!/usr/bin/env python3
"""Replace Chinese (CJK) in quoted strings under assets/ with English via MyMemory (cached)."""
from __future__ import annotations

import json
import re
import sys
import time
from pathlib import Path

try:
    from deep_translator import MyMemoryTranslator
except ImportError:
    print("Run: python3 -m venv .venv && .venv/bin/pip install deep-translator", file=sys.stderr)
    raise

BASE = Path(__file__).resolve().parent.parent
ASSETS = BASE / "assets"
CACHE_PATH = BASE / "tools" / "zh_to_en_string_cache.json"

SKIP_SUBSTR = (
    "/spine/",
    "KinghtFallEnemyAni",
    "KinghtFallEffect/",
    "/configsB/",
    "/configsD/",
    ".zh-backup",
    "translate_cache.json",
)

translator = MyMemoryTranslator(source="zh-CN", target="en-US")


def load_cache() -> dict:
    if CACHE_PATH.exists():
        return json.loads(CACHE_PATH.read_text(encoding="utf-8"))
    return {}


def save_cache(c: dict) -> None:
    CACHE_PATH.write_text(json.dumps(c, ensure_ascii=False, indent=0), encoding="utf-8")


def should_skip_file(path: Path) -> bool:
    s = str(path)
    if any(x in s for x in SKIP_SUBSTR):
        return True
    # Spine skeleton exports — Chinese often in asset paths; do not rewrite
    if "/_res/Skeleton/" in s.replace("\\", "/"):
        return True
    if path.suffix == ".json" and "gad_imgs" in s and "spine" in s:
        return True
    return False


CJK_RE = re.compile(r"[\u4e00-\u9fff]")


def unescape_js_str(s: str) -> str:
    return (
        s.replace("\\n", "\n")
        .replace('\\"', '"')
        .replace("\\'", "'")
        .replace("\\\\", "\\")
    )


def escape_js_str(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "\\r")
    )


def translate_one(text: str, cache: dict) -> str:
    if text in cache:
        return cache[text]
    if not CJK_RE.search(text):
        cache[text] = text
        return text
    # Preserve game color tags roughly — MyMemory may still alter; retry plain
    try:
        out = translator.translate(text)
        time.sleep(0.08)
    except Exception as e:
        print("translate fail:", repr(text[:80]), e, file=sys.stderr)
        out = text
    cache[text] = out
    return out


def process_content(data: str, cache: dict, allow_single: bool = False) -> tuple[str, int]:
    """Double-quoted segments; optional single-quoted (JS)."""

    def repl_dbl(m: re.Match) -> str:
        raw_inner = m.group(1)
        inner = unescape_js_str(raw_inner)
        if not CJK_RE.search(inner):
            return m.group(0)
        out = translate_one(inner, cache)
        return '"' + escape_js_str(out) + '"'

    def repl_sgl(m: re.Match) -> str:
        raw_inner = m.group(1)
        inner = raw_inner.replace("\\'", "'").replace("\\\\", "\\")
        if not CJK_RE.search(inner):
            return m.group(0)
        out = translate_one(inner, cache)
        esc = out.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n").replace("\r", "\\r")
        return "'" + esc + "'"

    pattern_d = re.compile(r'"((?:[^"\\]|\\.)*[\u4e00-\u9fff](?:[^"\\]|\\.)*)"')
    new_data, n = pattern_d.subn(repl_dbl, data)
    if allow_single:
        pattern_s = re.compile(r"'((?:[^'\\]|\\.)*[\u4e00-\u9fff](?:[^'\\]|\\.)*)'")
        new_data, n2 = pattern_s.subn(repl_sgl, new_data)
        n += n2
    return new_data, n


def main() -> None:
    dry = "--dry" in sys.argv
    cache = load_cache()
    changed_files = 0
    total_subs = 0
    for path in sorted(ASSETS.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix not in {".js", ".prefab", ".fire", ".ts"}:
            continue
        if should_skip_file(path):
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        if not CJK_RE.search(text):
            continue
        new_text, n = process_content(text, cache, allow_single=path.suffix in (".js", ".ts"))
        if n and new_text != text:
            total_subs += n
            changed_files += 1
            if not dry:
                path.write_text(new_text, encoding="utf-8")
            print(f"{'(dry) ' if dry else ''}{path.relative_to(BASE)}: {n} string(s)")
    save_cache(cache)
    print(f"Done. Files touched: {changed_files}, quoted-CJK segments translated: {total_subs}")


if __name__ == "__main__":
    main()
