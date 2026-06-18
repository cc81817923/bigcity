
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBulletBuild.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9986dU0XHpJNL2WkEBaowG/', 'KinghtFallBulletBuild');
// _script/KinghtFallBulletBuild.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallBulletBase = require("KinghtFallBulletBase");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_KinghtFallBulletBuild = function (t) {
  function _ctor() {
    return null !== t && t.apply(this, arguments) || this;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.setTag = function (t, e, n) {
    this._dir = cc.v2(e.x - t.x, e.y - t.y).normalizeSelf();
    this.tagNode = e;
    this.tagNode.getPosition(this.tagPos);
    this.bullet.active = true;
    var i = 180 * cc.Vec2.RIGHT.signAngle(this._dir) / Math.PI;
    this.node.angle = i;
    this.newAngSpeed = this.angleSpeed;
    this.state = 0;
    this.callAttack = n;
  };

  _ctor.prototype.freeNode = function () {
    this.state = 2;
    $z1KinghtFallUIGame["default"].instance.ctrGame.freeBuildBullet(this);
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallBulletBase["default"]);

exports["default"] = def_KinghtFallBulletBuild;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWxsZXRCdWlsZC5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFLaW5naHRGYWxsVUlHYW1lIiwicmVxdWlyZSIsIiR6MUtpbmdodEZhbGxCdWxsZXRCYXNlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxCdWxsZXRCdWlsZCIsInQiLCJfY3RvciIsImFwcGx5IiwiYXJndW1lbnRzIiwicHJvdG90eXBlIiwic2V0VGFnIiwiZSIsIm4iLCJfZGlyIiwidjIiLCJ4IiwieSIsIm5vcm1hbGl6ZVNlbGYiLCJ0YWdOb2RlIiwiZ2V0UG9zaXRpb24iLCJ0YWdQb3MiLCJidWxsZXQiLCJhY3RpdmUiLCJWZWMyIiwiUklHSFQiLCJzaWduQW5nbGUiLCJNYXRoIiwiUEkiLCJub2RlIiwiYW5nbGUiLCJuZXdBbmdTcGVlZCIsImFuZ2xlU3BlZWQiLCJzdGF0ZSIsImNhbGxBdHRhY2siLCJmcmVlTm9kZSIsImluc3RhbmNlIiwiY3RyR2FtZSIsImZyZWVCdWlsZEJ1bGxldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBR0MsVUFBbkI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUdBLElBQUlDLG1CQUFtQixHQUFHQyxPQUFPLENBQUMsa0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUMsdUJBQXVCLEdBQUdELE9BQU8sQ0FBQyxzQkFBRCxDQUFyQzs7QUFDQSxJQUFJRSxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQUosYUFBYSxDQUFDSyxRQUFkOztBQUNBLElBQUlDLHlCQUF5QixHQUFHLFVBQVVDLENBQVYsRUFBYTtFQUMzQyxTQUFTQyxLQUFULEdBQWlCO0lBQ2YsT0FBTyxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFkLElBQTBDLElBQWpEO0VBQ0Q7O0VBQ0RyQixXQUFXLENBQUNtQixLQUFELEVBQVFELENBQVIsQ0FBWDs7RUFDQUMsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxNQUFoQixHQUF5QixVQUFVTCxDQUFWLEVBQWFNLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0lBQzFDLEtBQUtDLElBQUwsR0FBWWQsRUFBRSxDQUFDZSxFQUFILENBQU1ILENBQUMsQ0FBQ0ksQ0FBRixHQUFNVixDQUFDLENBQUNVLENBQWQsRUFBaUJKLENBQUMsQ0FBQ0ssQ0FBRixHQUFNWCxDQUFDLENBQUNXLENBQXpCLEVBQTRCQyxhQUE1QixFQUFaO0lBQ0EsS0FBS0MsT0FBTCxHQUFlUCxDQUFmO0lBQ0EsS0FBS08sT0FBTCxDQUFhQyxXQUFiLENBQXlCLEtBQUtDLE1BQTlCO0lBQ0EsS0FBS0MsTUFBTCxDQUFZQyxNQUFaLEdBQXFCLElBQXJCO0lBQ0EsSUFBSXBDLENBQUMsR0FBRyxNQUFNYSxFQUFFLENBQUN3QixJQUFILENBQVFDLEtBQVIsQ0FBY0MsU0FBZCxDQUF3QixLQUFLWixJQUE3QixDQUFOLEdBQTJDYSxJQUFJLENBQUNDLEVBQXhEO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCM0MsQ0FBbEI7SUFDQSxLQUFLNEMsV0FBTCxHQUFtQixLQUFLQyxVQUF4QjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQnJCLENBQWxCO0VBQ0QsQ0FWRDs7RUFXQU4sS0FBSyxDQUFDRyxTQUFOLENBQWdCeUIsUUFBaEIsR0FBMkIsWUFBWTtJQUNyQyxLQUFLRixLQUFMLEdBQWEsQ0FBYjtJQUNBckMsbUJBQW1CLFdBQW5CLENBQTRCd0MsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxlQUE3QyxDQUE2RCxJQUE3RDtFQUNELENBSEQ7O0VBSUEsT0FBT2hELFlBQVksQ0FBQyxDQUFDWSxXQUFELENBQUQsRUFBZ0JLLEtBQWhCLENBQW5CO0FBQ0QsQ0FyQitCLENBcUI5QlQsdUJBQXVCLFdBckJPLENBQWhDOztBQXNCQUosT0FBTyxXQUFQLEdBQWtCVyx5QkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUtpbmdodEZhbGxVSUdhbWUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFVJR2FtZVwiKTtcbnZhciAkejFLaW5naHRGYWxsQnVsbGV0QmFzZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQnVsbGV0QmFzZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbmNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxCdWxsZXRCdWlsZCA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHJldHVybiBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFRhZyA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgdGhpcy5fZGlyID0gY2MudjIoZS54IC0gdC54LCBlLnkgLSB0LnkpLm5vcm1hbGl6ZVNlbGYoKTtcbiAgICB0aGlzLnRhZ05vZGUgPSBlO1xuICAgIHRoaXMudGFnTm9kZS5nZXRQb3NpdGlvbih0aGlzLnRhZ1Bvcyk7XG4gICAgdGhpcy5idWxsZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICB2YXIgaSA9IDE4MCAqIGNjLlZlYzIuUklHSFQuc2lnbkFuZ2xlKHRoaXMuX2RpcikgLyBNYXRoLlBJO1xuICAgIHRoaXMubm9kZS5hbmdsZSA9IGk7XG4gICAgdGhpcy5uZXdBbmdTcGVlZCA9IHRoaXMuYW5nbGVTcGVlZDtcbiAgICB0aGlzLnN0YXRlID0gMDtcbiAgICB0aGlzLmNhbGxBdHRhY2sgPSBuO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZnJlZU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IDI7XG4gICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZnJlZUJ1aWxkQnVsbGV0KHRoaXMpO1xuICB9O1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxS2luZ2h0RmFsbEJ1bGxldEJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbEJ1bGxldEJ1aWxkOyJdfQ==