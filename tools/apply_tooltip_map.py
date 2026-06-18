#!/usr/bin/env python3
import json
import re
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
MAP = json.loads((BASE / "tools" / "tooltip_zh_en.json").read_text(encoding="utf-8"))
keys = sorted(MAP.keys(), key=len, reverse=True)

for path in (BASE / "assets" / "_script").rglob("*.js"):
    raw = path.read_text(encoding="utf-8")
    if not re.search(r"[\u4e00-\u9fff]", raw):
        continue
    s = raw
    for zh in keys:
        if zh not in s:
            continue
        en = MAP[zh]
        s = s.replace(f'tooltip: "{zh}"', f'tooltip: "{en}"')
    if s != raw:
        path.write_text(s, encoding="utf-8")
        print(path.relative_to(BASE))
