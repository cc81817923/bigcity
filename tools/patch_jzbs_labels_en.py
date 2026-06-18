#!/usr/bin/env python3
"""Replace baked Chinese on wg_jzbs_*.png tiles with short English labels (Pillow)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

BASE = Path(__file__).resolve().parent.parent
DIR = BASE / "assets/KinghtFallIconMap/com/Bottom"

# stem (wg_jzbs_*) -> English (no extension, without trailing _)
LABELS = {
    "jt": "Tower",
    "fw": "House",
    "by": "Camp",
    "cq": "Wall",
    "mf": "Mill",
    "zc": "Keep",
}


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for p in (
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
    ):
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def avg_color(img: Image.Image, box: tuple[int, int, int, int]) -> tuple[int, int, int, int]:
    r = g = b = n = 0
    for x in range(box[0], min(box[2], img.width)):
        for y in range(box[1], min(box[3], img.height)):
            px = img.getpixel((x, y))
            if len(px) == 4:
                r += px[0]
                g += px[1]
                b += px[2]
                n += 1
    if not n:
        return 140, 150, 90, 255
    return r // n, g // n, b // n, 255


def outline_text(draw: ImageDraw.ImageDraw, xy, text: str, font, fill, outline=2):
    x, y = xy
    for dx in range(-outline, outline + 1):
        for dy in range(-outline, outline + 1):
            if dx == 0 and dy == 0:
                continue
            draw.text((x + dx, y + dy), text, font=font, fill=(0, 0, 0, 255))
    draw.text((x, y), text, font=font, fill=fill)


def patch_file(path: Path, label: str) -> None:
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    # Cover lower-right text band (CN glyphs); keep icon on left
    bg = avg_color(img, (0, 0, min(120, w), h))
    overlay_box = (int(w * 0.38), int(h * 0.35), w - 2, h - 2)
    overlay = Image.new("RGBA", (overlay_box[2] - overlay_box[0], overlay_box[3] - overlay_box[1]), bg)
    img.paste(overlay, (overlay_box[0], overlay_box[1]), overlay)

    draw = ImageDraw.Draw(img)
    font_size = 22 if len(label) <= 5 else 18
    font = load_font(font_size)
    # Diagonal English along tile perspective (~ -18 deg)
    cx, cy = w * 0.72, h * 0.62
    txt = label
    try:
        bbox = draw.textbbox((0, 0), txt, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    except AttributeError:
        tw, th = draw.textsize(txt, font=font)
    outline_text(draw, (cx - tw / 2, cy - th / 2), txt, font, (255, 255, 255, 255), outline=2)
    img.save(path, "PNG")
    print("patched", path.name, "->", label)


def main() -> None:
    for p in sorted(DIR.glob("wg_jzbs_*.png")):
        stem = p.stem  # wg_jzbs_jt or wg_jzbs_jt_
        key = stem.replace("wg_jzbs_", "").rstrip("_")
        label = LABELS.get(key)
        if not label:
            print("skip", p.name)
            continue
        patch_file(p, label)


if __name__ == "__main__":
    main()
