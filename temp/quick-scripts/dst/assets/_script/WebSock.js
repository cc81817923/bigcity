
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/WebSock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70df2VbIU9B66Fr+op8FKJp', 'WebSock');
// _script/WebSock.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebSock = undefined;

var exp_WebSock = function () {
  function _ctor() {
    this._ws = null;
    this.onConnected = null;
    this.onMessage = null;
    this.onError = null;
    this.onClosed = null;
  }

  _ctor.prototype.connect = function (t) {
    var e = this;

    if (this._ws && this._ws.readyState === WebSocket.CONNECTING) {
      console.log("websocket connecting, wait for a moment...");
      return false;
    }

    var n = null;

    if (t.url) {
      n = t.url;
    } else {
      var i = t.ip;
      var a = t.port;
      n = t.protocol + "://" + i + ":" + a;
    }

    console.log("connected: " + n);
    this._ws = new WebSocket(n);
    this._ws.binaryType = t.binaryType ? t.binaryType : "arraybuffer";

    this._ws.onmessage = function (t) {
      e.onMessage(t.data);
    };

    this._ws.onopen = this.onConnected;
    this._ws.onerror = this.onError;
    this._ws.onclose = this.onClosed;
    return true;
  };

  _ctor.prototype.send = function (t) {
    return this._ws.readyState == WebSocket.OPEN && (this._ws.send(t), true);
  };

  _ctor.prototype.close = function (t, e) {
    this._ws.close(t, e);
  };

  return _ctor;
}();

exports.WebSock = exp_WebSock;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1dlYlNvY2suanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJXZWJTb2NrIiwidW5kZWZpbmVkIiwiZXhwX1dlYlNvY2siLCJfY3RvciIsIl93cyIsIm9uQ29ubmVjdGVkIiwib25NZXNzYWdlIiwib25FcnJvciIsIm9uQ2xvc2VkIiwicHJvdG90eXBlIiwiY29ubmVjdCIsInQiLCJlIiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIkNPTk5FQ1RJTkciLCJjb25zb2xlIiwibG9nIiwibiIsInVybCIsImkiLCJpcCIsImEiLCJwb3J0IiwicHJvdG9jb2wiLCJiaW5hcnlUeXBlIiwib25tZXNzYWdlIiwiZGF0YSIsIm9ub3BlbiIsIm9uZXJyb3IiLCJvbmNsb3NlIiwic2VuZCIsIk9QRU4iLCJjbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDO0FBR0FELE9BQU8sQ0FBQ0UsT0FBUixHQUFrQkMsU0FBbEI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHLFlBQVk7RUFDNUIsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLEtBQUtDLEdBQUwsR0FBVyxJQUFYO0lBQ0EsS0FBS0MsV0FBTCxHQUFtQixJQUFuQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsSUFBakI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7RUFDRDs7RUFDREwsS0FBSyxDQUFDTSxTQUFOLENBQWdCQyxPQUFoQixHQUEwQixVQUFVQyxDQUFWLEVBQWE7SUFDckMsSUFBSUMsQ0FBQyxHQUFHLElBQVI7O0lBQ0EsSUFBSSxLQUFLUixHQUFMLElBQVksS0FBS0EsR0FBTCxDQUFTUyxVQUFULEtBQXdCQyxTQUFTLENBQUNDLFVBQWxELEVBQThEO01BQzVEQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBWjtNQUNBLE9BQU8sS0FBUDtJQUNEOztJQUNELElBQUlDLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUlQLENBQUMsQ0FBQ1EsR0FBTixFQUFXO01BQ1RELENBQUMsR0FBR1AsQ0FBQyxDQUFDUSxHQUFOO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsSUFBSUMsQ0FBQyxHQUFHVCxDQUFDLENBQUNVLEVBQVY7TUFDQSxJQUFJQyxDQUFDLEdBQUdYLENBQUMsQ0FBQ1ksSUFBVjtNQUNBTCxDQUFDLEdBQUdQLENBQUMsQ0FBQ2EsUUFBRixHQUFhLEtBQWIsR0FBcUJKLENBQXJCLEdBQXlCLEdBQXpCLEdBQStCRSxDQUFuQztJQUNEOztJQUNETixPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBZ0JDLENBQTVCO0lBQ0EsS0FBS2QsR0FBTCxHQUFXLElBQUlVLFNBQUosQ0FBY0ksQ0FBZCxDQUFYO0lBQ0EsS0FBS2QsR0FBTCxDQUFTcUIsVUFBVCxHQUFzQmQsQ0FBQyxDQUFDYyxVQUFGLEdBQWVkLENBQUMsQ0FBQ2MsVUFBakIsR0FBOEIsYUFBcEQ7O0lBQ0EsS0FBS3JCLEdBQUwsQ0FBU3NCLFNBQVQsR0FBcUIsVUFBVWYsQ0FBVixFQUFhO01BQ2hDQyxDQUFDLENBQUNOLFNBQUYsQ0FBWUssQ0FBQyxDQUFDZ0IsSUFBZDtJQUNELENBRkQ7O0lBR0EsS0FBS3ZCLEdBQUwsQ0FBU3dCLE1BQVQsR0FBa0IsS0FBS3ZCLFdBQXZCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTeUIsT0FBVCxHQUFtQixLQUFLdEIsT0FBeEI7SUFDQSxLQUFLSCxHQUFMLENBQVMwQixPQUFULEdBQW1CLEtBQUt0QixRQUF4QjtJQUNBLE9BQU8sSUFBUDtFQUNELENBeEJEOztFQXlCQUwsS0FBSyxDQUFDTSxTQUFOLENBQWdCc0IsSUFBaEIsR0FBdUIsVUFBVXBCLENBQVYsRUFBYTtJQUNsQyxPQUFPLEtBQUtQLEdBQUwsQ0FBU1MsVUFBVCxJQUF1QkMsU0FBUyxDQUFDa0IsSUFBakMsS0FBMEMsS0FBSzVCLEdBQUwsQ0FBUzJCLElBQVQsQ0FBY3BCLENBQWQsR0FBa0IsSUFBNUQsQ0FBUDtFQUNELENBRkQ7O0VBR0FSLEtBQUssQ0FBQ00sU0FBTixDQUFnQndCLEtBQWhCLEdBQXdCLFVBQVV0QixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDdEMsS0FBS1IsR0FBTCxDQUFTNkIsS0FBVCxDQUFldEIsQ0FBZixFQUFrQkMsQ0FBbEI7RUFDRCxDQUZEOztFQUdBLE9BQU9ULEtBQVA7QUFDRCxDQXhDaUIsRUFBbEI7O0FBeUNBTCxPQUFPLENBQUNFLE9BQVIsR0FBa0JFLFdBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XZWJTb2NrID0gdW5kZWZpbmVkO1xudmFyIGV4cF9XZWJTb2NrID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB0aGlzLl93cyA9IG51bGw7XG4gICAgdGhpcy5vbkNvbm5lY3RlZCA9IG51bGw7XG4gICAgdGhpcy5vbk1lc3NhZ2UgPSBudWxsO1xuICAgIHRoaXMub25FcnJvciA9IG51bGw7XG4gICAgdGhpcy5vbkNsb3NlZCA9IG51bGw7XG4gIH1cbiAgX2N0b3IucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5fd3MgJiYgdGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGNvbm5lY3RpbmcsIHdhaXQgZm9yIGEgbW9tZW50Li4uXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbiA9IG51bGw7XG4gICAgaWYgKHQudXJsKSB7XG4gICAgICBuID0gdC51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpID0gdC5pcDtcbiAgICAgIHZhciBhID0gdC5wb3J0O1xuICAgICAgbiA9IHQucHJvdG9jb2wgKyBcIjovL1wiICsgaSArIFwiOlwiICsgYTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJjb25uZWN0ZWQ6IFwiICsgbik7XG4gICAgdGhpcy5fd3MgPSBuZXcgV2ViU29ja2V0KG4pO1xuICAgIHRoaXMuX3dzLmJpbmFyeVR5cGUgPSB0LmJpbmFyeVR5cGUgPyB0LmJpbmFyeVR5cGUgOiBcImFycmF5YnVmZmVyXCI7XG4gICAgdGhpcy5fd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUub25NZXNzYWdlKHQuZGF0YSk7XG4gICAgfTtcbiAgICB0aGlzLl93cy5vbm9wZW4gPSB0aGlzLm9uQ29ubmVjdGVkO1xuICAgIHRoaXMuX3dzLm9uZXJyb3IgPSB0aGlzLm9uRXJyb3I7XG4gICAgdGhpcy5fd3Mub25jbG9zZSA9IHRoaXMub25DbG9zZWQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdGhpcy5fd3MucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuT1BFTiAmJiAodGhpcy5fd3Muc2VuZCh0KSwgdHJ1ZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdGhpcy5fd3MuY2xvc2UodCwgZSk7XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuV2ViU29jayA9IGV4cF9XZWJTb2NrOyJdfQ==