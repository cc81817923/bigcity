
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/AutoAIMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24013lQ2hZJfqPVSSR6rQ/f', 'AutoAIMgr');
// _script/AutoAIMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoAIMgr = undefined;

var exp_AutoAIMgr = function () {
  function _ctor() {}

  _ctor.prototype.touch = function (t, e) {
    var n;
    var i = window._cc ? window._cc.inputManager : cc.internal.inputManager;

    if (cc.sys.isBrowser) {
      var a = document.getElementById("GameCanvas");

      if (a && i.getHTMLElementPosition) {
        n = i.getHTMLElementPosition(a);
      } else {
        (n = cc.view.getFrameSize()).left = 0;
        n.top = 0;
      }
    } else {
      (n = cc.view.getFrameSize()).left = 0;
      n.top = 0;
    }

    var o = cc.view.getViewportRect();
    var r = cc.view.getScaleX();
    var s = cc.view.getScaleY();
    var l = cc.view.getDevicePixelRatio();
    var c = (t * r + o.x) / l + n.left;
    var h = n.top + n.height - (e * s + o.y) / l;
    var g = cc.v2(c, h);
    var u = i.getTouchByXY(g.x, g.y, n);
    i.handleTouchesBegin([u]);
    setTimeout(function () {
      i.handleTouchesEnd([u]);
    }, 200);
  };

  Object.defineProperty(_ctor, "instance", {
    get: function get() {
      this._instance || (this._instance = new _ctor());
      return this._instance;
    },
    enumerable: false,
    configurable: true
  });
  return _ctor;
}();

exports.AutoAIMgr = exp_AutoAIMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0F1dG9BSU1nci5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkF1dG9BSU1nciIsInVuZGVmaW5lZCIsImV4cF9BdXRvQUlNZ3IiLCJfY3RvciIsInByb3RvdHlwZSIsInRvdWNoIiwidCIsImUiLCJuIiwiaSIsIndpbmRvdyIsIl9jYyIsImlucHV0TWFuYWdlciIsImNjIiwiaW50ZXJuYWwiLCJzeXMiLCJpc0Jyb3dzZXIiLCJhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEhUTUxFbGVtZW50UG9zaXRpb24iLCJ2aWV3IiwiZ2V0RnJhbWVTaXplIiwibGVmdCIsInRvcCIsIm8iLCJnZXRWaWV3cG9ydFJlY3QiLCJyIiwiZ2V0U2NhbGVYIiwicyIsImdldFNjYWxlWSIsImwiLCJnZXREZXZpY2VQaXhlbFJhdGlvIiwiYyIsIngiLCJoIiwiaGVpZ2h0IiwieSIsImciLCJ2MiIsInUiLCJnZXRUb3VjaEJ5WFkiLCJoYW5kbGVUb3VjaGVzQmVnaW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlVG91Y2hlc0VuZCIsImdldCIsIl9pbnN0YW5jZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxPQUFPLENBQUNFLFNBQVIsR0FBb0JDLFNBQXBCOztBQUNBLElBQUlDLGFBQWEsR0FBRyxZQUFZO0VBQzlCLFNBQVNDLEtBQVQsR0FBaUIsQ0FBRTs7RUFDbkJBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3RDLElBQUlDLENBQUo7SUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBUCxHQUFhRCxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsWUFBeEIsR0FBdUNDLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZRixZQUEzRDs7SUFDQSxJQUFJQyxFQUFFLENBQUNFLEdBQUgsQ0FBT0MsU0FBWCxFQUFzQjtNQUNwQixJQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFSOztNQUNBLElBQUlGLENBQUMsSUFBSVIsQ0FBQyxDQUFDVyxzQkFBWCxFQUFtQztRQUNqQ1osQ0FBQyxHQUFHQyxDQUFDLENBQUNXLHNCQUFGLENBQXlCSCxDQUF6QixDQUFKO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsQ0FBQ1QsQ0FBQyxHQUFHSyxFQUFFLENBQUNRLElBQUgsQ0FBUUMsWUFBUixFQUFMLEVBQTZCQyxJQUE3QixHQUFvQyxDQUFwQztRQUNBZixDQUFDLENBQUNnQixHQUFGLEdBQVEsQ0FBUjtNQUNEO0lBQ0YsQ0FSRCxNQVFPO01BQ0wsQ0FBQ2hCLENBQUMsR0FBR0ssRUFBRSxDQUFDUSxJQUFILENBQVFDLFlBQVIsRUFBTCxFQUE2QkMsSUFBN0IsR0FBb0MsQ0FBcEM7TUFDQWYsQ0FBQyxDQUFDZ0IsR0FBRixHQUFRLENBQVI7SUFDRDs7SUFDRCxJQUFJQyxDQUFDLEdBQUdaLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRSyxlQUFSLEVBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUdkLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRTyxTQUFSLEVBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUdoQixFQUFFLENBQUNRLElBQUgsQ0FBUVMsU0FBUixFQUFSO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHbEIsRUFBRSxDQUFDUSxJQUFILENBQVFXLG1CQUFSLEVBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUcsQ0FBQzNCLENBQUMsR0FBR3FCLENBQUosR0FBUUYsQ0FBQyxDQUFDUyxDQUFYLElBQWdCSCxDQUFoQixHQUFvQnZCLENBQUMsQ0FBQ2UsSUFBOUI7SUFDQSxJQUFJWSxDQUFDLEdBQUczQixDQUFDLENBQUNnQixHQUFGLEdBQVFoQixDQUFDLENBQUM0QixNQUFWLEdBQW1CLENBQUM3QixDQUFDLEdBQUdzQixDQUFKLEdBQVFKLENBQUMsQ0FBQ1ksQ0FBWCxJQUFnQk4sQ0FBM0M7SUFDQSxJQUFJTyxDQUFDLEdBQUd6QixFQUFFLENBQUMwQixFQUFILENBQU1OLENBQU4sRUFBU0UsQ0FBVCxDQUFSO0lBQ0EsSUFBSUssQ0FBQyxHQUFHL0IsQ0FBQyxDQUFDZ0MsWUFBRixDQUFlSCxDQUFDLENBQUNKLENBQWpCLEVBQW9CSSxDQUFDLENBQUNELENBQXRCLEVBQXlCN0IsQ0FBekIsQ0FBUjtJQUNBQyxDQUFDLENBQUNpQyxrQkFBRixDQUFxQixDQUFDRixDQUFELENBQXJCO0lBQ0FHLFVBQVUsQ0FBQyxZQUFZO01BQ3JCbEMsQ0FBQyxDQUFDbUMsZ0JBQUYsQ0FBbUIsQ0FBQ0osQ0FBRCxDQUFuQjtJQUNELENBRlMsRUFFUCxHQUZPLENBQVY7RUFHRCxDQTNCRDs7RUE0QkE1QyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JNLEtBQXRCLEVBQTZCLFVBQTdCLEVBQXlDO0lBQ3ZDMEMsR0FBRyxFQUFFLGVBQVk7TUFDZixLQUFLQyxTQUFMLEtBQW1CLEtBQUtBLFNBQUwsR0FBaUIsSUFBSTNDLEtBQUosRUFBcEM7TUFDQSxPQUFPLEtBQUsyQyxTQUFaO0lBQ0QsQ0FKc0M7SUFLdkNDLFVBQVUsRUFBRSxLQUwyQjtJQU12Q0MsWUFBWSxFQUFFO0VBTnlCLENBQXpDO0VBUUEsT0FBTzdDLEtBQVA7QUFDRCxDQXZDbUIsRUFBcEI7O0FBd0NBTCxPQUFPLENBQUNFLFNBQVIsR0FBb0JFLGFBQXBCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BdXRvQUlNZ3IgPSB1bmRlZmluZWQ7XG52YXIgZXhwX0F1dG9BSU1nciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7fVxuICBfY3Rvci5wcm90b3R5cGUudG91Y2ggPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHZhciBuO1xuICAgIHZhciBpID0gd2luZG93Ll9jYyA/IHdpbmRvdy5fY2MuaW5wdXRNYW5hZ2VyIDogY2MuaW50ZXJuYWwuaW5wdXRNYW5hZ2VyO1xuICAgIGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XG4gICAgICB2YXIgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR2FtZUNhbnZhc1wiKTtcbiAgICAgIGlmIChhICYmIGkuZ2V0SFRNTEVsZW1lbnRQb3NpdGlvbikge1xuICAgICAgICBuID0gaS5nZXRIVE1MRWxlbWVudFBvc2l0aW9uKGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKG4gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpKS5sZWZ0ID0gMDtcbiAgICAgICAgbi50b3AgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAobiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkpLmxlZnQgPSAwO1xuICAgICAgbi50b3AgPSAwO1xuICAgIH1cbiAgICB2YXIgbyA9IGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCk7XG4gICAgdmFyIHIgPSBjYy52aWV3LmdldFNjYWxlWCgpO1xuICAgIHZhciBzID0gY2Mudmlldy5nZXRTY2FsZVkoKTtcbiAgICB2YXIgbCA9IGNjLnZpZXcuZ2V0RGV2aWNlUGl4ZWxSYXRpbygpO1xuICAgIHZhciBjID0gKHQgKiByICsgby54KSAvIGwgKyBuLmxlZnQ7XG4gICAgdmFyIGggPSBuLnRvcCArIG4uaGVpZ2h0IC0gKGUgKiBzICsgby55KSAvIGw7XG4gICAgdmFyIGcgPSBjYy52MihjLCBoKTtcbiAgICB2YXIgdSA9IGkuZ2V0VG91Y2hCeVhZKGcueCwgZy55LCBuKTtcbiAgICBpLmhhbmRsZVRvdWNoZXNCZWdpbihbdV0pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaS5oYW5kbGVUb3VjaGVzRW5kKFt1XSk7XG4gICAgfSwgMjAwKTtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9jdG9yLCBcImluc3RhbmNlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBfY3RvcigpKTtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIF9jdG9yO1xufSgpO1xuZXhwb3J0cy5BdXRvQUlNZ3IgPSBleHBfQXV0b0FJTWdyO1xuIl19