
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/SocketMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4a20Nv3s9OWYMdBgiUUvyc', 'SocketMgr');
// _script/SocketMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var i;

var $z1NetInterface = require("NetInterface");

var $z1NetManager = require("NetManager");

var $z1NetNode = require("NetNode");

var $z1WebSock = require("WebSock");

(function (t) {
  t[t.stoped = -1] = "stoped";
  t[t.started = 0] = "started";
})(i || (i = {}));

var def_SocketMgr = function () {
  function _ctor() {}

  _ctor.getInstance = function () {
    null == this.instance && (this.instance = new _ctor());
    return this.instance;
  };

  _ctor.prototype.startSocket = function (t, e, n, l) {
    var c = this;
    undefined === l && (l = false);

    if (!this.netNode) {
      this.wsUrl = t;
      this.roomId = e;
      this.appId = n;
      var h = new $z1NetNode.NetNode();
      this.netNode = h;
      var g = new $z1WebSock.WebSock();
      h.init(g, new $z1NetInterface.DefStringProtocol(), null);
      h.setResponeHandler(0, function (t, e) {
        var n = e;
        c.onMsg(n);
      });
      h.setOnServerStatus(function (t) {
        t == i.stoped || i.started;
      });
      var u = this.wsUrl + "?roomId=" + this.roomId + "&appId=" + this.appId + "&test=" + (l ? "1" : "0");
      $z1NetManager.NetManager.getInstance().setNetNode(h);
      $z1NetManager.NetManager.getInstance().connect({
        url: u,
        autoReconnect: -1
      });
    }
  };

  _ctor.prototype.onMsg = function (t) {
    this.onmsgFun && this.onmsgFun(t);
  };

  _ctor.prototype.setOnMsg = function (t) {
    this.onmsgFun = t;
  };

  _ctor.prototype.sendMsg = function (t, e) {
    undefined === e && (e = true);
    var n = {
      data: e ? JSON.stringify(t) : t
    };
    var i = JSON.stringify(n);
    $z1NetManager.NetManager.getInstance().send(i);
  };

  return _ctor;
}();

exports["default"] = def_SocketMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1NvY2tldE1nci5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImkiLCIkejFOZXRJbnRlcmZhY2UiLCJyZXF1aXJlIiwiJHoxTmV0TWFuYWdlciIsIiR6MU5ldE5vZGUiLCIkejFXZWJTb2NrIiwidCIsInN0b3BlZCIsInN0YXJ0ZWQiLCJkZWZfU29ja2V0TWdyIiwiX2N0b3IiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwicHJvdG90eXBlIiwic3RhcnRTb2NrZXQiLCJlIiwibiIsImwiLCJjIiwidW5kZWZpbmVkIiwibmV0Tm9kZSIsIndzVXJsIiwicm9vbUlkIiwiYXBwSWQiLCJoIiwiTmV0Tm9kZSIsImciLCJXZWJTb2NrIiwiaW5pdCIsIkRlZlN0cmluZ1Byb3RvY29sIiwic2V0UmVzcG9uZUhhbmRsZXIiLCJvbk1zZyIsInNldE9uU2VydmVyU3RhdHVzIiwidSIsIk5ldE1hbmFnZXIiLCJzZXROZXROb2RlIiwiY29ubmVjdCIsInVybCIsImF1dG9SZWNvbm5lY3QiLCJvbm1zZ0Z1biIsInNldE9uTXNnIiwic2VuZE1zZyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDO0FBR0EsSUFBSUMsQ0FBSjs7QUFDQSxJQUFJQyxlQUFlLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQTdCOztBQUNBLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLFlBQUQsQ0FBM0I7O0FBQ0EsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxJQUFJRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxTQUFELENBQXhCOztBQUNBLENBQUMsVUFBVUksQ0FBVixF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QUFDLEdBQUc7TUFDTjBCLElBQUksRUFBRTNCLENBQUMsR0FBRzRCLElBQUksQ0FBQ0MsU0FBTCxDQUFldEMsQ0FBZixDQUFILEdBQXVCQTtJQUR4QixDQUFSO0lBR0EsSUFBSU4sQ0FBQyxHQUFHMkMsSUFBSSxDQUFDQyxTQUFMLENBQWU1QixDQUFmLENBQVI7SUFDQWIsYUFBYSxDQUFDK0IsVUFBZCxDQUF5QnZCLFdBQXpCLEdBQXVDa0MsSUFBdkMsQ0FBNEM3QyxDQUE1QztFQUNELENBUEQ7O0VBUUEsT0FBT1UsS0FBUDtBQUNELENBL0NtQixFQUFwQjs7QUFnREFaLE9BQU8sV0FBUCxHQUFrQlcsYUFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaTtcbnZhciAkejFOZXRJbnRlcmZhY2UgPSByZXF1aXJlKFwiTmV0SW50ZXJmYWNlXCIpO1xudmFyICR6MU5ldE1hbmFnZXIgPSByZXF1aXJlKFwiTmV0TWFuYWdlclwiKTtcbnZhciAkejFOZXROb2RlID0gcmVxdWlyZShcIk5ldE5vZGVcIik7XG52YXIgJHoxV2ViU29jayA9IHJlcXVpcmUoXCJXZWJTb2NrXCIpO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHRbdC5zdG9wZWQgPSAtMV0gPSBcInN0b3BlZFwiO1xuICB0W3Quc3RhcnRlZCA9IDBdID0gXCJzdGFydGVkXCI7XG59KShpIHx8IChpID0ge30pKTtcbnZhciBkZWZfU29ja2V0TWdyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHt9XG4gIF9jdG9yLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIG51bGwgPT0gdGhpcy5pbnN0YW5jZSAmJiAodGhpcy5pbnN0YW5jZSA9IG5ldyBfY3RvcigpKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0U29ja2V0ID0gZnVuY3Rpb24gKHQsIGUsIG4sIGwpIHtcbiAgICB2YXIgYyA9IHRoaXM7XG4gICAgdW5kZWZpbmVkID09PSBsICYmIChsID0gZmFsc2UpO1xuICAgIGlmICghdGhpcy5uZXROb2RlKSB7XG4gICAgICB0aGlzLndzVXJsID0gdDtcbiAgICAgIHRoaXMucm9vbUlkID0gZTtcbiAgICAgIHRoaXMuYXBwSWQgPSBuO1xuICAgICAgdmFyIGggPSBuZXcgJHoxTmV0Tm9kZS5OZXROb2RlKCk7XG4gICAgICB0aGlzLm5ldE5vZGUgPSBoO1xuICAgICAgdmFyIGcgPSBuZXcgJHoxV2ViU29jay5XZWJTb2NrKCk7XG4gICAgICBoLmluaXQoZywgbmV3ICR6MU5ldEludGVyZmFjZS5EZWZTdHJpbmdQcm90b2NvbCgpLCBudWxsKTtcbiAgICAgIGguc2V0UmVzcG9uZUhhbmRsZXIoMCwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG4gPSBlO1xuICAgICAgICBjLm9uTXNnKG4pO1xuICAgICAgfSk7XG4gICAgICBoLnNldE9uU2VydmVyU3RhdHVzKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQgPT0gaS5zdG9wZWQgfHwgaS5zdGFydGVkO1xuICAgICAgfSk7XG4gICAgICB2YXIgdSA9IHRoaXMud3NVcmwgKyBcIj9yb29tSWQ9XCIgKyB0aGlzLnJvb21JZCArIFwiJmFwcElkPVwiICsgdGhpcy5hcHBJZCArIFwiJnRlc3Q9XCIgKyAobCA/IFwiMVwiIDogXCIwXCIpO1xuICAgICAgJHoxTmV0TWFuYWdlci5OZXRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2V0TmV0Tm9kZShoKTtcbiAgICAgICR6MU5ldE1hbmFnZXIuTmV0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmNvbm5lY3Qoe1xuICAgICAgICB1cmw6IHUsXG4gICAgICAgIGF1dG9SZWNvbm5lY3Q6IC0xXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbk1zZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5vbm1zZ0Z1biAmJiB0aGlzLm9ubXNnRnVuKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0T25Nc2cgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMub25tc2dGdW4gPSB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2VuZE1zZyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdW5kZWZpbmVkID09PSBlICYmIChlID0gdHJ1ZSk7XG4gICAgdmFyIG4gPSB7XG4gICAgICBkYXRhOiBlID8gSlNPTi5zdHJpbmdpZnkodCkgOiB0XG4gICAgfTtcbiAgICB2YXIgaSA9IEpTT04uc3RyaW5naWZ5KG4pO1xuICAgICR6MU5ldE1hbmFnZXIuTmV0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmQoaSk7XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9Tb2NrZXRNZ3I7Il19