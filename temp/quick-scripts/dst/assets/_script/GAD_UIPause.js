
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_UIPause.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6699afNsGJNpZubYfXYwAHY', 'GAD_UIPause');
// _script/GAD_UIPause.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1GAD_UIGame = require("GAD_UIGame");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_GAD_UIPause = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnBackHome = null;
    e.btnPlay = null;
    e.gmNode = null;
    e._callFunc = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t) {
    this._callFunc = t;
  };

  _ctor.prototype.bindEvent = function () {
    var t = this;
    this.btnBackHome.on(cc.Node.EventType.TOUCH_END, function () {
      t._callFunc && t._callFunc(false);
      t.closeUI();
    });
    this.btnPlay.on(cc.Node.EventType.TOUCH_END, function () {
      console.log("true");
      t._callFunc && t._callFunc(true);
      t.closeUI();
    });
    this.gmNode.on(cc.Node.EventType.TOUCH_END, function () {
      $z1GAD_UIGame["default"].script.setGmNode();
    });
  };

  _ctor.prototype.onLoad = function () {};

  _ctor.prototype.start = function () {
    this.bindEvent();
  };

  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnBackHome", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnPlay", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "gmNode", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_GAD_UIPause;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9VSVBhdXNlLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VVSSIsInJlcXVpcmUiLCIkejFHQURfVUlHYW1lIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0dBRF9VSVBhdXNlIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnRuQmFja0hvbWUiLCJidG5QbGF5IiwiZ21Ob2RlIiwiX2NhbGxGdW5jIiwicHJvdG90eXBlIiwiaW5pdCIsImJpbmRFdmVudCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsImNsb3NlVUkiLCJjb25zb2xlIiwibG9nIiwic2NyaXB0Iiwic2V0R21Ob2RlIiwib25Mb2FkIiwic3RhcnQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3Qzs7QUFHQSxJQUFJQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXZCOztBQUNBLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLFlBQUQsQ0FBM0I7O0FBQ0EsSUFBSUUsYUFBYSxHQUFHQyxFQUFFLENBQUNDLFVBQXZCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHSCxhQUFhLENBQUNJLE9BQWhDO0FBQ0EsSUFBSUMsWUFBWSxHQUFHTCxhQUFhLENBQUNNLFFBQWpDOztBQUNBLElBQUlDLGVBQWUsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDakMsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLElBQUlDLENBQUMsR0FBRyxTQUFTRixDQUFULElBQWNBLENBQUMsQ0FBQ0csS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFkLElBQTBDLElBQWxEO0lBQ0FGLENBQUMsQ0FBQ0csV0FBRixHQUFnQixJQUFoQjtJQUNBSCxDQUFDLENBQUNJLE9BQUYsR0FBWSxJQUFaO0lBQ0FKLENBQUMsQ0FBQ0ssTUFBRixHQUFXLElBQVg7SUFDQUwsQ0FBQyxDQUFDTSxTQUFGLEdBQWMsSUFBZDtJQUNBLE9BQU9OLENBQVA7RUFDRDs7RUFDRHJCLFdBQVcsQ0FBQ29CLEtBQUQsRUFBUUQsQ0FBUixDQUFYOztFQUNBQyxLQUFLLENBQUNRLFNBQU4sQ0FBZ0JDLElBQWhCLEdBQXVCLFVBQVVWLENBQVYsRUFBYTtJQUNsQyxLQUFLUSxTQUFMLEdBQWlCUixDQUFqQjtFQUNELENBRkQ7O0VBR0FDLEtBQUssQ0FBQ1EsU0FBTixDQUFnQkUsU0FBaEIsR0FBNEIsWUFBWTtJQUN0QyxJQUFJWCxDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtLLFdBQUwsQ0FBaUJPLEVBQWpCLENBQW9CbkIsRUFBRSxDQUFDb0IsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUF0QyxFQUFpRCxZQUFZO01BQzNEZixDQUFDLENBQUNRLFNBQUYsSUFBZVIsQ0FBQyxDQUFDUSxTQUFGLENBQVksS0FBWixDQUFmO01BQ0FSLENBQUMsQ0FBQ2dCLE9BQUY7SUFDRCxDQUhEO0lBSUEsS0FBS1YsT0FBTCxDQUFhTSxFQUFiLENBQWdCbkIsRUFBRSxDQUFDb0IsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUFsQyxFQUE2QyxZQUFZO01BQ3ZERSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO01BQ0FsQixDQUFDLENBQUNRLFNBQUYsSUFBZVIsQ0FBQyxDQUFDUSxTQUFGLENBQVksSUFBWixDQUFmO01BQ0FSLENBQUMsQ0FBQ2dCLE9BQUY7SUFDRCxDQUpEO0lBS0EsS0FBS1QsTUFBTCxDQUFZSyxFQUFaLENBQWVuQixFQUFFLENBQUNvQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQWpDLEVBQTRDLFlBQVk7TUFDdER4QixhQUFhLFdBQWIsQ0FBc0I0QixNQUF0QixDQUE2QkMsU0FBN0I7SUFDRCxDQUZEO0VBR0QsQ0FkRDs7RUFlQW5CLEtBQUssQ0FBQ1EsU0FBTixDQUFnQlksTUFBaEIsR0FBeUIsWUFBWSxDQUFFLENBQXZDOztFQUNBcEIsS0FBSyxDQUFDUSxTQUFOLENBQWdCYSxLQUFoQixHQUF3QixZQUFZO0lBQ2xDLEtBQUtYLFNBQUw7RUFDRCxDQUZEOztFQUdBNUIsWUFBWSxDQUFDLENBQUNjLFlBQVksQ0FBQ0osRUFBRSxDQUFDb0IsSUFBSixDQUFiLENBQUQsRUFBMEJaLEtBQUssQ0FBQ1EsU0FBaEMsRUFBMkMsYUFBM0MsRUFBMERjLFNBQTFELENBQVo7RUFDQXhDLFlBQVksQ0FBQyxDQUFDYyxZQUFZLENBQUNKLEVBQUUsQ0FBQ29CLElBQUosQ0FBYixDQUFELEVBQTBCWixLQUFLLENBQUNRLFNBQWhDLEVBQTJDLFNBQTNDLEVBQXNEYyxTQUF0RCxDQUFaO0VBQ0F4QyxZQUFZLENBQUMsQ0FBQ2MsWUFBWSxDQUFDSixFQUFFLENBQUNvQixJQUFKLENBQWIsQ0FBRCxFQUEwQlosS0FBSyxDQUFDUSxTQUFoQyxFQUEyQyxRQUEzQyxFQUFxRGMsU0FBckQsQ0FBWjtFQUNBLE9BQU94QyxZQUFZLENBQUMsQ0FBQ1ksV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBcENxQixDQW9DcEJaLFNBQVMsV0FwQ1csQ0FBdEI7O0FBcUNBRixPQUFPLFdBQVAsR0FBa0JZLGVBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFCYXNlVUkgPSByZXF1aXJlKFwiQmFzZVVJXCIpO1xudmFyICR6MUdBRF9VSUdhbWUgPSByZXF1aXJlKFwiR0FEX1VJR2FtZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9HQURfVUlQYXVzZSA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLmJ0bkJhY2tIb21lID0gbnVsbDtcbiAgICBlLmJ0blBsYXkgPSBudWxsO1xuICAgIGUuZ21Ob2RlID0gbnVsbDtcbiAgICBlLl9jYWxsRnVuYyA9IG51bGw7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5fY2FsbEZ1bmMgPSB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmJ0bkJhY2tIb21lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5fY2FsbEZ1bmMgJiYgdC5fY2FsbEZ1bmMoZmFsc2UpO1xuICAgICAgdC5jbG9zZVVJKCk7XG4gICAgfSk7XG4gICAgdGhpcy5idG5QbGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgICAgdC5fY2FsbEZ1bmMgJiYgdC5fY2FsbEZ1bmModHJ1ZSk7XG4gICAgICB0LmNsb3NlVUkoKTtcbiAgICB9KTtcbiAgICB0aGlzLmdtTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR6MUdBRF9VSUdhbWUuZGVmYXVsdC5zY3JpcHQuc2V0R21Ob2RlKCk7XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLk5vZGUpXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0bkJhY2tIb21lXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLk5vZGUpXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blBsYXlcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCBfY3Rvci5wcm90b3R5cGUsIFwiZ21Ob2RlXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFCYXNlVUkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfR0FEX1VJUGF1c2U7Il19