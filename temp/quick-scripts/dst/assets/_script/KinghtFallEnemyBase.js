
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallEnemyBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a920bUjyENDCrrBEyfvc7tv', 'KinghtFallEnemyBase');
// _script/KinghtFallEnemyBase.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallEnemyStatus = undefined;
var r;
var s;

var $z1PoolMgr = require("PoolMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallMissionData = require("KinghtFallMissionData");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallItemHp = require("KinghtFallItemHp");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallInterface = require("KinghtFallInterface");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallEnemyBase = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.spAni = null;
    e.ndHp = null;
    e.rigidBody = null;
    e.time = {};
    e.vec2_1 = new cc.Vec2();
    e.vec2_2 = new cc.Vec2();
    e.finIndex = 0;
    e.lastFind = false;
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
          break;

        case $z1KinghtFallModle.KinghtFallSoldierAniEnum.Die:
          t.freeNode();
      }
    });
  };

  _ctor.prototype.start = function () {
    this.setBody(this.spAni.node);
  };

  _ctor.prototype.initData = function (t, e) {
    var n = this;
    this.cfg = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getSoldierCfgById(t);
    this.bornInfo = $z1KinghtFallUIGame["default"].instance.ctrGame.setPath(e);
    var i = this.node.getComponents(cc.CircleCollider);

    if (i[0]) {
      i[0].radius = this.cfg.AttackRange;
    } else {
      this.node.addComponent(cc.CircleCollider).radius = this.cfg.AttackRange;
    }

    if (i[1]) {
      i[1].radius = this.cfg.AttackRange + this.cfg.SearchRange;
    } else {
      this.node.addComponent(cc.CircleCollider).radius = this.cfg.AttackRange + this.cfg.SearchRange;
    }

    this.hpMax = this.cfg.Health * $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getHpAdd(this.cfg.ID);
    this.hp = this.hpMax;

    if (this.hpctrl) {
      this.hpctrl.setType($z1KinghtFallModle.KinghtFallGameArmy.Enemy);
      this.hpctrl.setHp(this.hp, this.hpMax);
    } else {
      this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.Enemy, $z1KinghtFallConfig.KinghtFallPrefabName.ItemHp, function (t) {
        var e;
        (e = cc.instantiate(t)).setParent(n.ndHp);
        e.setPosition(0, 0, 0);
        n.hpctrl = e.getComponent($z1KinghtFallItemHp["default"]);
        n.hpctrl.setType($z1KinghtFallModle.KinghtFallGameArmy.Enemy);
        n.hpctrl.setHp(n.hp, n.hpMax);
        n.ndHp.childrenCount > 1 && console.error("HP node has multiple children");
      });
    }

    this.attack = Math.round(this.cfg.AttackDamage * $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getAttAdd(this.cfg.ID));
    this.time = {};
    this.time[s.Attack] = 0;
    this.node.getPosition(this.vec2_1);
    this.node.zIndex = Math.floor(cc.winSize.height) - Math.floor(this.vec2_1.y);
    this.doMove();
    this.rigidBody.active = !!this.cfg.BuildingCross;
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

      -1 != this.time[s.Attack] && (this.time[s.Attack] += t * this.getAttSpeed());

      switch (this.state) {
        case r.Idle:
          this.lastFind = this.isFind();

          if (this.lastFind) {
            var a = this.getFind();

            if (a && a.canAtt) {
              this.time[s.Attack] >= 1 && this.onFindList();
            } else {
              this.doMove();
            }
          } else {
            this.doMove();
          }

          break;

        case r.Wait:
          this.time[s.Attack] >= 1 && this.onFindList();
          break;

        case r.Move:
          var o = this.getFind();

          if (o && o.canAtt) {
            this.rigidBody.linearVelocity = cc.Vec2.ZERO;
            this.time[s.Attack] >= 1 && this.onFindList();
          } else {
            (function (n) {
              if (n) {
                n.tag.getPosition(e.vec2_2);
                cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);
                e.setLeft(e.vec2_2.x < 0);
              } else if (e.bornInfo.nodeIndex > e.bornInfo.pathList.length) {
                e.doWait();
              } else if (e.bornInfo.nodeIndex == e.bornInfo.pathList.length) {
                e.doWait();
                e.bornInfo.nodeIndex++;
              } else {
                e.bornInfo.pathList[e.bornInfo.nodeIndex].getPosition(e.vec2_2);
                cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1);
                e.setLeft(e.vec2_2.x < 0);
                e.vec2_2.len() <= 15 && e.bornInfo.nodeIndex++;
              }

              cc.Vec2.normalize(e.vec2_2, e.vec2_2);
              cc.Vec2.scaleAndAdd(e.vec2_1, e.vec2_1, e.vec2_2, e.getSpeed() * t);
              e.node.setPosition(e.vec2_1);
            })(o);
          }

      }
    }
  };

  _ctor.prototype.setLeft = function (t) {
    this.spAni.node.scaleX = t ? -this.spAni.node.scaleY : this.spAni.node.scaleY;
  };

  _ctor.prototype.doWait = function () {
    this.state = r.Wait;
    this.rigidBody.linearVelocity = cc.Vec2.ZERO;
    this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Idle, true);
  };

  _ctor.prototype.doIdel = function () {
    this.state = r.Idle;
    this.rigidBody.linearVelocity = cc.Vec2.ZERO;
    this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Idle, true);
  };

  _ctor.prototype.doMove = function () {
    this.state = r.Move;

    if (this.bornInfo.nodeIndex > this.bornInfo.pathList.length) {
      this.doWait();
    } else {
      this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Move, true);
    }
  };

  _ctor.prototype.isFind = function () {
    var t;
    var e = this;
    this.finIndex++;

    if (this.finIndex % 3 != 0) {
      return this.lastFind;
    } else {
      return this.finIndex = 0, this.node.getPosition(this.vec2_1), !!function () {
        var t = {
          position: e.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
          radius: e.cfg.AttackRange + e.cfg.SearchRange
        };
        var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getBulidList();

        for (var i = 0; i < n.length; i++) {
          var a = n[i];

          if (a.getIsWork()) {
            var o = a.getWposPhyCol();

            for (var r = 0; r < o.length; r++) {
              var s = o[r];

              if (cc.Intersection.polygonCircle(s, t)) {
                return true;
              }
            }
          }
        }

        return false;
      }() || !(t = $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay).isDead() && (t.node.getPosition(e.vec2_2), cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1), e.vec2_2.len() <= e.cfg.AttackRange + e.cfg.SearchRange) || !!function () {
        var t = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getSoldierList();

        for (var n = 0; n < t.length; n++) {
          var i = t[n];

          if (!i.isDead() && (i.node.getPosition(e.vec2_2), cc.Vec2.subtract(e.vec2_2, e.vec2_2, e.vec2_1), e.vec2_2.len() <= e.cfg.AttackRange + e.cfg.SearchRange)) {
            return true;
          }
        }

        return false;
      }();
    }
  };

  _ctor.prototype.getFind = function () {
    var t = this;
    this.node.getPosition(this.vec2_1);
    return function () {
      var e = null;
      var n = -1;
      var i = -1;
      var a = $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay;

      if (!a.isDead()) {
        a.node.getPosition(t.vec2_2);
        cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

        if (t.vec2_2.len() <= t.cfg.AttackRange + t.cfg.SearchRange) {
          e = a.node, n = t.vec2_2.len();
        }
      }

      var o = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getSoldierList();

      for (var r = 0; r < o.length; r++) {
        if (!(g = o[r]).isDead()) {
          g.node.getPosition(t.vec2_2);
          cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

          if (t.vec2_2.len() <= t.cfg.AttackRange + t.cfg.SearchRange && (-1 == n || t.vec2_2.len() < n)) {
            e = g.node, n = t.vec2_2.len();
          }
        }
      }

      var s = {
        position: t.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
        radius: t.cfg.AttackRange + t.cfg.SearchRange
      };
      var l = {
        position: t.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
        radius: t.cfg.AttackRange
      };
      var c = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getBulidList();

      for (var h = 0; h < c.length; h++) {
        var g;

        if ((g = c[h]).getIsWork()) {
          var u = g.getWposPhyCol2();

          for (var d = 0; d < u.length; d++) {
            var p = u[d];

            if (cc.Intersection.polygonCircle(p.points, s)) {
              var f = p.tagNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
              t.vec2_2 = $z1KinghtFallUIGame["default"].instance.ctrGame.ndMain.convertToNodeSpaceAR(f);
              cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

              if (-1 == n || t.vec2_2.len() < n) {
                i = cc.Intersection.polygonCircle(p.points, l);
                e = p.tagNode;
                n = t.vec2_2.len();
              }
            }
          }
        }
      }

      if (e) {
        return {
          tag: e,
          canAtt: -1 == i ? n <= t.cfg.AttackRange : i
        };
      } else {
        return null;
      }
    }() || null;
  };

  _ctor.prototype.onFindList = function () {
    var t = this;
    this.node.getPosition(this.vec2_1);
    return !!function () {
      var e = null;
      var n = -1;
      var i = -1;
      var a = $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay;

      if (!a.isDead()) {
        a.node.getPosition(t.vec2_2);
        cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

        if (t.vec2_2.len() <= t.cfg.AttackRange) {
          e = a.node, n = t.vec2_2.len();
        }
      }

      var o = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getSoldierList();

      for (var r = 0; r < o.length; r++) {
        if (!(h = o[r]).isDead()) {
          h.node.getPosition(t.vec2_2);
          cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

          if (t.vec2_2.len() <= t.cfg.AttackRange && (-1 == n || t.vec2_2.len() < n)) {
            e = h.node, n = t.vec2_2.len();
          }
        }
      }

      var s = {
        position: t.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
        radius: t.cfg.AttackRange
      };
      var l = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getBulidList();

      for (var c = 0; c < l.length; c++) {
        var h;

        if ((h = l[c]).getIsWork()) {
          var g = h.getWposPhyCol2();

          for (var u = 0; u < g.length; u++) {
            var d = g[u];

            if (cc.Intersection.polygonCircle(d.points, s)) {
              var p = d.tagNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
              t.vec2_2 = $z1KinghtFallUIGame["default"].instance.ctrGame.ndMain.convertToNodeSpaceAR(p);
              cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

              if (-1 == n || t.vec2_2.len() < n) {
                i = true;
                e = d.tagNode;
                n = t.vec2_2.len();
              }
            }
          }
        }
      }

      if (e) {
        return {
          tag: e,
          canAtt: -1 == i ? n <= t.cfg.AttackRange : i
        };
      } else {
        return null;
      }
    }() && (this.doAttackStart(), true);
  };

  _ctor.prototype.doAttackStart = function () {
    this.state = r.Attack;
    this.spAni.setAnimation(0, $z1KinghtFallModle.KinghtFallSoldierAniEnum.Attack, false);
    this.time[s.Attack] = -1;
    this.doAttack();
  };

  _ctor.prototype.doAttack = function () {
    var t = this;
    this.time[s.Attack] = 0;
    this.node.getPosition(this.vec2_1);
    var e = this.getAttack();

    var n = function () {
      var e = null;
      var n = -1;
      var i = $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay;

      if (!i.isDead()) {
        i.node.getPosition(t.vec2_2);
        cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

        if (t.vec2_2.len() <= t.cfg.AttackRange) {
          e = i, n = t.vec2_2.len();
        }
      }

      var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getSoldierList();

      for (var o = 0; o < a.length; o++) {
        if (!(c = a[o]).isDead()) {
          c.node.getPosition(t.vec2_2);
          cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

          if (t.vec2_2.len() <= t.cfg.AttackRange && (-1 == n || t.vec2_2.len() < n)) {
            e = c, n = t.vec2_2.len();
          }
        }
      }

      var r = {
        position: t.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
        radius: t.cfg.AttackRange
      };
      var s = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getBulidList();

      for (var l = 0; l < s.length; l++) {
        var c;

        if ((c = s[l]).getIsWork()) {
          var h = c.getWposPhyCol();

          for (var g = 0; g < h.length; g++) {
            var u = h[g];

            if (cc.Intersection.polygonCircle(u, r)) {
              c.node.getPosition(t.vec2_2);
              cc.Vec2.subtract(t.vec2_2, t.vec2_2, t.vec2_1);

              if (-1 == n || t.vec2_2.len() < n) {
                e = c, n = t.vec2_2.len();
              }
            }
          }
        }
      }

      return e;
    }();

    if (n) {
      n.node.getPosition(this.vec2_2);
      n.cfg && this.cfg.Suppressed == n.cfg.ID && (e *= Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.RestrainedArms)));
      $z1KinghtFallUIGame["default"].instance.ctrEffect.showDamageNum(this.vec2_2.clone(), n.onAttacked(e));
      $z1KinghtFallUIGame["default"].instance.ctrEffect.onMonsterAttack(this.vec2_2.clone(), "xb_gj");
      cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
      return void this.setLeft(this.vec2_2.x < 0);
    }
  };

  _ctor.prototype.doAttackFinish = function () {
    this.doIdel();
  };

  _ctor.prototype.onAttacked = function (t) {
    var e;

    if (!this.isDead()) {
      this.hp -= t;

      if (this.hp <= 0) {
        this.state = r.Dead;
        $z1KinghtFallUIGame["default"].instance.ctrEffect.onSoldierDead(this.node.getPosition(), .25);
        this.delAllBuff();
        this.freeNode();
        var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskInfo();

        if (n.type == $z1KinghtFallEnum.KinghtFallEnumTaskEnum.SoldierDefeated) {
          n.num++;
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().setTaskInfo(n);
        }

        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addTaskNum($z1KinghtFallMissionData.KinghtFallTaskCountName.Kill, 1);
      }

      null === (e = this.hpctrl) || undefined === e || e.setHp(this.hp, this.hpMax);
    }
  };

  _ctor.prototype.freeNode = function () {
    var t = $z1KinghtFallConfig.KinghtFallPoolName.Enemy + "_" + this.cfg.ID;
    $z1PoolMgr.PoolMgr.getInstance().freeNode(t, this.node);
    $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.delEnemy(this);
  };

  _ctor.prototype.isDead = function () {
    return this.state == r.Dead;
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

    if (2 == this.cfg.AttackType) {
      var a = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff33);
      a && (e -= a.Pamer[0]);
      var o = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff56);
      o && (e -= o.Pamer[0]);
    }

    e < 0 && (e = 0);
    return t * e;
  };

  _ctor.prototype.getAttSpeed = function () {
    var t = this.cfg.AttackInterval;
    var e = 1;
    var n = this.getBuffList($z1KinghtFallInterface.KinghtFallEnemyBuffType.AttackSpeed);

    for (var i = 0; i < n.length; i++) {
      e += n[i].data.addSpeed;
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

    $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SlowSpell] && (e -= $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SlowSpell][0]);
    e < 0 && (e = .01);
    return t * e;
  };

  _ctor.prototype.addHpPro = function (t) {
    var e;
    var n;

    if (!this.isDead()) {
      this.hp += t * this.hpMax;
      this.hp > this.hpMax && (this.hp = this.hpMax);
      null === (e = this.hpctrl) || undefined === e || e.setHp(this.hp, this.hpMax);
      null === (n = this.hpctrl) || undefined === n || n.showAni();
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
  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallInterface.KinghtFallInterface);

exports["default"] = def_KinghtFallEnemyBase;

(function (t) {
  t[t.Idle = 0] = "Idle";
  t[t.Move = 1] = "Move";
  t[t.Attack = 2] = "Attack";
  t[t.Wait = 3] = "Wait";
  t[t.Dead = 4] = "Dead";
})(r = exports.KinghtFallEnemyStatus || (exports.KinghtFallEnemyStatus = {}));

(function (t) {
  t.Attack = "Attack";
})(s || (s = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxFbmVteUJhc2UuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiS2luZ2h0RmFsbEVuZW15U3RhdHVzIiwidW5kZWZpbmVkIiwiciIsInMiLCIkejFQb29sTWdyIiwicmVxdWlyZSIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsTWlzc2lvbkRhdGEiLCIkejFLaW5naHRGYWxsRW51bSIsIiR6MUtpbmdodEZhbGxEYXRhTWdyIiwiJHoxS2luZ2h0RmFsbFBsYXllck1nciIsIiR6MUtpbmdodEZhbGxNb2RsZSIsIiR6MUtpbmdodEZhbGxJdGVtSHAiLCIkejFLaW5naHRGYWxsVUlHYW1lIiwiJHoxS2luZ2h0RmFsbEludGVyZmFjZSIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImRlZl9LaW5naHRGYWxsRW5lbXlCYXNlIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwic3BBbmkiLCJuZEhwIiwicmlnaWRCb2R5IiwidGltZSIsInZlYzJfMSIsIlZlYzIiLCJ2ZWMyXzIiLCJmaW5JbmRleCIsImxhc3RGaW5kIiwicHJvdG90eXBlIiwib25Mb2FkIiwibm9kZSIsImdldENvbXBvbmVudCIsIlJpZ2lkQm9keSIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJhbmltYXRpb24iLCJuYW1lIiwiS2luZ2h0RmFsbFNvbGRpZXJBbmlFbnVtIiwiQXR0YWNrIiwiZG9BdHRhY2tGaW5pc2giLCJEaWUiLCJmcmVlTm9kZSIsInN0YXJ0Iiwic2V0Qm9keSIsImluaXREYXRhIiwibiIsImNmZyIsIktpbmdodEZhbGxEYXRhTWdyIiwiZ2V0SW5zdGFuY2UiLCJnZXRTb2xkaWVyQ2ZnQnlJZCIsImJvcm5JbmZvIiwiaW5zdGFuY2UiLCJjdHJHYW1lIiwic2V0UGF0aCIsImdldENvbXBvbmVudHMiLCJDaXJjbGVDb2xsaWRlciIsInJhZGl1cyIsIkF0dGFja1JhbmdlIiwiYWRkQ29tcG9uZW50IiwiU2VhcmNoUmFuZ2UiLCJocE1heCIsIkhlYWx0aCIsImdhbWVEYXRhIiwiZ2V0SHBBZGQiLCJJRCIsImhwIiwiaHBjdHJsIiwic2V0VHlwZSIsIktpbmdodEZhbGxHYW1lQXJteSIsIkVuZW15Iiwic2V0SHAiLCJsb2FkUHJlZmFiIiwiS2luZ2h0RmFsbEJ1bmRlbE5hbWUiLCJLaW5naHRGYWxsUHJlZmFiTmFtZSIsIkl0ZW1IcCIsImluc3RhbnRpYXRlIiwic2V0UGFyZW50Iiwic2V0UG9zaXRpb24iLCJjaGlsZHJlbkNvdW50IiwiY29uc29sZSIsImVycm9yIiwiYXR0YWNrIiwiTWF0aCIsInJvdW5kIiwiQXR0YWNrRGFtYWdlIiwiZ2V0QXR0QWRkIiwiZ2V0UG9zaXRpb24iLCJ6SW5kZXgiLCJmbG9vciIsIndpblNpemUiLCJoZWlnaHQiLCJ5IiwiZG9Nb3ZlIiwiYWN0aXZlIiwiQnVpbGRpbmdDcm9zcyIsIm9uQ2hhbmdlU3BlZWQiLCJvblVwZGF0ZSIsImlzRGVhZCIsImRlYnVmZkluZm8iLCJsZW5ndGgiLCJ0aW1lTWF4IiwiZGVsQnVmZklkeCIsImdldEF0dFNwZWVkIiwic3RhdGUiLCJJZGxlIiwiaXNGaW5kIiwiYSIsImdldEZpbmQiLCJjYW5BdHQiLCJvbkZpbmRMaXN0IiwiV2FpdCIsIk1vdmUiLCJvIiwibGluZWFyVmVsb2NpdHkiLCJaRVJPIiwidGFnIiwic3VidHJhY3QiLCJzZXRMZWZ0IiwieCIsIm5vZGVJbmRleCIsInBhdGhMaXN0IiwiZG9XYWl0IiwibGVuIiwibm9ybWFsaXplIiwic2NhbGVBbmRBZGQiLCJnZXRTcGVlZCIsInNjYWxlWCIsInNjYWxlWSIsInNldEFuaW1hdGlvbiIsImRvSWRlbCIsInBvc2l0aW9uIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiZ2V0QnVsaWRMaXN0IiwiZ2V0SXNXb3JrIiwiZ2V0V3Bvc1BoeUNvbCIsIkludGVyc2VjdGlvbiIsInBvbHlnb25DaXJjbGUiLCJjdHJQbGF5IiwiZ2V0U29sZGllckxpc3QiLCJnIiwibCIsImMiLCJoIiwidSIsImdldFdwb3NQaHlDb2wyIiwiZCIsInAiLCJwb2ludHMiLCJmIiwidGFnTm9kZSIsIm5kTWFpbiIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZG9BdHRhY2tTdGFydCIsImRvQXR0YWNrIiwiZ2V0QXR0YWNrIiwiU3VwcHJlc3NlZCIsIk51bWJlciIsImdldFBhcmFtc0NmZ0J5SWQiLCJLaW5naHRGYWxsRW51bVBhcmFtZXRlckNmZyIsIlJlc3RyYWluZWRBcm1zIiwiY3RyRWZmZWN0Iiwic2hvd0RhbWFnZU51bSIsImNsb25lIiwib25BdHRhY2tlZCIsIm9uTW9uc3RlckF0dGFjayIsIkRlYWQiLCJvblNvbGRpZXJEZWFkIiwiZGVsQWxsQnVmZiIsIktpbmdodEZhbGxQbGF5ZXJNZ3IiLCJnZXRNaXNzaW9uRGF0YSIsImdldFRhc2tJbmZvIiwidHlwZSIsIktpbmdodEZhbGxFbnVtVGFza0VudW0iLCJTb2xkaWVyRGVmZWF0ZWQiLCJudW0iLCJzZXRUYXNrSW5mbyIsImFkZFRhc2tOdW0iLCJLaW5naHRGYWxsVGFza0NvdW50TmFtZSIsIktpbGwiLCJLaW5naHRGYWxsUG9vbE5hbWUiLCJQb29sTWdyIiwiZGVsRW5lbXkiLCJzZXRQYXVzZSIsInBhdXNlZCIsImdldEJ1ZmZMaXN0IiwiS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUiLCJEYW1hZ2VDdXQiLCJkYXRhIiwic3ViTnVtIiwiQXR0YWNrVHlwZSIsImdldEdhbWVCdWZmIiwiS2luZ2h0RmFsbEVudW1CdWZmQ2ZnIiwiQnVmZjMzIiwiUGFtZXIiLCJCdWZmNTYiLCJBdHRhY2tJbnRlcnZhbCIsIkF0dGFja1NwZWVkIiwiYWRkU3BlZWQiLCJTcGVlZCIsIk1vdmVTcGVlZCIsInRyZWFzdXJlQWRkIiwiS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0iLCJTbG93U3BlbGwiLCJhZGRIcFBybyIsInNob3dBbmkiLCJzcGVlZCIsInRpbWVTY2FsZSIsInNwIiwiU2tlbGV0b24iLCJ0b29sdGlwIiwiTm9kZSIsIktpbmdodEZhbGxJbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxPQUFPLENBQUNFLHFCQUFSLEdBQWdDQyxTQUFoQztBQUNBLElBQUlDLENBQUo7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUdELE9BQU8sQ0FBQyxrQkFBRCxDQUFqQzs7QUFDQSxJQUFJRSx3QkFBd0IsR0FBR0YsT0FBTyxDQUFDLHVCQUFELENBQXRDOztBQUNBLElBQUlHLGlCQUFpQixHQUFHSCxPQUFPLENBQUMsZ0JBQUQsQ0FBL0I7O0FBQ0EsSUFBSUksb0JBQW9CLEdBQUdKLE9BQU8sQ0FBQyxtQkFBRCxDQUFsQzs7QUFDQSxJQUFJSyxzQkFBc0IsR0FBR0wsT0FBTyxDQUFDLHFCQUFELENBQXBDOztBQUNBLElBQUlNLGtCQUFrQixHQUFHTixPQUFPLENBQUMsaUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSU8sbUJBQW1CLEdBQUdQLE9BQU8sQ0FBQyxrQkFBRCxDQUFqQzs7QUFDQSxJQUFJUSxtQkFBbUIsR0FBR1IsT0FBTyxDQUFDLGtCQUFELENBQWpDOztBQUNBLElBQUlTLHNCQUFzQixHQUFHVCxPQUFPLENBQUMscUJBQUQsQ0FBcEM7O0FBQ0EsSUFBSVUsYUFBYSxHQUFHQyxFQUFFLENBQUNDLFVBQXZCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHSCxhQUFhLENBQUNJLE9BQWhDO0FBQ0EsSUFBSUMsWUFBWSxHQUFHTCxhQUFhLENBQUNNLFFBQWpDOztBQUNBLElBQUlDLHVCQUF1QixHQUFHLFVBQVVDLENBQVYsRUFBYTtFQUN6QyxTQUFTQyxLQUFULEdBQWlCO0lBQ2YsSUFBSUMsQ0FBQyxHQUFHLFNBQVNGLENBQVQsSUFBY0EsQ0FBQyxDQUFDRyxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWQsSUFBMEMsSUFBbEQ7SUFDQUYsQ0FBQyxDQUFDRyxLQUFGLEdBQVUsSUFBVjtJQUNBSCxDQUFDLENBQUNJLElBQUYsR0FBUyxJQUFUO0lBQ0FKLENBQUMsQ0FBQ0ssU0FBRixHQUFjLElBQWQ7SUFDQUwsQ0FBQyxDQUFDTSxJQUFGLEdBQVMsRUFBVDtJQUNBTixDQUFDLENBQUNPLE1BQUYsR0FBVyxJQUFJaEIsRUFBRSxDQUFDaUIsSUFBUCxFQUFYO0lBQ0FSLENBQUMsQ0FBQ1MsTUFBRixHQUFXLElBQUlsQixFQUFFLENBQUNpQixJQUFQLEVBQVg7SUFDQVIsQ0FBQyxDQUFDVSxRQUFGLEdBQWEsQ0FBYjtJQUNBVixDQUFDLENBQUNXLFFBQUYsR0FBYSxLQUFiO0lBQ0EsT0FBT1gsQ0FBUDtFQUNEOztFQUNEakMsV0FBVyxDQUFDZ0MsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ2EsU0FBTixDQUFnQkMsTUFBaEIsR0FBeUIsWUFBWTtJQUNuQyxJQUFJZixDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtPLFNBQUwsR0FBaUIsS0FBS1MsSUFBTCxDQUFVQyxZQUFWLENBQXVCeEIsRUFBRSxDQUFDeUIsU0FBMUIsQ0FBakI7SUFDQSxLQUFLYixLQUFMLENBQVdjLG1CQUFYLENBQStCLFVBQVVqQixDQUFWLEVBQWE7TUFDMUMsUUFBUUEsQ0FBQyxDQUFDa0IsU0FBRixDQUFZQyxJQUFwQjtRQUNFLEtBQUtqQyxrQkFBa0IsQ0FBQ2tDLHdCQUFuQixDQUE0Q0MsTUFBakQ7VUFDRXZCLENBQUMsQ0FBQ3dCLGNBQUY7VUFDQTs7UUFDRixLQUFLcEMsa0JBQWtCLENBQUNrQyx3QkFBbkIsQ0FBNENHLEdBQWpEO1VBQ0V6QixDQUFDLENBQUMwQixRQUFGO01BTEo7SUFPRCxDQVJEO0VBU0QsQ0FaRDs7RUFhQXpCLEtBQUssQ0FBQ2EsU0FBTixDQUFnQmEsS0FBaEIsR0FBd0IsWUFBWTtJQUNsQyxLQUFLQyxPQUFMLENBQWEsS0FBS3ZCLEtBQUwsQ0FBV1csSUFBeEI7RUFDRCxDQUZEOztFQUdBZixLQUFLLENBQUNhLFNBQU4sQ0FBZ0JlLFFBQWhCLEdBQTJCLFVBQVU3QixDQUFWLEVBQWFFLENBQWIsRUFBZ0I7SUFDekMsSUFBSTRCLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS0MsR0FBTCxHQUFXN0Msb0JBQW9CLENBQUM4QyxpQkFBckIsQ0FBdUNDLFdBQXZDLEdBQXFEQyxpQkFBckQsQ0FBdUVsQyxDQUF2RSxDQUFYO0lBQ0EsS0FBS21DLFFBQUwsR0FBZ0I3QyxtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNDLE9BQTdDLENBQXFEcEMsQ0FBckQsQ0FBaEI7SUFDQSxJQUFJbEMsQ0FBQyxHQUFHLEtBQUtnRCxJQUFMLENBQVV1QixhQUFWLENBQXdCOUMsRUFBRSxDQUFDK0MsY0FBM0IsQ0FBUjs7SUFDQSxJQUFJeEUsQ0FBQyxDQUFDLENBQUQsQ0FBTCxFQUFVO01BQ1JBLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3lFLE1BQUwsR0FBYyxLQUFLVixHQUFMLENBQVNXLFdBQXZCO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsS0FBSzFCLElBQUwsQ0FBVTJCLFlBQVYsQ0FBdUJsRCxFQUFFLENBQUMrQyxjQUExQixFQUEwQ0MsTUFBMUMsR0FBbUQsS0FBS1YsR0FBTCxDQUFTVyxXQUE1RDtJQUNEOztJQUNELElBQUkxRSxDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVU7TUFDUkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLeUUsTUFBTCxHQUFjLEtBQUtWLEdBQUwsQ0FBU1csV0FBVCxHQUF1QixLQUFLWCxHQUFMLENBQVNhLFdBQTlDO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsS0FBSzVCLElBQUwsQ0FBVTJCLFlBQVYsQ0FBdUJsRCxFQUFFLENBQUMrQyxjQUExQixFQUEwQ0MsTUFBMUMsR0FBbUQsS0FBS1YsR0FBTCxDQUFTVyxXQUFULEdBQXVCLEtBQUtYLEdBQUwsQ0FBU2EsV0FBbkY7SUFDRDs7SUFDRCxLQUFLQyxLQUFMLEdBQWEsS0FBS2QsR0FBTCxDQUFTZSxNQUFULEdBQWtCeEQsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDVSxRQUE3QyxDQUFzREMsUUFBdEQsQ0FBK0QsS0FBS2pCLEdBQUwsQ0FBU2tCLEVBQXhFLENBQS9CO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLEtBQUtMLEtBQWY7O0lBQ0EsSUFBSSxLQUFLTSxNQUFULEVBQWlCO01BQ2YsS0FBS0EsTUFBTCxDQUFZQyxPQUFaLENBQW9CaEUsa0JBQWtCLENBQUNpRSxrQkFBbkIsQ0FBc0NDLEtBQTFEO01BQ0EsS0FBS0gsTUFBTCxDQUFZSSxLQUFaLENBQWtCLEtBQUtMLEVBQXZCLEVBQTJCLEtBQUtMLEtBQWhDO0lBQ0QsQ0FIRCxNQUdPO01BQ0wsS0FBS1csVUFBTCxDQUFnQnpFLG1CQUFtQixDQUFDMEUsb0JBQXBCLENBQXlDSCxLQUF6RCxFQUFnRXZFLG1CQUFtQixDQUFDMkUsb0JBQXBCLENBQXlDQyxNQUF6RyxFQUFpSCxVQUFVM0QsQ0FBVixFQUFhO1FBQzVILElBQUlFLENBQUo7UUFDQSxDQUFDQSxDQUFDLEdBQUdULEVBQUUsQ0FBQ21FLFdBQUgsQ0FBZTVELENBQWYsQ0FBTCxFQUF3QjZELFNBQXhCLENBQWtDL0IsQ0FBQyxDQUFDeEIsSUFBcEM7UUFDQUosQ0FBQyxDQUFDNEQsV0FBRixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7UUFDQWhDLENBQUMsQ0FBQ3FCLE1BQUYsR0FBV2pELENBQUMsQ0FBQ2UsWUFBRixDQUFlNUIsbUJBQW1CLFdBQWxDLENBQVg7UUFDQXlDLENBQUMsQ0FBQ3FCLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQmhFLGtCQUFrQixDQUFDaUUsa0JBQW5CLENBQXNDQyxLQUF2RDtRQUNBeEIsQ0FBQyxDQUFDcUIsTUFBRixDQUFTSSxLQUFULENBQWV6QixDQUFDLENBQUNvQixFQUFqQixFQUFxQnBCLENBQUMsQ0FBQ2UsS0FBdkI7UUFDQWYsQ0FBQyxDQUFDeEIsSUFBRixDQUFPeUQsYUFBUCxHQUF1QixDQUF2QixJQUE0QkMsT0FBTyxDQUFDQyxLQUFSLENBQWMsK0JBQWQsQ0FBNUI7TUFDRCxDQVJEO0lBU0Q7O0lBQ0QsS0FBS0MsTUFBTCxHQUFjQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLckMsR0FBTCxDQUFTc0MsWUFBVCxHQUF3Qi9FLG1CQUFtQixXQUFuQixDQUE0QjhDLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q1UsUUFBN0MsQ0FBc0R1QixTQUF0RCxDQUFnRSxLQUFLdkMsR0FBTCxDQUFTa0IsRUFBekUsQ0FBbkMsQ0FBZDtJQUNBLEtBQUt6QyxJQUFMLEdBQVksRUFBWjtJQUNBLEtBQUtBLElBQUwsQ0FBVTVCLENBQUMsQ0FBQzJDLE1BQVosSUFBc0IsQ0FBdEI7SUFDQSxLQUFLUCxJQUFMLENBQVV1RCxXQUFWLENBQXNCLEtBQUs5RCxNQUEzQjtJQUNBLEtBQUtPLElBQUwsQ0FBVXdELE1BQVYsR0FBbUJMLElBQUksQ0FBQ00sS0FBTCxDQUFXaEYsRUFBRSxDQUFDaUYsT0FBSCxDQUFXQyxNQUF0QixJQUFnQ1IsSUFBSSxDQUFDTSxLQUFMLENBQVcsS0FBS2hFLE1BQUwsQ0FBWW1FLENBQXZCLENBQW5EO0lBQ0EsS0FBS0MsTUFBTDtJQUNBLEtBQUt0RSxTQUFMLENBQWV1RSxNQUFmLEdBQXdCLENBQUMsQ0FBQyxLQUFLL0MsR0FBTCxDQUFTZ0QsYUFBbkM7SUFDQSxLQUFLQyxhQUFMO0VBQ0QsQ0F2Q0Q7O0VBd0NBL0UsS0FBSyxDQUFDYSxTQUFOLENBQWdCbUUsUUFBaEIsR0FBMkIsVUFBVWpGLENBQVYsRUFBYTtJQUN0QyxJQUFJRSxDQUFDLEdBQUcsSUFBUjs7SUFDQSxJQUFJLENBQUMsS0FBS2dGLE1BQUwsRUFBTCxFQUFvQjtNQUNsQixLQUFLbEUsSUFBTCxDQUFVdUQsV0FBVixDQUFzQixLQUFLOUQsTUFBM0I7TUFDQSxLQUFLTyxJQUFMLENBQVV3RCxNQUFWLEdBQW1CTCxJQUFJLENBQUNNLEtBQUwsQ0FBV2hGLEVBQUUsQ0FBQ2lGLE9BQUgsQ0FBV0MsTUFBdEIsSUFBZ0NSLElBQUksQ0FBQ00sS0FBTCxDQUFXLEtBQUtoRSxNQUFMLENBQVltRSxDQUF2QixDQUFuRDs7TUFDQSxLQUFLLElBQUk5QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtxRCxVQUFMLENBQWdCQyxNQUFwQyxFQUE0Q3RELENBQUMsRUFBN0MsRUFBaUQ7UUFDL0MsSUFBSTlELENBQUMsR0FBRyxLQUFLbUgsVUFBTCxDQUFnQnJELENBQWhCLENBQVI7O1FBQ0EsSUFBSSxDQUFDLENBQUQsSUFBTTlELENBQUMsQ0FBQ3dDLElBQVosRUFBa0I7VUFDaEJ4QyxDQUFDLENBQUN3QyxJQUFGLElBQVVSLENBQVY7O1VBQ0EsSUFBSWhDLENBQUMsQ0FBQ3dDLElBQUYsSUFBVXhDLENBQUMsQ0FBQ3FILE9BQWhCLEVBQXlCO1lBQ3ZCLEtBQUtDLFVBQUwsQ0FBZ0J4RCxDQUFoQixHQUFvQkEsQ0FBQyxFQUFyQjtVQUNEO1FBQ0Y7TUFDRjs7TUFDRCxDQUFDLENBQUQsSUFBTSxLQUFLdEIsSUFBTCxDQUFVNUIsQ0FBQyxDQUFDMkMsTUFBWixDQUFOLEtBQThCLEtBQUtmLElBQUwsQ0FBVTVCLENBQUMsQ0FBQzJDLE1BQVosS0FBdUJ2QixDQUFDLEdBQUcsS0FBS3VGLFdBQUwsRUFBekQ7O01BQ0EsUUFBUSxLQUFLQyxLQUFiO1FBQ0UsS0FBSzdHLENBQUMsQ0FBQzhHLElBQVA7VUFDRSxLQUFLNUUsUUFBTCxHQUFnQixLQUFLNkUsTUFBTCxFQUFoQjs7VUFDQSxJQUFJLEtBQUs3RSxRQUFULEVBQW1CO1lBQ2pCLElBQUk4RSxDQUFDLEdBQUcsS0FBS0MsT0FBTCxFQUFSOztZQUNBLElBQUlELENBQUMsSUFBSUEsQ0FBQyxDQUFDRSxNQUFYLEVBQW1CO2NBQ2pCLEtBQUtyRixJQUFMLENBQVU1QixDQUFDLENBQUMyQyxNQUFaLEtBQXVCLENBQXZCLElBQTRCLEtBQUt1RSxVQUFMLEVBQTVCO1lBQ0QsQ0FGRCxNQUVPO2NBQ0wsS0FBS2pCLE1BQUw7WUFDRDtVQUNGLENBUEQsTUFPTztZQUNMLEtBQUtBLE1BQUw7VUFDRDs7VUFDRDs7UUFDRixLQUFLbEcsQ0FBQyxDQUFDb0gsSUFBUDtVQUNFLEtBQUt2RixJQUFMLENBQVU1QixDQUFDLENBQUMyQyxNQUFaLEtBQXVCLENBQXZCLElBQTRCLEtBQUt1RSxVQUFMLEVBQTVCO1VBQ0E7O1FBQ0YsS0FBS25ILENBQUMsQ0FBQ3FILElBQVA7VUFDRSxJQUFJQyxDQUFDLEdBQUcsS0FBS0wsT0FBTCxFQUFSOztVQUNBLElBQUlLLENBQUMsSUFBSUEsQ0FBQyxDQUFDSixNQUFYLEVBQW1CO1lBQ2pCLEtBQUt0RixTQUFMLENBQWUyRixjQUFmLEdBQWdDekcsRUFBRSxDQUFDaUIsSUFBSCxDQUFReUYsSUFBeEM7WUFDQSxLQUFLM0YsSUFBTCxDQUFVNUIsQ0FBQyxDQUFDMkMsTUFBWixLQUF1QixDQUF2QixJQUE0QixLQUFLdUUsVUFBTCxFQUE1QjtVQUNELENBSEQsTUFHTztZQUNMLENBQUMsVUFBVWhFLENBQVYsRUFBYTtjQUNaLElBQUlBLENBQUosRUFBTztnQkFDTEEsQ0FBQyxDQUFDc0UsR0FBRixDQUFNN0IsV0FBTixDQUFrQnJFLENBQUMsQ0FBQ1MsTUFBcEI7Z0JBQ0FsQixFQUFFLENBQUNpQixJQUFILENBQVEyRixRQUFSLENBQWlCbkcsQ0FBQyxDQUFDUyxNQUFuQixFQUEyQlQsQ0FBQyxDQUFDUyxNQUE3QixFQUFxQ1QsQ0FBQyxDQUFDTyxNQUF2QztnQkFDQVAsQ0FBQyxDQUFDb0csT0FBRixDQUFVcEcsQ0FBQyxDQUFDUyxNQUFGLENBQVM0RixDQUFULEdBQWEsQ0FBdkI7Y0FDRCxDQUpELE1BSU8sSUFBSXJHLENBQUMsQ0FBQ2lDLFFBQUYsQ0FBV3FFLFNBQVgsR0FBdUJ0RyxDQUFDLENBQUNpQyxRQUFGLENBQVdzRSxRQUFYLENBQW9CckIsTUFBL0MsRUFBdUQ7Z0JBQzVEbEYsQ0FBQyxDQUFDd0csTUFBRjtjQUNELENBRk0sTUFFQSxJQUFJeEcsQ0FBQyxDQUFDaUMsUUFBRixDQUFXcUUsU0FBWCxJQUF3QnRHLENBQUMsQ0FBQ2lDLFFBQUYsQ0FBV3NFLFFBQVgsQ0FBb0JyQixNQUFoRCxFQUF3RDtnQkFDN0RsRixDQUFDLENBQUN3RyxNQUFGO2dCQUNBeEcsQ0FBQyxDQUFDaUMsUUFBRixDQUFXcUUsU0FBWDtjQUNELENBSE0sTUFHQTtnQkFDTHRHLENBQUMsQ0FBQ2lDLFFBQUYsQ0FBV3NFLFFBQVgsQ0FBb0J2RyxDQUFDLENBQUNpQyxRQUFGLENBQVdxRSxTQUEvQixFQUEwQ2pDLFdBQTFDLENBQXNEckUsQ0FBQyxDQUFDUyxNQUF4RDtnQkFDQWxCLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUTJGLFFBQVIsQ0FBaUJuRyxDQUFDLENBQUNTLE1BQW5CLEVBQTJCVCxDQUFDLENBQUNTLE1BQTdCLEVBQXFDVCxDQUFDLENBQUNPLE1BQXZDO2dCQUNBUCxDQUFDLENBQUNvRyxPQUFGLENBQVVwRyxDQUFDLENBQUNTLE1BQUYsQ0FBUzRGLENBQVQsR0FBYSxDQUF2QjtnQkFDQXJHLENBQUMsQ0FBQ1MsTUFBRixDQUFTZ0csR0FBVCxNQUFrQixFQUFsQixJQUF3QnpHLENBQUMsQ0FBQ2lDLFFBQUYsQ0FBV3FFLFNBQVgsRUFBeEI7Y0FDRDs7Y0FDRC9HLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUWtHLFNBQVIsQ0FBa0IxRyxDQUFDLENBQUNTLE1BQXBCLEVBQTRCVCxDQUFDLENBQUNTLE1BQTlCO2NBQ0FsQixFQUFFLENBQUNpQixJQUFILENBQVFtRyxXQUFSLENBQW9CM0csQ0FBQyxDQUFDTyxNQUF0QixFQUE4QlAsQ0FBQyxDQUFDTyxNQUFoQyxFQUF3Q1AsQ0FBQyxDQUFDUyxNQUExQyxFQUFrRFQsQ0FBQyxDQUFDNEcsUUFBRixLQUFlOUcsQ0FBakU7Y0FDQUUsQ0FBQyxDQUFDYyxJQUFGLENBQU84QyxXQUFQLENBQW1CNUQsQ0FBQyxDQUFDTyxNQUFyQjtZQUNELENBbkJELEVBbUJHd0YsQ0FuQkg7VUFvQkQ7O01BM0NMO0lBNkNEO0VBQ0YsQ0E3REQ7O0VBOERBaEcsS0FBSyxDQUFDYSxTQUFOLENBQWdCd0YsT0FBaEIsR0FBMEIsVUFBVXRHLENBQVYsRUFBYTtJQUNyQyxLQUFLSyxLQUFMLENBQVdXLElBQVgsQ0FBZ0IrRixNQUFoQixHQUF5Qi9HLENBQUMsR0FBRyxDQUFDLEtBQUtLLEtBQUwsQ0FBV1csSUFBWCxDQUFnQmdHLE1BQXBCLEdBQTZCLEtBQUszRyxLQUFMLENBQVdXLElBQVgsQ0FBZ0JnRyxNQUF2RTtFQUNELENBRkQ7O0VBR0EvRyxLQUFLLENBQUNhLFNBQU4sQ0FBZ0I0RixNQUFoQixHQUF5QixZQUFZO0lBQ25DLEtBQUtsQixLQUFMLEdBQWE3RyxDQUFDLENBQUNvSCxJQUFmO0lBQ0EsS0FBS3hGLFNBQUwsQ0FBZTJGLGNBQWYsR0FBZ0N6RyxFQUFFLENBQUNpQixJQUFILENBQVF5RixJQUF4QztJQUNBLEtBQUs5RixLQUFMLENBQVc0RyxZQUFYLENBQXdCLENBQXhCLEVBQTJCN0gsa0JBQWtCLENBQUNrQyx3QkFBbkIsQ0FBNENtRSxJQUF2RSxFQUE2RSxJQUE3RTtFQUNELENBSkQ7O0VBS0F4RixLQUFLLENBQUNhLFNBQU4sQ0FBZ0JvRyxNQUFoQixHQUF5QixZQUFZO0lBQ25DLEtBQUsxQixLQUFMLEdBQWE3RyxDQUFDLENBQUM4RyxJQUFmO0lBQ0EsS0FBS2xGLFNBQUwsQ0FBZTJGLGNBQWYsR0FBZ0N6RyxFQUFFLENBQUNpQixJQUFILENBQVF5RixJQUF4QztJQUNBLEtBQUs5RixLQUFMLENBQVc0RyxZQUFYLENBQXdCLENBQXhCLEVBQTJCN0gsa0JBQWtCLENBQUNrQyx3QkFBbkIsQ0FBNENtRSxJQUF2RSxFQUE2RSxJQUE3RTtFQUNELENBSkQ7O0VBS0F4RixLQUFLLENBQUNhLFNBQU4sQ0FBZ0IrRCxNQUFoQixHQUF5QixZQUFZO0lBQ25DLEtBQUtXLEtBQUwsR0FBYTdHLENBQUMsQ0FBQ3FILElBQWY7O0lBQ0EsSUFBSSxLQUFLN0QsUUFBTCxDQUFjcUUsU0FBZCxHQUEwQixLQUFLckUsUUFBTCxDQUFjc0UsUUFBZCxDQUF1QnJCLE1BQXJELEVBQTZEO01BQzNELEtBQUtzQixNQUFMO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsS0FBS3JHLEtBQUwsQ0FBVzRHLFlBQVgsQ0FBd0IsQ0FBeEIsRUFBMkI3SCxrQkFBa0IsQ0FBQ2tDLHdCQUFuQixDQUE0QzBFLElBQXZFLEVBQTZFLElBQTdFO0lBQ0Q7RUFDRixDQVBEOztFQVFBL0YsS0FBSyxDQUFDYSxTQUFOLENBQWdCNEUsTUFBaEIsR0FBeUIsWUFBWTtJQUNuQyxJQUFJMUYsQ0FBSjtJQUNBLElBQUlFLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS1UsUUFBTDs7SUFDQSxJQUFJLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBaEIsSUFBcUIsQ0FBekIsRUFBNEI7TUFDMUIsT0FBTyxLQUFLQyxRQUFaO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsT0FBTyxLQUFLRCxRQUFMLEdBQWdCLENBQWhCLEVBQW1CLEtBQUtJLElBQUwsQ0FBVXVELFdBQVYsQ0FBc0IsS0FBSzlELE1BQTNCLENBQW5CLEVBQXVELENBQUMsQ0FBQyxZQUFZO1FBQzFFLElBQUlULENBQUMsR0FBRztVQUNObUgsUUFBUSxFQUFFakgsQ0FBQyxDQUFDYyxJQUFGLENBQU9vRyxxQkFBUCxDQUE2QjNILEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUXlGLElBQXJDLENBREo7VUFFTjFELE1BQU0sRUFBRXZDLENBQUMsQ0FBQzZCLEdBQUYsQ0FBTVcsV0FBTixHQUFvQnhDLENBQUMsQ0FBQzZCLEdBQUYsQ0FBTWE7UUFGNUIsQ0FBUjtRQUlBLElBQUlkLENBQUMsR0FBR3hDLG1CQUFtQixXQUFuQixDQUE0QjhDLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q1UsUUFBN0MsQ0FBc0RzRSxZQUF0RCxFQUFSOztRQUNBLEtBQUssSUFBSXJKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4RCxDQUFDLENBQUNzRCxNQUF0QixFQUE4QnBILENBQUMsRUFBL0IsRUFBbUM7VUFDakMsSUFBSTJILENBQUMsR0FBRzdELENBQUMsQ0FBQzlELENBQUQsQ0FBVDs7VUFDQSxJQUFJMkgsQ0FBQyxDQUFDMkIsU0FBRixFQUFKLEVBQW1CO1lBQ2pCLElBQUlyQixDQUFDLEdBQUdOLENBQUMsQ0FBQzRCLGFBQUYsRUFBUjs7WUFDQSxLQUFLLElBQUk1SSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0gsQ0FBQyxDQUFDYixNQUF0QixFQUE4QnpHLENBQUMsRUFBL0IsRUFBbUM7Y0FDakMsSUFBSUMsQ0FBQyxHQUFHcUgsQ0FBQyxDQUFDdEgsQ0FBRCxDQUFUOztjQUNBLElBQUljLEVBQUUsQ0FBQytILFlBQUgsQ0FBZ0JDLGFBQWhCLENBQThCN0ksQ0FBOUIsRUFBaUNvQixDQUFqQyxDQUFKLEVBQXlDO2dCQUN2QyxPQUFPLElBQVA7Y0FDRDtZQUNGO1VBQ0Y7UUFDRjs7UUFDRCxPQUFPLEtBQVA7TUFDRCxDQW5CK0QsRUFBRixJQW1CdkQsQ0FBQyxDQUFDQSxDQUFDLEdBQUdWLG1CQUFtQixXQUFuQixDQUE0QjhDLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q3FGLE9BQWxELEVBQTJEeEMsTUFBM0QsRUFBRCxLQUF5RWxGLENBQUMsQ0FBQ2dCLElBQUYsQ0FBT3VELFdBQVAsQ0FBbUJyRSxDQUFDLENBQUNTLE1BQXJCLEdBQThCbEIsRUFBRSxDQUFDaUIsSUFBSCxDQUFRMkYsUUFBUixDQUFpQm5HLENBQUMsQ0FBQ1MsTUFBbkIsRUFBMkJULENBQUMsQ0FBQ1MsTUFBN0IsRUFBcUNULENBQUMsQ0FBQ08sTUFBdkMsQ0FBOUIsRUFBOEVQLENBQUMsQ0FBQ1MsTUFBRixDQUFTZ0csR0FBVCxNQUFrQnpHLENBQUMsQ0FBQzZCLEdBQUYsQ0FBTVcsV0FBTixHQUFvQnhDLENBQUMsQ0FBQzZCLEdBQUYsQ0FBTWEsV0FBbk0sQ0FuQnVELElBbUI0SixDQUFDLENBQUMsWUFBWTtRQUN0TyxJQUFJNUMsQ0FBQyxHQUFHVixtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNVLFFBQTdDLENBQXNENEUsY0FBdEQsRUFBUjs7UUFDQSxLQUFLLElBQUk3RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOUIsQ0FBQyxDQUFDb0YsTUFBdEIsRUFBOEJ0RCxDQUFDLEVBQS9CLEVBQW1DO1VBQ2pDLElBQUk5RCxDQUFDLEdBQUdnQyxDQUFDLENBQUM4QixDQUFELENBQVQ7O1VBQ0EsSUFBSSxDQUFDOUQsQ0FBQyxDQUFDa0gsTUFBRixFQUFELEtBQWdCbEgsQ0FBQyxDQUFDZ0QsSUFBRixDQUFPdUQsV0FBUCxDQUFtQnJFLENBQUMsQ0FBQ1MsTUFBckIsR0FBOEJsQixFQUFFLENBQUNpQixJQUFILENBQVEyRixRQUFSLENBQWlCbkcsQ0FBQyxDQUFDUyxNQUFuQixFQUEyQlQsQ0FBQyxDQUFDUyxNQUE3QixFQUFxQ1QsQ0FBQyxDQUFDTyxNQUF2QyxDQUE5QixFQUE4RVAsQ0FBQyxDQUFDUyxNQUFGLENBQVNnRyxHQUFULE1BQWtCekcsQ0FBQyxDQUFDNkIsR0FBRixDQUFNVyxXQUFOLEdBQW9CeEMsQ0FBQyxDQUFDNkIsR0FBRixDQUFNYSxXQUExSSxDQUFKLEVBQTRKO1lBQzFKLE9BQU8sSUFBUDtVQUNEO1FBQ0Y7O1FBQ0QsT0FBTyxLQUFQO01BQ0QsQ0FUMk4sRUFuQjVOO0lBNkJEO0VBQ0YsQ0FyQ0Q7O0VBc0NBM0MsS0FBSyxDQUFDYSxTQUFOLENBQWdCOEUsT0FBaEIsR0FBMEIsWUFBWTtJQUNwQyxJQUFJNUYsQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLZ0IsSUFBTCxDQUFVdUQsV0FBVixDQUFzQixLQUFLOUQsTUFBM0I7SUFDQSxPQUFPLFlBQVk7TUFDakIsSUFBSVAsQ0FBQyxHQUFHLElBQVI7TUFDQSxJQUFJNEIsQ0FBQyxHQUFHLENBQUMsQ0FBVDtNQUNBLElBQUk5RCxDQUFDLEdBQUcsQ0FBQyxDQUFUO01BQ0EsSUFBSTJILENBQUMsR0FBR3JHLG1CQUFtQixXQUFuQixDQUE0QjhDLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q3FGLE9BQXJEOztNQUNBLElBQUksQ0FBQy9CLENBQUMsQ0FBQ1QsTUFBRixFQUFMLEVBQWlCO1FBQ2ZTLENBQUMsQ0FBQzNFLElBQUYsQ0FBT3VELFdBQVAsQ0FBbUJ2RSxDQUFDLENBQUNXLE1BQXJCO1FBQ0FsQixFQUFFLENBQUNpQixJQUFILENBQVEyRixRQUFSLENBQWlCckcsQ0FBQyxDQUFDVyxNQUFuQixFQUEyQlgsQ0FBQyxDQUFDVyxNQUE3QixFQUFxQ1gsQ0FBQyxDQUFDUyxNQUF2Qzs7UUFDQSxJQUFJVCxDQUFDLENBQUNXLE1BQUYsQ0FBU2dHLEdBQVQsTUFBa0IzRyxDQUFDLENBQUMrQixHQUFGLENBQU1XLFdBQU4sR0FBb0IxQyxDQUFDLENBQUMrQixHQUFGLENBQU1hLFdBQWhELEVBQTZEO1VBQzNEMUMsQ0FBQyxHQUFHeUYsQ0FBQyxDQUFDM0UsSUFBTixFQUFZYyxDQUFDLEdBQUc5QixDQUFDLENBQUNXLE1BQUYsQ0FBU2dHLEdBQVQsRUFBaEI7UUFDRDtNQUNGOztNQUNELElBQUlWLENBQUMsR0FBRzNHLG1CQUFtQixXQUFuQixDQUE0QjhDLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q1UsUUFBN0MsQ0FBc0Q0RSxjQUF0RCxFQUFSOztNQUNBLEtBQUssSUFBSWhKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzSCxDQUFDLENBQUNiLE1BQXRCLEVBQThCekcsQ0FBQyxFQUEvQixFQUFtQztRQUNqQyxJQUFJLENBQUMsQ0FBQ2lKLENBQUMsR0FBRzNCLENBQUMsQ0FBQ3RILENBQUQsQ0FBTixFQUFXdUcsTUFBWCxFQUFMLEVBQTBCO1VBQ3hCMEMsQ0FBQyxDQUFDNUcsSUFBRixDQUFPdUQsV0FBUCxDQUFtQnZFLENBQUMsQ0FBQ1csTUFBckI7VUFDQWxCLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUTJGLFFBQVIsQ0FBaUJyRyxDQUFDLENBQUNXLE1BQW5CLEVBQTJCWCxDQUFDLENBQUNXLE1BQTdCLEVBQXFDWCxDQUFDLENBQUNTLE1BQXZDOztVQUNBLElBQUlULENBQUMsQ0FBQ1csTUFBRixDQUFTZ0csR0FBVCxNQUFrQjNHLENBQUMsQ0FBQytCLEdBQUYsQ0FBTVcsV0FBTixHQUFvQjFDLENBQUMsQ0FBQytCLEdBQUYsQ0FBTWEsV0FBNUMsS0FBNEQsQ0FBQyxDQUFELElBQU1kLENBQU4sSUFBVzlCLENBQUMsQ0FBQ1csTUFBRixDQUFTZ0csR0FBVCxLQUFpQjdFLENBQXhGLENBQUosRUFBZ0c7WUFDOUY1QixDQUFDLEdBQUcwSCxDQUFDLENBQUM1RyxJQUFOLEVBQVljLENBQUMsR0FBRzlCLENBQUMsQ0FBQ1csTUFBRixDQUFTZ0csR0FBVCxFQUFoQjtVQUNEO1FBQ0Y7TUFDRjs7TUFDRCxJQUFJL0gsQ0FBQyxHQUFHO1FBQ051SSxRQUFRLEVBQUVuSCxDQUFDLENBQUNnQixJQUFGLENBQU9vRyxxQkFBUCxDQUE2QjNILEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUXlGLElBQXJDLENBREo7UUFFTjFELE1BQU0sRUFBRXpDLENBQUMsQ0FBQytCLEdBQUYsQ0FBTVcsV0FBTixHQUFvQjFDLENBQUMsQ0FBQytCLEdBQUYsQ0FBTWE7TUFGNUIsQ0FBUjtNQUlBLElBQUlpRixDQUFDLEdBQUc7UUFDTlYsUUFBUSxFQUFFbkgsQ0FBQyxDQUFDZ0IsSUFBRixDQUFPb0cscUJBQVAsQ0FBNkIzSCxFQUFFLENBQUNpQixJQUFILENBQVF5RixJQUFyQyxDQURKO1FBRU4xRCxNQUFNLEVBQUV6QyxDQUFDLENBQUMrQixHQUFGLENBQU1XO01BRlIsQ0FBUjtNQUlBLElBQUlvRixDQUFDLEdBQUd4SSxtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNVLFFBQTdDLENBQXNEc0UsWUFBdEQsRUFBUjs7TUFDQSxLQUFLLElBQUlVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELENBQUMsQ0FBQzFDLE1BQXRCLEVBQThCMkMsQ0FBQyxFQUEvQixFQUFtQztRQUNqQyxJQUFJSCxDQUFKOztRQUNBLElBQUksQ0FBQ0EsQ0FBQyxHQUFHRSxDQUFDLENBQUNDLENBQUQsQ0FBTixFQUFXVCxTQUFYLEVBQUosRUFBNEI7VUFDMUIsSUFBSVUsQ0FBQyxHQUFHSixDQUFDLENBQUNLLGNBQUYsRUFBUjs7VUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLENBQUMsQ0FBQzVDLE1BQXRCLEVBQThCOEMsQ0FBQyxFQUEvQixFQUFtQztZQUNqQyxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0UsQ0FBRCxDQUFUOztZQUNBLElBQUl6SSxFQUFFLENBQUMrSCxZQUFILENBQWdCQyxhQUFoQixDQUE4QlUsQ0FBQyxDQUFDQyxNQUFoQyxFQUF3Q3hKLENBQXhDLENBQUosRUFBZ0Q7Y0FDOUMsSUFBSXlKLENBQUMsR0FBR0YsQ0FBQyxDQUFDRyxPQUFGLENBQVVsQixxQkFBVixDQUFnQzNILEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUXlGLElBQXhDLENBQVI7Y0FDQW5HLENBQUMsQ0FBQ1csTUFBRixHQUFXckIsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDa0csTUFBN0MsQ0FBb0RDLG9CQUFwRCxDQUF5RUgsQ0FBekUsQ0FBWDtjQUNBNUksRUFBRSxDQUFDaUIsSUFBSCxDQUFRMkYsUUFBUixDQUFpQnJHLENBQUMsQ0FBQ1csTUFBbkIsRUFBMkJYLENBQUMsQ0FBQ1csTUFBN0IsRUFBcUNYLENBQUMsQ0FBQ1MsTUFBdkM7O2NBQ0EsSUFBSSxDQUFDLENBQUQsSUFBTXFCLENBQU4sSUFBVzlCLENBQUMsQ0FBQ1csTUFBRixDQUFTZ0csR0FBVCxLQUFpQjdFLENBQWhDLEVBQW1DO2dCQUNqQzlELENBQUMsR0FBR3lCLEVBQUUsQ0FBQytILFlBQUgsQ0FBZ0JDLGFBQWhCLENBQThCVSxDQUFDLENBQUNDLE1BQWhDLEVBQXdDUCxDQUF4QyxDQUFKO2dCQUNBM0gsQ0FBQyxHQUFHaUksQ0FBQyxDQUFDRyxPQUFOO2dCQUNBeEcsQ0FBQyxHQUFHOUIsQ0FBQyxDQUFDVyxNQUFGLENBQVNnRyxHQUFULEVBQUo7Y0FDRDtZQUNGO1VBQ0Y7UUFDRjtNQUNGOztNQUNELElBQUl6RyxDQUFKLEVBQU87UUFDTCxPQUFPO1VBQ0xrRyxHQUFHLEVBQUVsRyxDQURBO1VBRUwyRixNQUFNLEVBQUUsQ0FBQyxDQUFELElBQU03SCxDQUFOLEdBQVU4RCxDQUFDLElBQUk5QixDQUFDLENBQUMrQixHQUFGLENBQU1XLFdBQXJCLEdBQW1DMUU7UUFGdEMsQ0FBUDtNQUlELENBTEQsTUFLTztRQUNMLE9BQU8sSUFBUDtNQUNEO0lBQ0YsQ0ExRE0sTUEwREEsSUExRFA7RUEyREQsQ0E5REQ7O0VBK0RBaUMsS0FBSyxDQUFDYSxTQUFOLENBQWdCZ0YsVUFBaEIsR0FBNkIsWUFBWTtJQUN2QyxJQUFJOUYsQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLZ0IsSUFBTCxDQUFVdUQsV0FBVixDQUFzQixLQUFLOUQsTUFBM0I7SUFDQSxPQUFPLENBQUMsQ0FBQyxZQUFZO01BQ25CLElBQUlQLENBQUMsR0FBRyxJQUFSO01BQ0EsSUFBSTRCLENBQUMsR0FBRyxDQUFDLENBQVQ7TUFDQSxJQUFJOUQsQ0FBQyxHQUFHLENBQUMsQ0FBVDtNQUNBLElBQUkySCxDQUFDLEdBQUdyRyxtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNxRixPQUFyRDs7TUFDQSxJQUFJLENBQUMvQixDQUFDLENBQUNULE1BQUYsRUFBTCxFQUFpQjtRQUNmUyxDQUFDLENBQUMzRSxJQUFGLENBQU91RCxXQUFQLENBQW1CdkUsQ0FBQyxDQUFDVyxNQUFyQjtRQUNBbEIsRUFBRSxDQUFDaUIsSUFBSCxDQUFRMkYsUUFBUixDQUFpQnJHLENBQUMsQ0FBQ1csTUFBbkIsRUFBMkJYLENBQUMsQ0FBQ1csTUFBN0IsRUFBcUNYLENBQUMsQ0FBQ1MsTUFBdkM7O1FBQ0EsSUFBSVQsQ0FBQyxDQUFDVyxNQUFGLENBQVNnRyxHQUFULE1BQWtCM0csQ0FBQyxDQUFDK0IsR0FBRixDQUFNVyxXQUE1QixFQUF5QztVQUN2Q3hDLENBQUMsR0FBR3lGLENBQUMsQ0FBQzNFLElBQU4sRUFBWWMsQ0FBQyxHQUFHOUIsQ0FBQyxDQUFDVyxNQUFGLENBQVNnRyxHQUFULEVBQWhCO1FBQ0Q7TUFDRjs7TUFDRCxJQUFJVixDQUFDLEdBQUczRyxtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNVLFFBQTdDLENBQXNENEUsY0FBdEQsRUFBUjs7TUFDQSxLQUFLLElBQUloSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0gsQ0FBQyxDQUFDYixNQUF0QixFQUE4QnpHLENBQUMsRUFBL0IsRUFBbUM7UUFDakMsSUFBSSxDQUFDLENBQUNvSixDQUFDLEdBQUc5QixDQUFDLENBQUN0SCxDQUFELENBQU4sRUFBV3VHLE1BQVgsRUFBTCxFQUEwQjtVQUN4QjZDLENBQUMsQ0FBQy9HLElBQUYsQ0FBT3VELFdBQVAsQ0FBbUJ2RSxDQUFDLENBQUNXLE1BQXJCO1VBQ0FsQixFQUFFLENBQUNpQixJQUFILENBQVEyRixRQUFSLENBQWlCckcsQ0FBQyxDQUFDVyxNQUFuQixFQUEyQlgsQ0FBQyxDQUFDVyxNQUE3QixFQUFxQ1gsQ0FBQyxDQUFDUyxNQUF2Qzs7VUFDQSxJQUFJVCxDQUFDLENBQUNXLE1BQUYsQ0FBU2dHLEdBQVQsTUFBa0IzRyxDQUFDLENBQUMrQixHQUFGLENBQU1XLFdBQXhCLEtBQXdDLENBQUMsQ0FBRCxJQUFNWixDQUFOLElBQVc5QixDQUFDLENBQUNXLE1BQUYsQ0FBU2dHLEdBQVQsS0FBaUI3RSxDQUFwRSxDQUFKLEVBQTRFO1lBQzFFNUIsQ0FBQyxHQUFHNkgsQ0FBQyxDQUFDL0csSUFBTixFQUFZYyxDQUFDLEdBQUc5QixDQUFDLENBQUNXLE1BQUYsQ0FBU2dHLEdBQVQsRUFBaEI7VUFDRDtRQUNGO01BQ0Y7O01BQ0QsSUFBSS9ILENBQUMsR0FBRztRQUNOdUksUUFBUSxFQUFFbkgsQ0FBQyxDQUFDZ0IsSUFBRixDQUFPb0cscUJBQVAsQ0FBNkIzSCxFQUFFLENBQUNpQixJQUFILENBQVF5RixJQUFyQyxDQURKO1FBRU4xRCxNQUFNLEVBQUV6QyxDQUFDLENBQUMrQixHQUFGLENBQU1XO01BRlIsQ0FBUjtNQUlBLElBQUltRixDQUFDLEdBQUd2SSxtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNVLFFBQTdDLENBQXNEc0UsWUFBdEQsRUFBUjs7TUFDQSxLQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELENBQUMsQ0FBQ3pDLE1BQXRCLEVBQThCMEMsQ0FBQyxFQUEvQixFQUFtQztRQUNqQyxJQUFJQyxDQUFKOztRQUNBLElBQUksQ0FBQ0EsQ0FBQyxHQUFHRixDQUFDLENBQUNDLENBQUQsQ0FBTixFQUFXUixTQUFYLEVBQUosRUFBNEI7VUFDMUIsSUFBSU0sQ0FBQyxHQUFHRyxDQUFDLENBQUNFLGNBQUYsRUFBUjs7VUFDQSxLQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLENBQUMsQ0FBQ3hDLE1BQXRCLEVBQThCNEMsQ0FBQyxFQUEvQixFQUFtQztZQUNqQyxJQUFJRSxDQUFDLEdBQUdOLENBQUMsQ0FBQ0ksQ0FBRCxDQUFUOztZQUNBLElBQUl2SSxFQUFFLENBQUMrSCxZQUFILENBQWdCQyxhQUFoQixDQUE4QlMsQ0FBQyxDQUFDRSxNQUFoQyxFQUF3Q3hKLENBQXhDLENBQUosRUFBZ0Q7Y0FDOUMsSUFBSXVKLENBQUMsR0FBR0QsQ0FBQyxDQUFDSSxPQUFGLENBQVVsQixxQkFBVixDQUFnQzNILEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUXlGLElBQXhDLENBQVI7Y0FDQW5HLENBQUMsQ0FBQ1csTUFBRixHQUFXckIsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDa0csTUFBN0MsQ0FBb0RDLG9CQUFwRCxDQUF5RUwsQ0FBekUsQ0FBWDtjQUNBMUksRUFBRSxDQUFDaUIsSUFBSCxDQUFRMkYsUUFBUixDQUFpQnJHLENBQUMsQ0FBQ1csTUFBbkIsRUFBMkJYLENBQUMsQ0FBQ1csTUFBN0IsRUFBcUNYLENBQUMsQ0FBQ1MsTUFBdkM7O2NBQ0EsSUFBSSxDQUFDLENBQUQsSUFBTXFCLENBQU4sSUFBVzlCLENBQUMsQ0FBQ1csTUFBRixDQUFTZ0csR0FBVCxLQUFpQjdFLENBQWhDLEVBQW1DO2dCQUNqQzlELENBQUMsR0FBRyxJQUFKO2dCQUNBa0MsQ0FBQyxHQUFHZ0ksQ0FBQyxDQUFDSSxPQUFOO2dCQUNBeEcsQ0FBQyxHQUFHOUIsQ0FBQyxDQUFDVyxNQUFGLENBQVNnRyxHQUFULEVBQUo7Y0FDRDtZQUNGO1VBQ0Y7UUFDRjtNQUNGOztNQUNELElBQUl6RyxDQUFKLEVBQU87UUFDTCxPQUFPO1VBQ0xrRyxHQUFHLEVBQUVsRyxDQURBO1VBRUwyRixNQUFNLEVBQUUsQ0FBQyxDQUFELElBQU03SCxDQUFOLEdBQVU4RCxDQUFDLElBQUk5QixDQUFDLENBQUMrQixHQUFGLENBQU1XLFdBQXJCLEdBQW1DMUU7UUFGdEMsQ0FBUDtNQUlELENBTEQsTUFLTztRQUNMLE9BQU8sSUFBUDtNQUNEO0lBQ0YsQ0F0RFEsRUFBRixLQXNEQyxLQUFLeUssYUFBTCxJQUFzQixJQXREdkIsQ0FBUDtFQXVERCxDQTFERDs7RUEyREF4SSxLQUFLLENBQUNhLFNBQU4sQ0FBZ0IySCxhQUFoQixHQUFnQyxZQUFZO0lBQzFDLEtBQUtqRCxLQUFMLEdBQWE3RyxDQUFDLENBQUM0QyxNQUFmO0lBQ0EsS0FBS2xCLEtBQUwsQ0FBVzRHLFlBQVgsQ0FBd0IsQ0FBeEIsRUFBMkI3SCxrQkFBa0IsQ0FBQ2tDLHdCQUFuQixDQUE0Q0MsTUFBdkUsRUFBK0UsS0FBL0U7SUFDQSxLQUFLZixJQUFMLENBQVU1QixDQUFDLENBQUMyQyxNQUFaLElBQXNCLENBQUMsQ0FBdkI7SUFDQSxLQUFLbUgsUUFBTDtFQUNELENBTEQ7O0VBTUF6SSxLQUFLLENBQUNhLFNBQU4sQ0FBZ0I0SCxRQUFoQixHQUEyQixZQUFZO0lBQ3JDLElBQUkxSSxDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtRLElBQUwsQ0FBVTVCLENBQUMsQ0FBQzJDLE1BQVosSUFBc0IsQ0FBdEI7SUFDQSxLQUFLUCxJQUFMLENBQVV1RCxXQUFWLENBQXNCLEtBQUs5RCxNQUEzQjtJQUNBLElBQUlQLENBQUMsR0FBRyxLQUFLeUksU0FBTCxFQUFSOztJQUNBLElBQUk3RyxDQUFDLEdBQUcsWUFBWTtNQUNsQixJQUFJNUIsQ0FBQyxHQUFHLElBQVI7TUFDQSxJQUFJNEIsQ0FBQyxHQUFHLENBQUMsQ0FBVDtNQUNBLElBQUk5RCxDQUFDLEdBQUdzQixtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNxRixPQUFyRDs7TUFDQSxJQUFJLENBQUMxSixDQUFDLENBQUNrSCxNQUFGLEVBQUwsRUFBaUI7UUFDZmxILENBQUMsQ0FBQ2dELElBQUYsQ0FBT3VELFdBQVAsQ0FBbUJ2RSxDQUFDLENBQUNXLE1BQXJCO1FBQ0FsQixFQUFFLENBQUNpQixJQUFILENBQVEyRixRQUFSLENBQWlCckcsQ0FBQyxDQUFDVyxNQUFuQixFQUEyQlgsQ0FBQyxDQUFDVyxNQUE3QixFQUFxQ1gsQ0FBQyxDQUFDUyxNQUF2Qzs7UUFDQSxJQUFJVCxDQUFDLENBQUNXLE1BQUYsQ0FBU2dHLEdBQVQsTUFBa0IzRyxDQUFDLENBQUMrQixHQUFGLENBQU1XLFdBQTVCLEVBQXlDO1VBQ3ZDeEMsQ0FBQyxHQUFHbEMsQ0FBSixFQUFPOEQsQ0FBQyxHQUFHOUIsQ0FBQyxDQUFDVyxNQUFGLENBQVNnRyxHQUFULEVBQVg7UUFDRDtNQUNGOztNQUNELElBQUloQixDQUFDLEdBQUdyRyxtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNVLFFBQTdDLENBQXNENEUsY0FBdEQsRUFBUjs7TUFDQSxLQUFLLElBQUkxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixDQUFDLENBQUNQLE1BQXRCLEVBQThCYSxDQUFDLEVBQS9CLEVBQW1DO1FBQ2pDLElBQUksQ0FBQyxDQUFDNkIsQ0FBQyxHQUFHbkMsQ0FBQyxDQUFDTSxDQUFELENBQU4sRUFBV2YsTUFBWCxFQUFMLEVBQTBCO1VBQ3hCNEMsQ0FBQyxDQUFDOUcsSUFBRixDQUFPdUQsV0FBUCxDQUFtQnZFLENBQUMsQ0FBQ1csTUFBckI7VUFDQWxCLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUTJGLFFBQVIsQ0FBaUJyRyxDQUFDLENBQUNXLE1BQW5CLEVBQTJCWCxDQUFDLENBQUNXLE1BQTdCLEVBQXFDWCxDQUFDLENBQUNTLE1BQXZDOztVQUNBLElBQUlULENBQUMsQ0FBQ1csTUFBRixDQUFTZ0csR0FBVCxNQUFrQjNHLENBQUMsQ0FBQytCLEdBQUYsQ0FBTVcsV0FBeEIsS0FBd0MsQ0FBQyxDQUFELElBQU1aLENBQU4sSUFBVzlCLENBQUMsQ0FBQ1csTUFBRixDQUFTZ0csR0FBVCxLQUFpQjdFLENBQXBFLENBQUosRUFBNEU7WUFDMUU1QixDQUFDLEdBQUc0SCxDQUFKLEVBQU9oRyxDQUFDLEdBQUc5QixDQUFDLENBQUNXLE1BQUYsQ0FBU2dHLEdBQVQsRUFBWDtVQUNEO1FBQ0Y7TUFDRjs7TUFDRCxJQUFJaEksQ0FBQyxHQUFHO1FBQ053SSxRQUFRLEVBQUVuSCxDQUFDLENBQUNnQixJQUFGLENBQU9vRyxxQkFBUCxDQUE2QjNILEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUXlGLElBQXJDLENBREo7UUFFTjFELE1BQU0sRUFBRXpDLENBQUMsQ0FBQytCLEdBQUYsQ0FBTVc7TUFGUixDQUFSO01BSUEsSUFBSTlELENBQUMsR0FBR1UsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDVSxRQUE3QyxDQUFzRHNFLFlBQXRELEVBQVI7O01BQ0EsS0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHakosQ0FBQyxDQUFDd0csTUFBdEIsRUFBOEJ5QyxDQUFDLEVBQS9CLEVBQW1DO1FBQ2pDLElBQUlDLENBQUo7O1FBQ0EsSUFBSSxDQUFDQSxDQUFDLEdBQUdsSixDQUFDLENBQUNpSixDQUFELENBQU4sRUFBV1AsU0FBWCxFQUFKLEVBQTRCO1VBQzFCLElBQUlTLENBQUMsR0FBR0QsQ0FBQyxDQUFDUCxhQUFGLEVBQVI7O1VBQ0EsS0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRyxDQUFDLENBQUMzQyxNQUF0QixFQUE4QndDLENBQUMsRUFBL0IsRUFBbUM7WUFDakMsSUFBSUksQ0FBQyxHQUFHRCxDQUFDLENBQUNILENBQUQsQ0FBVDs7WUFDQSxJQUFJbkksRUFBRSxDQUFDK0gsWUFBSCxDQUFnQkMsYUFBaEIsQ0FBOEJPLENBQTlCLEVBQWlDckosQ0FBakMsQ0FBSixFQUF5QztjQUN2Q21KLENBQUMsQ0FBQzlHLElBQUYsQ0FBT3VELFdBQVAsQ0FBbUJ2RSxDQUFDLENBQUNXLE1BQXJCO2NBQ0FsQixFQUFFLENBQUNpQixJQUFILENBQVEyRixRQUFSLENBQWlCckcsQ0FBQyxDQUFDVyxNQUFuQixFQUEyQlgsQ0FBQyxDQUFDVyxNQUE3QixFQUFxQ1gsQ0FBQyxDQUFDUyxNQUF2Qzs7Y0FDQSxJQUFJLENBQUMsQ0FBRCxJQUFNcUIsQ0FBTixJQUFXOUIsQ0FBQyxDQUFDVyxNQUFGLENBQVNnRyxHQUFULEtBQWlCN0UsQ0FBaEMsRUFBbUM7Z0JBQ2pDNUIsQ0FBQyxHQUFHNEgsQ0FBSixFQUFPaEcsQ0FBQyxHQUFHOUIsQ0FBQyxDQUFDVyxNQUFGLENBQVNnRyxHQUFULEVBQVg7Y0FDRDtZQUNGO1VBQ0Y7UUFDRjtNQUNGOztNQUNELE9BQU96RyxDQUFQO0lBQ0QsQ0EzQ08sRUFBUjs7SUE0Q0EsSUFBSTRCLENBQUosRUFBTztNQUNMQSxDQUFDLENBQUNkLElBQUYsQ0FBT3VELFdBQVAsQ0FBbUIsS0FBSzVELE1BQXhCO01BQ0FtQixDQUFDLENBQUNDLEdBQUYsSUFBUyxLQUFLQSxHQUFMLENBQVM2RyxVQUFULElBQXVCOUcsQ0FBQyxDQUFDQyxHQUFGLENBQU1rQixFQUF0QyxLQUE2Qy9DLENBQUMsSUFBSTJJLE1BQU0sQ0FBQzNKLG9CQUFvQixDQUFDOEMsaUJBQXJCLENBQXVDQyxXQUF2QyxHQUFxRDZHLGdCQUFyRCxDQUFzRTdKLGlCQUFpQixDQUFDOEosMEJBQWxCLENBQTZDQyxjQUFuSCxDQUFELENBQXhEO01BQ0ExSixtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQzZHLFNBQXJDLENBQStDQyxhQUEvQyxDQUE2RCxLQUFLdkksTUFBTCxDQUFZd0ksS0FBWixFQUE3RCxFQUFrRnJILENBQUMsQ0FBQ3NILFVBQUYsQ0FBYWxKLENBQWIsQ0FBbEY7TUFDQVosbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUM2RyxTQUFyQyxDQUErQ0ksZUFBL0MsQ0FBK0QsS0FBSzFJLE1BQUwsQ0FBWXdJLEtBQVosRUFBL0QsRUFBb0YsT0FBcEY7TUFDQTFKLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUTJGLFFBQVIsQ0FBaUIsS0FBSzFGLE1BQXRCLEVBQThCLEtBQUtBLE1BQW5DLEVBQTJDLEtBQUtGLE1BQWhEO01BQ0EsT0FBTyxLQUFLLEtBQUs2RixPQUFMLENBQWEsS0FBSzNGLE1BQUwsQ0FBWTRGLENBQVosR0FBZ0IsQ0FBN0IsQ0FBWjtJQUNEO0VBQ0YsQ0F6REQ7O0VBMERBdEcsS0FBSyxDQUFDYSxTQUFOLENBQWdCVSxjQUFoQixHQUFpQyxZQUFZO0lBQzNDLEtBQUswRixNQUFMO0VBQ0QsQ0FGRDs7RUFHQWpILEtBQUssQ0FBQ2EsU0FBTixDQUFnQnNJLFVBQWhCLEdBQTZCLFVBQVVwSixDQUFWLEVBQWE7SUFDeEMsSUFBSUUsQ0FBSjs7SUFDQSxJQUFJLENBQUMsS0FBS2dGLE1BQUwsRUFBTCxFQUFvQjtNQUNsQixLQUFLaEMsRUFBTCxJQUFXbEQsQ0FBWDs7TUFDQSxJQUFJLEtBQUtrRCxFQUFMLElBQVcsQ0FBZixFQUFrQjtRQUNoQixLQUFLc0MsS0FBTCxHQUFhN0csQ0FBQyxDQUFDMkssSUFBZjtRQUNBaEssbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUM2RyxTQUFyQyxDQUErQ00sYUFBL0MsQ0FBNkQsS0FBS3ZJLElBQUwsQ0FBVXVELFdBQVYsRUFBN0QsRUFBc0YsR0FBdEY7UUFDQSxLQUFLaUYsVUFBTDtRQUNBLEtBQUs5SCxRQUFMO1FBQ0EsSUFBSUksQ0FBQyxHQUFHM0Msc0JBQXNCLENBQUNzSyxtQkFBdkIsQ0FBMkN4SCxXQUEzQyxHQUF5RHlILGNBQXpELEdBQTBFQyxXQUExRSxFQUFSOztRQUNBLElBQUk3SCxDQUFDLENBQUM4SCxJQUFGLElBQVUzSyxpQkFBaUIsQ0FBQzRLLHNCQUFsQixDQUF5Q0MsZUFBdkQsRUFBd0U7VUFDdEVoSSxDQUFDLENBQUNpSSxHQUFGO1VBQ0E1SyxzQkFBc0IsQ0FBQ3NLLG1CQUF2QixDQUEyQ3hILFdBQTNDLEdBQXlEeUgsY0FBekQsR0FBMEVNLFdBQTFFLENBQXNGbEksQ0FBdEY7UUFDRDs7UUFDRDNDLHNCQUFzQixDQUFDc0ssbUJBQXZCLENBQTJDeEgsV0FBM0MsR0FBeUR5SCxjQUF6RCxHQUEwRU8sVUFBMUUsQ0FBcUZqTCx3QkFBd0IsQ0FBQ2tMLHVCQUF6QixDQUFpREMsSUFBdEksRUFBNEksQ0FBNUk7TUFDRDs7TUFDRCxVQUFVakssQ0FBQyxHQUFHLEtBQUtpRCxNQUFuQixLQUE4QnpFLFNBQVMsS0FBS3dCLENBQTVDLElBQWlEQSxDQUFDLENBQUNxRCxLQUFGLENBQVEsS0FBS0wsRUFBYixFQUFpQixLQUFLTCxLQUF0QixDQUFqRDtJQUNEO0VBQ0YsQ0FsQkQ7O0VBbUJBNUMsS0FBSyxDQUFDYSxTQUFOLENBQWdCWSxRQUFoQixHQUEyQixZQUFZO0lBQ3JDLElBQUkxQixDQUFDLEdBQUdqQixtQkFBbUIsQ0FBQ3FMLGtCQUFwQixDQUF1QzlHLEtBQXZDLEdBQStDLEdBQS9DLEdBQXFELEtBQUt2QixHQUFMLENBQVNrQixFQUF0RTtJQUNBcEUsVUFBVSxDQUFDd0wsT0FBWCxDQUFtQnBJLFdBQW5CLEdBQWlDUCxRQUFqQyxDQUEwQzFCLENBQTFDLEVBQTZDLEtBQUtnQixJQUFsRDtJQUNBMUIsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDVSxRQUE3QyxDQUFzRHVILFFBQXRELENBQStELElBQS9EO0VBQ0QsQ0FKRDs7RUFLQXJLLEtBQUssQ0FBQ2EsU0FBTixDQUFnQm9FLE1BQWhCLEdBQXlCLFlBQVk7SUFDbkMsT0FBTyxLQUFLTSxLQUFMLElBQWM3RyxDQUFDLENBQUMySyxJQUF2QjtFQUNELENBRkQ7O0VBR0FySixLQUFLLENBQUNhLFNBQU4sQ0FBZ0J5SixRQUFoQixHQUEyQixVQUFVdkssQ0FBVixFQUFhO0lBQ3RDLEtBQUtPLFNBQUwsQ0FBZTJGLGNBQWYsR0FBZ0N6RyxFQUFFLENBQUNpQixJQUFILENBQVF5RixJQUF4QztJQUNBLEtBQUs5RixLQUFMLENBQVdtSyxNQUFYLEdBQW9CeEssQ0FBcEI7RUFDRCxDQUhEOztFQUlBQyxLQUFLLENBQUNhLFNBQU4sQ0FBZ0I2SCxTQUFoQixHQUE0QixZQUFZO0lBQ3RDLElBQUkzSSxDQUFDLEdBQUcsS0FBS2tFLE1BQWI7SUFDQSxJQUFJaEUsQ0FBQyxHQUFHLENBQVI7SUFDQSxJQUFJNEIsQ0FBQyxHQUFHLEtBQUsySSxXQUFMLENBQWlCbEwsc0JBQXNCLENBQUNtTCx1QkFBdkIsQ0FBK0NDLFNBQWhFLENBQVI7O0lBQ0EsS0FBSyxJQUFJM00sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhELENBQUMsQ0FBQ3NELE1BQXRCLEVBQThCcEgsQ0FBQyxFQUEvQixFQUFtQztNQUNqQ2tDLENBQUMsSUFBSTRCLENBQUMsQ0FBQzlELENBQUQsQ0FBRCxDQUFLNE0sSUFBTCxDQUFVQyxNQUFmO0lBQ0Q7O0lBQ0QsSUFBSSxLQUFLLEtBQUs5SSxHQUFMLENBQVMrSSxVQUFsQixFQUE4QjtNQUM1QixJQUFJbkYsQ0FBQyxHQUFHckcsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDVSxRQUE3QyxDQUFzRGdJLFdBQXRELENBQWtFOUwsaUJBQWlCLENBQUMrTCxxQkFBbEIsQ0FBd0NDLE1BQTFHLENBQVI7TUFDQXRGLENBQUMsS0FBS3pGLENBQUMsSUFBSXlGLENBQUMsQ0FBQ3VGLEtBQUYsQ0FBUSxDQUFSLENBQVYsQ0FBRDtNQUNBLElBQUlqRixDQUFDLEdBQUczRyxtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNVLFFBQTdDLENBQXNEZ0ksV0FBdEQsQ0FBa0U5TCxpQkFBaUIsQ0FBQytMLHFCQUFsQixDQUF3Q0csTUFBMUcsQ0FBUjtNQUNBbEYsQ0FBQyxLQUFLL0YsQ0FBQyxJQUFJK0YsQ0FBQyxDQUFDaUYsS0FBRixDQUFRLENBQVIsQ0FBVixDQUFEO0lBQ0Q7O0lBQ0RoTCxDQUFDLEdBQUcsQ0FBSixLQUFVQSxDQUFDLEdBQUcsQ0FBZDtJQUNBLE9BQU9GLENBQUMsR0FBR0UsQ0FBWDtFQUNELENBZkQ7O0VBZ0JBRCxLQUFLLENBQUNhLFNBQU4sQ0FBZ0J5RSxXQUFoQixHQUE4QixZQUFZO0lBQ3hDLElBQUl2RixDQUFDLEdBQUcsS0FBSytCLEdBQUwsQ0FBU3FKLGNBQWpCO0lBQ0EsSUFBSWxMLENBQUMsR0FBRyxDQUFSO0lBQ0EsSUFBSTRCLENBQUMsR0FBRyxLQUFLMkksV0FBTCxDQUFpQmxMLHNCQUFzQixDQUFDbUwsdUJBQXZCLENBQStDVyxXQUFoRSxDQUFSOztJQUNBLEtBQUssSUFBSXJOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4RCxDQUFDLENBQUNzRCxNQUF0QixFQUE4QnBILENBQUMsRUFBL0IsRUFBbUM7TUFDakNrQyxDQUFDLElBQUk0QixDQUFDLENBQUM5RCxDQUFELENBQUQsQ0FBSzRNLElBQUwsQ0FBVVUsUUFBZjtJQUNEOztJQUNELE9BQU90TCxDQUFDLEdBQUdFLENBQVg7RUFDRCxDQVJEOztFQVNBRCxLQUFLLENBQUNhLFNBQU4sQ0FBZ0JnRyxRQUFoQixHQUEyQixZQUFZO0lBQ3JDLElBQUk5RyxDQUFDLEdBQUcsS0FBSytCLEdBQUwsQ0FBU3dKLEtBQWpCO0lBQ0EsSUFBSXJMLENBQUMsR0FBRyxDQUFSO0lBQ0EsSUFBSTRCLENBQUMsR0FBRyxLQUFLMkksV0FBTCxDQUFpQmxMLHNCQUFzQixDQUFDbUwsdUJBQXZCLENBQStDYyxTQUFoRSxDQUFSOztJQUNBLEtBQUssSUFBSXhOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4RCxDQUFDLENBQUNzRCxNQUF0QixFQUE4QnBILENBQUMsRUFBL0IsRUFBbUM7TUFDakNrQyxDQUFDLElBQUk0QixDQUFDLENBQUM5RCxDQUFELENBQUQsQ0FBSzRNLElBQUwsQ0FBVUMsTUFBZjtJQUNEOztJQUNEdkwsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDVSxRQUE3QyxDQUFzRDBJLFdBQXRELENBQWtFeE0saUJBQWlCLENBQUN5TSwwQkFBbEIsQ0FBNkNDLFNBQS9HLE1BQThIekwsQ0FBQyxJQUFJWixtQkFBbUIsV0FBbkIsQ0FBNEI4QyxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNVLFFBQTdDLENBQXNEMEksV0FBdEQsQ0FBa0V4TSxpQkFBaUIsQ0FBQ3lNLDBCQUFsQixDQUE2Q0MsU0FBL0csRUFBMEgsQ0FBMUgsQ0FBbkk7SUFDQXpMLENBQUMsR0FBRyxDQUFKLEtBQVVBLENBQUMsR0FBRyxHQUFkO0lBQ0EsT0FBT0YsQ0FBQyxHQUFHRSxDQUFYO0VBQ0QsQ0FWRDs7RUFXQUQsS0FBSyxDQUFDYSxTQUFOLENBQWdCOEssUUFBaEIsR0FBMkIsVUFBVTVMLENBQVYsRUFBYTtJQUN0QyxJQUFJRSxDQUFKO0lBQ0EsSUFBSTRCLENBQUo7O0lBQ0EsSUFBSSxDQUFDLEtBQUtvRCxNQUFMLEVBQUwsRUFBb0I7TUFDbEIsS0FBS2hDLEVBQUwsSUFBV2xELENBQUMsR0FBRyxLQUFLNkMsS0FBcEI7TUFDQSxLQUFLSyxFQUFMLEdBQVUsS0FBS0wsS0FBZixLQUF5QixLQUFLSyxFQUFMLEdBQVUsS0FBS0wsS0FBeEM7TUFDQSxVQUFVM0MsQ0FBQyxHQUFHLEtBQUtpRCxNQUFuQixLQUE4QnpFLFNBQVMsS0FBS3dCLENBQTVDLElBQWlEQSxDQUFDLENBQUNxRCxLQUFGLENBQVEsS0FBS0wsRUFBYixFQUFpQixLQUFLTCxLQUF0QixDQUFqRDtNQUNBLFVBQVVmLENBQUMsR0FBRyxLQUFLcUIsTUFBbkIsS0FBOEJ6RSxTQUFTLEtBQUtvRCxDQUE1QyxJQUFpREEsQ0FBQyxDQUFDK0osT0FBRixFQUFqRDtJQUNEO0VBQ0YsQ0FURDs7RUFVQTVMLEtBQUssQ0FBQ2EsU0FBTixDQUFnQmtFLGFBQWhCLEdBQWdDLFlBQVk7SUFDMUMsSUFBSWhGLENBQUMsR0FBR1YsbUJBQW1CLFdBQW5CLENBQTRCOEMsUUFBNUIsQ0FBcUMwSixLQUE3QztJQUNBLEtBQUt6TCxLQUFMLENBQVcwTCxTQUFYLEdBQXVCL0wsQ0FBdkI7RUFDRCxDQUhEOztFQUlBN0IsWUFBWSxDQUFDLENBQUMwQixZQUFZLENBQUM7SUFDekIrSixJQUFJLEVBQUVvQyxFQUFFLENBQUNDLFFBRGdCO0lBRXpCQyxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUGpNLEtBQUssQ0FBQ2EsU0FIQyxFQUdVLE9BSFYsRUFHbUJwQyxTQUhuQixDQUFaO0VBSUFQLFlBQVksQ0FBQyxDQUFDMEIsWUFBWSxDQUFDO0lBQ3pCK0osSUFBSSxFQUFFbkssRUFBRSxDQUFDME0sSUFEZ0I7SUFFekJELE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQak0sS0FBSyxDQUFDYSxTQUhDLEVBR1UsTUFIVixFQUdrQnBDLFNBSGxCLENBQVo7RUFJQSxPQUFPUCxZQUFZLENBQUMsQ0FBQ3dCLFdBQUQsQ0FBRCxFQUFnQk0sS0FBaEIsQ0FBbkI7QUFDRCxDQXRkNkIsQ0FzZDVCVixzQkFBc0IsQ0FBQzZNLG1CQXRkSyxDQUE5Qjs7QUF1ZEE3TixPQUFPLFdBQVAsR0FBa0J3Qix1QkFBbEI7O0FBQ0EsQ0FBQyxVQUFVQyxDQUFWLEVBQWE7RUFDWkEsQ0FBQyxDQUFDQSxDQUFDLENBQUN5RixJQUFGLEdBQVMsQ0FBVixDQUFELEdBQWdCLE1BQWhCO0VBQ0F6RixDQUFDLENBQUNBLENBQUMsQ0FBQ2dHLElBQUYsR0FBUyxDQUFWLENBQUQsR0FBZ0IsTUFBaEI7RUFDQWhHLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDdUIsTUFBRixHQUFXLENBQVosQ0FBRCxHQUFrQixRQUFsQjtFQUNBdkIsQ0FBQyxDQUFDQSxDQUFDLENBQUMrRixJQUFGLEdBQVMsQ0FBVixDQUFELEdBQWdCLE1BQWhCO0VBQ0EvRixDQUFDLENBQUNBLENBQUMsQ0FBQ3NKLElBQUYsR0FBUyxDQUFWLENBQUQsR0FBZ0IsTUFBaEI7QUFDRCxDQU5ELEVBTUczSyxDQUFDLEdBQUdKLE9BQU8sQ0FBQ0UscUJBQVIsS0FBa0NGLE9BQU8sQ0FBQ0UscUJBQVIsR0FBZ0MsRUFBbEUsQ0FOUDs7QUFPQSxDQUFDLFVBQVV1QixDQUFWLEVBQWE7RUFDWkEsQ0FBQyxDQUFDdUIsTUFBRixHQUFXLFFBQVg7QUFDRCxDQUZELEVBRUczQyxDQUFDLEtBQUtBLENBQUMsR0FBRyxFQUFULENBRkoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5LaW5naHRGYWxsRW5lbXlTdGF0dXMgPSB1bmRlZmluZWQ7XG52YXIgcjtcbnZhciBzO1xudmFyICR6MVBvb2xNZ3IgPSByZXF1aXJlKFwiUG9vbE1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbE1pc3Npb25EYXRhID0gcmVxdWlyZShcIktpbmdodEZhbGxNaXNzaW9uRGF0YVwiKTtcbnZhciAkejFLaW5naHRGYWxsRW51bSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRW51bVwiKTtcbnZhciAkejFLaW5naHRGYWxsRGF0YU1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRGF0YU1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsUGxheWVyTWdyID0gcmVxdWlyZShcIktpbmdodEZhbGxQbGF5ZXJNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbE1vZGxlID0gcmVxdWlyZShcIktpbmdodEZhbGxNb2RsZVwiKTtcbnZhciAkejFLaW5naHRGYWxsSXRlbUhwID0gcmVxdWlyZShcIktpbmdodEZhbGxJdGVtSHBcIik7XG52YXIgJHoxS2luZ2h0RmFsbFVJR2FtZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsVUlHYW1lXCIpO1xudmFyICR6MUtpbmdodEZhbGxJbnRlcmZhY2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEludGVyZmFjZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsRW5lbXlCYXNlID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuc3BBbmkgPSBudWxsO1xuICAgIGUubmRIcCA9IG51bGw7XG4gICAgZS5yaWdpZEJvZHkgPSBudWxsO1xuICAgIGUudGltZSA9IHt9O1xuICAgIGUudmVjMl8xID0gbmV3IGNjLlZlYzIoKTtcbiAgICBlLnZlYzJfMiA9IG5ldyBjYy5WZWMyKCk7XG4gICAgZS5maW5JbmRleCA9IDA7XG4gICAgZS5sYXN0RmluZCA9IGZhbHNlO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgdGhpcy5zcEFuaS5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICBzd2l0Y2ggKGUuYW5pbWF0aW9uLm5hbWUpIHtcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbFNvbGRpZXJBbmlFbnVtLkF0dGFjazpcbiAgICAgICAgICB0LmRvQXR0YWNrRmluaXNoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxTb2xkaWVyQW5pRW51bS5EaWU6XG4gICAgICAgICAgdC5mcmVlTm9kZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRCb2R5KHRoaXMuc3BBbmkubm9kZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIHRoaXMuY2ZnID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRTb2xkaWVyQ2ZnQnlJZCh0KTtcbiAgICB0aGlzLmJvcm5JbmZvID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuc2V0UGF0aChlKTtcbiAgICB2YXIgaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLkNpcmNsZUNvbGxpZGVyKTtcbiAgICBpZiAoaVswXSkge1xuICAgICAgaVswXS5yYWRpdXMgPSB0aGlzLmNmZy5BdHRhY2tSYW5nZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gdGhpcy5jZmcuQXR0YWNrUmFuZ2U7XG4gICAgfVxuICAgIGlmIChpWzFdKSB7XG4gICAgICBpWzFdLnJhZGl1cyA9IHRoaXMuY2ZnLkF0dGFja1JhbmdlICsgdGhpcy5jZmcuU2VhcmNoUmFuZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IHRoaXMuY2ZnLkF0dGFja1JhbmdlICsgdGhpcy5jZmcuU2VhcmNoUmFuZ2U7XG4gICAgfVxuICAgIHRoaXMuaHBNYXggPSB0aGlzLmNmZy5IZWFsdGggKiAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRIcEFkZCh0aGlzLmNmZy5JRCk7XG4gICAgdGhpcy5ocCA9IHRoaXMuaHBNYXg7XG4gICAgaWYgKHRoaXMuaHBjdHJsKSB7XG4gICAgICB0aGlzLmhwY3RybC5zZXRUeXBlKCR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsR2FtZUFybXkuRW5lbXkpO1xuICAgICAgdGhpcy5ocGN0cmwuc2V0SHAodGhpcy5ocCwgdGhpcy5ocE1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZFByZWZhYigkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkVuZW15LCAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQcmVmYWJOYW1lLkl0ZW1IcCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIChlID0gY2MuaW5zdGFudGlhdGUodCkpLnNldFBhcmVudChuLm5kSHApO1xuICAgICAgICBlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgICBuLmhwY3RybCA9IGUuZ2V0Q29tcG9uZW50KCR6MUtpbmdodEZhbGxJdGVtSHAuZGVmYXVsdCk7XG4gICAgICAgIG4uaHBjdHJsLnNldFR5cGUoJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lQXJteS5FbmVteSk7XG4gICAgICAgIG4uaHBjdHJsLnNldEhwKG4uaHAsIG4uaHBNYXgpO1xuICAgICAgICBuLm5kSHAuY2hpbGRyZW5Db3VudCA+IDEgJiYgY29uc29sZS5lcnJvcihcIkhQIG5vZGUgaGFzIG11bHRpcGxlIGNoaWxkcmVuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrID0gTWF0aC5yb3VuZCh0aGlzLmNmZy5BdHRhY2tEYW1hZ2UgKiAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRBdHRBZGQodGhpcy5jZmcuSUQpKTtcbiAgICB0aGlzLnRpbWUgPSB7fTtcbiAgICB0aGlzLnRpbWVbcy5BdHRhY2tdID0gMDtcbiAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHRoaXMubm9kZS56SW5kZXggPSBNYXRoLmZsb29yKGNjLndpblNpemUuaGVpZ2h0KSAtIE1hdGguZmxvb3IodGhpcy52ZWMyXzEueSk7XG4gICAgdGhpcy5kb01vdmUoKTtcbiAgICB0aGlzLnJpZ2lkQm9keS5hY3RpdmUgPSAhIXRoaXMuY2ZnLkJ1aWxkaW5nQ3Jvc3M7XG4gICAgdGhpcy5vbkNoYW5nZVNwZWVkKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5pc0RlYWQoKSkge1xuICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICAgIHRoaXMubm9kZS56SW5kZXggPSBNYXRoLmZsb29yKGNjLndpblNpemUuaGVpZ2h0KSAtIE1hdGguZmxvb3IodGhpcy52ZWMyXzEueSk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRoaXMuZGVidWZmSW5mby5sZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgaSA9IHRoaXMuZGVidWZmSW5mb1tuXTtcbiAgICAgICAgaWYgKC0xICE9IGkudGltZSkge1xuICAgICAgICAgIGkudGltZSArPSB0O1xuICAgICAgICAgIGlmIChpLnRpbWUgPj0gaS50aW1lTWF4KSB7XG4gICAgICAgICAgICB0aGlzLmRlbEJ1ZmZJZHgobiksIG4tLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC0xICE9IHRoaXMudGltZVtzLkF0dGFja10gJiYgKHRoaXMudGltZVtzLkF0dGFja10gKz0gdCAqIHRoaXMuZ2V0QXR0U3BlZWQoKSk7XG4gICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSByLklkbGU6XG4gICAgICAgICAgdGhpcy5sYXN0RmluZCA9IHRoaXMuaXNGaW5kKCk7XG4gICAgICAgICAgaWYgKHRoaXMubGFzdEZpbmQpIHtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5nZXRGaW5kKCk7XG4gICAgICAgICAgICBpZiAoYSAmJiBhLmNhbkF0dCkge1xuICAgICAgICAgICAgICB0aGlzLnRpbWVbcy5BdHRhY2tdID49IDEgJiYgdGhpcy5vbkZpbmRMaXN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRvTW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvTW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByLldhaXQ6XG4gICAgICAgICAgdGhpcy50aW1lW3MuQXR0YWNrXSA+PSAxICYmIHRoaXMub25GaW5kTGlzdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHIuTW92ZTpcbiAgICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0RmluZCgpO1xuICAgICAgICAgIGlmIChvICYmIG8uY2FuQXR0KSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgICAgIHRoaXMudGltZVtzLkF0dGFja10gPj0gMSAmJiB0aGlzLm9uRmluZExpc3QoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgbi50YWcuZ2V0UG9zaXRpb24oZS52ZWMyXzIpO1xuICAgICAgICAgICAgICAgIGNjLlZlYzIuc3VidHJhY3QoZS52ZWMyXzIsIGUudmVjMl8yLCBlLnZlYzJfMSk7XG4gICAgICAgICAgICAgICAgZS5zZXRMZWZ0KGUudmVjMl8yLnggPCAwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmJvcm5JbmZvLm5vZGVJbmRleCA+IGUuYm9ybkluZm8ucGF0aExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZS5kb1dhaXQoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmJvcm5JbmZvLm5vZGVJbmRleCA9PSBlLmJvcm5JbmZvLnBhdGhMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGUuZG9XYWl0KCk7XG4gICAgICAgICAgICAgICAgZS5ib3JuSW5mby5ub2RlSW5kZXgrKztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLmJvcm5JbmZvLnBhdGhMaXN0W2UuYm9ybkluZm8ubm9kZUluZGV4XS5nZXRQb3NpdGlvbihlLnZlYzJfMik7XG4gICAgICAgICAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdChlLnZlYzJfMiwgZS52ZWMyXzIsIGUudmVjMl8xKTtcbiAgICAgICAgICAgICAgICBlLnNldExlZnQoZS52ZWMyXzIueCA8IDApO1xuICAgICAgICAgICAgICAgIGUudmVjMl8yLmxlbigpIDw9IDE1ICYmIGUuYm9ybkluZm8ubm9kZUluZGV4Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2MuVmVjMi5ub3JtYWxpemUoZS52ZWMyXzIsIGUudmVjMl8yKTtcbiAgICAgICAgICAgICAgY2MuVmVjMi5zY2FsZUFuZEFkZChlLnZlYzJfMSwgZS52ZWMyXzEsIGUudmVjMl8yLCBlLmdldFNwZWVkKCkgKiB0KTtcbiAgICAgICAgICAgICAgZS5ub2RlLnNldFBvc2l0aW9uKGUudmVjMl8xKTtcbiAgICAgICAgICAgIH0pKG8pO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZWZ0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLnNwQW5pLm5vZGUuc2NhbGVYID0gdCA/IC10aGlzLnNwQW5pLm5vZGUuc2NhbGVZIDogdGhpcy5zcEFuaS5ub2RlLnNjYWxlWTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRvV2FpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0YXRlID0gci5XYWl0O1xuICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xuICAgIHRoaXMuc3BBbmkuc2V0QW5pbWF0aW9uKDAsICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsU29sZGllckFuaUVudW0uSWRsZSwgdHJ1ZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5kb0lkZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHIuSWRsZTtcbiAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLlZlYzIuWkVSTztcbiAgICB0aGlzLnNwQW5pLnNldEFuaW1hdGlvbigwLCAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbFNvbGRpZXJBbmlFbnVtLklkbGUsIHRydWUpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9Nb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3RhdGUgPSByLk1vdmU7XG4gICAgaWYgKHRoaXMuYm9ybkluZm8ubm9kZUluZGV4ID4gdGhpcy5ib3JuSW5mby5wYXRoTGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZG9XYWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3BBbmkuc2V0QW5pbWF0aW9uKDAsICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsU29sZGllckFuaUVudW0uTW92ZSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaXNGaW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0O1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmZpbkluZGV4Kys7XG4gICAgaWYgKHRoaXMuZmluSW5kZXggJSAzICE9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RGaW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5JbmRleCA9IDAsIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSksICEhZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogZS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pLFxuICAgICAgICAgIHJhZGl1czogZS5jZmcuQXR0YWNrUmFuZ2UgKyBlLmNmZy5TZWFyY2hSYW5nZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbiA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEJ1bGlkTGlzdCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgYSA9IG5baV07XG4gICAgICAgICAgaWYgKGEuZ2V0SXNXb3JrKCkpIHtcbiAgICAgICAgICAgIHZhciBvID0gYS5nZXRXcG9zUGh5Q29sKCk7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG8ubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgdmFyIHMgPSBvW3JdO1xuICAgICAgICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnBvbHlnb25DaXJjbGUocywgdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KCkgfHwgISh0ID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuY3RyUGxheSkuaXNEZWFkKCkgJiYgKHQubm9kZS5nZXRQb3NpdGlvbihlLnZlYzJfMiksIGNjLlZlYzIuc3VidHJhY3QoZS52ZWMyXzIsIGUudmVjMl8yLCBlLnZlYzJfMSksIGUudmVjMl8yLmxlbigpIDw9IGUuY2ZnLkF0dGFja1JhbmdlICsgZS5jZmcuU2VhcmNoUmFuZ2UpIHx8ICEhZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldFNvbGRpZXJMaXN0KCk7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgIHZhciBpID0gdFtuXTtcbiAgICAgICAgICBpZiAoIWkuaXNEZWFkKCkgJiYgKGkubm9kZS5nZXRQb3NpdGlvbihlLnZlYzJfMiksIGNjLlZlYzIuc3VidHJhY3QoZS52ZWMyXzIsIGUudmVjMl8yLCBlLnZlYzJfMSksIGUudmVjMl8yLmxlbigpIDw9IGUuY2ZnLkF0dGFja1JhbmdlICsgZS5jZmcuU2VhcmNoUmFuZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSgpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEZpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgIHZhciBuID0gLTE7XG4gICAgICB2YXIgaSA9IC0xO1xuICAgICAgdmFyIGEgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5jdHJQbGF5O1xuICAgICAgaWYgKCFhLmlzRGVhZCgpKSB7XG4gICAgICAgIGEubm9kZS5nZXRQb3NpdGlvbih0LnZlYzJfMik7XG4gICAgICAgIGNjLlZlYzIuc3VidHJhY3QodC52ZWMyXzIsIHQudmVjMl8yLCB0LnZlYzJfMSk7XG4gICAgICAgIGlmICh0LnZlYzJfMi5sZW4oKSA8PSB0LmNmZy5BdHRhY2tSYW5nZSArIHQuY2ZnLlNlYXJjaFJhbmdlKSB7XG4gICAgICAgICAgZSA9IGEubm9kZSwgbiA9IHQudmVjMl8yLmxlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbyA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldFNvbGRpZXJMaXN0KCk7XG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IG8ubGVuZ3RoOyByKyspIHtcbiAgICAgICAgaWYgKCEoZyA9IG9bcl0pLmlzRGVhZCgpKSB7XG4gICAgICAgICAgZy5ub2RlLmdldFBvc2l0aW9uKHQudmVjMl8yKTtcbiAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpO1xuICAgICAgICAgIGlmICh0LnZlYzJfMi5sZW4oKSA8PSB0LmNmZy5BdHRhY2tSYW5nZSArIHQuY2ZnLlNlYXJjaFJhbmdlICYmICgtMSA9PSBuIHx8IHQudmVjMl8yLmxlbigpIDwgbikpIHtcbiAgICAgICAgICAgIGUgPSBnLm5vZGUsIG4gPSB0LnZlYzJfMi5sZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBzID0ge1xuICAgICAgICBwb3NpdGlvbjogdC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pLFxuICAgICAgICByYWRpdXM6IHQuY2ZnLkF0dGFja1JhbmdlICsgdC5jZmcuU2VhcmNoUmFuZ2VcbiAgICAgIH07XG4gICAgICB2YXIgbCA9IHtcbiAgICAgICAgcG9zaXRpb246IHQubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSxcbiAgICAgICAgcmFkaXVzOiB0LmNmZy5BdHRhY2tSYW5nZVxuICAgICAgfTtcbiAgICAgIHZhciBjID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0QnVsaWRMaXN0KCk7XG4gICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGMubGVuZ3RoOyBoKyspIHtcbiAgICAgICAgdmFyIGc7XG4gICAgICAgIGlmICgoZyA9IGNbaF0pLmdldElzV29yaygpKSB7XG4gICAgICAgICAgdmFyIHUgPSBnLmdldFdwb3NQaHlDb2wyKCk7XG4gICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCB1Lmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHVbZF07XG4gICAgICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnBvbHlnb25DaXJjbGUocC5wb2ludHMsIHMpKSB7XG4gICAgICAgICAgICAgIHZhciBmID0gcC50YWdOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgICB0LnZlYzJfMiA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLm5kTWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihmKTtcbiAgICAgICAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdCh0LnZlYzJfMiwgdC52ZWMyXzIsIHQudmVjMl8xKTtcbiAgICAgICAgICAgICAgaWYgKC0xID09IG4gfHwgdC52ZWMyXzIubGVuKCkgPCBuKSB7XG4gICAgICAgICAgICAgICAgaSA9IGNjLkludGVyc2VjdGlvbi5wb2x5Z29uQ2lyY2xlKHAucG9pbnRzLCBsKTtcbiAgICAgICAgICAgICAgICBlID0gcC50YWdOb2RlO1xuICAgICAgICAgICAgICAgIG4gPSB0LnZlYzJfMi5sZW4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0YWc6IGUsXG4gICAgICAgICAgY2FuQXR0OiAtMSA9PSBpID8gbiA8PSB0LmNmZy5BdHRhY2tSYW5nZSA6IGlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0oKSB8fCBudWxsO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25GaW5kTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICByZXR1cm4gISFmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IG51bGw7XG4gICAgICB2YXIgbiA9IC0xO1xuICAgICAgdmFyIGkgPSAtMTtcbiAgICAgIHZhciBhID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuY3RyUGxheTtcbiAgICAgIGlmICghYS5pc0RlYWQoKSkge1xuICAgICAgICBhLm5vZGUuZ2V0UG9zaXRpb24odC52ZWMyXzIpO1xuICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpO1xuICAgICAgICBpZiAodC52ZWMyXzIubGVuKCkgPD0gdC5jZmcuQXR0YWNrUmFuZ2UpIHtcbiAgICAgICAgICBlID0gYS5ub2RlLCBuID0gdC52ZWMyXzIubGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBvID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0U29sZGllckxpc3QoKTtcbiAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgby5sZW5ndGg7IHIrKykge1xuICAgICAgICBpZiAoIShoID0gb1tyXSkuaXNEZWFkKCkpIHtcbiAgICAgICAgICBoLm5vZGUuZ2V0UG9zaXRpb24odC52ZWMyXzIpO1xuICAgICAgICAgIGNjLlZlYzIuc3VidHJhY3QodC52ZWMyXzIsIHQudmVjMl8yLCB0LnZlYzJfMSk7XG4gICAgICAgICAgaWYgKHQudmVjMl8yLmxlbigpIDw9IHQuY2ZnLkF0dGFja1JhbmdlICYmICgtMSA9PSBuIHx8IHQudmVjMl8yLmxlbigpIDwgbikpIHtcbiAgICAgICAgICAgIGUgPSBoLm5vZGUsIG4gPSB0LnZlYzJfMi5sZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBzID0ge1xuICAgICAgICBwb3NpdGlvbjogdC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pLFxuICAgICAgICByYWRpdXM6IHQuY2ZnLkF0dGFja1JhbmdlXG4gICAgICB9O1xuICAgICAgdmFyIGwgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRCdWxpZExpc3QoKTtcbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgbC5sZW5ndGg7IGMrKykge1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgaWYgKChoID0gbFtjXSkuZ2V0SXNXb3JrKCkpIHtcbiAgICAgICAgICB2YXIgZyA9IGguZ2V0V3Bvc1BoeUNvbDIoKTtcbiAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGcubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgIHZhciBkID0gZ1t1XTtcbiAgICAgICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucG9seWdvbkNpcmNsZShkLnBvaW50cywgcykpIHtcbiAgICAgICAgICAgICAgdmFyIHAgPSBkLnRhZ05vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICAgIHQudmVjMl8yID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUubmRNYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHApO1xuICAgICAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpO1xuICAgICAgICAgICAgICBpZiAoLTEgPT0gbiB8fCB0LnZlYzJfMi5sZW4oKSA8IG4pIHtcbiAgICAgICAgICAgICAgICBpID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlID0gZC50YWdOb2RlO1xuICAgICAgICAgICAgICAgIG4gPSB0LnZlYzJfMi5sZW4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0YWc6IGUsXG4gICAgICAgICAgY2FuQXR0OiAtMSA9PSBpID8gbiA8PSB0LmNmZy5BdHRhY2tSYW5nZSA6IGlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0oKSAmJiAodGhpcy5kb0F0dGFja1N0YXJ0KCksIHRydWUpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9BdHRhY2tTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0YXRlID0gci5BdHRhY2s7XG4gICAgdGhpcy5zcEFuaS5zZXRBbmltYXRpb24oMCwgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxTb2xkaWVyQW5pRW51bS5BdHRhY2ssIGZhbHNlKTtcbiAgICB0aGlzLnRpbWVbcy5BdHRhY2tdID0gLTE7XG4gICAgdGhpcy5kb0F0dGFjaygpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9BdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMudGltZVtzLkF0dGFja10gPSAwO1xuICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSk7XG4gICAgdmFyIGUgPSB0aGlzLmdldEF0dGFjaygpO1xuICAgIHZhciBuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSBudWxsO1xuICAgICAgdmFyIG4gPSAtMTtcbiAgICAgIHZhciBpID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuY3RyUGxheTtcbiAgICAgIGlmICghaS5pc0RlYWQoKSkge1xuICAgICAgICBpLm5vZGUuZ2V0UG9zaXRpb24odC52ZWMyXzIpO1xuICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpO1xuICAgICAgICBpZiAodC52ZWMyXzIubGVuKCkgPD0gdC5jZmcuQXR0YWNrUmFuZ2UpIHtcbiAgICAgICAgICBlID0gaSwgbiA9IHQudmVjMl8yLmxlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgYSA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldFNvbGRpZXJMaXN0KCk7XG4gICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGEubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgaWYgKCEoYyA9IGFbb10pLmlzRGVhZCgpKSB7XG4gICAgICAgICAgYy5ub2RlLmdldFBvc2l0aW9uKHQudmVjMl8yKTtcbiAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHQudmVjMl8yLCB0LnZlYzJfMiwgdC52ZWMyXzEpO1xuICAgICAgICAgIGlmICh0LnZlYzJfMi5sZW4oKSA8PSB0LmNmZy5BdHRhY2tSYW5nZSAmJiAoLTEgPT0gbiB8fCB0LnZlYzJfMi5sZW4oKSA8IG4pKSB7XG4gICAgICAgICAgICBlID0gYywgbiA9IHQudmVjMl8yLmxlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHIgPSB7XG4gICAgICAgIHBvc2l0aW9uOiB0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyksXG4gICAgICAgIHJhZGl1czogdC5jZmcuQXR0YWNrUmFuZ2VcbiAgICAgIH07XG4gICAgICB2YXIgcyA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEJ1bGlkTGlzdCgpO1xuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIHZhciBjO1xuICAgICAgICBpZiAoKGMgPSBzW2xdKS5nZXRJc1dvcmsoKSkge1xuICAgICAgICAgIHZhciBoID0gYy5nZXRXcG9zUGh5Q29sKCk7XG4gICAgICAgICAgZm9yICh2YXIgZyA9IDA7IGcgPCBoLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICB2YXIgdSA9IGhbZ107XG4gICAgICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnBvbHlnb25DaXJjbGUodSwgcikpIHtcbiAgICAgICAgICAgICAgYy5ub2RlLmdldFBvc2l0aW9uKHQudmVjMl8yKTtcbiAgICAgICAgICAgICAgY2MuVmVjMi5zdWJ0cmFjdCh0LnZlYzJfMiwgdC52ZWMyXzIsIHQudmVjMl8xKTtcbiAgICAgICAgICAgICAgaWYgKC0xID09IG4gfHwgdC52ZWMyXzIubGVuKCkgPCBuKSB7XG4gICAgICAgICAgICAgICAgZSA9IGMsIG4gPSB0LnZlYzJfMi5sZW4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGU7XG4gICAgfSgpO1xuICAgIGlmIChuKSB7XG4gICAgICBuLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzIpO1xuICAgICAgbi5jZmcgJiYgdGhpcy5jZmcuU3VwcHJlc3NlZCA9PSBuLmNmZy5JRCAmJiAoZSAqPSBOdW1iZXIoJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXJhbXNDZmdCeUlkKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtUGFyYW1ldGVyQ2ZnLlJlc3RyYWluZWRBcm1zKSkpO1xuICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckVmZmVjdC5zaG93RGFtYWdlTnVtKHRoaXMudmVjMl8yLmNsb25lKCksIG4ub25BdHRhY2tlZChlKSk7XG4gICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyRWZmZWN0Lm9uTW9uc3RlckF0dGFjayh0aGlzLnZlYzJfMi5jbG9uZSgpLCBcInhiX2dqXCIpO1xuICAgICAgY2MuVmVjMi5zdWJ0cmFjdCh0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzIsIHRoaXMudmVjMl8xKTtcbiAgICAgIHJldHVybiB2b2lkIHRoaXMuc2V0TGVmdCh0aGlzLnZlYzJfMi54IDwgMCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9BdHRhY2tGaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kb0lkZWwoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uQXR0YWNrZWQgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlO1xuICAgIGlmICghdGhpcy5pc0RlYWQoKSkge1xuICAgICAgdGhpcy5ocCAtPSB0O1xuICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gci5EZWFkO1xuICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyRWZmZWN0Lm9uU29sZGllckRlYWQodGhpcy5ub2RlLmdldFBvc2l0aW9uKCksIC4yNSk7XG4gICAgICAgIHRoaXMuZGVsQWxsQnVmZigpO1xuICAgICAgICB0aGlzLmZyZWVOb2RlKCk7XG4gICAgICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5nZXRUYXNrSW5mbygpO1xuICAgICAgICBpZiAobi50eXBlID09ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFza0VudW0uU29sZGllckRlZmVhdGVkKSB7XG4gICAgICAgICAgbi5udW0rKztcbiAgICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uRGF0YSgpLnNldFRhc2tJbmZvKG4pO1xuICAgICAgICB9XG4gICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuYWRkVGFza051bSgkejFLaW5naHRGYWxsTWlzc2lvbkRhdGEuS2luZ2h0RmFsbFRhc2tDb3VudE5hbWUuS2lsbCwgMSk7XG4gICAgICB9XG4gICAgICBudWxsID09PSAoZSA9IHRoaXMuaHBjdHJsKSB8fCB1bmRlZmluZWQgPT09IGUgfHwgZS5zZXRIcCh0aGlzLmhwLCB0aGlzLmhwTWF4KTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5mcmVlTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBvb2xOYW1lLkVuZW15ICsgXCJfXCIgKyB0aGlzLmNmZy5JRDtcbiAgICAkejFQb29sTWdyLlBvb2xNZ3IuZ2V0SW5zdGFuY2UoKS5mcmVlTm9kZSh0LCB0aGlzLm5vZGUpO1xuICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmRlbEVuZW15KHRoaXMpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaXNEZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09IHIuRGVhZDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFBhdXNlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLlZlYzIuWkVSTztcbiAgICB0aGlzLnNwQW5pLnBhdXNlZCA9IHQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRBdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmF0dGFjaztcbiAgICB2YXIgZSA9IDE7XG4gICAgdmFyIG4gPSB0aGlzLmdldEJ1ZmZMaXN0KCR6MUtpbmdodEZhbGxJbnRlcmZhY2UuS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUuRGFtYWdlQ3V0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGUgLT0gbltpXS5kYXRhLnN1Yk51bTtcbiAgICB9XG4gICAgaWYgKDIgPT0gdGhpcy5jZmcuQXR0YWNrVHlwZSkge1xuICAgICAgdmFyIGEgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjMzKTtcbiAgICAgIGEgJiYgKGUgLT0gYS5QYW1lclswXSk7XG4gICAgICB2YXIgbyA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNTYpO1xuICAgICAgbyAmJiAoZSAtPSBvLlBhbWVyWzBdKTtcbiAgICB9XG4gICAgZSA8IDAgJiYgKGUgPSAwKTtcbiAgICByZXR1cm4gdCAqIGU7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRBdHRTcGVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXMuY2ZnLkF0dGFja0ludGVydmFsO1xuICAgIHZhciBlID0gMTtcbiAgICB2YXIgbiA9IHRoaXMuZ2V0QnVmZkxpc3QoJHoxS2luZ2h0RmFsbEludGVyZmFjZS5LaW5naHRGYWxsRW5lbXlCdWZmVHlwZS5BdHRhY2tTcGVlZCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlICs9IG5baV0uZGF0YS5hZGRTcGVlZDtcbiAgICB9XG4gICAgcmV0dXJuIHQgKiBlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0U3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNmZy5TcGVlZDtcbiAgICB2YXIgZSA9IDE7XG4gICAgdmFyIG4gPSB0aGlzLmdldEJ1ZmZMaXN0KCR6MUtpbmdodEZhbGxJbnRlcmZhY2UuS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUuTW92ZVNwZWVkKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGUgLT0gbltpXS5kYXRhLnN1Yk51bTtcbiAgICB9XG4gICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uU2xvd1NwZWxsXSAmJiAoZSAtPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5TbG93U3BlbGxdWzBdKTtcbiAgICBlIDwgMCAmJiAoZSA9IC4wMSk7XG4gICAgcmV0dXJuIHQgKiBlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYWRkSHBQcm8gPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlO1xuICAgIHZhciBuO1xuICAgIGlmICghdGhpcy5pc0RlYWQoKSkge1xuICAgICAgdGhpcy5ocCArPSB0ICogdGhpcy5ocE1heDtcbiAgICAgIHRoaXMuaHAgPiB0aGlzLmhwTWF4ICYmICh0aGlzLmhwID0gdGhpcy5ocE1heCk7XG4gICAgICBudWxsID09PSAoZSA9IHRoaXMuaHBjdHJsKSB8fCB1bmRlZmluZWQgPT09IGUgfHwgZS5zZXRIcCh0aGlzLmhwLCB0aGlzLmhwTWF4KTtcbiAgICAgIG51bGwgPT09IChuID0gdGhpcy5ocGN0cmwpIHx8IHVuZGVmaW5lZCA9PT0gbiB8fCBuLnNob3dBbmkoKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkNoYW5nZVNwZWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLnNwZWVkO1xuICAgIHRoaXMuc3BBbmkudGltZVNjYWxlID0gdDtcbiAgfTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IHNwLlNrZWxldG9uLFxuICAgIHRvb2x0aXA6IFwiQm9keSBwYXJ0c1wiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInNwQW5pXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiSFAgYmFyIG5vZGVcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEhwXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxJbnRlcmZhY2UpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxFbmVteUJhc2U7XG4oZnVuY3Rpb24gKHQpIHtcbiAgdFt0LklkbGUgPSAwXSA9IFwiSWRsZVwiO1xuICB0W3QuTW92ZSA9IDFdID0gXCJNb3ZlXCI7XG4gIHRbdC5BdHRhY2sgPSAyXSA9IFwiQXR0YWNrXCI7XG4gIHRbdC5XYWl0ID0gM10gPSBcIldhaXRcIjtcbiAgdFt0LkRlYWQgPSA0XSA9IFwiRGVhZFwiO1xufSkociA9IGV4cG9ydHMuS2luZ2h0RmFsbEVuZW15U3RhdHVzIHx8IChleHBvcnRzLktpbmdodEZhbGxFbmVteVN0YXR1cyA9IHt9KSk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgdC5BdHRhY2sgPSBcIkF0dGFja1wiO1xufSkocyB8fCAocyA9IHt9KSk7Il19