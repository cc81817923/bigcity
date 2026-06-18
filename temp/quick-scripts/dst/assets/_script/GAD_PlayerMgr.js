
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_PlayerMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba191kSuDxAw6VQgmLYX8CE', 'GAD_PlayerMgr');
// _script/GAD_PlayerMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1GAD_UserData = require("GAD_UserData");

var def_GAD_PlayerMgr = function () {
  function _ctor() {
    this._groupID = 0;
    this._tagID = 0;
    this._state = 0;
    this._cards = [];
  }

  _ctor.getInstance = function () {
    this._instance || (this._instance = new _ctor());
    return this._instance;
  };

  _ctor.prototype.reset = function () {
    this._state = 0;
    this._cards = [];
  };

  _ctor.prototype.addCard = function (t) {
    this._cards.push(t);
  };

  _ctor.prototype.getCardByRandom = function () {
    return this._cards[Math.floor(Math.random() * this._cards.length)];
  };

  _ctor.prototype.removeCard = function (t) {
    var e = this._cards.indexOf(t);

    -1 != e && this._cards.splice(e, 1);
  };

  _ctor.prototype.getState = function () {
    return this._state;
  };

  _ctor.prototype.setState = function (t) {
    this._state = t;
  };

  _ctor.prototype.getTagID = function () {
    return ++this._tagID;
  };

  _ctor.prototype.getGroupID = function () {
    return ++this._groupID;
  };

  _ctor.prototype.preload = function (t) {
    this._userData = new $z1GAD_UserData["default"]();

    this._userData.getData();

    t && t();
  };

  _ctor.prototype.getLevel = function () {
    var t = this._userData.getLevel();

    return (t - 1) % 3 + 1;
  };

  _ctor.prototype.addLevel = function () {
    this._userData.addLevel();
  };

  _ctor.prototype.getMapIndex = function () {
    return this.getLevel();
  };

  return _ctor;
}();

exports["default"] = def_GAD_PlayerMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9QbGF5ZXJNZ3IuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFHQURfVXNlckRhdGEiLCJyZXF1aXJlIiwiZGVmX0dBRF9QbGF5ZXJNZ3IiLCJfY3RvciIsIl9ncm91cElEIiwiX3RhZ0lEIiwiX3N0YXRlIiwiX2NhcmRzIiwiZ2V0SW5zdGFuY2UiLCJfaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJyZXNldCIsImFkZENhcmQiLCJ0IiwicHVzaCIsImdldENhcmRCeVJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJlbW92ZUNhcmQiLCJlIiwiaW5kZXhPZiIsInNwbGljZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJnZXRUYWdJRCIsImdldEdyb3VwSUQiLCJwcmVsb2FkIiwiX3VzZXJEYXRhIiwiZ2V0RGF0YSIsImdldExldmVsIiwiYWRkTGV2ZWwiLCJnZXRNYXBJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUdBLElBQUlDLGVBQWUsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBN0I7O0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsWUFBWTtFQUNsQyxTQUFTQyxLQUFULEdBQWlCO0lBQ2YsS0FBS0MsUUFBTCxHQUFnQixDQUFoQjtJQUNBLEtBQUtDLE1BQUwsR0FBYyxDQUFkO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLENBQWQ7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtFQUNEOztFQUNESixLQUFLLENBQUNLLFdBQU4sR0FBb0IsWUFBWTtJQUM5QixLQUFLQyxTQUFMLEtBQW1CLEtBQUtBLFNBQUwsR0FBaUIsSUFBSU4sS0FBSixFQUFwQztJQUNBLE9BQU8sS0FBS00sU0FBWjtFQUNELENBSEQ7O0VBSUFOLEtBQUssQ0FBQ08sU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWTtJQUNsQyxLQUFLTCxNQUFMLEdBQWMsQ0FBZDtJQUNBLEtBQUtDLE1BQUwsR0FBYyxFQUFkO0VBQ0QsQ0FIRDs7RUFJQUosS0FBSyxDQUFDTyxTQUFOLENBQWdCRSxPQUFoQixHQUEwQixVQUFVQyxDQUFWLEVBQWE7SUFDckMsS0FBS04sTUFBTCxDQUFZTyxJQUFaLENBQWlCRCxDQUFqQjtFQUNELENBRkQ7O0VBR0FWLEtBQUssQ0FBQ08sU0FBTixDQUFnQkssZUFBaEIsR0FBa0MsWUFBWTtJQUM1QyxPQUFPLEtBQUtSLE1BQUwsQ0FBWVMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUFLWCxNQUFMLENBQVlZLE1BQXZDLENBQVosQ0FBUDtFQUNELENBRkQ7O0VBR0FoQixLQUFLLENBQUNPLFNBQU4sQ0FBZ0JVLFVBQWhCLEdBQTZCLFVBQVVQLENBQVYsRUFBYTtJQUN4QyxJQUFJUSxDQUFDLEdBQUcsS0FBS2QsTUFBTCxDQUFZZSxPQUFaLENBQW9CVCxDQUFwQixDQUFSOztJQUNBLENBQUMsQ0FBRCxJQUFNUSxDQUFOLElBQVcsS0FBS2QsTUFBTCxDQUFZZ0IsTUFBWixDQUFtQkYsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBWDtFQUNELENBSEQ7O0VBSUFsQixLQUFLLENBQUNPLFNBQU4sQ0FBZ0JjLFFBQWhCLEdBQTJCLFlBQVk7SUFDckMsT0FBTyxLQUFLbEIsTUFBWjtFQUNELENBRkQ7O0VBR0FILEtBQUssQ0FBQ08sU0FBTixDQUFnQmUsUUFBaEIsR0FBMkIsVUFBVVosQ0FBVixFQUFhO0lBQ3RDLEtBQUtQLE1BQUwsR0FBY08sQ0FBZDtFQUNELENBRkQ7O0VBR0FWLEtBQUssQ0FBQ08sU0FBTixDQUFnQmdCLFFBQWhCLEdBQTJCLFlBQVk7SUFDckMsT0FBTyxFQUFFLEtBQUtyQixNQUFkO0VBQ0QsQ0FGRDs7RUFHQUYsS0FBSyxDQUFDTyxTQUFOLENBQWdCaUIsVUFBaEIsR0FBNkIsWUFBWTtJQUN2QyxPQUFPLEVBQUUsS0FBS3ZCLFFBQWQ7RUFDRCxDQUZEOztFQUdBRCxLQUFLLENBQUNPLFNBQU4sQ0FBZ0JrQixPQUFoQixHQUEwQixVQUFVZixDQUFWLEVBQWE7SUFDckMsS0FBS2dCLFNBQUwsR0FBaUIsSUFBSTdCLGVBQWUsV0FBbkIsRUFBakI7O0lBQ0EsS0FBSzZCLFNBQUwsQ0FBZUMsT0FBZjs7SUFDQWpCLENBQUMsSUFBSUEsQ0FBQyxFQUFOO0VBQ0QsQ0FKRDs7RUFLQVYsS0FBSyxDQUFDTyxTQUFOLENBQWdCcUIsUUFBaEIsR0FBMkIsWUFBWTtJQUNyQyxJQUFJbEIsQ0FBQyxHQUFHLEtBQUtnQixTQUFMLENBQWVFLFFBQWYsRUFBUjs7SUFDQSxPQUFPLENBQUNsQixDQUFDLEdBQUcsQ0FBTCxJQUFVLENBQVYsR0FBYyxDQUFyQjtFQUNELENBSEQ7O0VBSUFWLEtBQUssQ0FBQ08sU0FBTixDQUFnQnNCLFFBQWhCLEdBQTJCLFlBQVk7SUFDckMsS0FBS0gsU0FBTCxDQUFlRyxRQUFmO0VBQ0QsQ0FGRDs7RUFHQTdCLEtBQUssQ0FBQ08sU0FBTixDQUFnQnVCLFdBQWhCLEdBQThCLFlBQVk7SUFDeEMsT0FBTyxLQUFLRixRQUFMLEVBQVA7RUFDRCxDQUZEOztFQUdBLE9BQU81QixLQUFQO0FBQ0QsQ0FyRHVCLEVBQXhCOztBQXNEQUwsT0FBTyxXQUFQLEdBQWtCSSxpQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxR0FEX1VzZXJEYXRhID0gcmVxdWlyZShcIkdBRF9Vc2VyRGF0YVwiKTtcbnZhciBkZWZfR0FEX1BsYXllck1nciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdGhpcy5fZ3JvdXBJRCA9IDA7XG4gICAgdGhpcy5fdGFnSUQgPSAwO1xuICAgIHRoaXMuX3N0YXRlID0gMDtcbiAgICB0aGlzLl9jYXJkcyA9IFtdO1xuICB9XG4gIF9jdG9yLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBfY3RvcigpKTtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IDA7XG4gICAgdGhpcy5fY2FyZHMgPSBbXTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmFkZENhcmQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuX2NhcmRzLnB1c2godCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRDYXJkQnlSYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2NhcmRzLmxlbmd0aCldO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucmVtb3ZlQ2FyZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLl9jYXJkcy5pbmRleE9mKHQpO1xuICAgIC0xICE9IGUgJiYgdGhpcy5fY2FyZHMuc3BsaWNlKGUsIDEpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuX3N0YXRlID0gdDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFRhZ0lEID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiArK3RoaXMuX3RhZ0lEO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0R3JvdXBJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKyt0aGlzLl9ncm91cElEO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5fdXNlckRhdGEgPSBuZXcgJHoxR0FEX1VzZXJEYXRhLmRlZmF1bHQoKTtcbiAgICB0aGlzLl91c2VyRGF0YS5nZXREYXRhKCk7XG4gICAgdCAmJiB0KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3VzZXJEYXRhLmdldExldmVsKCk7XG4gICAgcmV0dXJuICh0IC0gMSkgJSAzICsgMTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmFkZExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3VzZXJEYXRhLmFkZExldmVsKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRNYXBJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9O1xuICByZXR1cm4gX2N0b3I7XG59KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfR0FEX1BsYXllck1ncjsiXX0=