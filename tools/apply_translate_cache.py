#!/usr/bin/env python3
"""Apply tools/translate_cache.json (zh->en) across assets text files. Longest keys first."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
CACHE = BASE / "tools" / "translate_cache.json"

SKIP_SUB = ("/configsB/", "/configsD/", ".zh-backup", "/_res/Skeleton/", "KinghtFallEnemyAni", "/spine/")
EXTS = {".js", ".prefab", ".fire", ".ts", ".tsx", ".json"}


def main() -> None:
    pairs = json.loads(CACHE.read_text(encoding="utf-8"))
    keys = sorted(pairs.keys(), key=len, reverse=True)
    dry = "--dry" in sys.argv
    changed = 0
    for path in sorted((BASE / "assets").rglob("*")):
        if not path.is_file() or path.suffix not in EXTS:
            continue
        sp = str(path).replace("\\", "/")
        if any(x in sp for x in SKIP_SUB):
            continue
        if "gad_imgs" in sp and "spine" in sp:
            continue
        raw = path.read_text(encoding="utf-8", errors="ignore")
        if not re.search(r"[\u4e00-\u9fff]", raw):
            continue
        s = raw
        subs = 0
        for k in keys:
            if not k or k not in s:
                continue
            en = pairs[k]
            if k == en:
                continue
            n = s.count(k)
            if n:
                s = s.replace(k, en)
                subs += n
        if s != raw:
            changed += 1
            if not dry:
                path.write_text(s, encoding="utf-8")
            print(f"{'(dry) ' if dry else ''}{path.relative_to(BASE)} (+{subs} replaces)")
    print("files changed:", changed)


if __name__ == "__main__":
    main()
