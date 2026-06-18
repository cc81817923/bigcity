
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallSoldierBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5858dYMNk5KIq+qV/+xCMwd', 'KinghtFallSoldierBase');
// _script/KinghtFallSoldierBase.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
var cc__spreadArrays = __spreadArrays;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallSoldierStatus = undefined;
var s;
var l;

var $z1PoolMgr = require("PoolMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallItemHp = require("KinghtFallItemHp");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallGameCtrlData = require("KinghtFallGameCtrlData");

var $z1KinghtFallInterface = require("KinghtFallInterface");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallSoldierBase = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.spAni = null;
    e.ndHp = null;
    e.ndVideo = null;
    e.rigidBody = null;
    e.isVideo = false;
    e.time = {};
    e.vec2_1 = new cc.Vec2();
    e.vec2_2 = new cc.Vec2();
    e.findInx = 0;
    e.findMin = .2;
    e.findLen = 10;
    e.obsObj = [];
    e.nextFind = false;
    e.finIndex = 0;
    e.lastFind = false;
    e.isAgg = false;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.onLoad = function () {
    var t = this;
    this.rigidBody = this.node.getComponent(cc.RigidBody);
    this.spAni.setCompleteListener(function (e) {
      switch (e.animation.name) {
        case $z1KinghtFallModle.KinghtFallSoldierAniEnum.Attack:
          t.doAttackFinish();
      }
    });
  };

  _ctor.prototype.start = function () {
    this.setBody(this.spAni.node);
  };

  _ctor.prototype.setParent = function (t) {
    this.outBuild = t;
  };

  _ctor.prototype.initData = function (t) {
    var e = this;
    this.cfg = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getSoldierCfgById(t);
    this.attackRange = this.cfg.AttackRange;
    var n = this.node.getComponents(cc.CircleCollider);

    if (n[0]) {
      n[0].radius = this.attackRange;
    } else {
      this.node.addComponent(cc.CircleCollider).radius = this.attackRange;
    }

    if (n[1]) {
      n[1].radius = this.attackRange + this.cfg.SearchRange;
    } else {
      this.node.addComponent(cc.CircleCollider).radius = this.attackRange + this.cfg.SearchRange;
    }

    var i = 1;
    var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.talentAdd[$z1KinghtFallEnum.KinghtFallEnumTalentCfg.TalenType02];

    if (a) {
      for (var o = 0; o < a.length; o++) {
        i += a[o][0];
      }
    }

    this.attSpeed = this.cfg.AttackInterval * i;
    var r = 1;
    var s = 1;

    switch (this.cfg.ID) {
      case 90001:
        if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.PerseveranceSymbol]) {
          s += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.PerseveranceSymbol][0];
          r += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.PerseveranceSymbol][1];
        }

        break;

      case 90002:
        if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TurtlePower]) {
          s += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TurtlePower][0];
          r += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TurtlePower][1];
        }

        break;

      case 90003:
        if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.BowmanStrike]) {
          s += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.BowmanStrike][0];
          r += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.BowmanStrike][1];
        }

        break;

      case 90004:
        if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.knightHood]) {
          s += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.knightHood][0];
          r += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.knightHood][1];
        }

    }

    this.hpMax = this.cfg.Health * r;
    this.hp = this.hpMax;

    if (this.hpctrl) {
      this.hpctrl.setType($z1KinghtFallModle.KinghtFallGameArmy.Friend);
      this.hpctrl.setHp(this.hp, this.hpMax);
    } else {
      this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.Enemy, $z1KinghtFallConfig.KinghtFallPrefabName.ItemHp, function (t) {
        var n;
        (n = cc.instantiate(t)).setParent(e.ndHp);
        n.setPosition(0, 0, 0);
        e.hpctrl = n.getComponent($z1KinghtFallItemHp["default"]);
        e.hpctrl.setType($z1KinghtFallModle.KinghtFallGameArmy.Friend);
        e.hpctrl.setHp(e.hp, e.hpMax);
      });
    }

    this.attack = this.cfg.AttackDamage * s;
    this.time = {};
    this.time[l.Attack] = 0;
    this.node.getPosition(this.vec2_1);
    this.node.zIndex = Math.floor(cc.winSize.height) - Math.floor(this.vec2_1.y);
    this.doIdel();
    this.rigidBody.active = true;
    this.onChangeSpeed();
  };

  _ctor.prototype.onUpdate = function (t) {
    var e = this;

    if (!this.isDead()) {
      this.node.getPosition(this.vec2_1);
      this.node.zIndex = Math.floor(cc.winSize.height) - Math.floor(this.vec2_1.y);

      for (var n = 0; n < this.debuffInfo.length; n++) {
        var i = this.debuffInfo[n];

        if (-1 != i.time) {
          i.time += t;

          if (i.time >= i.timeMax) {
            this.delBuffIdx(n), n--;
          }
        }
      }

      -1 != this.time[l.Attack] && (this.time[l.Attack] += t * this.getAttSpeed());

      switch (this.state) {
        case s.Idle:
          if (this.isAgg) {
            $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay.node.getPosition(this.vec2_2);
            cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
            this.vec2_2.len();

            if (this.vec2_2.len() <= $z1KinghtFallConfig.KinghtFallParameter.FollowRange / 2) {
              return;
            }

            this.doMove();
          } else {
            this.lastFind = this.isFind();

            if (this.lastFind) {
              var a = this.getFind();

              if (a && a.canAtt) {
                this.time[l.Attack] >= 1 && this.onFindList();
              } else {
                this.doMove();
              }
            }
          }

          break;

        case s.Wait:
          this.time[l.Attack] >= 1 && this.onFindList();
          break;

        case s.Move:
          (function () {
            if (e.isAgg) {
              $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay.node.getPosition(e.vec2_2);
              cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);

              if (e.vec2_2.len() <= $z1KinghtFallConfig.KinghtFallParameter.FollowRange / 2) {
                return void e.doIdel();
              } // 检测是否被建筑卡住，计算绕行点


              e.findObg(t);

              if (e.obsPos) {
                // 先走到绕行点，绕过障碍物
                e.vec2_2 = cc.v2(e.obsPos);
                cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);

                if (e.vec2_2.len() <= 15) {
                  e.obsPos = null;
                  e.obsObj = [];
                }
              } else if (e.pathList.pathInfoList[e.pathList.nodeIndex]) {
                e.vec2_2 = cc.v2(e.pathList.pathInfoList[e.pathList.nodeIndex].pos);
                cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);

                if (e.vec2_2.len() <= 15) {
                  e.pathList.nodeIndex++, e.pathList.nodeIndex >= e.pathList.pathInfoList.length || (e.pathList.pathIndex = e.pathList.pathInfoList[e.pathList.nodeIndex].index);
                }
              } else {
                e.upPath();
              }
            } else if (e.pathList) {
              if (!e.pathList.pathInfoList[e.pathList.nodeIndex]) {
                e.pathList = null;
                return void e.doIdel();
              } // 检测是否被建筑卡住，计算绕行点


              e.findObg(t);

              if (e.obsPos) {
                // 先走到绕行点，绕过障碍物
                e.vec2_2 = cc.v2(e.obsPos);
                cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);

                if (e.vec2_2.len() <= 15) {
                  e.obsPos = null;
                  e.obsObj = [];
                }
              } else {
                e.vec2_2 = cc.v2(e.pathList.pathInfoList[e.pathList.nodeIndex].pos);
                cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);

                if (e.vec2_2.len() <= 20) {
                  e.pathList.nodeIndex++;

                  if (e.pathList.nodeIndex >= e.pathList.pathInfoList.length) {
                    e.pathList = null;
                    var n = $z1KinghtFallUIGame["default"].instance.ctrGame.ndAggFlag;
                    n.Flag--;
                    n.Flag || (n.active = false);
                    return void e.doIdel();
                  }

                  e.pathList.pathIndex = e.pathList.pathInfoList[e.pathList.nodeIndex].index;
                }
              }
            } else {
              var i = e.getFind();

              if (i) {
                if (i.canAtt) {
                  return void (e.time[l.Attack] >= 1 ? e.onFindList() : e.doIdel());
                }

                i.tag.node.getPosition(e.vec2_2);
                cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);
              } else {
                e.lastFind = e.isFind();
                e.lastFind || e.doIdel();
              }
            }

            cc.Vec2.normalize(e.vec2_2, e.vec2_2);
            cc.Vec2.scaleAndAdd(e.vec2_1, e.vec2_1, e.vec2_2, e.getSpeed() * t);
            e.setLeft(e.vec2_2.x < 0);
            e.node.setPosition(e.vec2_1);
          })();

      }
    }
  };

  _ctor.prototype.findObg = function (t) {
    if (!this.lastPos) {
      this.lastPos = this.node.getPosition();
      this.findInx = 0;
    }

    this.node.getPosition(this.vec2_1);

    if (!(cc.Vec2.distance(this.vec2_1, this.lastPos) <= this.findLen)) {
      this.lastPos = this.node.getPosition();
      return void (this.findInx = 0);
    }

    this.findInx += t;

    if (this.findInx >= this.findMin) {
      this.lastPos = null;
      this.findObg2();
    }
  };

  _ctor.prototype.findObg2 = function () {
    var t = {
      position: this.getWpos(),
      radius: 30
    };
    var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getBulidList();

    for (var n = 0; n < e.length; n++) {
      if ((l = e[n]).getIsWork()) {
        var i = l.getWposPhyCol();

        for (var a = 0; a < i.length; a++) {
          var o = i[a];

          if (cc.Intersection.polygonCircle(o, t)) {
            return void ((g = l.getMoveToPos(this.getWpos(), this.obsObj)) && (this.obsPos = g.pos, this.obsObj.push(g.node), this.nextFind = false));
          }
        }
      }
    }

    var r = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.obstacles;

    for (var s = 0; s < r.length; s++) {
      var l;
      var c = (l = r[s]).getWposPhyCol();

      for (var h = 0; h < c.length; h++) {
        var g;

        if (cc.Intersection.polygonCircle(c[h], t)) {
          return void ((g = l.getMoveToPos(this.getWpos(), this.obsObj)) && (this.obsPos = g.pos, this.obsObj.push(g.node), this.nextFind = true));
        }
      }
    }
  };

  _ctor.prototype.setLeft = function (t) {
    this.spAni.node.scaleX = t ? -this.spAni.node.scaleY : this.spAni.node.scaleY;
  };

  _ctor.prototype.doWait = function () {
    this.state = s.Wait;
    this.rigidBody.linearVelocity = cc.Vec2.ZERO;
    this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Idle, true);
  };

  _ctor.prototype.doIdel = function () {
    this.state = s.Idle;
    this.rigidBody.linearVelocity = cc.Vec2.ZERO;
    this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Idle, true);
  };

  _ctor.prototype.doMove = function () {
    this.state = s.Move;
    this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Move, true);
  };

  _ctor.prototype.isFind = function () {
    var t = this;
    return !!this.isAgg || (this.finIndex++, this.finIndex % 3 != 0 ? this.lastFind : (this.finIndex = 0, this.node.getPosition(this.vec2_1), !!function () {
      var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getEnemyList();

      for (var n = 0; n < e.length; n++) {
        var i = e[n];

        if (!i.isDead() && (i.node.getPosition(t.vec2_2), cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1), t.vec2_2.len() <= t.attackRange + t.cfg.SearchRange)) {
          return true;
        }
      }

      return false;
    }()));
  };

  _ctor.prototype.getFind = function () {
    var t = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getEnemyList();
    var e = null;
    var n = -1;

    for (var i = 0; i < t.length; i++) {
      var a = t[i];

      if (!a.isDead()) {
        a.node.getPosition(this.vec2_2);
        cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);

        if (this.vec2_2.len() <= this.attackRange + this.cfg.SearchRange && (-1 == n || this.vec2_2.len() < n)) {
          e = a, n = this.vec2_2.len();
        }
      }
    }

    if (e) {
      return {
        tag: e,
        canAtt: n <= this.attackRange
      };
    } else {
      return null;
    }
  };

  _ctor.prototype.onFindList = function () {
    var t = this;
    this.node.getPosition(this.vec2_1);
    return !!function () {
      var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getEnemyList();
      var n = null;
      var i = -1;

      for (var a = 0; a < e.length; a++) {
        var o = e[a];

        if (!o.isDead()) {
          o.node.getPosition(t.vec2_2);
          cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

          if (t.vec2_2.len() <= t.attackRange && (-1 == i || t.vec2_2.len() < i)) {
            i = t.vec2_2.len(), n = o;
          }
        }
      }

      return n;
    }() && (this.doAttackStart(), true);
  };

  _ctor.prototype.doAttackStart = function () {
    this.state = s.Attack;
    this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Attack, false);
    this.time[l.Attack] = -1;
    this.doAttack();
  };

  _ctor.prototype.doAttack = function () {
    var t = this;
    this.time[l.Attack] = 0;
    this.node.getPosition(this.vec2_1);
    var e = this.getAttack();

    var n = function () {
      var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getEnemyList();
      var n = null;
      var i = -1;

      for (var a = 0; a < e.length; a++) {
        var o = e[a];

        if (!o.isDead()) {
          o.node.getPosition(t.vec2_2);
          cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

          if (t.vec2_2.len() <= t.attackRange && (-1 == i || t.vec2_2.len() < i)) {
            n = o, i = t.vec2_2.len();
          }
        }
      }

      return n;
    }();

    if (n) {
      n.node.getPosition(this.vec2_2);
      this.cfg.Suppressed == n.cfg.ID && (e *= Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.RestrainedArms)));
      n.onAttacked(e);
      $z1KinghtFallUIGame["default"].instance.ctrEffect.showDamageNum(n.node.getPosition(), e);
      $z1KinghtFallUIGame["default"].instance.ctrEffect.onMonsterAttack(n.node.getPosition(), "xb_gj");
      cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
      this.setLeft(this.vec2_2.x < 0);
    }
  };

  _ctor.prototype.doAttackFinish = function () {
    this.doIdel();
  };

  _ctor.prototype.onAttacked = function (t) {
    if (!this.isDead()) {
      var e = 1;

      if (1 == this.cfg.AttackType) {
        var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.talentAdd[$z1KinghtFallEnum.KinghtFallEnumTalentCfg.TalenType04];

        if (n) {
          for (var i = 0; i < n.length; i++) {
            e -= n[i][0];
          }
        }
      }

      this.hp -= t * e;

      if (this.hp <= 0) {
        this.state = s.Dead;
        $z1KinghtFallUIGame["default"].instance.ctrEffect.onSoldierDead(this.node.getPosition(), .25);
        this.delAllBuff();
        this.node.active = false;
        this.outBuild.addDie(this);
        var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff16);
        a && $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay.addHpPro(a.Pamer[0]);
      } else {
        $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.VengefulRage] && this.addBuff($z1KinghtFallInterface.KinghtFallEnemyBuffType.DamageAdd, {
          addNum: $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.VengefulRage][0],
          time: 2
        });
      }

      this.hpctrl.setHp(this.hp, this.hpMax);
      return t * e;
    }
  };

  _ctor.prototype.freeNode = function () {
    var t = $z1KinghtFallConfig.KinghtFallPoolName.Soldier + "_" + this.cfg.ID;
    $z1PoolMgr.PoolMgr.getInstance().freeNode(t, this.node);
    $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.delSoldier(this);
  };

  _ctor.prototype.isDead = function () {
    return this.state == s.Dead;
  };

  _ctor.prototype.setPause = function (t) {
    this.rigidBody.linearVelocity = cc.Vec2.ZERO;
    this.spAni.paused = t;
  };

  _ctor.prototype.getAttack = function () {
    var t = this.attack;
    var e = 1;
    var n = this.getBuffList($z1KinghtFallInterface.KinghtFallEnemyBuffType.DamageCut);

    for (var i = 0; i < n.length; i++) {
      e -= n[i].data.subNum;
    }

    var a = this.getBuffList($z1KinghtFallInterface.KinghtFallEnemyBuffType.DamageAdd);

    for (i = 0; i < a.length; i++) {
      e += a[i].data.addNum;
    }

    e < 0 && (e = 0);
    return t * e;
  };

  _ctor.prototype.getAttSpeed = function () {
    var t = this.attSpeed;
    var e = 1;
    var n = this.getBuffList($z1KinghtFallInterface.KinghtFallEnemyBuffType.AttackSpeed);

    for (var i = 0; i < n.length; i++) {
      e += n[i].data.addSpeed;
    }

    var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff44);
    a && (e += a.Pamer[0]);

    switch (this.cfg.AttackType) {
      case 1:
        $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.StrikeSword] && (e += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.StrikeSword][0]);
        break;

      case 2:
        $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.DartingTalisman] && (e += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.DartingTalisman][0]);
    }

    return t * e;
  };

  _ctor.prototype.getSpeed = function () {
    var t = this.cfg.Speed;
    var e = 1;
    var n = this.getBuffList($z1KinghtFallInterface.KinghtFallEnemyBuffType.MoveSpeed);

    for (var i = 0; i < n.length; i++) {
      e -= n[i].data.subNum;
    }

    var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff31);
    a && (e += a.Pamer[0]);
    var o = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff44);
    o && (e -= o.Pamer[1]);
    var r = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff52);
    r && (e += r.Pamer[0]);
    $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WindstormBoots] && (e += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WindstormBoots][0]);
    return t * e;
  };

  _ctor.prototype.addHpPro = function (t) {
    if (!this.isDead()) {
      this.hp += t * this.hpMax;
      this.hp > this.hpMax && (this.hp = this.hpMax);
      this.hpctrl.setHp(this.hp, this.hpMax);
    }
  };

  _ctor.prototype.setNew = function () {
    var t;
    this.hp = this.hpMax;
    null === (t = this.hpctrl) || undefined === t || t.setHp(this.hp, this.hpMax);
    this.node.active = true;
    this.pathList = null;
    this.isAgg = false;
    this.time[l.Attack] = 0;
    this.doIdel();
  };

  _ctor.prototype.getWpos = function () {
    return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
  };

  _ctor.prototype.setPath = function (t, e) {
    var n;
    this.isAgg = e;

    if (this.pathList) {
      var i = 0;
      var a = 0;

      do {
        if (this.pathList.pathInfoList[i].index == t[a].index) {
          (n = this.pathList.pathInfoList).splice.apply(n, cc__spreadArrays([i + 1, this.pathList.pathInfoList.length - i + 1], t.slice(a + 1)));
          break;
        }

        if (this.pathList.pathInfoList[i].index < t[a].index) {
          i++;
        } else {
          a++;
        }
      } while (i < this.pathList.pathInfoList.length && a < t.length);

      for (var o = 0; o < this.pathList.pathInfoList.length; o++) {
        if (this.pathList.pathInfoList[o].index == this.pathList.pathIndex) {
          this.pathList.pathInfoList.splice(0, o);
          this.pathList.nodeIndex = 0;
          break;
        }
      }
    }
  };

  _ctor.prototype.startAgg = function (t) {
    if (this.isDead()) {
      return false;
    }

    this.isAgg = true;
    this.pathList = {
      nodeIndex: 0,
      pathIndex: t.index,
      pathInfoList: [JSON.parse(JSON.stringify(t))]
    };
    this.obsPos = null;
    this.obsObj = [];
    this.lastPos = null;

    switch ($z1KinghtFallConfig.KinghtFallParameter.FollowMode) {
      case 1:
        var e = cc.v2();
        cc.Vec2.random(e, 25);
        cc.Vec2.add(e, e, this.pathList.pathInfoList[0].pos);
        this.pathList.pathInfoList[0].pos = e;
    }

    this.doMove();
    return true;
  };

  _ctor.prototype.upPath = function () {
    this.setPath($z1KinghtFallUIGame["default"].instance.ctrGame.pathList, this.isAgg);
    this.doMove();
  };

  _ctor.prototype.initBuffData = function () {
    var t = 1;
    this.hpMax = this.cfg.Health;
    var e = 1;
    e += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.SoldierMaxHp] || 0;
    var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff32);
    n && (e += n.Pamer[0]);
    var i = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff53);
    i && (e += i.Pamer[0]);

    if (2 == this.cfg.AttackType) {
      var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff45);

      if (a) {
        t += a.Pamer[0];
        e -= a.Pamer[1];
      }
    }

    var o = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.talentAdd[$z1KinghtFallEnum.KinghtFallEnumTalentCfg.TalenType03];

    if (o) {
      for (var r = 0; r < o.length; r++) {
        e += o[r][0];
      }
    }

    this.hpMax *= e;
    this.hp = this.hpMax;
    this.hpctrl && this.hpctrl.setHp(this.hp, this.hpMax);
    this.attack = this.cfg.AttackDamage;
    var s = 1;
    s += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.SoldierDamage] || 0;
    s += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.SoldierDamage1] || 0;
    s += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.SoldierDamage2] || 0;
    var l = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff43);
    l && (s += l.Pamer[0]);
    var c = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.talentAdd[$z1KinghtFallEnum.KinghtFallEnumTalentCfg.TalenType01];

    if (c) {
      for (r = 0; r < c.length; r++) {
        s += c[r][0];
      }
    }

    this.attack *= s;

    if (2 == this.cfg.AttackType) {
      var h = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.talentAdd[$z1KinghtFallEnum.KinghtFallEnumTalentCfg.TalenType05];

      if (h) {
        for (r = 0; r < h.length; r++) {
          t += h[r][0];
        }
      }
    }

    this.attackRange = this.cfg.AttackRange * t;
    var u = this.node.getComponents(cc.CircleCollider);

    if (u[0]) {
      u[0].radius = this.attackRange;
    } else {
      this.node.addComponent(cc.CircleCollider).radius = this.attackRange;
    }

    if (u[1]) {
      u[1].radius = this.attackRange + this.cfg.SearchRange;
    } else {
      this.node.addComponent(cc.CircleCollider).radius = this.attackRange + this.cfg.SearchRange;
    }
  };

  _ctor.prototype.onChangeSpeed = function () {
    var t = $z1KinghtFallUIGame["default"].instance.speed;
    this.spAni.timeScale = t;
  };

  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Body parts"
  })], _ctor.prototype, "spAni", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "HP bar node"
  })], _ctor.prototype, "ndHp", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "HP bar node"
  })], _ctor.prototype, "ndVideo", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallInterface.KinghtFallInterface);

exports["default"] = def_KinghtFallSoldierBase;

(function (t) {
  t[t.Idle = 0] = "Idle";
  t[t.Move = 1] = "Move";
  t[t.Attack = 2] = "Attack";
  t[t.Wait = 3] = "Wait";
  t[t.Dead = 4] = "Dead";
})(s = exports.KinghtFallSoldierStatus || (exports.KinghtFallSoldierStatus = {}));

(function (t) {
  t.Attack = "Attack";
})(l || (l = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxTb2xkaWVyQmFzZS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiY2NfX3NwcmVhZEFycmF5cyIsIl9fc3ByZWFkQXJyYXlzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJLaW5naHRGYWxsU29sZGllclN0YXR1cyIsInVuZGVmaW5lZCIsInMiLCJsIiwiJHoxUG9vbE1nciIsInJlcXVpcmUiLCIkejFLaW5naHRGYWxsQ29uZmlnIiwiJHoxS2luZ2h0RmFsbEVudW0iLCIkejFLaW5naHRGYWxsRGF0YU1nciIsIiR6MUtpbmdodEZhbGxNb2RsZSIsIiR6MUtpbmdodEZhbGxJdGVtSHAiLCIkejFLaW5naHRGYWxsVUlHYW1lIiwiJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YSIsIiR6MUtpbmdodEZhbGxJbnRlcmZhY2UiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX3Byb3BlcnR5IiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbFNvbGRpZXJCYXNlIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwic3BBbmkiLCJuZEhwIiwibmRWaWRlbyIsInJpZ2lkQm9keSIsImlzVmlkZW8iLCJ0aW1lIiwidmVjMl8xIiwiVmVjMiIsInZlYzJfMiIsImZpbmRJbngiLCJmaW5kTWluIiwiZmluZExlbiIsIm9ic09iaiIsIm5leHRGaW5kIiwiZmluSW5kZXgiLCJsYXN0RmluZCIsImlzQWdnIiwicHJvdG90eXBlIiwib25Mb2FkIiwibm9kZSIsImdldENvbXBvbmVudCIsIlJpZ2lkQm9keSIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJhbmltYXRpb24iLCJuYW1lIiwiS2luZ2h0RmFsbFNvbGRpZXJBbmlFbnVtIiwiQXR0YWNrIiwiZG9BdHRhY2tGaW5pc2giLCJzdGFydCIsInNldEJvZHkiLCJzZXRQYXJlbnQiLCJvdXRCdWlsZCIsImluaXREYXRhIiwiY2ZnIiwiS2luZ2h0RmFsbERhdGFNZ3IiLCJnZXRJbnN0YW5jZSIsImdldFNvbGRpZXJDZmdCeUlkIiwiYXR0YWNrUmFuZ2UiLCJBdHRhY2tSYW5nZSIsIm4iLCJnZXRDb21wb25lbnRzIiwiQ2lyY2xlQ29sbGlkZXIiLCJyYWRpdXMiLCJhZGRDb21wb25lbnQiLCJTZWFyY2hSYW5nZSIsImEiLCJpbnN0YW5jZSIsImN0ckdhbWUiLCJnYW1lRGF0YSIsInRhbGVudEFkZCIsIktpbmdodEZhbGxFbnVtVGFsZW50Q2ZnIiwiVGFsZW5UeXBlMDIiLCJvIiwibGVuZ3RoIiwiYXR0U3BlZWQiLCJBdHRhY2tJbnRlcnZhbCIsInIiLCJJRCIsInRyZWFzdXJlQWRkIiwiS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0iLCJQZXJzZXZlcmFuY2VTeW1ib2wiLCJUdXJ0bGVQb3dlciIsIkJvd21hblN0cmlrZSIsImtuaWdodEhvb2QiLCJocE1heCIsIkhlYWx0aCIsImhwIiwiaHBjdHJsIiwic2V0VHlwZSIsIktpbmdodEZhbGxHYW1lQXJteSIsIkZyaWVuZCIsInNldEhwIiwibG9hZFByZWZhYiIsIktpbmdodEZhbGxCdW5kZWxOYW1lIiwiRW5lbXkiLCJLaW5naHRGYWxsUHJlZmFiTmFtZSIsIkl0ZW1IcCIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJhdHRhY2siLCJBdHRhY2tEYW1hZ2UiLCJnZXRQb3NpdGlvbiIsInpJbmRleCIsIk1hdGgiLCJmbG9vciIsIndpblNpemUiLCJoZWlnaHQiLCJ5IiwiZG9JZGVsIiwiYWN0aXZlIiwib25DaGFuZ2VTcGVlZCIsIm9uVXBkYXRlIiwiaXNEZWFkIiwiZGVidWZmSW5mbyIsInRpbWVNYXgiLCJkZWxCdWZmSWR4IiwiZ2V0QXR0U3BlZWQiLCJzdGF0ZSIsIklkbGUiLCJjdHJQbGF5Iiwic3VidHJhY3QiLCJsZW4iLCJLaW5naHRGYWxsUGFyYW1ldGVyIiwiRm9sbG93UmFuZ2UiLCJkb01vdmUiLCJpc0ZpbmQiLCJnZXRGaW5kIiwiY2FuQXR0Iiwib25GaW5kTGlzdCIsIldhaXQiLCJNb3ZlIiwiZmluZE9iZyIsIm9ic1BvcyIsInYyIiwicGF0aExpc3QiLCJwYXRoSW5mb0xpc3QiLCJub2RlSW5kZXgiLCJwb3MiLCJwYXRoSW5kZXgiLCJpbmRleCIsInVwUGF0aCIsIm5kQWdnRmxhZyIsIkZsYWciLCJ0YWciLCJub3JtYWxpemUiLCJzY2FsZUFuZEFkZCIsImdldFNwZWVkIiwic2V0TGVmdCIsIngiLCJsYXN0UG9zIiwiZGlzdGFuY2UiLCJmaW5kT2JnMiIsInBvc2l0aW9uIiwiZ2V0V3BvcyIsImdldEJ1bGlkTGlzdCIsImdldElzV29yayIsImdldFdwb3NQaHlDb2wiLCJJbnRlcnNlY3Rpb24iLCJwb2x5Z29uQ2lyY2xlIiwiZyIsImdldE1vdmVUb1BvcyIsInB1c2giLCJvYnN0YWNsZXMiLCJjIiwiaCIsInNjYWxlWCIsInNjYWxlWSIsImRvV2FpdCIsImxpbmVhclZlbG9jaXR5IiwiWkVSTyIsInNldEFuaW1hdGlvbiIsImdldEVuZW15TGlzdCIsImRvQXR0YWNrU3RhcnQiLCJkb0F0dGFjayIsImdldEF0dGFjayIsIlN1cHByZXNzZWQiLCJOdW1iZXIiLCJnZXRQYXJhbXNDZmdCeUlkIiwiS2luZ2h0RmFsbEVudW1QYXJhbWV0ZXJDZmciLCJSZXN0cmFpbmVkQXJtcyIsIm9uQXR0YWNrZWQiLCJjdHJFZmZlY3QiLCJzaG93RGFtYWdlTnVtIiwib25Nb25zdGVyQXR0YWNrIiwiQXR0YWNrVHlwZSIsIlRhbGVuVHlwZTA0IiwiRGVhZCIsIm9uU29sZGllckRlYWQiLCJkZWxBbGxCdWZmIiwiYWRkRGllIiwiZ2V0R2FtZUJ1ZmYiLCJLaW5naHRGYWxsRW51bUJ1ZmZDZmciLCJCdWZmMTYiLCJhZGRIcFBybyIsIlBhbWVyIiwiVmVuZ2VmdWxSYWdlIiwiYWRkQnVmZiIsIktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlIiwiRGFtYWdlQWRkIiwiYWRkTnVtIiwiZnJlZU5vZGUiLCJLaW5naHRGYWxsUG9vbE5hbWUiLCJTb2xkaWVyIiwiUG9vbE1nciIsImRlbFNvbGRpZXIiLCJzZXRQYXVzZSIsInBhdXNlZCIsImdldEJ1ZmZMaXN0IiwiRGFtYWdlQ3V0IiwiZGF0YSIsInN1Yk51bSIsIkF0dGFja1NwZWVkIiwiYWRkU3BlZWQiLCJCdWZmNDQiLCJTdHJpa2VTd29yZCIsIkRhcnRpbmdUYWxpc21hbiIsIlNwZWVkIiwiTW92ZVNwZWVkIiwiQnVmZjMxIiwiQnVmZjUyIiwiV2luZHN0b3JtQm9vdHMiLCJzZXROZXciLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJzZXRQYXRoIiwic3BsaWNlIiwic2xpY2UiLCJzdGFydEFnZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIkZvbGxvd01vZGUiLCJyYW5kb20iLCJhZGQiLCJpbml0QnVmZkRhdGEiLCJhZGRUaW1lIiwiS2luZ2h0RmFsbFRpbWVUeXBlIiwiU29sZGllck1heEhwIiwiQnVmZjMyIiwiQnVmZjUzIiwiQnVmZjQ1IiwiVGFsZW5UeXBlMDMiLCJTb2xkaWVyRGFtYWdlIiwiU29sZGllckRhbWFnZTEiLCJTb2xkaWVyRGFtYWdlMiIsIkJ1ZmY0MyIsIlRhbGVuVHlwZTAxIiwiVGFsZW5UeXBlMDUiLCJ1Iiwic3BlZWQiLCJ0aW1lU2NhbGUiLCJ0eXBlIiwic3AiLCJTa2VsZXRvbiIsInRvb2x0aXAiLCJOb2RlIiwiS2luZ2h0RmFsbEludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBR0MsVUFBbkI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBR0MsY0FBdkI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDO0FBR0FELE9BQU8sQ0FBQ0UsdUJB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X2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbnZhciBjY19fc3ByZWFkQXJyYXlzID0gX19zcHJlYWRBcnJheXM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5LaW5naHRGYWxsU29sZGllclN0YXR1cyA9IHVuZGVmaW5lZDtcbnZhciBzO1xudmFyIGw7XG52YXIgJHoxUG9vbE1nciA9IHJlcXVpcmUoXCJQb29sTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbENvbmZpZ1wiKTtcbnZhciAkejFLaW5naHRGYWxsRW51bSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRW51bVwiKTtcbnZhciAkejFLaW5naHRGYWxsRGF0YU1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRGF0YU1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsTW9kbGUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbE1vZGxlXCIpO1xudmFyICR6MUtpbmdodEZhbGxJdGVtSHAgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEl0ZW1IcFwiKTtcbnZhciAkejFLaW5naHRGYWxsVUlHYW1lID0gcmVxdWlyZShcIktpbmdodEZhbGxVSUdhbWVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsR2FtZUN0cmxEYXRhXCIpO1xudmFyICR6MUtpbmdodEZhbGxJbnRlcmZhY2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEludGVyZmFjZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsU29sZGllckJhc2UgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5zcEFuaSA9IG51bGw7XG4gICAgZS5uZEhwID0gbnVsbDtcbiAgICBlLm5kVmlkZW8gPSBudWxsO1xuICAgIGUucmlnaWRCb2R5ID0gbnVsbDtcbiAgICBlLmlzVmlkZW8gPSBmYWxzZTtcbiAgICBlLnRpbWUgPSB7fTtcbiAgICBlLnZlYzJfMSA9IG5ldyBjYy5WZWMyKCk7XG4gICAgZS52ZWMyXzIgPSBuZXcgY2MuVmVjMigpO1xuICAgIGUuZmluZElueCA9IDA7XG4gICAgZS5maW5kTWluID0gLjI7XG4gICAgZS5maW5kTGVuID0gMTA7XG4gICAgZS5vYnNPYmogPSBbXTtcbiAgICBlLm5leHRGaW5kID0gZmFsc2U7XG4gICAgZS5maW5JbmRleCA9IDA7XG4gICAgZS5sYXN0RmluZCA9IGZhbHNlO1xuICAgIGUuaXNBZ2cgPSBmYWxzZTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIHRoaXMuc3BBbmkuc2V0Q29tcGxldGVMaXN0ZW5lcihmdW5jdGlvbiAoZSkge1xuICAgICAgc3dpdGNoIChlLmFuaW1hdGlvbi5uYW1lKSB7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxTb2xkaWVyQW5pRW51bS5BdHRhY2s6XG4gICAgICAgICAgdC5kb0F0dGFja0ZpbmlzaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRCb2R5KHRoaXMuc3BBbmkubm9kZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMub3V0QnVpbGQgPSB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmNmZyA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0U29sZGllckNmZ0J5SWQodCk7XG4gICAgdGhpcy5hdHRhY2tSYW5nZSA9IHRoaXMuY2ZnLkF0dGFja1JhbmdlO1xuICAgIHZhciBuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHMoY2MuQ2lyY2xlQ29sbGlkZXIpO1xuICAgIGlmIChuWzBdKSB7XG4gICAgICBuWzBdLnJhZGl1cyA9IHRoaXMuYXR0YWNrUmFuZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IHRoaXMuYXR0YWNrUmFuZ2U7XG4gICAgfVxuICAgIGlmIChuWzFdKSB7XG4gICAgICBuWzFdLnJhZGl1cyA9IHRoaXMuYXR0YWNrUmFuZ2UgKyB0aGlzLmNmZy5TZWFyY2hSYW5nZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gdGhpcy5hdHRhY2tSYW5nZSArIHRoaXMuY2ZnLlNlYXJjaFJhbmdlO1xuICAgIH1cbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIGEgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50YWxlbnRBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UYWxlbnRDZmcuVGFsZW5UeXBlMDJdO1xuICAgIGlmIChhKSB7XG4gICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGEubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgaSArPSBhW29dWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmF0dFNwZWVkID0gdGhpcy5jZmcuQXR0YWNrSW50ZXJ2YWwgKiBpO1xuICAgIHZhciByID0gMTtcbiAgICB2YXIgcyA9IDE7XG4gICAgc3dpdGNoICh0aGlzLmNmZy5JRCkge1xuICAgICAgY2FzZSA5MDAwMTpcbiAgICAgICAgaWYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlBlcnNldmVyYW5jZVN5bWJvbF0pIHtcbiAgICAgICAgICBzICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlBlcnNldmVyYW5jZVN5bWJvbF1bMF07XG4gICAgICAgICAgciArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5QZXJzZXZlcmFuY2VTeW1ib2xdWzFdO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5MDAwMjpcbiAgICAgICAgaWYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlR1cnRsZVBvd2VyXSkge1xuICAgICAgICAgIHMgKz0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uVHVydGxlUG93ZXJdWzBdO1xuICAgICAgICAgIHIgKz0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uVHVydGxlUG93ZXJdWzFdO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5MDAwMzpcbiAgICAgICAgaWYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLkJvd21hblN0cmlrZV0pIHtcbiAgICAgICAgICBzICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLkJvd21hblN0cmlrZV1bMF07XG4gICAgICAgICAgciArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5Cb3dtYW5TdHJpa2VdWzFdO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5MDAwNDpcbiAgICAgICAgaWYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLmtuaWdodEhvb2RdKSB7XG4gICAgICAgICAgcyArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5rbmlnaHRIb29kXVswXTtcbiAgICAgICAgICByICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLmtuaWdodEhvb2RdWzFdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuaHBNYXggPSB0aGlzLmNmZy5IZWFsdGggKiByO1xuICAgIHRoaXMuaHAgPSB0aGlzLmhwTWF4O1xuICAgIGlmICh0aGlzLmhwY3RybCkge1xuICAgICAgdGhpcy5ocGN0cmwuc2V0VHlwZSgkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbEdhbWVBcm15LkZyaWVuZCk7XG4gICAgICB0aGlzLmhwY3RybC5zZXRIcCh0aGlzLmhwLCB0aGlzLmhwTWF4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkUHJlZmFiKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEJ1bmRlbE5hbWUuRW5lbXksICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFByZWZhYk5hbWUuSXRlbUhwLCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbjtcbiAgICAgICAgKG4gPSBjYy5pbnN0YW50aWF0ZSh0KSkuc2V0UGFyZW50KGUubmRIcCk7XG4gICAgICAgIG4uc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgIGUuaHBjdHJsID0gbi5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEl0ZW1IcC5kZWZhdWx0KTtcbiAgICAgICAgZS5ocGN0cmwuc2V0VHlwZSgkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbEdhbWVBcm15LkZyaWVuZCk7XG4gICAgICAgIGUuaHBjdHJsLnNldEhwKGUuaHAsIGUuaHBNYXgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrID0gdGhpcy5jZmcuQXR0YWNrRGFtYWdlICogcztcbiAgICB0aGlzLnRpbWUgPSB7fTtcbiAgICB0aGlzLnRpbWVbbC5BdHRhY2tdID0gMDtcbiAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHRoaXMubm9kZS56SW5kZXggPSBNYXRoLmZsb29yKGNjLndpblNpemUuaGVpZ2h0KSAtIE1hdGguZmxvb3IodGhpcy52ZWMyXzEueSk7XG4gICAgdGhpcy5kb0lkZWwoKTtcbiAgICB0aGlzLnJpZ2lkQm9keS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMub25DaGFuZ2VTcGVlZCgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoIXRoaXMuaXNEZWFkKCkpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSk7XG4gICAgICB0aGlzLm5vZGUuekluZGV4ID0gTWF0aC5mbG9vcihjYy53aW5TaXplLmhlaWdodCkgLSBNYXRoLmZsb29yKHRoaXMudmVjMl8xLnkpO1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0aGlzLmRlYnVmZkluZm8ubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmRlYnVmZkluZm9bbl07XG4gICAgICAgIGlmICgtMSAhPSBpLnRpbWUpIHtcbiAgICAgICAgICBpLnRpbWUgKz0gdDtcbiAgICAgICAgICBpZiAoaS50aW1lID49IGkudGltZU1heCkge1xuICAgICAgICAgICAgdGhpcy5kZWxCdWZmSWR4KG4pLCBuLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAtMSAhPSB0aGlzLnRpbWVbbC5BdHRhY2tdICYmICh0aGlzLnRpbWVbbC5BdHRhY2tdICs9IHQgKiB0aGlzLmdldEF0dFNwZWVkKCkpO1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2Ugcy5JZGxlOlxuICAgICAgICAgIGlmICh0aGlzLmlzQWdnKSB7XG4gICAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5jdHJQbGF5Lm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzIpO1xuICAgICAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdCh0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzIsIHRoaXMudmVjMl8xKTtcbiAgICAgICAgICAgIHRoaXMudmVjMl8yLmxlbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMudmVjMl8yLmxlbigpIDw9ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Gb2xsb3dSYW5nZSAvIDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kb01vdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0RmluZCA9IHRoaXMuaXNGaW5kKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0RmluZCkge1xuICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0RmluZCgpO1xuICAgICAgICAgICAgICBpZiAoYSAmJiBhLmNhbkF0dCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVtsLkF0dGFja10gPj0gMSAmJiB0aGlzLm9uRmluZExpc3QoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvTW92ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHMuV2FpdDpcbiAgICAgICAgICB0aGlzLnRpbWVbbC5BdHRhY2tdID49IDEgJiYgdGhpcy5vbkZpbmRMaXN0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugcy5Nb3ZlOlxuICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZS5pc0FnZykge1xuICAgICAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5jdHJQbGF5Lm5vZGUuZ2V0UG9zaXRpb24oZS52ZWMyXzIpO1xuICAgICAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KGUudmVjMl8yLCBlLnZlYzJfMiwgZS52ZWMyXzEpO1xuICAgICAgICAgICAgICBpZiAoZS52ZWMyXzIubGVuKCkgPD0gJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUGFyYW1ldGVyLkZvbGxvd1JhbmdlIC8gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIGUuZG9JZGVsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8g5qOA5rWL5piv5ZCm6KKr5bu6562R5Y2h5L2P77yM6K6h566X57uV6KGM54K5XG4gICAgICAgICAgICAgIGUuZmluZE9iZyh0KTtcbiAgICAgICAgICAgICAgaWYgKGUub2JzUG9zKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWI6LWw5Yiw57uV6KGM54K577yM57uV6L+H6Zqc56KN54mpXG4gICAgICAgICAgICAgICAgZS52ZWMyXzIgPSBjYy52MihlLm9ic1Bvcyk7XG4gICAgICAgICAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdChlLnZlYzJfMiwgZS52ZWMyXzIsIGUudmVjMl8xKTtcbiAgICAgICAgICAgICAgICBpZiAoZS52ZWMyXzIubGVuKCkgPD0gMTUpIHtcbiAgICAgICAgICAgICAgICAgIGUub2JzUG9zID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIGUub2JzT2JqID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUucGF0aExpc3QucGF0aEluZm9MaXN0W2UucGF0aExpc3Qubm9kZUluZGV4XSkge1xuICAgICAgICAgICAgICAgIGUudmVjMl8yID0gY2MudjIoZS5wYXRoTGlzdC5wYXRoSW5mb0xpc3RbZS5wYXRoTGlzdC5ub2RlSW5kZXhdLnBvcyk7XG4gICAgICAgICAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdChlLnZlYzJfMiwgZS52ZWMyXzIsIGUudmVjMl8xKTtcbiAgICAgICAgICAgICAgICBpZiAoZS52ZWMyXzIubGVuKCkgPD0gMTUpIHtcbiAgICAgICAgICAgICAgICAgIGUucGF0aExpc3Qubm9kZUluZGV4KyssIGUucGF0aExpc3Qubm9kZUluZGV4ID49IGUucGF0aExpc3QucGF0aEluZm9MaXN0Lmxlbmd0aCB8fCAoZS5wYXRoTGlzdC5wYXRoSW5kZXggPSBlLnBhdGhMaXN0LnBhdGhJbmZvTGlzdFtlLnBhdGhMaXN0Lm5vZGVJbmRleF0uaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnVwUGF0aCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUucGF0aExpc3QpIHtcbiAgICAgICAgICAgICAgaWYgKCFlLnBhdGhMaXN0LnBhdGhJbmZvTGlzdFtlLnBhdGhMaXN0Lm5vZGVJbmRleF0pIHtcbiAgICAgICAgICAgICAgICBlLnBhdGhMaXN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCBlLmRvSWRlbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIOajgOa1i+aYr+WQpuiiq+W7uuetkeWNoeS9j++8jOiuoeeul+e7leihjOeCuVxuICAgICAgICAgICAgICBlLmZpbmRPYmcodCk7XG4gICAgICAgICAgICAgIGlmIChlLm9ic1Bvcykge1xuICAgICAgICAgICAgICAgIC8vIOWFiOi1sOWIsOe7leihjOeCue+8jOe7lei/h+manOeijeeJqVxuICAgICAgICAgICAgICAgIGUudmVjMl8yID0gY2MudjIoZS5vYnNQb3MpO1xuICAgICAgICAgICAgICAgIGNjLlZlYzIuc3VidHJhY3QoZS52ZWMyXzIsIGUudmVjMl8yLCBlLnZlYzJfMSk7XG4gICAgICAgICAgICAgICAgaWYgKGUudmVjMl8yLmxlbigpIDw9IDE1KSB7XG4gICAgICAgICAgICAgICAgICBlLm9ic1BvcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICBlLm9ic09iaiA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnZlYzJfMiA9IGNjLnYyKGUucGF0aExpc3QucGF0aEluZm9MaXN0W2UucGF0aExpc3Qubm9kZUluZGV4XS5wb3MpO1xuICAgICAgICAgICAgICAgIGNjLlZlYzIuc3VidHJhY3QoZS52ZWMyXzIsIGUudmVjMl8yLCBlLnZlYzJfMSk7XG4gICAgICAgICAgICAgICAgaWYgKGUudmVjMl8yLmxlbigpIDw9IDIwKSB7XG4gICAgICAgICAgICAgICAgICBlLnBhdGhMaXN0Lm5vZGVJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgaWYgKGUucGF0aExpc3Qubm9kZUluZGV4ID49IGUucGF0aExpc3QucGF0aEluZm9MaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBlLnBhdGhMaXN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5uZEFnZ0ZsYWc7XG4gICAgICAgICAgICAgICAgICAgIG4uRmxhZy0tO1xuICAgICAgICAgICAgICAgICAgICBuLkZsYWcgfHwgKG4uYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCBlLmRvSWRlbCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZS5wYXRoTGlzdC5wYXRoSW5kZXggPSBlLnBhdGhMaXN0LnBhdGhJbmZvTGlzdFtlLnBhdGhMaXN0Lm5vZGVJbmRleF0uaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgaSA9IGUuZ2V0RmluZCgpO1xuICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIGlmIChpLmNhbkF0dCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGUudGltZVtsLkF0dGFja10gPj0gMSA/IGUub25GaW5kTGlzdCgpIDogZS5kb0lkZWwoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkudGFnLm5vZGUuZ2V0UG9zaXRpb24oZS52ZWMyXzIpO1xuICAgICAgICAgICAgICAgIGNjLlZlYzIuc3VidHJhY3QoZS52ZWMyXzIsIGUudmVjMl8yLCBlLnZlYzJfMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5sYXN0RmluZCA9IGUuaXNGaW5kKCk7XG4gICAgICAgICAgICAgICAgZS5sYXN0RmluZCB8fCBlLmRvSWRlbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5WZWMyLm5vcm1hbGl6ZShlLnZlYzJfMiwgZS52ZWMyXzIpO1xuICAgICAgICAgICAgY2MuVmVjMi5zY2FsZUFuZEFkZChlLnZlYzJfMSwgZS52ZWMyXzEsIGUudmVjMl8yLCBlLmdldFNwZWVkKCkgKiB0KTtcbiAgICAgICAgICAgIGUuc2V0TGVmdChlLnZlYzJfMi54IDwgMCk7XG4gICAgICAgICAgICBlLm5vZGUuc2V0UG9zaXRpb24oZS52ZWMyXzEpO1xuICAgICAgICAgIH0pKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZmluZE9iZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKCF0aGlzLmxhc3RQb3MpIHtcbiAgICAgIHRoaXMubGFzdFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5maW5kSW54ID0gMDtcbiAgICB9XG4gICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICBpZiAoIShjYy5WZWMyLmRpc3RhbmNlKHRoaXMudmVjMl8xLCB0aGlzLmxhc3RQb3MpIDw9IHRoaXMuZmluZExlbikpIHtcbiAgICAgIHRoaXMubGFzdFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgcmV0dXJuIHZvaWQgKHRoaXMuZmluZElueCA9IDApO1xuICAgIH1cbiAgICB0aGlzLmZpbmRJbnggKz0gdDtcbiAgICBpZiAodGhpcy5maW5kSW54ID49IHRoaXMuZmluZE1pbikge1xuICAgICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcbiAgICAgIHRoaXMuZmluZE9iZzIoKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5maW5kT2JnMiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLmdldFdwb3MoKSxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9O1xuICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0QnVsaWRMaXN0KCk7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgICBpZiAoKGwgPSBlW25dKS5nZXRJc1dvcmsoKSkge1xuICAgICAgICB2YXIgaSA9IGwuZ2V0V3Bvc1BoeUNvbCgpO1xuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGkubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICB2YXIgbyA9IGlbYV07XG4gICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2x5Z29uQ2lyY2xlKG8sIHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAoKGcgPSBsLmdldE1vdmVUb1Bvcyh0aGlzLmdldFdwb3MoKSwgdGhpcy5vYnNPYmopKSAmJiAodGhpcy5vYnNQb3MgPSBnLnBvcywgdGhpcy5vYnNPYmoucHVzaChnLm5vZGUpLCB0aGlzLm5leHRGaW5kID0gZmFsc2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHIgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5vYnN0YWNsZXM7XG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCByLmxlbmd0aDsgcysrKSB7XG4gICAgICB2YXIgbDtcbiAgICAgIHZhciBjID0gKGwgPSByW3NdKS5nZXRXcG9zUGh5Q29sKCk7XG4gICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGMubGVuZ3RoOyBoKyspIHtcbiAgICAgICAgdmFyIGc7XG4gICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucG9seWdvbkNpcmNsZShjW2hdLCB0KSkge1xuICAgICAgICAgIHJldHVybiB2b2lkICgoZyA9IGwuZ2V0TW92ZVRvUG9zKHRoaXMuZ2V0V3BvcygpLCB0aGlzLm9ic09iaikpICYmICh0aGlzLm9ic1BvcyA9IGcucG9zLCB0aGlzLm9ic09iai5wdXNoKGcubm9kZSksIHRoaXMubmV4dEZpbmQgPSB0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZWZ0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLnNwQW5pLm5vZGUuc2NhbGVYID0gdCA/IC10aGlzLnNwQW5pLm5vZGUuc2NhbGVZIDogdGhpcy5zcEFuaS5ub2RlLnNjYWxlWTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRvV2FpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0YXRlID0gcy5XYWl0O1xuICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xuICAgIHRoaXMuc3BBbmkuc2V0QW5pbWF0aW9uKDAsICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsU29sZGllckFuaUVudW0uSWRsZSwgdHJ1ZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5kb0lkZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHMuSWRsZTtcbiAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLlZlYzIuWkVSTztcbiAgICB0aGlzLnNwQW5pLnNldEFuaW1hdGlvbigwLCAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbFNvbGRpZXJBbmlFbnVtLklkbGUsIHRydWUpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9Nb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3RhdGUgPSBzLk1vdmU7XG4gICAgdGhpcy5zcEFuaS5zZXRBbmltYXRpb24oMCwgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxTb2xkaWVyQW5pRW51bS5Nb3ZlLCB0cnVlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmlzRmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgcmV0dXJuICEhdGhpcy5pc0FnZyB8fCAodGhpcy5maW5JbmRleCsrLCB0aGlzLmZpbkluZGV4ICUgMyAhPSAwID8gdGhpcy5sYXN0RmluZCA6ICh0aGlzLmZpbkluZGV4ID0gMCwgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8xKSwgISFmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEVuZW15TGlzdCgpO1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciBpID0gZVtuXTtcbiAgICAgICAgaWYgKCFpLmlzRGVhZCgpICYmIChpLm5vZGUuZ2V0UG9zaXRpb24odC52ZWMyXzIpLCBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpLCB0LnZlYzJfMi5sZW4oKSA8PSB0LmF0dGFja1JhbmdlICsgdC5jZmcuU2VhcmNoUmFuZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KCkpKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEZpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRFbmVteUxpc3QoKTtcbiAgICB2YXIgZSA9IG51bGw7XG4gICAgdmFyIG4gPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhID0gdFtpXTtcbiAgICAgIGlmICghYS5pc0RlYWQoKSkge1xuICAgICAgICBhLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzIpO1xuICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHRoaXMudmVjMl8yLCB0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzEpO1xuICAgICAgICBpZiAodGhpcy52ZWMyXzIubGVuKCkgPD0gdGhpcy5hdHRhY2tSYW5nZSArIHRoaXMuY2ZnLlNlYXJjaFJhbmdlICYmICgtMSA9PSBuIHx8IHRoaXMudmVjMl8yLmxlbigpIDwgbikpIHtcbiAgICAgICAgICBlID0gYSwgbiA9IHRoaXMudmVjMl8yLmxlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWc6IGUsXG4gICAgICAgIGNhbkF0dDogbiA8PSB0aGlzLmF0dGFja1JhbmdlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkZpbmRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHJldHVybiAhIWZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0RW5lbXlMaXN0KCk7XG4gICAgICB2YXIgbiA9IG51bGw7XG4gICAgICB2YXIgaSA9IC0xO1xuICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgIHZhciBvID0gZVthXTtcbiAgICAgICAgaWYgKCFvLmlzRGVhZCgpKSB7XG4gICAgICAgICAgby5ub2RlLmdldFBvc2l0aW9uKHQudmVjMl8yKTtcbiAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpO1xuICAgICAgICAgIGlmICh0LnZlYzJfMi5sZW4oKSA8PSB0LmF0dGFja1JhbmdlICYmICgtMSA9PSBpIHx8IHQudmVjMl8yLmxlbigpIDwgaSkpIHtcbiAgICAgICAgICAgIGkgPSB0LnZlYzJfMi5sZW4oKSwgbiA9IG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbjtcbiAgICB9KCkgJiYgKHRoaXMuZG9BdHRhY2tTdGFydCgpLCB0cnVlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRvQXR0YWNrU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHMuQXR0YWNrO1xuICAgIHRoaXMuc3BBbmkuc2V0QW5pbWF0aW9uKDAsICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsU29sZGllckFuaUVudW0uQXR0YWNrLCBmYWxzZSk7XG4gICAgdGhpcy50aW1lW2wuQXR0YWNrXSA9IC0xO1xuICAgIHRoaXMuZG9BdHRhY2soKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRvQXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnRpbWVbbC5BdHRhY2tdID0gMDtcbiAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHZhciBlID0gdGhpcy5nZXRBdHRhY2soKTtcbiAgICB2YXIgbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0RW5lbXlMaXN0KCk7XG4gICAgICB2YXIgbiA9IG51bGw7XG4gICAgICB2YXIgaSA9IC0xO1xuICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgIHZhciBvID0gZVthXTtcbiAgICAgICAgaWYgKCFvLmlzRGVhZCgpKSB7XG4gICAgICAgICAgby5ub2RlLmdldFBvc2l0aW9uKHQudmVjMl8yKTtcbiAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpO1xuICAgICAgICAgIGlmICh0LnZlYzJfMi5sZW4oKSA8PSB0LmF0dGFja1JhbmdlICYmICgtMSA9PSBpIHx8IHQudmVjMl8yLmxlbigpIDwgaSkpIHtcbiAgICAgICAgICAgIG4gPSBvLCBpID0gdC52ZWMyXzIubGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbjtcbiAgICB9KCk7XG4gICAgaWYgKG4pIHtcbiAgICAgIG4ubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMik7XG4gICAgICB0aGlzLmNmZy5TdXBwcmVzc2VkID09IG4uY2ZnLklEICYmIChlICo9IE51bWJlcigkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFBhcmFtc0NmZ0J5SWQoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1QYXJhbWV0ZXJDZmcuUmVzdHJhaW5lZEFybXMpKSk7XG4gICAgICBuLm9uQXR0YWNrZWQoZSk7XG4gICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyRWZmZWN0LnNob3dEYW1hZ2VOdW0obi5ub2RlLmdldFBvc2l0aW9uKCksIGUpO1xuICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckVmZmVjdC5vbk1vbnN0ZXJBdHRhY2sobi5ub2RlLmdldFBvc2l0aW9uKCksIFwieGJfZ2pcIik7XG4gICAgICBjYy5WZWMyLnN1YnRyYWN0KHRoaXMudmVjMl8yLCB0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzEpO1xuICAgICAgdGhpcy5zZXRMZWZ0KHRoaXMudmVjMl8yLnggPCAwKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5kb0F0dGFja0ZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRvSWRlbCgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25BdHRhY2tlZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKCF0aGlzLmlzRGVhZCgpKSB7XG4gICAgICB2YXIgZSA9IDE7XG4gICAgICBpZiAoMSA9PSB0aGlzLmNmZy5BdHRhY2tUeXBlKSB7XG4gICAgICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudGFsZW50QWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFsZW50Q2ZnLlRhbGVuVHlwZTA0XTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGUgLT0gbltpXVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuaHAgLT0gdCAqIGU7XG4gICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzLkRlYWQ7XG4gICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJFZmZlY3Qub25Tb2xkaWVyRGVhZCh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSwgLjI1KTtcbiAgICAgICAgdGhpcy5kZWxBbGxCdWZmKCk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdXRCdWlsZC5hZGREaWUodGhpcyk7XG4gICAgICAgIHZhciBhID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYxNik7XG4gICAgICAgIGEgJiYgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuY3RyUGxheS5hZGRIcFBybyhhLlBhbWVyWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlZlbmdlZnVsUmFnZV0gJiYgdGhpcy5hZGRCdWZmKCR6MUtpbmdodEZhbGxJbnRlcmZhY2UuS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUuRGFtYWdlQWRkLCB7XG4gICAgICAgICAgYWRkTnVtOiAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5WZW5nZWZ1bFJhZ2VdWzBdLFxuICAgICAgICAgIHRpbWU6IDJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmhwY3RybC5zZXRIcCh0aGlzLmhwLCB0aGlzLmhwTWF4KTtcbiAgICAgIHJldHVybiB0ICogZTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5mcmVlTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBvb2xOYW1lLlNvbGRpZXIgKyBcIl9cIiArIHRoaXMuY2ZnLklEO1xuICAgICR6MVBvb2xNZ3IuUG9vbE1nci5nZXRJbnN0YW5jZSgpLmZyZWVOb2RlKHQsIHRoaXMubm9kZSk7XG4gICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZGVsU29sZGllcih0aGlzKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmlzRGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PSBzLkRlYWQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRQYXVzZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XG4gICAgdGhpcy5zcEFuaS5wYXVzZWQgPSB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0QXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcy5hdHRhY2s7XG4gICAgdmFyIGUgPSAxO1xuICAgIHZhciBuID0gdGhpcy5nZXRCdWZmTGlzdCgkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlLkRhbWFnZUN1dCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlIC09IG5baV0uZGF0YS5zdWJOdW07XG4gICAgfVxuICAgIHZhciBhID0gdGhpcy5nZXRCdWZmTGlzdCgkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlLkRhbWFnZUFkZCk7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGUgKz0gYVtpXS5kYXRhLmFkZE51bTtcbiAgICB9XG4gICAgZSA8IDAgJiYgKGUgPSAwKTtcbiAgICByZXR1cm4gdCAqIGU7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRBdHRTcGVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXMuYXR0U3BlZWQ7XG4gICAgdmFyIGUgPSAxO1xuICAgIHZhciBuID0gdGhpcy5nZXRCdWZmTGlzdCgkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlLkF0dGFja1NwZWVkKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGUgKz0gbltpXS5kYXRhLmFkZFNwZWVkO1xuICAgIH1cbiAgICB2YXIgYSA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDQpO1xuICAgIGEgJiYgKGUgKz0gYS5QYW1lclswXSk7XG4gICAgc3dpdGNoICh0aGlzLmNmZy5BdHRhY2tUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlN0cmlrZVN3b3JkXSAmJiAoZSArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5TdHJpa2VTd29yZF1bMF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uRGFydGluZ1RhbGlzbWFuXSAmJiAoZSArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5EYXJ0aW5nVGFsaXNtYW5dWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHQgKiBlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0U3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNmZy5TcGVlZDtcbiAgICB2YXIgZSA9IDE7XG4gICAgdmFyIG4gPSB0aGlzLmdldEJ1ZmZMaXN0KCR6MUtpbmdodEZhbGxJbnRlcmZhY2UuS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUuTW92ZVNwZWVkKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGUgLT0gbltpXS5kYXRhLnN1Yk51bTtcbiAgICB9XG4gICAgdmFyIGEgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjMxKTtcbiAgICBhICYmIChlICs9IGEuUGFtZXJbMF0pO1xuICAgIHZhciBvID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmY0NCk7XG4gICAgbyAmJiAoZSAtPSBvLlBhbWVyWzFdKTtcbiAgICB2YXIgciA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNTIpO1xuICAgIHIgJiYgKGUgKz0gci5QYW1lclswXSk7XG4gICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uV2luZHN0b3JtQm9vdHNdICYmIChlICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLldpbmRzdG9ybUJvb3RzXVswXSk7XG4gICAgcmV0dXJuIHQgKiBlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYWRkSHBQcm8gPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICghdGhpcy5pc0RlYWQoKSkge1xuICAgICAgdGhpcy5ocCArPSB0ICogdGhpcy5ocE1heDtcbiAgICAgIHRoaXMuaHAgPiB0aGlzLmhwTWF4ICYmICh0aGlzLmhwID0gdGhpcy5ocE1heCk7XG4gICAgICB0aGlzLmhwY3RybC5zZXRIcCh0aGlzLmhwLCB0aGlzLmhwTWF4KTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXROZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQ7XG4gICAgdGhpcy5ocCA9IHRoaXMuaHBNYXg7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLmhwY3RybCkgfHwgdW5kZWZpbmVkID09PSB0IHx8IHQuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5wYXRoTGlzdCA9IG51bGw7XG4gICAgdGhpcy5pc0FnZyA9IGZhbHNlO1xuICAgIHRoaXMudGltZVtsLkF0dGFja10gPSAwO1xuICAgIHRoaXMuZG9JZGVsKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRXcG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRQYXRoID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICB2YXIgbjtcbiAgICB0aGlzLmlzQWdnID0gZTtcbiAgICBpZiAodGhpcy5wYXRoTGlzdCkge1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGEgPSAwO1xuICAgICAgZG8ge1xuICAgICAgICBpZiAodGhpcy5wYXRoTGlzdC5wYXRoSW5mb0xpc3RbaV0uaW5kZXggPT0gdFthXS5pbmRleCkge1xuICAgICAgICAgIChuID0gdGhpcy5wYXRoTGlzdC5wYXRoSW5mb0xpc3QpLnNwbGljZS5hcHBseShuLCBjY19fc3ByZWFkQXJyYXlzKFtpICsgMSwgdGhpcy5wYXRoTGlzdC5wYXRoSW5mb0xpc3QubGVuZ3RoIC0gaSArIDFdLCB0LnNsaWNlKGEgKyAxKSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhdGhMaXN0LnBhdGhJbmZvTGlzdFtpXS5pbmRleCA8IHRbYV0uaW5kZXgpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYSsrO1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlIChpIDwgdGhpcy5wYXRoTGlzdC5wYXRoSW5mb0xpc3QubGVuZ3RoICYmIGEgPCB0Lmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMucGF0aExpc3QucGF0aEluZm9MaXN0Lmxlbmd0aDsgbysrKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdGhMaXN0LnBhdGhJbmZvTGlzdFtvXS5pbmRleCA9PSB0aGlzLnBhdGhMaXN0LnBhdGhJbmRleCkge1xuICAgICAgICAgIHRoaXMucGF0aExpc3QucGF0aEluZm9MaXN0LnNwbGljZSgwLCBvKTtcbiAgICAgICAgICB0aGlzLnBhdGhMaXN0Lm5vZGVJbmRleCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydEFnZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKHRoaXMuaXNEZWFkKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5pc0FnZyA9IHRydWU7XG4gICAgdGhpcy5wYXRoTGlzdCA9IHtcbiAgICAgIG5vZGVJbmRleDogMCxcbiAgICAgIHBhdGhJbmRleDogdC5pbmRleCxcbiAgICAgIHBhdGhJbmZvTGlzdDogW0pTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodCkpXVxuICAgIH07XG4gICAgdGhpcy5vYnNQb3MgPSBudWxsO1xuICAgIHRoaXMub2JzT2JqID0gW107XG4gICAgdGhpcy5sYXN0UG9zID0gbnVsbDtcbiAgICBzd2l0Y2ggKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Gb2xsb3dNb2RlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBlID0gY2MudjIoKTtcbiAgICAgICAgY2MuVmVjMi5yYW5kb20oZSwgMjUpO1xuICAgICAgICBjYy5WZWMyLmFkZChlLCBlLCB0aGlzLnBhdGhMaXN0LnBhdGhJbmZvTGlzdFswXS5wb3MpO1xuICAgICAgICB0aGlzLnBhdGhMaXN0LnBhdGhJbmZvTGlzdFswXS5wb3MgPSBlO1xuICAgIH1cbiAgICB0aGlzLmRvTW92ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUudXBQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UGF0aCgkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5wYXRoTGlzdCwgdGhpcy5pc0FnZyk7XG4gICAgdGhpcy5kb01vdmUoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRCdWZmRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IDE7XG4gICAgdGhpcy5ocE1heCA9IHRoaXMuY2ZnLkhlYWx0aDtcbiAgICB2YXIgZSA9IDE7XG4gICAgZSArPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5hZGRUaW1lWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbFRpbWVUeXBlLlNvbGRpZXJNYXhIcF0gfHwgMDtcbiAgICB2YXIgbiA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMzIpO1xuICAgIG4gJiYgKGUgKz0gbi5QYW1lclswXSk7XG4gICAgdmFyIGkgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjUzKTtcbiAgICBpICYmIChlICs9IGkuUGFtZXJbMF0pO1xuICAgIGlmICgyID09IHRoaXMuY2ZnLkF0dGFja1R5cGUpIHtcbiAgICAgIHZhciBhID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmY0NSk7XG4gICAgICBpZiAoYSkge1xuICAgICAgICB0ICs9IGEuUGFtZXJbMF07XG4gICAgICAgIGUgLT0gYS5QYW1lclsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG8gPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50YWxlbnRBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UYWxlbnRDZmcuVGFsZW5UeXBlMDNdO1xuICAgIGlmIChvKSB7XG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IG8ubGVuZ3RoOyByKyspIHtcbiAgICAgICAgZSArPSBvW3JdWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmhwTWF4ICo9IGU7XG4gICAgdGhpcy5ocCA9IHRoaXMuaHBNYXg7XG4gICAgdGhpcy5ocGN0cmwgJiYgdGhpcy5ocGN0cmwuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gICAgdGhpcy5hdHRhY2sgPSB0aGlzLmNmZy5BdHRhY2tEYW1hZ2U7XG4gICAgdmFyIHMgPSAxO1xuICAgIHMgKz0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuYWRkVGltZVskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxUaW1lVHlwZS5Tb2xkaWVyRGFtYWdlXSB8fCAwO1xuICAgIHMgKz0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuYWRkVGltZVskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxUaW1lVHlwZS5Tb2xkaWVyRGFtYWdlMV0gfHwgMDtcbiAgICBzICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmFkZFRpbWVbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsVGltZVR5cGUuU29sZGllckRhbWFnZTJdIHx8IDA7XG4gICAgdmFyIGwgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjQzKTtcbiAgICBsICYmIChzICs9IGwuUGFtZXJbMF0pO1xuICAgIHZhciBjID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudGFsZW50QWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFsZW50Q2ZnLlRhbGVuVHlwZTAxXTtcbiAgICBpZiAoYykge1xuICAgICAgZm9yIChyID0gMDsgciA8IGMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgcyArPSBjW3JdWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmF0dGFjayAqPSBzO1xuICAgIGlmICgyID09IHRoaXMuY2ZnLkF0dGFja1R5cGUpIHtcbiAgICAgIHZhciBoID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudGFsZW50QWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFsZW50Q2ZnLlRhbGVuVHlwZTA1XTtcbiAgICAgIGlmIChoKSB7XG4gICAgICAgIGZvciAociA9IDA7IHIgPCBoLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgdCArPSBoW3JdWzBdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrUmFuZ2UgPSB0aGlzLmNmZy5BdHRhY2tSYW5nZSAqIHQ7XG4gICAgdmFyIHUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhjYy5DaXJjbGVDb2xsaWRlcik7XG4gICAgaWYgKHVbMF0pIHtcbiAgICAgIHVbMF0ucmFkaXVzID0gdGhpcy5hdHRhY2tSYW5nZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gdGhpcy5hdHRhY2tSYW5nZTtcbiAgICB9XG4gICAgaWYgKHVbMV0pIHtcbiAgICAgIHVbMV0ucmFkaXVzID0gdGhpcy5hdHRhY2tSYW5nZSArIHRoaXMuY2ZnLlNlYXJjaFJhbmdlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSB0aGlzLmF0dGFja1JhbmdlICsgdGhpcy5jZmcuU2VhcmNoUmFuZ2U7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25DaGFuZ2VTcGVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5zcGVlZDtcbiAgICB0aGlzLnNwQW5pLnRpbWVTY2FsZSA9IHQ7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBzcC5Ta2VsZXRvbixcbiAgICB0b29sdGlwOiBcIkJvZHkgcGFydHNcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzcEFuaVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkhQIGJhciBub2RlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRIcFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkhQIGJhciBub2RlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRWaWRlb1wiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxS2luZ2h0RmFsbEludGVyZmFjZS5LaW5naHRGYWxsSW50ZXJmYWNlKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsU29sZGllckJhc2U7XG4oZnVuY3Rpb24gKHQpIHtcbiAgdFt0LklkbGUgPSAwXSA9IFwiSWRsZVwiO1xuICB0W3QuTW92ZSA9IDFdID0gXCJNb3ZlXCI7XG4gIHRbdC5BdHRhY2sgPSAyXSA9IFwiQXR0YWNrXCI7XG4gIHRbdC5XYWl0ID0gM10gPSBcIldhaXRcIjtcbiAgdFt0LkRlYWQgPSA0XSA9IFwiRGVhZFwiO1xufSkocyA9IGV4cG9ydHMuS2luZ2h0RmFsbFNvbGRpZXJTdGF0dXMgfHwgKGV4cG9ydHMuS2luZ2h0RmFsbFNvbGRpZXJTdGF0dXMgPSB7fSkpO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHQuQXR0YWNrID0gXCJBdHRhY2tcIjtcbn0pKGwgfHwgKGwgPSB7fSkpOyJdfQ==