"use strict";
cc._RF.push(module, 'f641fBVlsdJaJ0/5J0ECoGg', 'GameTrackDataEvent');
// _script/GameTrackDataEvent.js

"use strict";

var i;
var a;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventCF = exports.TrackId = undefined;

(function (t) {
  t[t.dau = 0] = "dau";
  t[t.guide1 = 1] = "guide1";
  t[t.guide2 = 2] = "guide2";
  t[t.guide3 = 3] = "guide3";
  t[t.guide4 = 4] = "guide4";
  t[t.guide5 = 5] = "guide5";
  t[t.guide6 = 6] = "guide6";
  t[t.guide7 = 7] = "guide7";
  t[t.guide8 = 8] = "guide8";
  t[t.guide9 = 9] = "guide9";
  t[t.guide10 = 10] = "guide10";
  t[t.guide11 = 11] = "guide11";
  t[t.guide12 = 12] = "guide12";
  t[t.guide13 = 13] = "guide13";
  t[t.guide14 = 14] = "guide14";
  t[t.guide15 = 15] = "guide15";
  t[t.guide16 = 16] = "guide16";
  t[t.guide17 = 17] = "guide17";
  t[t.guide18 = 18] = "guide18";
  t[t.guide19 = 19] = "guide19";
  t[t.guide20 = 20] = "guide20";
  t[t.guide21 = 21] = "guide21";
  t[t.guide22 = 22] = "guide22";
  t[t.add_desktop = 23] = "add_desktop";
  t[t.add_sidebar = 24] = "add_sidebar";
  t[t.box_draw1 = 25] = "box_draw1";
  t[t.box_draw10 = 26] = "box_draw10";
  t[t.start_X_Y = 27] = "start_X_Y";
  t[t.fail_X_Y = 28] = "fail_X_Y";
  t[t.talent_unlock_X = 29] = "talent_unlock_X";
  t[t.token_normal_X = 30] = "token_normal_X";
  t[t.token_better_X = 31] = "token_better_X";
  t[t.building_X = 32] = "building_X";
  t[t.lv_building_X_Y = 33] = "lv_building_X_Y";
  t[t.building_up_2v1_X = 34] = "building_up_2v1_X";
  t[t.equip_X = 35] = "equip_X";
  t[t.token = 36] = "token";
  t[t.gold = 37] = "gold";
  t[t.diamond = 38] = "diamond";
  t[t.power = 39] = "power";
  t[t.day7_double = 40] = "day7_double";
  t[t.day7_once = 41] = "day7_once";
  t[t.game_revive = 42] = "game_revive";
  t[t.building_2v1 = 43] = "building_2v1";
  t[t.buff_1 = 44] = "buff_1";
  t[t.buff_3 = 45] = "buff_3";
  t[t.win_double = 46] = "win_double";
  t[t.hero_revive = 47] = "hero_revive";
  t[t.map_add_soldier = 48] = "map_add_soldier";
  t[t.map_weapon = 49] = "map_weapon";
  t[t.map_coin = 50] = "map_coin";
  t[t.map_horse = 51] = "map_horse";
  t[t.box_1 = 52] = "box_1";
  t[t.talent = 53] = "talent";
  t[t.button_coin = 54] = "button_coin";
  t[t.defend_wall = 55] = "defend_wall";
  t[t.arrow2 = 56] = "arrow2";
  t[t.horse2 = 57] = "horse2";
  t[t.pay_token_Y = 58] = "pay_token_Y";
  t[t.pay_gold_Y = 59] = "pay_gold_Y";
  t[t.pay_diamond_Y = 60] = "pay_diamond_Y";
  t[t.pay_power_Y = 61] = "pay_power_Y";
  t[t.pay_day7_double_Y = 62] = "pay_day7_double_Y";
  t[t.pay_day7_once_Y = 63] = "pay_day7_once_Y";
  t[t.pay_game_revive_Y = 64] = "pay_game_revive_Y";
  t[t.pay_building_2v1_Y = 65] = "pay_building_2v1_Y";
  t[t.pay_buff_1_Y = 66] = "pay_buff_1_Y";
  t[t.pay_buff_3_Y = 67] = "pay_buff_3_Y";
  t[t.pay_win_double_Y = 68] = "pay_win_double_Y";
  t[t.pay_hero_revive_Y = 69] = "pay_hero_revive_Y";
  t[t.pay_map_add_soldier_Y = 70] = "pay_map_add_soldier_Y";
  t[t.pay_map_weapon_Y = 71] = "pay_map_weapon_Y";
  t[t.pay_map_coin_Y = 72] = "pay_map_coin_Y";
  t[t.pay_map_horse_Y = 73] = "pay_map_horse_Y";
  t[t.pay_box_1_Y = 74] = "pay_box_1_Y";
  t[t.pay_talent_Y = 75] = "pay_talent_Y";
  t[t.pay_button_coin_Y = 76] = "pay_button_coin_Y";
  t[t.pay_arrow2_Y = 77] = "pay_arrow2_Y";
  t[t.pay_horse2_Y = 78] = "pay_horse2_Y";
  t[t.time_1 = 79] = "time_1";
  t[t.time_3 = 80] = "time_3";
  t[t.time_5 = 81] = "time_5";
  t[t.time_7 = 82] = "time_7";
  t[t.time_10 = 83] = "time_10";
  t[t.time_15 = 84] = "time_15";
  t[t.time_20 = 85] = "time_20";
  t[t.time_30 = 86] = "time_30";
  t[t.time_1h = 87] = "time_1h";
  t[t.time_3h = 88] = "time_3h";
  t[t.time_5h = 89] = "time_5h";
  t[t.dau_day_X = 90] = "dau_day_X";
  t[t.notice_X_Y = 91] = "notice_X_Y";
})(a = exports.TrackId || (exports.TrackId = {}));

exports.EventCF = ((i = {})[a.dau] = {
  eventKey: "dau",
  eventValue: "dau",
  onlyOne: false,
  info: "Daily active users",
  alias: "1"
}, i[a.guide1] = {
  eventKey: "guide",
  eventValue: "guide1",
  onlyOne: true,
  info: "Players who reached the main menu",
  alias: "2"
}, i[a.guide2] = {
  eventKey: "guide",
  eventValue: "guide2",
  onlyOne: true,
  info: "[Hard guide 1] A new king on the wide land (text)",
  alias: "3"
}, i[a.guide3] = {
  eventKey: "guide",
  eventValue: "guide3",
  onlyOne: true,
  info: "[Hard guide 2] Expand your territory — tap a stage to start battle (tap Play)",
  alias: "4"
}, i[a.guide4] = {
  eventKey: "guide",
  eventValue: "guide4",
  onlyOne: true,
  info: "[Hard guide 3] This is your silver; silver builds structures (text)",
  alias: "5"
}, i[a.guide5] = {
  eventKey: "guide",
  eventValue: "guide5",
  onlyOne: true,
  info: "[Hard guide 4] Drag the stick to move here and build the main keep",
  alias: "6"
}, i[a.guide6] = {
  eventKey: "guide",
  eventValue: "guide6",
  onlyOne: true,
  info: "Players who built the main keep",
  alias: "7"
}, i[a.guide7] = {
  eventKey: "guide",
  eventValue: "guide7",
  onlyOne: true,
  info: "Shows enemy count and spawn positions (text)",
  alias: "8"
}, i[a.guide8] = {
  eventKey: "guide",
  eventValue: "guide8",
  onlyOne: true,
  info: "Ready? Engage! (tap Engage)",
  alias: "9"
}, i[a.guide9] = {
  eventKey: "guide",
  eventValue: "guide9",
  onlyOne: true,
  info: "After each battle, pick one stat boost (text)",
  alias: "10"
}, i[a.guide10] = {
  eventKey: "guide",
  eventValue: "guide10",
  onlyOne: true,
  info: "[Soft guide] Towers deal heavy damage to hold enemies back (text)",
  alias: "11"
}, i[a.guide11] = {
  eventKey: "guide",
  eventValue: "guide11",
  onlyOne: true,
  info: "[Soft guide] Barracks recruit soldiers — try the rally button (text)",
  alias: "12"
}, i[a.guide12] = {
  eventKey: "guide",
  eventValue: "guide12",
  onlyOne: true,
  info: "[Soft guide] Houses grant extra silver (text)",
  alias: "13"
}, i[a.guide13] = {
  eventKey: "guide",
  eventValue: "guide13",
  onlyOne: true,
  info: "[Soft guide] Mills produce more silver (text)",
  alias: "14"
}, i[a.guide14] = {
  eventKey: "guide",
  eventValue: "guide14",
  onlyOne: true,
  info: "[Soft guide] Walls block enemy advance (text)",
  alias: "15"
}, i[a.guide15] = {
  eventKey: "guide",
  eventValue: "guide15",
  onlyOne: true,
  info: "[Soft guide] Check talents — grow stronger (unlock talent)",
  alias: "16"
}, i[a.guide16] = {
  eventKey: "guide",
  eventValue: "guide16",
  onlyOne: true,
  info: "[Soft guide] Tap an icon for talent details (text)",
  alias: "17"
}, i[a.guide17] = {
  eventKey: "guide",
  eventValue: "guide17",
  onlyOne: true,
  info: "[Soft guide] Tap unlock to open a building (tap unlock)",
  alias: "18",
  preEvent: "17"
}, i[a.guide18] = {
  eventKey: "guide",
  eventValue: "guide18",
  onlyOne: true,
  info: "[Soft guide] Gear unlocked — take a look (unlock gear)",
  alias: "19"
}, i[a.guide19] = {
  eventKey: "guide",
  eventValue: "guide19",
  onlyOne: true,
  info: "[Soft guide] Tap enhance to spend gold on gear stats",
  alias: "20"
}, i[a.guide20] = {
  eventKey: "guide",
  eventValue: "guide20",
  onlyOne: true,
  info: "[Soft guide] Powerful relics hide in the world — let us see",
  alias: "21"
}, i[a.guide21] = {
  eventKey: "guide",
  eventValue: "guide21",
  onlyOne: true,
  info: "[Soft guide] First draw is free — tap to try",
  alias: "22"
}, i[a.guide22] = {
  eventKey: "guide",
  eventValue: "guide22",
  onlyOne: true,
  info: "[Soft guide] Tap a relic for details.",
  alias: "23",
  preEvent: "22"
}, i[a.add_desktop] = {
  eventKey: "guide",
  eventValue: "add_desktop",
  onlyOne: true,
  info: "Add to desktop — Douyin channel only",
  alias: "24"
}, i[a.add_sidebar] = {
  eventKey: "guide",
  eventValue: "add_sidebar",
  onlyOne: true,
  info: "Add sidebar — Douyin channel only",
  alias: "25"
}, i[a.box_draw1] = {
  eventKey: "lv",
  eventValue: "box_draw1",
  onlyOne: false,
  info: "Main menu — relic box — single-draw count (gems or video)",
  alias: "26"
}, i[a.box_draw10] = {
  eventKey: "lv",
  eventValue: "box_draw10",
  onlyOne: false,
  info: "Main menu — relic box — ten-pull count",
  alias: "27"
}, i[a.start_X_Y] = {
  eventKey: "lv",
  eventValue: "start_",
  onlyOne: false,
  info: "Players who reached stage X wave Y (X=stage id, Y=in-run wave)",
  alias: "28"
}, i[a.fail_X_Y] = {
  eventKey: "lv",
  eventValue: "fail_",
  onlyOne: false,
  info: "Players who lost at stage X wave Y (X=stage id, Y=in-run wave)",
  alias: "29"
}, i[a.talent_unlock_X] = {
  eventKey: "lv",
  eventValue: "talent_unlock_",
  onlyOne: false,
  info: "Players who unlocked talent X (X=talent id)",
  alias: "30"
}, i[a.token_normal_X] = {
  eventKey: "lv",
  eventValue: "token_normal_",
  onlyOne: false,
  info: "Battle pass tier X — normal reward claims (X=tier)",
  alias: "31"
}, i[a.token_better_X] = {
  eventKey: "lv",
  eventValue: "token_better_",
  onlyOne: false,
  info: "Battle pass tier X — premium reward claims (X=tier)",
  alias: "32"
}, i[a.building_X] = {
  eventKey: "lv",
  eventValue: "building_",
  onlyOne: false,
  info: "In-run building X upgrade count (X=home, tower, house, barracks, mill, wall)",
  alias: "33"
}, i[a.lv_building_X_Y] = {
  eventKey: "lv",
  eventValue: "lv_building_",
  onlyOne: false,
  info: "Players who unlocked building Y on stage X (X=stage id, Y=building id)",
  alias: "34"
}, i[a.building_up_2v1_X] = {
  eventKey: "lv",
  eventValue: "building_up_2v1_",
  onlyOne: false,
  info: "In-run building X upgrade two-choice (video unlock) picks (X=tower, house, barracks, mill, wall)",
  alias: "35"
}, i[a.equip_X] = {
  eventKey: "lv",
  eventValue: "equip_",
  onlyOne: false,
  info: "Main menu — gear X upgrade count (X=gear id)",
  alias: "36"
}, i[a.token] = {
  eventKey: "video",
  eventValue: "token",
  onlyOne: false,
  info: "Battle pass — premium reward via video",
  alias: "37"
}, i[a.gold] = {
  eventKey: "video",
  eventValue: "gold",
  onlyOne: false,
  info: "Gold refill count",
  alias: "38"
}, i[a.diamond] = {
  eventKey: "video",
  eventValue: "diamond",
  onlyOne: false,
  info: "Gems refill count",
  alias: "39"
}, i[a.power] = {
  eventKey: "video",
  eventValue: "power",
  onlyOne: false,
  info: "Stamina refill count",
  alias: "40"
}, i[a.day7_double] = {
  eventKey: "video",
  eventValue: "day7_double",
  onlyOne: false,
  info: "7-day sign-in — double-claim count",
  alias: "41"
}, i[a.day7_once] = {
  eventKey: "video",
  eventValue: "day7_once",
  onlyOne: false,
  info: "7-day sign-in — claim-again count",
  alias: "42"
}, i[a.game_revive] = {
  eventKey: "video",
  eventValue: "game_revive",
  onlyOne: false,
  info: "In-run — building revive count",
  alias: "43"
}, i[a.building_2v1] = {
  eventKey: "video",
  eventValue: "building_2v1",
  onlyOne: false,
  info: "In-run — building upgrade two-choice count",
  alias: "44"
}, i[a.buff_1] = {
  eventKey: "video",
  eventValue: "buff_1",
  onlyOne: false,
  info: "In-run — insight 【reroll】 count",
  alias: "45"
}, i[a.buff_3] = {
  eventKey: "video",
  eventValue: "buff_3",
  onlyOne: false,
  info: "In-run — insight 【take all】 count",
  alias: "46"
}, i[a.win_double] = {
  eventKey: "video",
  eventValue: "win_double",
  onlyOne: false,
  info: "In-run — victory screen — double reward claims",
  alias: "47"
}, i[a.hero_revive] = {
  eventKey: "video",
  eventValue: "hero_revive",
  onlyOne: false,
  info: "In-run — hero revive count",
  alias: "48"
}, i[a.map_add_soldier] = {
  eventKey: "video",
  eventValue: "map_add_soldier",
  onlyOne: false,
  info: "Map — [barracks — add soldiers] tap count",
  alias: "49"
}, i[a.map_weapon] = {
  eventKey: "video",
  eventValue: "map_weapon",
  onlyOne: false,
  info: "Map — tap to get weapon count",
  alias: "50"
}, i[a.map_coin] = {
  eventKey: "video",
  eventValue: "map_coin",
  onlyOne: false,
  info: "Map — tap to get silver count",
  alias: "51"
}, i[a.map_horse] = {
  eventKey: "video",
  eventValue: "map_horse",
  onlyOne: false,
  info: "Map — tap to get horse count",
  alias: "52"
}, i[a.box_1] = {
  eventKey: "video",
  eventValue: "box_1",
  onlyOne: false,
  info: "Relic box 【draw once】 count",
  alias: "53"
}, i[a.talent] = {
  eventKey: "video",
  eventValue: "talent",
  onlyOne: false,
  info: "Main menu — video unlock talent count",
  alias: "54"
}, i[a.button_coin] = {
  eventKey: "video",
  eventValue: "button_coin",
  onlyOne: false,
  info: "In-run — 【Engage】 silver pickup count",
  alias: "55"
}, i[a.defend_wall] = {
  eventKey: "video",
  eventValue: "defend_wall",
  onlyOne: false,
  info: "Main menu — video entry to defend-wall side mode count",
  alias: "56"
}, i[a.arrow2] = {
  eventKey: "iaa",
  eventValue: "arrow2",
  onlyOne: false,
  info: "Map — video for tier-2 【map bow】 count",
  alias: "57"
}, i[a.horse2] = {
  eventKey: "iaa",
  eventValue: "horse2",
  onlyOne: false,
  info: "Map — video for tier-2 【map horse】 count",
  alias: "58"
}, i[a.pay_token_Y] = {
  eventKey: "pay",
  eventValue: "pay_token_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "59"
}, i[a.pay_gold_Y] = {
  eventKey: "pay",
  eventValue: "pay_gold_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "60"
}, i[a.pay_diamond_Y] = {
  eventKey: "pay",
  eventValue: "pay_diamond_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "61"
}, i[a.pay_power_Y] = {
  eventKey: "pay",
  eventValue: "pay_power_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "62"
}, i[a.pay_day7_double_Y] = {
  eventKey: "pay",
  eventValue: "pay_day7_double_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "63"
}, i[a.pay_day7_once_Y] = {
  eventKey: "pay",
  eventValue: "pay_day7_once_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "64"
}, i[a.pay_game_revive_Y] = {
  eventKey: "pay",
  eventValue: "pay_game_revive_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "65"
}, i[a.pay_building_2v1_Y] = {
  eventKey: "pay",
  eventValue: "pay_building_2v1_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "66"
}, i[a.pay_buff_1_Y] = {
  eventKey: "pay",
  eventValue: "pay_buff_1_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "67"
}, i[a.pay_buff_3_Y] = {
  eventKey: "pay",
  eventValue: "pay_buff_3_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "68"
}, i[a.pay_win_double_Y] = {
  eventKey: "pay",
  eventValue: "pay_win_double_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "69"
}, i[a.pay_hero_revive_Y] = {
  eventKey: "pay",
  eventValue: "pay_hero_revive_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "70"
}, i[a.pay_map_add_soldier_Y] = {
  eventKey: "pay",
  eventValue: "pay_map_add_soldier_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "71"
}, i[a.pay_map_weapon_Y] = {
  eventKey: "pay",
  eventValue: "pay_map_weapon_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "72"
}, i[a.pay_map_coin_Y] = {
  eventKey: "pay",
  eventValue: "pay_map_coin_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "73"
}, i[a.pay_map_horse_Y] = {
  eventKey: "pay",
  eventValue: "pay_map_horse_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "74"
}, i[a.pay_box_1_Y] = {
  eventKey: "pay",
  eventValue: "pay_box_1_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "75"
}, i[a.pay_talent_Y] = {
  eventKey: "pay",
  eventValue: "pay_talent_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "76"
}, i[a.pay_button_coin_Y] = {
  eventKey: "pay",
  eventValue: "pay_button_coin_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "77"
}, i[a.pay_arrow2_Y] = {
  eventKey: "pay",
  eventValue: "pay_arrow2_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "78"
}, i[a.pay_horse2_Y] = {
  eventKey: "pay",
  eventValue: "pay_horse2_",
  onlyOne: false,
  info: "Ad touchpoint — player context (X=video id, Y=current stage)",
  alias: "79"
}, i[a.time_1] = {
  eventKey: "time",
  eventValue: "time_1",
  onlyOne: true,
  info: "Session length reached 1m",
  alias: "80"
}, i[a.time_3] = {
  eventKey: "time",
  eventValue: "time_3",
  onlyOne: true,
  info: "Session length reached 3m",
  alias: "81"
}, i[a.time_5] = {
  eventKey: "time",
  eventValue: "time_5",
  onlyOne: true,
  info: "Session length reached 5m",
  alias: "82"
}, i[a.time_7] = {
  eventKey: "time",
  eventValue: "time_7",
  onlyOne: true,
  info: "Session length reached 7m",
  alias: "83"
}, i[a.time_10] = {
  eventKey: "time",
  eventValue: "time_10",
  onlyOne: true,
  info: "Session length reached 10m",
  alias: "84"
}, i[a.time_15] = {
  eventKey: "time",
  eventValue: "time_15",
  onlyOne: true,
  info: "Session length reached 15m",
  alias: "85"
}, i[a.time_20] = {
  eventKey: "time",
  eventValue: "time_20",
  onlyOne: true,
  info: "Session length reached 20m",
  alias: "86"
}, i[a.time_30] = {
  eventKey: "time",
  eventValue: "time_30",
  onlyOne: true,
  info: "Session length reached 30m",
  alias: "87"
}, i[a.time_1h] = {
  eventKey: "time",
  eventValue: "time_1h",
  onlyOne: true,
  info: "Session length reached 1h",
  alias: "88"
}, i[a.time_3h] = {
  eventKey: "time",
  eventValue: "time_3h",
  onlyOne: true,
  info: "Session length reached 3h",
  alias: "89"
}, i[a.time_5h] = {
  eventKey: "time",
  eventValue: "time_5h",
  onlyOne: true,
  info: "Session length reached 5h",
  alias: "90"
}, i[a.dau_day_X] = {
  eventKey: "time",
  eventValue: "dau_day_",
  onlyOne: true,
  info: "Day-X active user (X=1,2,3,4,5,6,7,8-10,11-15,16-30)",
  alias: "91"
}, i[a.notice_X_Y] = {
  eventKey: "notice",
  eventValue: "notice_",
  onlyOne: false,
  info: "Feedback/complaint options (X=1-4: 1 false promo, 2 data loss, 3 freeze, 4 ads broken; Y=text)",
  alias: "92"
}, i);

cc._RF.pop();