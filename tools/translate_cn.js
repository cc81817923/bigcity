/**
 * 中文 → 英文 批量替换脚本
 *
 * 处理范围：
 *   assets/ 下所有 .prefab（Label _string 字段）
 *   assets/_script/ 下所有 .js（字符串字面量，跳过注释行）
 *
 * 不处理：server/ 目录
 *
 * 用法：
 *   node tools/translate_cn.js             # 正式替换
 *   node tools/translate_cn.js --dry-run   # 只预览，不写文件
 */

const fs   = require("fs");
const path = require("path");

const DRY_RUN = process.argv.includes("--dry-run");

// ── 翻译词典 ─────────────────────────────────────────────────
const DICT = {
  "继续":           "Continue",
  "取消":           "Cancel",
  "设置":           "Settings",
  "提示":           "Notice",
  "音乐":           "Music",
  "音效":           "Sound",
  "获得奖励":       "Reward",
  "继续战斗":       "Resume",
  "重新开始":       "Restart",
  "返回主界面":     "Main Menu",
  "返回大厅":       "Lobby",
  "进阶玩法":       "Advanced",
  "buff选择":       "Buff Select",
  "获取数据":       "Sync Data",
  "双倍领取":       "Claim Double",
  "广告加载中...":  "Loading Ad...",
  "无法看广告":     "Ad Unavailable",
  "子弹攻击":       "Bullet ATK",
  "伤害提升5":      "DMG +5",
  "攻速提升2":      "ATK SPD +2",
  "攻速提升5":      "ATK SPD +5",
  "反馈与投诉":     "Feedback",
  "虚假宣传":       "Misleading Ad",
  "游戏卡死":       "Game Stuck",
  "数据丢失":       "Data Lost",
  "问题描述":       "Describe Issue",
  "留下联系方式更方便我们联系您": "Leave contact info for follow-up",
  "暂停中\n点击任意区域继续": "Paused\nTap anywhere to resume",
  "检测到未完成的战斗，\n是否继续？": "Unfinished battle found.\nContinue?",
  "tips:游戏是本地缓存，如果清除了本地数据会导致游戏进度消失哦~":
    "Note: Game uses local storage. Clearing data will erase progress.",
};

// ── 处理 prefab ───────────────────────────────────────────────
function processPrefab(filePath) {
  let raw = fs.readFileSync(filePath, "utf8");
  let changed = false;

  // 替换 _string / _N$string 字段值
  let result = raw.replace(
    /("_(?:N\$)?string":\s*)"((?:[^"\\]|\\.)*)"/g,
    function (match, prefix, str) {
      const decoded = str.replace(/\\n/g, "\n");
      const en = DICT[decoded];
      if (en === undefined) { return match; }
      changed = true;
      return prefix + '"' + en.replace(/\n/g, "\\n") + '"';
    }
  );

  // 把所有 cc.Label 的 _overflow 改为 2（SHRINK 自动缩小）
  result = result.replace(/"_overflow":\s*[013]/g, function () {
    changed = true;
    return '"_overflow": 2';
  });

  if (changed) {
    console.log("  prefab:", path.relative(process.cwd(), filePath));
    if (!DRY_RUN) { fs.writeFileSync(filePath, result, "utf8"); }
  }
}

// ── 处理游戏脚本（只替换字符串字面量，跳过注释行）───────────
function processScript(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").split("\n");
  let changed = false;

  const result = lines.map(function (line) {
    // 跳过整行注释
    if (/^\s*\/\//.test(line)) { return line; }

    let newLine = line;
    Object.keys(DICT).forEach(function (cn) {
      const cnEsc = cn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp('(["\`])' + cnEsc + '\\1', "g");
      newLine = newLine.replace(re, function (m, q) {
        changed = true;
        return q + DICT[cn] + q;
      });
    });
    return newLine;
  });

  if (changed) {
    console.log("  script:", path.relative(process.cwd(), filePath));
    if (!DRY_RUN) { fs.writeFileSync(filePath, result.join("\n"), "utf8"); }
  }
}

// ── 遍历目录 ─────────────────────────────────────────────────
function walk(dir, exts, fn) {
  if (!fs.existsSync(dir)) { return; }
  fs.readdirSync(dir).forEach(function (name) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full, exts, fn);
    } else if (exts.some(function (e) { return full.endsWith(e); })) {
      fn(full);
    }
  });
}

// ── 主入口 ───────────────────────────────────────────────────
const ROOT = path.join(__dirname, "..");
console.log(DRY_RUN ? "[预览模式] 不写文件\n" : "[执行] 开始替换...\n");

console.log("── Prefabs ──");
walk(path.join(ROOT, "assets"), [".prefab"], processPrefab);

console.log("\n── Game Scripts ──");
walk(path.join(ROOT, "assets", "_script"), [".js"], processScript);

console.log("\n完成" + (DRY_RUN ? "（预览）。加 --dry-run 去掉后正式写入。" : "。"));
