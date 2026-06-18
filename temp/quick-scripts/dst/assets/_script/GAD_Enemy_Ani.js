
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_Enemy_Ani.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d786dJ1ihN17J8jaOkqYMZ', 'GAD_Enemy_Ani');
// _script/GAD_Enemy_Ani.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_GAD_Enemy_Ani = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ani = null;
    e._attackFunc = null;
    e._attackCompleteFunc = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {};

  _ctor.prototype.Attack = function () {
    this._attackFunc && this._attackFunc();
    this._attackFunc = null;
  };

  _ctor.prototype.playAttack = function (t, e) {
    var n = this;
    this._attackFunc = t;
    this._attackCompleteFunc = e;
    this.ani.play("pbt_enemy_attack");
    this.ani.on("finished", function () {
      n._attackCompleteFunc && n._attackCompleteFunc();
      n._attackCompleteFunc = null;
      console.log("playAttack finished");
    });
  };

  _ctor.prototype.playMove = function () {
    this.ani.currentClip && "pbt_enemy_move" == this.ani.currentClip.name || this.ani.play("pbt_enemy_move");
  };

  cc__decorate([ccp_property(cc.Animation)], _ctor.prototype, "ani", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}(cc.Component);

exports["default"] = def_GAD_Enemy_Ani;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9FbmVteV9BbmkuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0dBRF9FbmVteV9BbmkiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhbmkiLCJfYXR0YWNrRnVuYyIsIl9hdHRhY2tDb21wbGV0ZUZ1bmMiLCJwcm90b3R5cGUiLCJzdGFydCIsIkF0dGFjayIsInBsYXlBdHRhY2siLCJuIiwicGxheSIsIm9uIiwiY29uc29sZSIsImxvZyIsInBsYXlNb3ZlIiwiY3VycmVudENsaXAiLCJuYW1lIiwiQW5pbWF0aW9uIiwidW5kZWZpbmVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQSxJQUFJQyxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQSxJQUFJQyxZQUFZLEdBQUdMLGFBQWEsQ0FBQ00sUUFBakM7O0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsVUFBVUMsQ0FBVixFQUFhO0VBQ25DLFNBQVNDLEtBQVQsR0FBaUI7SUFDZixJQUFJQyxDQUFDLEdBQUcsU0FBU0YsQ0FBVCxJQUFjQSxDQUFDLENBQUNHLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZCxJQUEwQyxJQUFsRDtJQUNBRixDQUFDLENBQUNHLEdBQUYsR0FBUSxJQUFSO0lBQ0FILENBQUMsQ0FBQ0ksV0FBRixHQUFnQixJQUFoQjtJQUNBSixDQUFDLENBQUNLLG1CQUFGLEdBQXdCLElBQXhCO0lBQ0EsT0FBT0wsQ0FBUDtFQUNEOztFQUNEbEIsV0FBVyxDQUFDaUIsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ08sU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWSxDQUFFLENBQXRDOztFQUNBUixLQUFLLENBQUNPLFNBQU4sQ0FBZ0JFLE1BQWhCLEdBQXlCLFlBQVk7SUFDbkMsS0FBS0osV0FBTCxJQUFvQixLQUFLQSxXQUFMLEVBQXBCO0lBQ0EsS0FBS0EsV0FBTCxHQUFtQixJQUFuQjtFQUNELENBSEQ7O0VBSUFMLEtBQUssQ0FBQ08sU0FBTixDQUFnQkcsVUFBaEIsR0FBNkIsVUFBVVgsQ0FBVixFQUFhRSxDQUFiLEVBQWdCO0lBQzNDLElBQUlVLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS04sV0FBTCxHQUFtQk4sQ0FBbkI7SUFDQSxLQUFLTyxtQkFBTCxHQUEyQkwsQ0FBM0I7SUFDQSxLQUFLRyxHQUFMLENBQVNRLElBQVQsQ0FBYyxrQkFBZDtJQUNBLEtBQUtSLEdBQUwsQ0FBU1MsRUFBVCxDQUFZLFVBQVosRUFBd0IsWUFBWTtNQUNsQ0YsQ0FBQyxDQUFDTCxtQkFBRixJQUF5QkssQ0FBQyxDQUFDTCxtQkFBRixFQUF6QjtNQUNBSyxDQUFDLENBQUNMLG1CQUFGLEdBQXdCLElBQXhCO01BQ0FRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0lBQ0QsQ0FKRDtFQUtELENBVkQ7O0VBV0FmLEtBQUssQ0FBQ08sU0FBTixDQUFnQlMsUUFBaEIsR0FBMkIsWUFBWTtJQUNyQyxLQUFLWixHQUFMLENBQVNhLFdBQVQsSUFBd0Isb0JBQW9CLEtBQUtiLEdBQUwsQ0FBU2EsV0FBVCxDQUFxQkMsSUFBakUsSUFBeUUsS0FBS2QsR0FBTCxDQUFTUSxJQUFULENBQWMsZ0JBQWQsQ0FBekU7RUFDRCxDQUZEOztFQUdBM0IsWUFBWSxDQUFDLENBQUNXLFlBQVksQ0FBQ0osRUFBRSxDQUFDMkIsU0FBSixDQUFiLENBQUQsRUFBK0JuQixLQUFLLENBQUNPLFNBQXJDLEVBQWdELEtBQWhELEVBQXVEYSxTQUF2RCxDQUFaO0VBQ0EsT0FBT25DLFlBQVksQ0FBQyxDQUFDUyxXQUFELENBQUQsRUFBZ0JNLEtBQWhCLENBQW5CO0FBQ0QsQ0E5QnVCLENBOEJ0QlIsRUFBRSxDQUFDNkIsU0E5Qm1CLENBQXhCOztBQStCQWhDLE9BQU8sV0FBUCxHQUFrQlMsaUJBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9HQURfRW5lbXlfQW5pID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuYW5pID0gbnVsbDtcbiAgICBlLl9hdHRhY2tGdW5jID0gbnVsbDtcbiAgICBlLl9hdHRhY2tDb21wbGV0ZUZ1bmMgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5BdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYXR0YWNrRnVuYyAmJiB0aGlzLl9hdHRhY2tGdW5jKCk7XG4gICAgdGhpcy5fYXR0YWNrRnVuYyA9IG51bGw7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5wbGF5QXR0YWNrID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgdGhpcy5fYXR0YWNrRnVuYyA9IHQ7XG4gICAgdGhpcy5fYXR0YWNrQ29tcGxldGVGdW5jID0gZTtcbiAgICB0aGlzLmFuaS5wbGF5KFwicGJ0X2VuZW15X2F0dGFja1wiKTtcbiAgICB0aGlzLmFuaS5vbihcImZpbmlzaGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG4uX2F0dGFja0NvbXBsZXRlRnVuYyAmJiBuLl9hdHRhY2tDb21wbGV0ZUZ1bmMoKTtcbiAgICAgIG4uX2F0dGFja0NvbXBsZXRlRnVuYyA9IG51bGw7XG4gICAgICBjb25zb2xlLmxvZyhcInBsYXlBdHRhY2sgZmluaXNoZWRcIik7XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5wbGF5TW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFuaS5jdXJyZW50Q2xpcCAmJiBcInBidF9lbmVteV9tb3ZlXCIgPT0gdGhpcy5hbmkuY3VycmVudENsaXAubmFtZSB8fCB0aGlzLmFuaS5wbGF5KFwicGJ0X2VuZW15X21vdmVcIik7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLkFuaW1hdGlvbildLCBfY3Rvci5wcm90b3R5cGUsIFwiYW5pXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0dBRF9FbmVteV9Bbmk7Il19