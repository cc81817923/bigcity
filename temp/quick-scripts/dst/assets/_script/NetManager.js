
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/NetManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8cd5el6GBGTYTW+N8b8EuJ', 'NetManager');
// _script/NetManager.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetManager = undefined;

var exp_NetManager = function () {
  function _ctor() {
    this._channels = {};
  }

  _ctor.getInstance = function () {
    null == this._instance && (this._instance = new _ctor());
    return this._instance;
  };

  _ctor.prototype.setNetNode = function (t, e) {
    undefined === e && (e = 0);
    this._channels[e] = t;
  };

  _ctor.prototype.removeNetNode = function (t) {
    delete this._channels[t];
  };

  _ctor.prototype.connect = function (t, e) {
    undefined === e && (e = 0);
    return !!this._channels[e] && this._channels[e].connect(t);
  };

  _ctor.prototype.send = function (t, e, n) {
    undefined === e && (e = false);
    undefined === n && (n = 0);
    var i = this._channels[n];
    return !!i && i.send(t, e);
  };

  _ctor.prototype.request = function (t, e, n, i, a, o) {
    undefined === i && (i = true);
    undefined === a && (a = false);
    undefined === o && (o = 0);
    var r = this._channels[o];
    r && r.request(t, e, n, i, a);
  };

  _ctor.prototype.requestUnique = function (t, e, n, i, a, o) {
    undefined === i && (i = true);
    undefined === a && (a = false);
    undefined === o && (o = 0);
    var r = this._channels[o];
    return !!r && r.requestUnique(t, e, n, i, a);
  };

  _ctor.prototype.close = function (t, e, n) {
    undefined === n && (n = 0);

    if (this._channels[n]) {
      return this._channels[n].closeSocket(t, e);
    }
  };

  _ctor._instance = null;
  return _ctor;
}();

exports.NetManager = exp_NetManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L05ldE1hbmFnZXIuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJOZXRNYW5hZ2VyIiwidW5kZWZpbmVkIiwiZXhwX05ldE1hbmFnZXIiLCJfY3RvciIsIl9jaGFubmVscyIsImdldEluc3RhbmNlIiwiX2luc3RhbmNlIiwicHJvdG90eXBlIiwic2V0TmV0Tm9kZSIsInQiLCJlIiwicmVtb3ZlTmV0Tm9kZSIsImNvbm5lY3QiLCJzZW5kIiwibiIsImkiLCJyZXF1ZXN0IiwiYSIsIm8iLCJyIiwicmVxdWVzdFVuaXF1ZSIsImNsb3NlIiwiY2xvc2VTb2NrZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxPQUFPLENBQUNFLFVBQVIsR0FBcUJDLFNBQXJCOztBQUNBLElBQUlDLGNBQWMsR0FBRyxZQUFZO0VBQy9CLFNBQVNDLEtBQVQsR0FBaUI7SUFDZixLQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0VBQ0Q7O0VBQ0RELEtBQUssQ0FBQ0UsV0FBTixHQUFvQixZQUFZO0lBQzlCLFFBQVEsS0FBS0MsU0FBYixLQUEyQixLQUFLQSxTQUFMLEdBQWlCLElBQUlILEtBQUosRUFBNUM7SUFDQSxPQUFPLEtBQUtHLFNBQVo7RUFDRCxDQUhEOztFQUlBSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLFVBQWhCLEdBQTZCLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUMzQ1QsU0FBUyxLQUFLUyxDQUFkLEtBQW9CQSxDQUFDLEdBQUcsQ0FBeEI7SUFDQSxLQUFLTixTQUFMLENBQWVNLENBQWYsSUFBb0JELENBQXBCO0VBQ0QsQ0FIRDs7RUFJQU4sS0FBSyxDQUFDSSxTQUFOLENBQWdCSSxhQUFoQixHQUFnQyxVQUFV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QUFPLENBQUNFLFVBQVIsR0FBcUJFLGNBQXJCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5OZXRNYW5hZ2VyID0gdW5kZWZpbmVkO1xudmFyIGV4cF9OZXRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB0aGlzLl9jaGFubmVscyA9IHt9O1xuICB9XG4gIF9jdG9yLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIG51bGwgPT0gdGhpcy5faW5zdGFuY2UgJiYgKHRoaXMuX2luc3RhbmNlID0gbmV3IF9jdG9yKCkpO1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldE5ldE5vZGUgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHVuZGVmaW5lZCA9PT0gZSAmJiAoZSA9IDApO1xuICAgIHRoaXMuX2NoYW5uZWxzW2VdID0gdDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnJlbW92ZU5ldE5vZGUgPSBmdW5jdGlvbiAodCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jaGFubmVsc1t0XTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHVuZGVmaW5lZCA9PT0gZSAmJiAoZSA9IDApO1xuICAgIHJldHVybiAhIXRoaXMuX2NoYW5uZWxzW2VdICYmIHRoaXMuX2NoYW5uZWxzW2VdLmNvbm5lY3QodCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICB1bmRlZmluZWQgPT09IGUgJiYgKGUgPSBmYWxzZSk7XG4gICAgdW5kZWZpbmVkID09PSBuICYmIChuID0gMCk7XG4gICAgdmFyIGkgPSB0aGlzLl9jaGFubmVsc1tuXTtcbiAgICByZXR1cm4gISFpICYmIGkuc2VuZCh0LCBlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAodCwgZSwgbiwgaSwgYSwgbykge1xuICAgIHVuZGVmaW5lZCA9PT0gaSAmJiAoaSA9IHRydWUpO1xuICAgIHVuZGVmaW5lZCA9PT0gYSAmJiAoYSA9IGZhbHNlKTtcbiAgICB1bmRlZmluZWQgPT09IG8gJiYgKG8gPSAwKTtcbiAgICB2YXIgciA9IHRoaXMuX2NoYW5uZWxzW29dO1xuICAgIHIgJiYgci5yZXF1ZXN0KHQsIGUsIG4sIGksIGEpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucmVxdWVzdFVuaXF1ZSA9IGZ1bmN0aW9uICh0LCBlLCBuLCBpLCBhLCBvKSB7XG4gICAgdW5kZWZpbmVkID09PSBpICYmIChpID0gdHJ1ZSk7XG4gICAgdW5kZWZpbmVkID09PSBhICYmIChhID0gZmFsc2UpO1xuICAgIHVuZGVmaW5lZCA9PT0gbyAmJiAobyA9IDApO1xuICAgIHZhciByID0gdGhpcy5fY2hhbm5lbHNbb107XG4gICAgcmV0dXJuICEhciAmJiByLnJlcXVlc3RVbmlxdWUodCwgZSwgbiwgaSwgYSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgdW5kZWZpbmVkID09PSBuICYmIChuID0gMCk7XG4gICAgaWYgKHRoaXMuX2NoYW5uZWxzW25dKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2hhbm5lbHNbbl0uY2xvc2VTb2NrZXQodCwgZSk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5faW5zdGFuY2UgPSBudWxsO1xuICByZXR1cm4gX2N0b3I7XG59KCk7XG5leHBvcnRzLk5ldE1hbmFnZXIgPSBleHBfTmV0TWFuYWdlcjsiXX0=