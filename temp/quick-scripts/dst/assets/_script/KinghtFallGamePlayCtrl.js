
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallGamePlayCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '298d3PrL/xO5KIwXTtD3CuO', 'KinghtFallGamePlayCtrl');
// _script/KinghtFallGamePlayCtrl.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;

var $z1AudioMgr = require("AudioMgr");

var $z1LogMgr = require("LogMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallAudioMgr = require("KinghtFallAudioMgr");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallItemHp = require("KinghtFallItemHp");

var $z1KinghtFallPlayGameAniCtrl = require("KinghtFallPlayGameAniCtrl");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallBulletPlay = require("KinghtFallBulletPlay");

var $z1KinghtFallGameCtrlData = require("KinghtFallGameCtrlData");

var $z1KinghtFallInterface = require("KinghtFallInterface");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

(function (t) {
  t[t.Alive = 0] = "Alive";
  t[t.Dead = 1] = "Dead";
  t[t.Reborn = 2] = "Reborn";
})(r || (r = {}));

var C;

var def_KinghtFallGamePlayCtrl = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ctrPlayAni = null;
    e.ctrHp = null;
    e.ctrArr = null;
    e.ndRange = null;
    e.ndAgg = null;
    e.rigidBody = null;
    e.baseHp = 100;
    e.hp = 100;
    e.hpMax = 100;
    e.hpRecoverSpeed = 10;
    e.attack = 10;
    e.attackRange = 100;
    e.attackSpeed = 10;
    e.moveSpeed = 10;
    e.state = r.Alive;
    e.time = {};
    e.critDam = 20;
    e.vec2_1 = new cc.Vec2();
    e.vec2_2 = new cc.Vec2();
    e.attNum = 1;
    e.crit = 0;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    this.rigidBody = this.node.getComponent(cc.RigidBody);
    this.setLeft(1);
    this.ctrArr.node.active = false;
    this.ndRange.active = false;
    this.ndAgg.active = false;
    this.critDam = Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.CriticalDamage));
  };

  _ctor.prototype.initData = function () {
    var t = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getEquipCfgList();

    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getPersonLevel(n.id);
      var a = n.levelInfo[i - 1];

      switch (n.id) {
        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Body:
          this.baseHp = a.Parameters;
          this.hp = a.Parameters;
          this.hpMax = a.Parameters;
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Head:
          this.hpRecoverSpeed = a.Parameters;
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Arrow:
          this.attack = a.Parameters;
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Bow:
          this.attackRange = a.Parameters;
          this.ndRange.scale = 2 * this.attackRange / this.ndRange.width;
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Gloves:
          this.attackSpeed = a.Parameters;
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.horse:
          this.moveSpeed = a.Parameters;
      }
    }

    this.ctrPlayAni.initView();
    this.ctrPlayAni.setAttackEvent(this.doAttack1.bind(this));
    this.ctrPlayAni.setAttackEnd(this.doAttackFinish.bind(this));
    this.time = {};
    this.time[C.hpRecover] = 0;
    this.time[C.RenSoundTime] = 0;
    this.time[C.Attack] = 0;
    this.time[C.RecoverCd] = 0;
    this.time[C.RebornTime] = Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.ReviveTime));
    $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.RevivalCoin] && (this.time[C.RebornTime] -= $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.RevivalCoin][0]);
    this.time[C.NoDieTime] = Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.InvincibleTime));
    this.ctrHp.setType($z1KinghtFallModle.KinghtFallGameArmy.Friend);
    this.ctrHp.setHp(this.hp, this.hpMax);
  };

  _ctor.prototype.onRestart = function (t) {
    undefined === t && (t = false);
    $z1AudioMgr.AudioMgr.getInstance().getAudioSource($z1KinghtFallConfig.KinghtFallParameter.BGMusic).volume = $z1AudioMgr.AudioMgr.getInstance().getMusicVolume();
    this.ctrPlayAni.onRestart();
    this.state = r.Alive;
    this.time[C.Reborn] = this.time[C.RebornTime];
    this.rigidBody.active = true;
    this.hp = this.hpMax;
    this.ctrHp.setHp(this.hp, this.hpMax);
    this.ndRange.active = false;
    t && this.ctrPlayAni.setBus(0);
    this.tagEnemy = null;
    this.delAllBuff();
  };

  _ctor.prototype.doMove = function (t, e) {
    if (this.state != r.Reborn) {
      this.setLeft(t.x);

      if (cc.v2(0, 0).equals(t)) {
        this.time[C.RenSoundTime] = 0;
        $z1KinghtFallAudioMgr.KinghtFallAudioMgr.getInstance().stopEffectName($z1KinghtFallConfig.KinghtFallParameter.RunMusic);
        return void this.ctrPlayAni.setIdle();
      }

      this.node.getPosition(this.vec2_1);
      cc.Vec2.normalize(this.vec2_2, t);
      cc.Vec2.scaleAndAdd(this.vec2_1, this.vec2_1, this.vec2_2, this.getSpeed() * e);
      this.node.setPosition(this.vec2_1);
      this.ctrPlayAni.setMove();

      if (!(0 != this.time[C.RenSoundTime] || this.isDead())) {
        this.time[C.RenSoundTime] = 1;
        $z1AudioMgr.AudioMgr.getInstance().playMusic($z1KinghtFallConfig.KinghtFallAudioId.run, $z1KinghtFallConfig.KinghtFallParameter.RunMusic);
      }
    }
  };

  _ctor.prototype.setLeft = function (t) {
    this.ctrPlayAni.setMaLeft(t);
    this.tagEnemy && (this.tagEnemy.node && !this.tagEnemy.isDead() || (this.tagEnemy = null));

    if (this.tagEnemy) {
      this.tagEnemy.node.getPosition(this.vec2_2);
      cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
      t = this.vec2_2.x;
    }

    this.ctrPlayAni.setBodyLeft(t);
  };

  _ctor.prototype.isLeft = function () {
    return this.ctrPlayAni.node.scaleX < 0;
  };

  _ctor.prototype.onUpdata = function (t) {
    for (var e = 0; e < this.debuffInfo.length; e++) {
      var n = this.debuffInfo[e];

      if (-1 != n.time) {
        n.time += t;

        if (n.time >= n.timeMax) {
          this.delBuffIdx(e), e--;
        }
      }
    }

    switch (this.state) {
      case r.Alive:
        if (-1 != this.time[C.Attack]) {
          this.time[C.Attack] += t * this.getAttSpeed();
          this.time[C.Attack] >= 1 && this.onFindEnemy();
        }

        this.time[C.NoDie] -= t;
        this.time[C.RecoverCd] -= t;

        if (-1 != this.time[C.RecoverCd] && this.time[C.RecoverCd] <= 0) {
          this.time[C.hpRecover] += t;

          if (this.time[C.hpRecover] >= 1) {
            this.hp += this.getHpRecoverSpeed(), this.hp > this.hpMax && (this.hp = this.hpMax), this.ctrHp.setHp(this.hp, this.hpMax), this.time[C.hpRecover]--;
          }
        }

        break;

      case r.Dead:
        this.time[C.Reborn] += t;
        this.time[C.Reborn] >= this.time[C.RebornTime] && this.onReborn();
        this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.ReviveShow, this.time[C.RebornTime] - this.time[C.Reborn]);
    }
  };

  _ctor.prototype.endRoundGame = function () {
    if (this.isDead()) {
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.ReviveShow, 0);
      this.onReborn();
    } else {
      this.hp = this.hpMax;
      this.ctrHp.setHp(this.hp, this.hpMax);
    }

    this.delAllBuff();
  };

  _ctor.prototype.getSpeed = function () {
    var t = 1;
    return this.moveSpeed * ((t += this.time[C.MoveSpeed] || 0) + ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Speed] || 0));
  };

  _ctor.prototype.setPause = function (t) {
    this.ctrPlayAni.setPause(t);
  };

  _ctor.prototype.getWpos = function () {
    return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
  };

  _ctor.prototype.getAttWpos = function () {
    return this.node.convertToWorldSpaceAR(this.ctrArr.node.getPosition());
  };

  _ctor.prototype.isDead = function () {
    return this.state != r.Alive;
  };

  _ctor.prototype.onAttacked = function (t) {
    if (!(this.time[C.NoDie] > 0)) {
      $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.player_hurt);
      this.time[C.NoDie] = this.time[C.NoDieTime];

      if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.GuardianShield] && Math.random() < $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.GuardianShield][0]) {
        $z1LogMgr.LogMgr.getInstance().info("***Protective Shield");
        this.time[C.NoDie] += 3;
      }

      this.hp -= t;

      if (this.hp <= 0) {
        this.hp = 0;
        this.onDead();
      }

      this.ctrHp.setHp(this.hp, this.hpMax);
      return t;
    }
  };

  _ctor.prototype.addHpPro = function (t) {
    if (!this.isDead()) {
      this.hp += t * this.hpMax;
      this.hp > this.hpMax && (this.hp = this.hpMax);
      this.ctrHp.setHp(this.hp, this.hpMax);
    }
  };

  _ctor.prototype.onDead = function () {
    var t = this;
    this.tagEnemy = null;
    $z1KinghtFallAudioMgr.KinghtFallAudioMgr.getInstance().stopEffectName($z1KinghtFallConfig.KinghtFallParameter.RunMusic);
    $z1AudioMgr.AudioMgr.getInstance().getAudioSource($z1KinghtFallConfig.KinghtFallParameter.BGMusic).volume = .5 * $z1AudioMgr.AudioMgr.getInstance().getMusicVolume();
    $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.death);
    this.state = r.Reborn;
    $z1KinghtFallUIGame["default"].instance.ctrGame.gameTag[$z1KinghtFallEnum.KinghtFallEnumLevelChalType.NoDie] = 1;
    this.ctrPlayAni.setDie(function () {
      t.state = r.Dead;
      t.time[C.Reborn] = 0;
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.ReviveShow, t.time[C.RebornTime] - t.time[C.Reborn]);
    });
    this.delAllBuff();
  };

  _ctor.prototype.onReborn = function () {
    var t = this;
    this.tagEnemy = null;
    $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.rebirth);
    this.state = r.Reborn;
    this.rigidBody.active = true;
    this.ctrPlayAni.setRevive(function () {
      t.state = r.Alive;
      t.time[C.hpRecover] = 0;
      t.time[C.Attack] = 0;
      t.hp = t.hpMax;
      t.ctrHp.setHp(t.hp, t.hpMax);
    });
    var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff13);

    if (e && !this.time[C.RebornBuff1]) {
      this.time[C.RebornBuff1] = e.Pamer[0];
      this.time[C.RebornBuff2] = e.Pamer[1];
    }
  };

  _ctor.prototype.onFindEnemy = function () {
    this.node.getPosition(this.vec2_1);
    var t = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getEnemyList();
    var e = [];

    for (var n = 0; n < t.length; n++) {
      var i = t[n];

      if (!i.isDead()) {
        i.node.getPosition(this.vec2_2);
        cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
        var a = this.vec2_2.mag();
        a <= this.attackRange && e.push({
          tag: i,
          len: a
        });
      }
    }

    if (0 != e.length) {
      e.sort(function (t, e) {
        return t.len - e.len;
      });
      this.tagEnemy = e[0].tag;
      this.time[C.Attack] = -1;
      this.doAttackStart();
      this.doAttack();
    }
  };

  _ctor.prototype.doAttackStart = function () {
    this.ctrPlayAni.setAttack();
    this.time[C.RecoverCd] = 1;
  };

  _ctor.prototype.doAttack = function () {
    $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.palyer_attack);
    this.node.getPosition(this.vec2_1);
    var t = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getEnemyList();
    var e = [];

    for (var n = 0; n < t.length; n++) {
      var i = t[n];

      if (!i.isDead()) {
        i.node.getPosition(this.vec2_2);
        cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
        var a = this.vec2_2.mag();
        a <= this.attackRange && e.push({
          tag: i,
          len: a
        });
      }
    }

    if (0 != e.length) {
      e.sort(function (t, e) {
        return t.len - e.len;
      });

      for (var o = 0; o < this.attNum; o++) {
        var r = e[o];
        r && $z1KinghtFallUIGame["default"].instance.ctrGame.onPlayAttack(r.tag);
      }

      this.time[C.Attack] = 0;
    }
  };

  _ctor.prototype.doAttack1 = function () {};

  _ctor.prototype.doAttackFinish = function () {
    this.tagEnemy = null;
  };

  _ctor.prototype.getAttack = function (t) {
    var e = this.attack;
    var n = 1;
    var i = this.getBuffList($z1KinghtFallInterface.KinghtFallEnemyBuffType.DamageCut);

    for (var a = 0; a < i.length; a++) {
      n -= i[a].data.subNum;
    }

    this.time[C.RebornBuff1] && (n += this.time[C.RebornBuff1]);
    this.time[C.AttackBuff1] && (n += this.time[C.AttackBuff1]);
    this.time[C.AttackBuff2] && (n -= this.time[C.AttackBuff2]);

    if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.CloseCut]) {
      var o = this.node.getPosition();
      var r = t.node.getPosition();
      cc.Vec2.distance(o, r) <= 100 && (n += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.CloseCut][0]);
    }

    n += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.PlayerDamage] || 0;
    (n += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Attack] || 0) < 0 && (n = 0);
    return e * n;
  };

  _ctor.prototype.getAttSpeed = function () {
    var t = this.attackSpeed;
    var e = 1;
    var n = this.getBuffList($z1KinghtFallInterface.KinghtFallEnemyBuffType.AttackSpeed);

    for (var i = 0; i < n.length; i++) {
      e += n[i].data.addSpeed;
    }

    this.time[C.RebornBuff2] && (e += this.time[C.RebornBuff2]);
    this.time[C.AttackSpeed2] && (e += this.time[C.AttackSpeed2]);

    if (this.hp < .5 * this.hpMax) {
      var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff18);
      a && (e += a.Pamer[0]);
    }

    return t * ((e += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.PlayerAttackSpeed] || 0) + ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.AttackSpeed] || 0));
  };

  _ctor.prototype.getHpRecoverSpeed = function () {
    var t = 1;
    return this.hpRecoverSpeed * (t + (this.time[C.hpRecoverSpeed] || 0));
  };

  _ctor.prototype.initBuffData = function () {
    var t = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff01);
    this.attNum = t ? t.Pamer[0] : 1;
    this.crit = 0;
    var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff14);
    e && (this.crit += e.Pamer[0]);
    var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff37);
    n && (this.crit += n.Pamer[0]);
    this.time[C.MoveSpeed] = 0;
    var i = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff21);
    i && (this.time[C.MoveSpeed] += i.Pamer[0]);
    var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff35);
    a && (this.time[C.MoveSpeed] += a.Pamer[0]);
    this.time[C.hpRecoverSpeed] = 0;
    var o = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff22);
    o && (this.time[C.hpRecoverSpeed] += o.Pamer[0]);
    var r = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff36);
    r && (this.time[C.hpRecoverSpeed] += r.Pamer[0]);
    var s = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff40);

    if (s) {
      this.time[C.RecoverCd] = -1;
      this.hpMax = (1 + s.Pamer[0]) * this.baseHp;
      this.hp = this.hpMax;
      this.ctrHp.setHp(this.hp, this.hpMax);
    }

    this.time[C.AttackBuff1] = 0;
    var l = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff41);

    if (l) {
      this.time[C.AttackBuff1] = l.Pamer[0];
      this.attackRange *= 1 - l.Pamer[1];
      this.ndRange.scale = 2 * this.attackRange / this.ndRange.width;
    }

    var c = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff42);

    if (c) {
      this.time[C.AttackSpeed2] = c.Pamer[0];
      this.time[C.AttackBuff2] = c.Pamer[1];
    }
  };

  cc__decorate([ccp_property({
    type: $z1KinghtFallPlayGameAniCtrl["default"],
    tooltip: "Player anim"
  })], _ctor.prototype, "ctrPlayAni", undefined);
  cc__decorate([ccp_property({
    type: $z1KinghtFallItemHp["default"],
    tooltip: "HP bar"
  })], _ctor.prototype, "ctrHp", undefined);
  cc__decorate([ccp_property({
    type: $z1KinghtFallBulletPlay["default"],
    tooltip: "Bow position"
  })], _ctor.prototype, "ctrArr", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: ""
  })], _ctor.prototype, "ndRange", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: ""
  })], _ctor.prototype, "ndAgg", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallInterface.KinghtFallInterface);

exports["default"] = def_KinghtFallGamePlayCtrl;

(function (t) {
  t.hpRecover = "hpRecover";
  t.hpRecoverSpeed = "hpRecoverSpeed";
  t.Attack = "Attack";
  t.AttackBuff1 = "AttackBuff1";
  t.AttackBuff2 = "AttackBuff2";
  t.Reborn = "Reborn";
  t.RebornTime = "RebornTime";
  t.RebornBuff1 = "RebornBuff1";
  t.RebornBuff2 = "RebornBuff2";
  t.AttackSpeed1 = "AttackSpeed1";
  t.AttackSpeed2 = "AttackSpeed2";
  t.NoDie = "NoDie";
  t.NoDieTime = "NoDieTime";
  t.RecoverCd = "RecoverCd";
  t.MoveSpeed = "MoveSpeed";
  t.RenSoundTime = "RenSoundTime";
})(C || (C = {}));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxHYW1lUGxheUN0cmwuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiciIsIiR6MUF1ZGlvTWdyIiwicmVxdWlyZSIsIiR6MUxvZ01nciIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsRW51bSIsIiR6MUtpbmdodEZhbGxBdWRpb01nciIsIiR6MUtpbmdodEZhbGxEYXRhTWdyIiwiJHoxS2luZ2h0RmFsbFBsYXllck1nciIsIiR6MUtpbmdodEZhbGxNb2RsZSIsIiR6MUtpbmdodEZhbGxJdGVtSHAiLCIkejFLaW5naHRGYWxsUGxheUdhbWVBbmlDdHJsIiwiJHoxS2luZ2h0RmFsbFVJR2FtZSIsIiR6MUtpbmdodEZhbGxCdWxsZXRQbGF5IiwiJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YSIsIiR6MUtpbmdodEZhbGxJbnRlcmZhY2UiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX3Byb3BlcnR5IiwicHJvcGVydHkiLCJ0IiwiQWxpdmUiLCJEZWFkIiwiUmVib3JuIiwiQyIsImRlZl9LaW5naHRGYWxsR2FtZVBsYXlDdHJsIiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjdHJQbGF5QW5pIiwiY3RySHAiLCJjdHJBcnIiLCJuZFJhbmdlIiwibmRBZ2ciLCJyaWdpZEJvZHkiLCJiYXNlSHAiLCJocCIsImhwTWF4IiwiaHBSZWNvdmVyU3BlZWQiLCJhdHRhY2siLCJhdHRhY2tSYW5nZSIsImF0dGFja1NwZWVkIiwibW92ZVNwZWVkIiwic3RhdGUiLCJ0aW1lIiwiY3JpdERhbSIsInZlYzJfMSIsIlZlYzIiLCJ2ZWMyXzIiLCJhdHROdW0iLCJjcml0IiwicHJvdG90eXBlIiwic3RhcnQiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5Iiwic2V0TGVmdCIsImFjdGl2ZSIsIk51bWJlciIsIktpbmdodEZhbGxEYXRhTWdyIiwiZ2V0SW5zdGFuY2UiLCJnZXRQYXJhbXNDZmdCeUlkIiwiS2luZ2h0RmFsbEVudW1QYXJhbWV0ZXJDZmciLCJDcml0aWNhbERhbWFnZSIsImluaXREYXRhIiwiZ2V0RXF1aXBDZmdMaXN0IiwibGVuZ3RoIiwibiIsIktpbmdodEZhbGxQbGF5ZXJNZ3IiLCJnZXRVc2VyRGF0YSIsImdldFBlcnNvbkxldmVsIiwiaWQiLCJhIiwibGV2ZWxJbmZvIiwiS2luZ2h0RmFsbEVudW1FcXVpcEVudW0iLCJCb2R5IiwiUGFyYW1ldGVycyIsIkhlYWQiLCJBcnJvdyIsIkJvdyIsInNjYWxlIiwid2lkdGgiLCJHbG92ZXMiLCJob3JzZSIsImluaXRWaWV3Iiwic2V0QXR0YWNrRXZlbnQiLCJkb0F0dGFjazEiLCJiaW5kIiwic2V0QXR0YWNrRW5kIiwiZG9BdHRhY2tGaW5pc2giLCJocFJlY292ZXIiLCJSZW5Tb3VuZFRpbWUiLCJBdHRhY2siLCJSZWNvdmVyQ2QiLCJSZWJvcm5UaW1lIiwiUmV2aXZlVGltZSIsImluc3RhbmNlIiwiY3RyR2FtZSIsImdhbWVEYXRhIiwidHJlYXN1cmVBZGQiLCJLaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bSIsIlJldml2YWxDb2luIiwiTm9EaWVUaW1lIiwiSW52aW5jaWJsZVRpbWUiLCJzZXRUeXBlIiwiS2luZ2h0RmFsbEdhbWVBcm15IiwiRnJpZW5kIiwic2V0SHAiLCJvblJlc3RhcnQiLCJ1bmRlZmluZWQiLCJBdWRpb01nciIsImdldEF1ZGlvU291cmNlIiwiS2luZ2h0RmFsbFBhcmFtZXRlciIsIkJHTXVzaWMiLCJ2b2x1bWUiLCJnZXRNdXNpY1ZvbHVtZSIsInNldEJ1cyIsInRhZ0VuZW15IiwiZGVsQWxsQnVmZiIsImRvTW92ZSIsIngiLCJ2MiIsImVxdWFscyIsIktpbmdodEZhbGxBdWRpb01nciIsInN0b3BFZmZlY3ROYW1lIiwiUnVuTXVzaWMiLCJzZXRJZGxlIiwiZ2V0UG9zaXRpb24iLCJub3JtYWxpemUiLCJzY2FsZUFuZEFkZCIsImdldFNwZWVkIiwic2V0UG9zaXRpb24iLCJzZXRNb3ZlIiwiaXNEZWFkIiwicGxheU11c2ljIiwiS2luZ2h0RmFsbEF1ZGlvSWQiLCJydW4iLCJzZXRNYUxlZnQiLCJzdWJ0cmFjdCIsInNldEJvZHlMZWZ0IiwiaXNMZWZ0Iiwic2NhbGVYIiwib25VcGRhdGEiLCJkZWJ1ZmZJbmZvIiwidGltZU1heCIsImRlbEJ1ZmZJZHgiLCJnZXRBdHRTcGVlZCIsIm9uRmluZEVuZW15IiwiTm9EaWUiLCJnZXRIcFJlY292ZXJTcGVlZCIsIm9uUmVib3JuIiwic2VuZEV2ZW50IiwiS2luZ2h0RmFsbEV2ZW50TmFtZSIsIlJldml2ZVNob3ciLCJlbmRSb3VuZEdhbWUiLCJNb3ZlU3BlZWQiLCJidXNpbmVzc0FkZCIsIktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUiLCJTcGVlZCIsInNldFBhdXNlIiwiZ2V0V3BvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIlpFUk8iLCJnZXRBdHRXcG9zIiwib25BdHRhY2tlZCIsInBsYXlFZmZlY3RGcmVlIiwicGxheWVyX2h1cnQiLCJHdWFyZGlhblNoaWVsZCIsIk1hdGgiLCJyYW5kb20iLCJMb2dNZ3IiLCJpbmZvIiwib25EZWFkIiwiYWRkSHBQcm8iLCJkZWF0aCIsImdhbWVUYWciLCJLaW5naHRGYWxsRW51bUxldmVsQ2hhbFR5cGUiLCJzZXREaWUiLCJyZWJpcnRoIiwic2V0UmV2aXZlIiwiZ2V0R2FtZUJ1ZmYiLCJLaW5naHRGYWxsRW51bUJ1ZmZDZmciLCJCdWZmMTMiLCJSZWJvcm5CdWZmMSIsIlBhbWVyIiwiUmVib3JuQnVmZjIiLCJnZXRFbmVteUxpc3QiLCJtYWciLCJwdXNoIiwidGFnIiwibGVuIiwic29ydCIsImRvQXR0YWNrU3RhcnQiLCJkb0F0dGFjayIsInNldEF0dGFjayIsInBhbHllcl9hdHRhY2siLCJvIiwib25QbGF5QXR0YWNrIiwiZ2V0QXR0YWNrIiwiZ2V0QnVmZkxpc3QiLCJLaW5naHRGYWxsRW5lbXlCdWZmVHlwZSIsIkRhbWFnZUN1dCIsImRhdGEiLCJzdWJOdW0iLCJBdHRhY2tCdWZmMSIsIkF0dGFja0J1ZmYyIiwiQ2xvc2VDdXQiLCJkaXN0YW5jZSIsImFkZFRpbWUiLCJLaW5naHRGYWxsVGltZVR5cGUiLCJQbGF5ZXJEYW1hZ2UiLCJBdHRhY2tTcGVlZCIsImFkZFNwZWVkIiwiQXR0YWNrU3BlZWQyIiwiQnVmZjE4IiwiUGxheWVyQXR0YWNrU3BlZWQiLCJpbml0QnVmZkRhdGEiLCJCdWZmMDEiLCJCdWZmMTQiLCJCdWZmMzciLCJCdWZmMjEiLCJCdWZmMzUiLCJCdWZmMjIiLCJCdWZmMzYiLCJzIiwiQnVmZjQwIiwibCIsIkJ1ZmY0MSIsImMiLCJCdWZmNDIiLCJ0eXBlIiwidG9vbHRpcCIsIk5vZGUiLCJLaW5naHRGYWxsSW50ZXJmYWNlIiwiQXR0YWNrU3BlZWQxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUF2Qjs7QUFDQSxJQUFJRSxtQkFBbUIsR0FBR0YsT0FBTyxDQUFDLGtCQUFELENBQWpDOztBQUNBLElBQUlHLGlCQUFpQixHQUFHSCxPQUFPLENBQUMsZ0JBQUQsQ0FBL0I7O0FBQ0EsSUFBSUkscUJBQXFCLEdBQUdKLE9BQU8sQ0FBQyxvQkFBRCxDQUFuQzs7QUFDQSxJQUFJSyxvQkFBb0IsR0FBR0wsT0FB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T0FBTyxXQUFQLEdBQWtCOEIsMEJBQWxCOztBQUNBLENBQUMsVUFBVUwsQ0FBVixFQUFhO0VBQ1pBLENBQUMsQ0FBQ3VFLFNBQUYsR0FBYyxXQUFkO0VBQ0F2RSxDQUFDLENBQUNtQixjQUFGLEdBQW1CLGdCQUFuQjtFQUNBbkIsQ0FBQyxDQUFDeUUsTUFBRixHQUFXLFFBQVg7RUFDQXpFLENBQUMsQ0FBQ3lMLFdBQUYsR0FBZ0IsYUFBaEI7RUFDQXpMLENBQUMsQ0FBQzBMLFdBQUYsR0FBZ0IsYUFBaEI7RUFDQTFMLENBQUMsQ0FBQ0csTUFBRixHQUFXLFFBQVg7RUFDQUgsQ0FBQyxDQUFDMkUsVUFBRixHQUFlLFlBQWY7RUFDQTNFLENBQUMsQ0FBQ29LLFdBQUYsR0FBZ0IsYUFBaEI7RUFDQXBLLENBQUMsQ0FBQ3NLLFdBQUYsR0FBZ0IsYUFBaEI7RUFDQXRLLENBQUMsQ0FBQ3VOLFlBQUYsR0FBaUIsY0FBakI7RUFDQXZOLENBQUMsQ0FBQ2tNLFlBQUYsR0FBaUIsY0FBakI7RUFDQWxNLENBQUMsQ0FBQ2lJLEtBQUYsR0FBVSxPQUFWO0VBQ0FqSSxDQUFDLENBQUNtRixTQUFGLEdBQWMsV0FBZDtFQUNBbkYsQ0FBQyxDQUFDMEUsU0FBRixHQUFjLFdBQWQ7RUFDQTFFLENBQUMsQ0FBQ3dJLFNBQUYsR0FBYyxXQUFkO0VBQ0F4SSxDQUFDLENBQUN3RSxZQUFGLEdBQWlCLGNBQWpCO0FBQ0QsQ0FqQkQsRUFpQkdwRSxDQUFDLEtBQUtBLENBQUMsR0FBRyxFQUFULENBakJKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciByO1xudmFyICR6MUF1ZGlvTWdyID0gcmVxdWlyZShcIkF1ZGlvTWdyXCIpO1xudmFyICR6MUxvZ01nciA9IHJlcXVpcmUoXCJMb2dNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbENvbmZpZyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29uZmlnXCIpO1xudmFyICR6MUtpbmdodEZhbGxFbnVtID0gcmVxdWlyZShcIktpbmdodEZhbGxFbnVtXCIpO1xudmFyICR6MUtpbmdodEZhbGxBdWRpb01nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQXVkaW9NZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbERhdGFNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbERhdGFNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxNb2RsZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsTW9kbGVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEl0ZW1IcCA9IHJlcXVpcmUoXCJLaW5naHRGYWxsSXRlbUhwXCIpO1xudmFyICR6MUtpbmdodEZhbGxQbGF5R2FtZUFuaUN0cmwgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFBsYXlHYW1lQW5pQ3RybFwiKTtcbnZhciAkejFLaW5naHRGYWxsVUlHYW1lID0gcmVxdWlyZShcIktpbmdodEZhbGxVSUdhbWVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEJ1bGxldFBsYXkgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEJ1bGxldFBsYXlcIik7XG52YXIgJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsR2FtZUN0cmxEYXRhXCIpO1xudmFyICR6MUtpbmdodEZhbGxJbnRlcmZhY2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEludGVyZmFjZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xuKGZ1bmN0aW9uICh0KSB7XG4gIHRbdC5BbGl2ZSA9IDBdID0gXCJBbGl2ZVwiO1xuICB0W3QuRGVhZCA9IDFdID0gXCJEZWFkXCI7XG4gIHRbdC5SZWJvcm4gPSAyXSA9IFwiUmVib3JuXCI7XG59KShyIHx8IChyID0ge30pKTtcbnZhciBDO1xudmFyIGRlZl9LaW5naHRGYWxsR2FtZVBsYXlDdHJsID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuY3RyUGxheUFuaSA9IG51bGw7XG4gICAgZS5jdHJIcCA9IG51bGw7XG4gICAgZS5jdHJBcnIgPSBudWxsO1xuICAgIGUubmRSYW5nZSA9IG51bGw7XG4gICAgZS5uZEFnZyA9IG51bGw7XG4gICAgZS5yaWdpZEJvZHkgPSBudWxsO1xuICAgIGUuYmFzZUhwID0gMTAwO1xuICAgIGUuaHAgPSAxMDA7XG4gICAgZS5ocE1heCA9IDEwMDtcbiAgICBlLmhwUmVjb3ZlclNwZWVkID0gMTA7XG4gICAgZS5hdHRhY2sgPSAxMDtcbiAgICBlLmF0dGFja1JhbmdlID0gMTAwO1xuICAgIGUuYXR0YWNrU3BlZWQgPSAxMDtcbiAgICBlLm1vdmVTcGVlZCA9IDEwO1xuICAgIGUuc3RhdGUgPSByLkFsaXZlO1xuICAgIGUudGltZSA9IHt9O1xuICAgIGUuY3JpdERhbSA9IDIwO1xuICAgIGUudmVjMl8xID0gbmV3IGNjLlZlYzIoKTtcbiAgICBlLnZlYzJfMiA9IG5ldyBjYy5WZWMyKCk7XG4gICAgZS5hdHROdW0gPSAxO1xuICAgIGUuY3JpdCA9IDA7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgdGhpcy5zZXRMZWZ0KDEpO1xuICAgIHRoaXMuY3RyQXJyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5uZFJhbmdlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubmRBZ2cuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jcml0RGFtID0gTnVtYmVyKCR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0UGFyYW1zQ2ZnQnlJZCgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVBhcmFtZXRlckNmZy5Dcml0aWNhbERhbWFnZSkpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEVxdWlwQ2ZnTGlzdCgpO1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIG4gPSB0W2VdO1xuICAgICAgdmFyIGkgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFBlcnNvbkxldmVsKG4uaWQpO1xuICAgICAgdmFyIGEgPSBuLmxldmVsSW5mb1tpIC0gMV07XG4gICAgICBzd2l0Y2ggKG4uaWQpIHtcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUVxdWlwRW51bS5Cb2R5OlxuICAgICAgICAgIHRoaXMuYmFzZUhwID0gYS5QYXJhbWV0ZXJzO1xuICAgICAgICAgIHRoaXMuaHAgPSBhLlBhcmFtZXRlcnM7XG4gICAgICAgICAgdGhpcy5ocE1heCA9IGEuUGFyYW1ldGVycztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUVxdWlwRW51bS5IZWFkOlxuICAgICAgICAgIHRoaXMuaHBSZWNvdmVyU3BlZWQgPSBhLlBhcmFtZXRlcnM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1FcXVpcEVudW0uQXJyb3c6XG4gICAgICAgICAgdGhpcy5hdHRhY2sgPSBhLlBhcmFtZXRlcnM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1FcXVpcEVudW0uQm93OlxuICAgICAgICAgIHRoaXMuYXR0YWNrUmFuZ2UgPSBhLlBhcmFtZXRlcnM7XG4gICAgICAgICAgdGhpcy5uZFJhbmdlLnNjYWxlID0gMiAqIHRoaXMuYXR0YWNrUmFuZ2UgLyB0aGlzLm5kUmFuZ2Uud2lkdGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1FcXVpcEVudW0uR2xvdmVzOlxuICAgICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgPSBhLlBhcmFtZXRlcnM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1FcXVpcEVudW0uaG9yc2U6XG4gICAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBhLlBhcmFtZXRlcnM7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3RyUGxheUFuaS5pbml0VmlldygpO1xuICAgIHRoaXMuY3RyUGxheUFuaS5zZXRBdHRhY2tFdmVudCh0aGlzLmRvQXR0YWNrMS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmN0clBsYXlBbmkuc2V0QXR0YWNrRW5kKHRoaXMuZG9BdHRhY2tGaW5pc2guYmluZCh0aGlzKSk7XG4gICAgdGhpcy50aW1lID0ge307XG4gICAgdGhpcy50aW1lW0MuaHBSZWNvdmVyXSA9IDA7XG4gICAgdGhpcy50aW1lW0MuUmVuU291bmRUaW1lXSA9IDA7XG4gICAgdGhpcy50aW1lW0MuQXR0YWNrXSA9IDA7XG4gICAgdGhpcy50aW1lW0MuUmVjb3ZlckNkXSA9IDA7XG4gICAgdGhpcy50aW1lW0MuUmVib3JuVGltZV0gPSBOdW1iZXIoJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXJhbXNDZmdCeUlkKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtUGFyYW1ldGVyQ2ZnLlJldml2ZVRpbWUpKTtcbiAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5SZXZpdmFsQ29pbl0gJiYgKHRoaXMudGltZVtDLlJlYm9yblRpbWVdIC09ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlJldml2YWxDb2luXVswXSk7XG4gICAgdGhpcy50aW1lW0MuTm9EaWVUaW1lXSA9IE51bWJlcigkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFBhcmFtc0NmZ0J5SWQoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1QYXJhbWV0ZXJDZmcuSW52aW5jaWJsZVRpbWUpKTtcbiAgICB0aGlzLmN0ckhwLnNldFR5cGUoJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lQXJteS5GcmllbmQpO1xuICAgIHRoaXMuY3RySHAuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblJlc3RhcnQgPSBmdW5jdGlvbiAodCkge1xuICAgIHVuZGVmaW5lZCA9PT0gdCAmJiAodCA9IGZhbHNlKTtcbiAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLmdldEF1ZGlvU291cmNlKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5CR011c2ljKS52b2x1bWUgPSAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLmdldE11c2ljVm9sdW1lKCk7XG4gICAgdGhpcy5jdHJQbGF5QW5pLm9uUmVzdGFydCgpO1xuICAgIHRoaXMuc3RhdGUgPSByLkFsaXZlO1xuICAgIHRoaXMudGltZVtDLlJlYm9ybl0gPSB0aGlzLnRpbWVbQy5SZWJvcm5UaW1lXTtcbiAgICB0aGlzLnJpZ2lkQm9keS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaHAgPSB0aGlzLmhwTWF4O1xuICAgIHRoaXMuY3RySHAuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gICAgdGhpcy5uZFJhbmdlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHQgJiYgdGhpcy5jdHJQbGF5QW5pLnNldEJ1cygwKTtcbiAgICB0aGlzLnRhZ0VuZW15ID0gbnVsbDtcbiAgICB0aGlzLmRlbEFsbEJ1ZmYoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRvTW92ZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT0gci5SZWJvcm4pIHtcbiAgICAgIHRoaXMuc2V0TGVmdCh0LngpO1xuICAgICAgaWYgKGNjLnYyKDAsIDApLmVxdWFscyh0KSkge1xuICAgICAgICB0aGlzLnRpbWVbQy5SZW5Tb3VuZFRpbWVdID0gMDtcbiAgICAgICAgJHoxS2luZ2h0RmFsbEF1ZGlvTWdyLktpbmdodEZhbGxBdWRpb01nci5nZXRJbnN0YW5jZSgpLnN0b3BFZmZlY3ROYW1lKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5SdW5NdXNpYyk7XG4gICAgICAgIHJldHVybiB2b2lkIHRoaXMuY3RyUGxheUFuaS5zZXRJZGxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgICAgY2MuVmVjMi5ub3JtYWxpemUodGhpcy52ZWMyXzIsIHQpO1xuICAgICAgY2MuVmVjMi5zY2FsZUFuZEFkZCh0aGlzLnZlYzJfMSwgdGhpcy52ZWMyXzEsIHRoaXMudmVjMl8yLCB0aGlzLmdldFNwZWVkKCkgKiBlKTtcbiAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnZlYzJfMSk7XG4gICAgICB0aGlzLmN0clBsYXlBbmkuc2V0TW92ZSgpO1xuICAgICAgaWYgKCEoMCAhPSB0aGlzLnRpbWVbQy5SZW5Tb3VuZFRpbWVdIHx8IHRoaXMuaXNEZWFkKCkpKSB7XG4gICAgICAgIHRoaXMudGltZVtDLlJlblNvdW5kVGltZV0gPSAxO1xuICAgICAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnBsYXlNdXNpYygkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLnJ1biwgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUGFyYW1ldGVyLlJ1bk11c2ljKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZWZ0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmN0clBsYXlBbmkuc2V0TWFMZWZ0KHQpO1xuICAgIHRoaXMudGFnRW5lbXkgJiYgKHRoaXMudGFnRW5lbXkubm9kZSAmJiAhdGhpcy50YWdFbmVteS5pc0RlYWQoKSB8fCAodGhpcy50YWdFbmVteSA9IG51bGwpKTtcbiAgICBpZiAodGhpcy50YWdFbmVteSkge1xuICAgICAgdGhpcy50YWdFbmVteS5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8yKTtcbiAgICAgIGNjLlZlYzIuc3VidHJhY3QodGhpcy52ZWMyXzIsIHRoaXMudmVjMl8yLCB0aGlzLnZlYzJfMSk7XG4gICAgICB0ID0gdGhpcy52ZWMyXzIueDtcbiAgICB9XG4gICAgdGhpcy5jdHJQbGF5QW5pLnNldEJvZHlMZWZ0KHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaXNMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmN0clBsYXlBbmkubm9kZS5zY2FsZVggPCAwO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25VcGRhdGEgPSBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5kZWJ1ZmZJbmZvLmxlbmd0aDsgZSsrKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuZGVidWZmSW5mb1tlXTtcbiAgICAgIGlmICgtMSAhPSBuLnRpbWUpIHtcbiAgICAgICAgbi50aW1lICs9IHQ7XG4gICAgICAgIGlmIChuLnRpbWUgPj0gbi50aW1lTWF4KSB7XG4gICAgICAgICAgdGhpcy5kZWxCdWZmSWR4KGUpLCBlLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIHIuQWxpdmU6XG4gICAgICAgIGlmICgtMSAhPSB0aGlzLnRpbWVbQy5BdHRhY2tdKSB7XG4gICAgICAgICAgdGhpcy50aW1lW0MuQXR0YWNrXSArPSB0ICogdGhpcy5nZXRBdHRTcGVlZCgpO1xuICAgICAgICAgIHRoaXMudGltZVtDLkF0dGFja10gPj0gMSAmJiB0aGlzLm9uRmluZEVuZW15KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lW0MuTm9EaWVdIC09IHQ7XG4gICAgICAgIHRoaXMudGltZVtDLlJlY292ZXJDZF0gLT0gdDtcbiAgICAgICAgaWYgKC0xICE9IHRoaXMudGltZVtDLlJlY292ZXJDZF0gJiYgdGhpcy50aW1lW0MuUmVjb3ZlckNkXSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy50aW1lW0MuaHBSZWNvdmVyXSArPSB0O1xuICAgICAgICAgIGlmICh0aGlzLnRpbWVbQy5ocFJlY292ZXJdID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaHAgKz0gdGhpcy5nZXRIcFJlY292ZXJTcGVlZCgpLCB0aGlzLmhwID4gdGhpcy5ocE1heCAmJiAodGhpcy5ocCA9IHRoaXMuaHBNYXgpLCB0aGlzLmN0ckhwLnNldEhwKHRoaXMuaHAsIHRoaXMuaHBNYXgpLCB0aGlzLnRpbWVbQy5ocFJlY292ZXJdLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSByLkRlYWQ6XG4gICAgICAgIHRoaXMudGltZVtDLlJlYm9ybl0gKz0gdDtcbiAgICAgICAgdGhpcy50aW1lW0MuUmVib3JuXSA+PSB0aGlzLnRpbWVbQy5SZWJvcm5UaW1lXSAmJiB0aGlzLm9uUmVib3JuKCk7XG4gICAgICAgIHRoaXMuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5SZXZpdmVTaG93LCB0aGlzLnRpbWVbQy5SZWJvcm5UaW1lXSAtIHRoaXMudGltZVtDLlJlYm9ybl0pO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmVuZFJvdW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0RlYWQoKSkge1xuICAgICAgdGhpcy5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlJldml2ZVNob3csIDApO1xuICAgICAgdGhpcy5vblJlYm9ybigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhwID0gdGhpcy5ocE1heDtcbiAgICAgIHRoaXMuY3RySHAuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gICAgfVxuICAgIHRoaXMuZGVsQWxsQnVmZigpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0U3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAxO1xuICAgIHJldHVybiB0aGlzLm1vdmVTcGVlZCAqICgodCArPSB0aGlzLnRpbWVbQy5Nb3ZlU3BlZWRdIHx8IDApICsgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5TcGVlZF0gfHwgMCkpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0UGF1c2UgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuY3RyUGxheUFuaS5zZXRQYXVzZSh0KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFdwb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEF0dFdwb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5jdHJBcnIubm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmlzRGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSAhPSByLkFsaXZlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25BdHRhY2tlZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKCEodGhpcy50aW1lW0MuTm9EaWVdID4gMCkpIHtcbiAgICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdEZyZWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQXVkaW9JZC5wbGF5ZXJfaHVydCk7XG4gICAgICB0aGlzLnRpbWVbQy5Ob0RpZV0gPSB0aGlzLnRpbWVbQy5Ob0RpZVRpbWVdO1xuICAgICAgaWYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLkd1YXJkaWFuU2hpZWxkXSAmJiBNYXRoLnJhbmRvbSgpIDwgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uR3VhcmRpYW5TaGllbGRdWzBdKSB7XG4gICAgICAgICR6MUxvZ01nci5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5pbmZvKFwiKioqUHJvdGVjdGl2ZSBTaGllbGRcIik7XG4gICAgICAgIHRoaXMudGltZVtDLk5vRGllXSArPSAzO1xuICAgICAgfVxuICAgICAgdGhpcy5ocCAtPSB0O1xuICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICB0aGlzLmhwID0gMDtcbiAgICAgICAgdGhpcy5vbkRlYWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3RySHAuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRIcFBybyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKCF0aGlzLmlzRGVhZCgpKSB7XG4gICAgICB0aGlzLmhwICs9IHQgKiB0aGlzLmhwTWF4O1xuICAgICAgdGhpcy5ocCA+IHRoaXMuaHBNYXggJiYgKHRoaXMuaHAgPSB0aGlzLmhwTWF4KTtcbiAgICAgIHRoaXMuY3RySHAuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25EZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnRhZ0VuZW15ID0gbnVsbDtcbiAgICAkejFLaW5naHRGYWxsQXVkaW9NZ3IuS2luZ2h0RmFsbEF1ZGlvTWdyLmdldEluc3RhbmNlKCkuc3RvcEVmZmVjdE5hbWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUGFyYW1ldGVyLlJ1bk11c2ljKTtcbiAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLmdldEF1ZGlvU291cmNlKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5CR011c2ljKS52b2x1bWUgPSAuNSAqICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkuZ2V0TXVzaWNWb2x1bWUoKTtcbiAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3RGcmVlKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEF1ZGlvSWQuZGVhdGgpO1xuICAgIHRoaXMuc3RhdGUgPSByLlJlYm9ybjtcbiAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lVGFnWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtTGV2ZWxDaGFsVHlwZS5Ob0RpZV0gPSAxO1xuICAgIHRoaXMuY3RyUGxheUFuaS5zZXREaWUoZnVuY3Rpb24gKCkge1xuICAgICAgdC5zdGF0ZSA9IHIuRGVhZDtcbiAgICAgIHQudGltZVtDLlJlYm9ybl0gPSAwO1xuICAgICAgdC5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlJldml2ZVNob3csIHQudGltZVtDLlJlYm9yblRpbWVdIC0gdC50aW1lW0MuUmVib3JuXSk7XG4gICAgfSk7XG4gICAgdGhpcy5kZWxBbGxCdWZmKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblJlYm9ybiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy50YWdFbmVteSA9IG51bGw7XG4gICAgJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0RnJlZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLnJlYmlydGgpO1xuICAgIHRoaXMuc3RhdGUgPSByLlJlYm9ybjtcbiAgICB0aGlzLnJpZ2lkQm9keS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuY3RyUGxheUFuaS5zZXRSZXZpdmUoZnVuY3Rpb24gKCkge1xuICAgICAgdC5zdGF0ZSA9IHIuQWxpdmU7XG4gICAgICB0LnRpbWVbQy5ocFJlY292ZXJdID0gMDtcbiAgICAgIHQudGltZVtDLkF0dGFja10gPSAwO1xuICAgICAgdC5ocCA9IHQuaHBNYXg7XG4gICAgICB0LmN0ckhwLnNldEhwKHQuaHAsIHQuaHBNYXgpO1xuICAgIH0pO1xuICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYxMyk7XG4gICAgaWYgKGUgJiYgIXRoaXMudGltZVtDLlJlYm9ybkJ1ZmYxXSkge1xuICAgICAgdGhpcy50aW1lW0MuUmVib3JuQnVmZjFdID0gZS5QYW1lclswXTtcbiAgICAgIHRoaXMudGltZVtDLlJlYm9ybkJ1ZmYyXSA9IGUuUGFtZXJbMV07XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25GaW5kRW5lbXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEVuZW15TGlzdCgpO1xuICAgIHZhciBlID0gW107XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgaSA9IHRbbl07XG4gICAgICBpZiAoIWkuaXNEZWFkKCkpIHtcbiAgICAgICAgaS5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8yKTtcbiAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdCh0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzIsIHRoaXMudmVjMl8xKTtcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZlYzJfMi5tYWcoKTtcbiAgICAgICAgYSA8PSB0aGlzLmF0dGFja1JhbmdlICYmIGUucHVzaCh7XG4gICAgICAgICAgdGFnOiBpLFxuICAgICAgICAgIGxlbjogYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgIT0gZS5sZW5ndGgpIHtcbiAgICAgIGUuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gdC5sZW4gLSBlLmxlbjtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YWdFbmVteSA9IGVbMF0udGFnO1xuICAgICAgdGhpcy50aW1lW0MuQXR0YWNrXSA9IC0xO1xuICAgICAgdGhpcy5kb0F0dGFja1N0YXJ0KCk7XG4gICAgICB0aGlzLmRvQXR0YWNrKCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9BdHRhY2tTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmN0clBsYXlBbmkuc2V0QXR0YWNrKCk7XG4gICAgdGhpcy50aW1lW0MuUmVjb3ZlckNkXSA9IDE7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5kb0F0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3RGcmVlKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEF1ZGlvSWQucGFseWVyX2F0dGFjayk7XG4gICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEVuZW15TGlzdCgpO1xuICAgIHZhciBlID0gW107XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgaSA9IHRbbl07XG4gICAgICBpZiAoIWkuaXNEZWFkKCkpIHtcbiAgICAgICAgaS5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8yKTtcbiAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdCh0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzIsIHRoaXMudmVjMl8xKTtcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZlYzJfMi5tYWcoKTtcbiAgICAgICAgYSA8PSB0aGlzLmF0dGFja1JhbmdlICYmIGUucHVzaCh7XG4gICAgICAgICAgdGFnOiBpLFxuICAgICAgICAgIGxlbjogYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgIT0gZS5sZW5ndGgpIHtcbiAgICAgIGUuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gdC5sZW4gLSBlLmxlbjtcbiAgICAgIH0pO1xuICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLmF0dE51bTsgbysrKSB7XG4gICAgICAgIHZhciByID0gZVtvXTtcbiAgICAgICAgciAmJiAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5vblBsYXlBdHRhY2soci50YWcpO1xuICAgICAgfVxuICAgICAgdGhpcy50aW1lW0MuQXR0YWNrXSA9IDA7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9BdHRhY2sxID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5kb0F0dGFja0ZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRhZ0VuZW15ID0gbnVsbDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEF0dGFjayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmF0dGFjaztcbiAgICB2YXIgbiA9IDE7XG4gICAgdmFyIGkgPSB0aGlzLmdldEJ1ZmZMaXN0KCR6MUtpbmdodEZhbGxJbnRlcmZhY2UuS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUuRGFtYWdlQ3V0KTtcbiAgICBmb3IgKHZhciBhID0gMDsgYSA8IGkubGVuZ3RoOyBhKyspIHtcbiAgICAgIG4gLT0gaVthXS5kYXRhLnN1Yk51bTtcbiAgICB9XG4gICAgdGhpcy50aW1lW0MuUmVib3JuQnVmZjFdICYmIChuICs9IHRoaXMudGltZVtDLlJlYm9ybkJ1ZmYxXSk7XG4gICAgdGhpcy50aW1lW0MuQXR0YWNrQnVmZjFdICYmIChuICs9IHRoaXMudGltZVtDLkF0dGFja0J1ZmYxXSk7XG4gICAgdGhpcy50aW1lW0MuQXR0YWNrQnVmZjJdICYmIChuIC09IHRoaXMudGltZVtDLkF0dGFja0J1ZmYyXSk7XG4gICAgaWYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLkNsb3NlQ3V0XSkge1xuICAgICAgdmFyIG8gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgIHZhciByID0gdC5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICBjYy5WZWMyLmRpc3RhbmNlKG8sIHIpIDw9IDEwMCAmJiAobiArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5DbG9zZUN1dF1bMF0pO1xuICAgIH1cbiAgICBuICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmFkZFRpbWVbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsVGltZVR5cGUuUGxheWVyRGFtYWdlXSB8fCAwO1xuICAgIChuICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5BdHRhY2tdIHx8IDApIDwgMCAmJiAobiA9IDApO1xuICAgIHJldHVybiBlICogbjtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEF0dFNwZWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICB2YXIgZSA9IDE7XG4gICAgdmFyIG4gPSB0aGlzLmdldEJ1ZmZMaXN0KCR6MUtpbmdodEZhbGxJbnRlcmZhY2UuS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUuQXR0YWNrU3BlZWQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKykge1xuICAgICAgZSArPSBuW2ldLmRhdGEuYWRkU3BlZWQ7XG4gICAgfVxuICAgIHRoaXMudGltZVtDLlJlYm9ybkJ1ZmYyXSAmJiAoZSArPSB0aGlzLnRpbWVbQy5SZWJvcm5CdWZmMl0pO1xuICAgIHRoaXMudGltZVtDLkF0dGFja1NwZWVkMl0gJiYgKGUgKz0gdGhpcy50aW1lW0MuQXR0YWNrU3BlZWQyXSk7XG4gICAgaWYgKHRoaXMuaHAgPCAuNSAqIHRoaXMuaHBNYXgpIHtcbiAgICAgIHZhciBhID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYxOCk7XG4gICAgICBhICYmIChlICs9IGEuUGFtZXJbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdCAqICgoZSArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5hZGRUaW1lWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbFRpbWVUeXBlLlBsYXllckF0dGFja1NwZWVkXSB8fCAwKSArICgkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuQXR0YWNrU3BlZWRdIHx8IDApKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEhwUmVjb3ZlclNwZWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gMTtcbiAgICByZXR1cm4gdGhpcy5ocFJlY292ZXJTcGVlZCAqICh0ICsgKHRoaXMudGltZVtDLmhwUmVjb3ZlclNwZWVkXSB8fCAwKSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0QnVmZkRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjAxKTtcbiAgICB0aGlzLmF0dE51bSA9IHQgPyB0LlBhbWVyWzBdIDogMTtcbiAgICB0aGlzLmNyaXQgPSAwO1xuICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYxNCk7XG4gICAgZSAmJiAodGhpcy5jcml0ICs9IGUuUGFtZXJbMF0pO1xuICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYzNyk7XG4gICAgbiAmJiAodGhpcy5jcml0ICs9IG4uUGFtZXJbMF0pO1xuICAgIHRoaXMudGltZVtDLk1vdmVTcGVlZF0gPSAwO1xuICAgIHZhciBpID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYyMSk7XG4gICAgaSAmJiAodGhpcy50aW1lW0MuTW92ZVNwZWVkXSArPSBpLlBhbWVyWzBdKTtcbiAgICB2YXIgYSA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMzUpO1xuICAgIGEgJiYgKHRoaXMudGltZVtDLk1vdmVTcGVlZF0gKz0gYS5QYW1lclswXSk7XG4gICAgdGhpcy50aW1lW0MuaHBSZWNvdmVyU3BlZWRdID0gMDtcbiAgICB2YXIgbyA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMjIpO1xuICAgIG8gJiYgKHRoaXMudGltZVtDLmhwUmVjb3ZlclNwZWVkXSArPSBvLlBhbWVyWzBdKTtcbiAgICB2YXIgciA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMzYpO1xuICAgIHIgJiYgKHRoaXMudGltZVtDLmhwUmVjb3ZlclNwZWVkXSArPSByLlBhbWVyWzBdKTtcbiAgICB2YXIgcyA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDApO1xuICAgIGlmIChzKSB7XG4gICAgICB0aGlzLnRpbWVbQy5SZWNvdmVyQ2RdID0gLTE7XG4gICAgICB0aGlzLmhwTWF4ID0gKDEgKyBzLlBhbWVyWzBdKSAqIHRoaXMuYmFzZUhwO1xuICAgICAgdGhpcy5ocCA9IHRoaXMuaHBNYXg7XG4gICAgICB0aGlzLmN0ckhwLnNldEhwKHRoaXMuaHAsIHRoaXMuaHBNYXgpO1xuICAgIH1cbiAgICB0aGlzLnRpbWVbQy5BdHRhY2tCdWZmMV0gPSAwO1xuICAgIHZhciBsID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmY0MSk7XG4gICAgaWYgKGwpIHtcbiAgICAgIHRoaXMudGltZVtDLkF0dGFja0J1ZmYxXSA9IGwuUGFtZXJbMF07XG4gICAgICB0aGlzLmF0dGFja1JhbmdlICo9IDEgLSBsLlBhbWVyWzFdO1xuICAgICAgdGhpcy5uZFJhbmdlLnNjYWxlID0gMiAqIHRoaXMuYXR0YWNrUmFuZ2UgLyB0aGlzLm5kUmFuZ2Uud2lkdGg7XG4gICAgfVxuICAgIHZhciBjID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmY0Mik7XG4gICAgaWYgKGMpIHtcbiAgICAgIHRoaXMudGltZVtDLkF0dGFja1NwZWVkMl0gPSBjLlBhbWVyWzBdO1xuICAgICAgdGhpcy50aW1lW0MuQXR0YWNrQnVmZjJdID0gYy5QYW1lclsxXTtcbiAgICB9XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiAkejFLaW5naHRGYWxsUGxheUdhbWVBbmlDdHJsLmRlZmF1bHQsXG4gICAgdG9vbHRpcDogXCJQbGF5ZXIgYW5pbVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImN0clBsYXlBbmlcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6ICR6MUtpbmdodEZhbGxJdGVtSHAuZGVmYXVsdCxcbiAgICB0b29sdGlwOiBcIkhQIGJhclwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImN0ckhwXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiAkejFLaW5naHRGYWxsQnVsbGV0UGxheS5kZWZhdWx0LFxuICAgIHRvb2x0aXA6IFwiQm93IHBvc2l0aW9uXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiY3RyQXJyXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRSYW5nZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcIm5kQWdnXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxJbnRlcmZhY2UpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxHYW1lUGxheUN0cmw7XG4oZnVuY3Rpb24gKHQpIHtcbiAgdC5ocFJlY292ZXIgPSBcImhwUmVjb3ZlclwiO1xuICB0LmhwUmVjb3ZlclNwZWVkID0gXCJocFJlY292ZXJTcGVlZFwiO1xuICB0LkF0dGFjayA9IFwiQXR0YWNrXCI7XG4gIHQuQXR0YWNrQnVmZjEgPSBcIkF0dGFja0J1ZmYxXCI7XG4gIHQuQXR0YWNrQnVmZjIgPSBcIkF0dGFja0J1ZmYyXCI7XG4gIHQuUmVib3JuID0gXCJSZWJvcm5cIjtcbiAgdC5SZWJvcm5UaW1lID0gXCJSZWJvcm5UaW1lXCI7XG4gIHQuUmVib3JuQnVmZjEgPSBcIlJlYm9ybkJ1ZmYxXCI7XG4gIHQuUmVib3JuQnVmZjIgPSBcIlJlYm9ybkJ1ZmYyXCI7XG4gIHQuQXR0YWNrU3BlZWQxID0gXCJBdHRhY2tTcGVlZDFcIjtcbiAgdC5BdHRhY2tTcGVlZDIgPSBcIkF0dGFja1NwZWVkMlwiO1xuICB0Lk5vRGllID0gXCJOb0RpZVwiO1xuICB0Lk5vRGllVGltZSA9IFwiTm9EaWVUaW1lXCI7XG4gIHQuUmVjb3ZlckNkID0gXCJSZWNvdmVyQ2RcIjtcbiAgdC5Nb3ZlU3BlZWQgPSBcIk1vdmVTcGVlZFwiO1xuICB0LlJlblNvdW5kVGltZSA9IFwiUmVuU291bmRUaW1lXCI7XG59KShDIHx8IChDID0ge30pKTsiXX0=