#!/usr/bin/env python3
"""Translate Chinese strings in GameJsonCfg.json to English (cached, tag-safe)."""
import json
import re
import shutil
import sys
import time
from pathlib import Path

sys.setrecursionlimit(25000)

try:
    from deep_translator import GoogleTranslator, MyMemoryTranslator
except ImportError:
    print(
        "Run: cd project && python3 -m venv .venv && .venv/bin/pip install deep-translator",
        file=sys.stderr,
    )
    raise

BASE = Path(__file__).resolve().parent.parent
CFG_PATH = BASE / "assets/configs/GameJsonCfg.json"
CACHE_PATH = BASE / "tools" / "translate_cache.json"

# (Chinese, placeholder token, English term to show after translation).
# Longer phrases first. Placeholders avoid MT mangling game economy terms.
PAIRS = [
    ("城堡中心", "__CSTR_CITADEL__", "Citadel"),
    ("民宅的建造和升级", "__PH_HOUSE_BUILD__", "house build and upgrade cost"),
    ("民宅被毁后", "__PH_HOUSE_DEAD__", "after a house is destroyed"),
    ("建筑被摧毁后", "__PH_BLD_DEAD__", "after a building is destroyed"),
    ("主堡及箭塔", "__PH_KEEP_TOW__", "keep and towers"),
    ("敌方士兵", "__CSTR_ENEMY_SOLDIER__", "enemy soldiers"),
    ("攻击速度", "__PH_ATKSPD__", "attack speed"),
    ("攻击范围", "__PH_ATKRNG__", "attack range"),
    ("移动速度", "__PH_MOVSPD__", "move speed"),
    ("建造及升级", "__PH_BUILD_UP__", "build and upgrade"),
    ("无可升级", "__PH_NONE_UP__", "nothing to upgrade"),
    ("血条", "__PH_HPBAR__", "HP bar"),
    ("重步兵", "__CSTR_HEAVY__", "heavy infantry"),
    ("弓箭手", "__CSTR_ARCH__", "archers"),
    ("通行证点数", "__CSTR_BPPTS__", "pass points"),
    ("复活币", "__CSTR_REVIVE__", "revive tokens"),
    ("攻城车", "__CSTR_SIEGE__", "siege engine"),
    ("牛头萨满", "__M_EN1__", "tauren shaman"),
    ("无头骑士", "__M_EN2__", "headless knight"),
    ("恶灵法师", "__M_EN3__", "specter mage"),
    ("邪恶牧师", "__M_EN4__", "dark priest"),
    ("变种怪物", "__M_EN5__", "mutant"),
    ("银币", "__CSTR_SILVER__", "silver"),
    ("金币", "__CSTR_GOLD__", "gold"),
    ("钻石", "__CSTR_DIAMOND__", "gems"),
    ("体力", "__CSTR_STAMINA__", "stamina"),
    ("乡镇中心", "__CSTR_TOWN1__", "town center"),
    ("城镇中心", "__CSTR_TOWN2__", "town center"),
    ("主城", "__CSTR_MAINCITY__", "main keep"),
    ("主堡", "__CSTR_KEEP__", "keep"),
    ("箭塔", "__CSTR_TOWER__", "tower"),
    ("兵营", "__CSTR_BARRACKS__", "barracks"),
    ("民宅", "__CSTR_HOUSE__", "house"),
    ("磨坊", "__CSTR_MILL__", "mill"),
    ("城墙", "__CSTR_WALL__", "wall"),
    ("房屋", "__CSTR_HOME__", "house"),
    ("步兵", "__CSTR_INF__", "infantry"),
    ("骑兵", "__CSTR_CAV__", "cavalry"),
    ("弩兵", "__CSTR_CROSS__", "crossbowmen"),
    ("士兵", "__CSTR_SOLDIER__", "soldiers"),
    ("敌人", "__CSTR_ENEMY__", "enemies"),
    ("主角", "__CSTR_HERO__", "hero"),
    ("至宝", "__CSTR_RELIC__", "relic"),
    ("天赋", "__CSTR_TALENT__", "talents"),
    ("装备", "__CSTR_GEAR__", "gear"),
    ("灵光", "__CSTR_AURA__", "aura"),
    ("关卡", "__CSTR_STAGE__", "stage"),
    ("视频", "__CSTR_VIDEO__", "video ads"),
    ("名敌人", "__PH_MING_EN__", "enemies"),
    ("暴击", "__PH_CRIT__", "crit"),
    ("攻速", "__PH_ASPD__", "atk spd"),
    ("移速", "__PH_MSPD__", "move spd"),
    ("血量", "__PH_HP__", "HP"),
    ("伤害", "__PH_DMG__", "damage"),
    ("攻击", "__PH_ATK__", "attack"),
    ("击杀", "__PH_KILL__", "defeat"),
    ("拥有", "__PH_OWN__", "own"),
    ("登录", "__PH_LOGIN__", "log in"),
    ("挑战", "__PH_CHAL__", "challenge"),
    ("完成", "__PH_DONE__", "complete"),
    ("解锁", "__PH_UNLOCK__", "unlock"),
    ("强化", "__PH_ENH__", "enhance"),
    ("观看", "__PH_WATCH__", "watch"),
    ("升级", "__PH_UPG__", "upgrade"),
    ("获得", "__PH_GET__", "earn"),
    ("提升", "__PH_BOOST__", "raise"),
    ("进行", "__PH_DO__", "do"),
    ("击败", "__PH_BEAT__", "defeat"),
    ("通过", "__PH_PASS__", "beat"),
    ("随机", "__PH_RND__", "random"),
    ("立即", "__PH_NOW__", "instantly"),
    ("额外", "__PH_EXTRA__", "extra"),
    ("每天", "__PH_DAILY__", "per day"),
    ("产量", "__PH_YIELD__", "output"),
    ("建造", "__PH_BUILD__", "build"),
    ("摧毁", "__PH_DEST__", "destroyed"),
    ("结算", "__PH_END__", "payout"),
    ("增加", "__PH_ADD__", "increase"),
    ("减少", "__PH_SUB__", "decrease"),
    ("提高", "__PH_RAISE__", "raise"),
    ("降低", "__PH_LOWER__", "lower"),
    ("恢复", "__PH_HEAL__", "recover"),
    ("无敌", "__PH_INVULN__", "invincible"),
    ("效果", "__PH_FX__", "effect"),
    ("持续", "__PH_DUR__", "lasts"),
    ("概率", "__PH_CHANCE__", "chance"),
    ("扣除所有银币", "__PH_SPEND_ALL_SILV__", "spend all silver"),
    ("不生效", "__PH_NOEFF__", "no effect"),
    ("除外", "__PH_EXCEPT__", "except"),
    ("灵光解锁", "__PH_AURA_UNLOCK__", "Aura unlock"),
    ("【灵光解锁】", "__PH_AURA_TAG__", "[Aura unlock]"),
    ("近战敌人", "__PH_MELEE__", "melee enemies"),
    ("远程敌人", "__PH_RANGE__", "ranged enemies"),
    ("远程士兵", "__PH_RNGSOL__", "ranged soldiers"),
    ("近战士兵", "__PH_MELEESOL__", "melee soldiers"),
    ("建筑进化", "__SK_BUILDEV__", "building evolve"),
    ("速射手", "__SK_FASTBOW__", "rapid archer"),
    ("烂命一条", "__SK_GLASS__", "glass cannon"),
    ("目光短浅", "__SK_SHORT__", "short-sighted"),
    ("弱肉强食", "__SK_JUNGLE__", "eat or be eaten"),
    ("既快又慢", "__SK_MIXSPD__", "fast and slow"),
    ("血轮眼", "__SK_REDEYE__", "blood-eye"),
    ("箭者为王", "__SK_TOWERK__", "towers rule"),
    ("以民为本", "__SK_PEOPLE__", "people first"),
    ("外强中干", "__SK_HOLLOW__", "hollow might"),
    ("五号化合物", "__SK_V52__", "V compound"),
    ("超雄综合症", "__SK_RAGE__", "rage syndrome"),
    ("眼睛劈叉", "__SK_CROSSEYE__", "cross-eye"),
]

PAIRS_SORTED = sorted(PAIRS, key=lambda x: -len(x[0]))
ZH_TO_TOKEN = [(a, b) for a, b, _ in PAIRS_SORTED]
TOKEN_TO_EN = {b: c for a, b, c in PAIRS_SORTED}

cjk_re = re.compile(r"[\u4e00-\u9fff]")
# Split BBCode-like tags so MT never sees "<color=...>" as translatable.
TAG_SPLIT = re.compile(r"(<[^>]*>)")


def shield(s: str) -> str:
    t = s
    for zh, tok in ZH_TO_TOKEN:
        t = t.replace(zh, f" {tok} ")
    return re.sub(r"\s+", " ", t)


def unshield(s: str) -> str:
    t = s
    for tok, en in TOKEN_TO_EN.items():
        t = t.replace(tok, f" {en} ")
    return re.sub(r"\s+", " ", t)


def load_cache():
    if CACHE_PATH.is_file():
        with open(CACHE_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_cache(c):
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(CACHE_PATH, "w", encoding="utf-8") as f:
        json.dump(c, f, ensure_ascii=False, indent=0)


def collect_cjk_strings(obj, acc: set):
    if isinstance(obj, dict):
        for v in obj.values():
            collect_cjk_strings(v, acc)
    elif isinstance(obj, list):
        for i in obj:
            collect_cjk_strings(i, acc)
    elif isinstance(obj, str) and cjk_re.search(obj):
        acc.add(obj)


def apply_map(obj, mapping: dict):
    if isinstance(obj, dict):
        return {k: apply_map(v, mapping) for k, v in obj.items()}
    if isinstance(obj, list):
        return [apply_map(v, mapping) for v in obj]
    if isinstance(obj, str) and obj in mapping:
        return mapping[obj]
    return obj


def clean_stale_cache(cache: dict) -> int:
    """Drop cache rows that look broken (unsubstituted tokens or leftover CJK)."""
    bad = []
    for k, v in cache.items():
        if not isinstance(v, str):
            bad.append(k)
            continue
        if "__PH_" in v or "__CSTR_" in v or "__M_EN" in v or "__SK_" in v:
            bad.append(k)
            continue
        if cjk_re.search(v):
            bad.append(k)
    for k in bad:
        del cache[k]
    return len(bad)


def translate_chunk(raw: str, g_tr, m_tr) -> str:
    """Translate one text fragment (no angle-bracket tags)."""
    if not raw:
        return raw
    mid0 = shield(raw)
    if not cjk_re.search(mid0):
        return unshield(mid0) if "__" in mid0 or cjk_re.search(raw) else raw
    if not cjk_re.search(raw) and "__PH_" not in mid0 and "__CSTR_" not in mid0:
        return raw

    mid = mid0
    attempts = [
        ("g+shield", lambda: g_tr.translate(mid)),
        ("g+raw", lambda: g_tr.translate(raw)),
        ("m+shield", lambda: m_tr.translate(mid)),
        ("m+raw", lambda: m_tr.translate(raw)),
    ]
    last_err = None
    for label, fn in attempts:
        try:
            time.sleep(0.12)
            out = fn()
            if not out:
                continue
            fixed = unshield(out)
            if not cjk_re.search(fixed):
                return fixed
        except Exception as e:
            last_err = e
            continue
    if last_err:
        print("translate_chunk failed:", repr(raw)[:100], last_err, file=sys.stderr)
    return raw


def translate_string(s: str, g_tr, m_tr) -> str:
    parts = TAG_SPLIT.split(s)
    out = []
    for p in parts:
        if not p:
            continue
        if p.startswith("<") and p.endswith(">"):
            out.append(p)
        else:
            out.append(translate_chunk(p, g_tr, m_tr))
    result = "".join(out)
    return result.strip()


def main():
    if "--clean-cache" in sys.argv:
        c = load_cache()
        n = clean_stale_cache(c)
        save_cache(c)
        print("Removed", n, "stale cache entries")
        return

    g_tr = GoogleTranslator(source="zh-CN", target="en")
    m_tr = MyMemoryTranslator(source="zh-CN", target="en-US")

    with open(CFG_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    needed = set()
    collect_cjk_strings(data, needed)
    cache = load_cache()
    clean_stale_cache(cache)

    todo = sorted(s for s in needed if s not in cache or not cache[s] or cjk_re.search(cache[s]))
    print("Unique CJK strings:", len(needed), "to translate:", len(todo))

    for i, src in enumerate(todo):
        cache[src] = translate_string(src, g_tr, m_tr)
        if (i + 1) % 25 == 0:
            save_cache(cache)
            print("  ...", i + 1, "/", len(todo))
        time.sleep(0.05)

    save_cache(cache)

    mapping = {k: cache.get(k, k) for k in needed}
    still = [k for k, v in mapping.items() if cjk_re.search(v)]
    if still:
        print("WARNING:", len(still), "strings still have CJK. Re-run or extend PAIRS.", file=sys.stderr)
        for s in still[:8]:
            print("  ", repr(s)[:90], "->", repr(mapping[s])[:90], file=sys.stderr)

    backup = CFG_PATH.with_suffix(".json.zh-backup")
    if not backup.is_file():
        shutil.copy2(CFG_PATH, backup)
        print("Backup:", backup)

    data = apply_map(data, mapping)
    with open(CFG_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("Wrote", CFG_PATH)


if __name__ == "__main__":
    main()
