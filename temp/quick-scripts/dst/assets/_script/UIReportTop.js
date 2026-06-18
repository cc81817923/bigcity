
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/UIReportTop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c025czTyv9GtbsQ+dzqq7lC', 'UIReportTop');
// _script/UIReportTop.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BasePlatform = require("BasePlatform");

var $z1BaseUI = require("BaseUI");

var $z1Appcfg = require("Appcfg");

var $z1PlatformSetting = require("PlatformSetting");

var $z1PlatformManager = require("PlatformManager");

var $z1SdkMgr = require("SdkMgr");

var $z1Config = require("Config");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_UIReportTop = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btn_Report = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.onLoad = function () {
    var t = this;
    this.addEvent($z1Appcfg.BaseEventName.RefreshReport, function (e, n) {
      t.btn_Report.active = e && !$z1SdkMgr.SdkMgr.getInstance().getCheckVersion($z1PlatformSetting.SwitchID.ShenHe) && $z1PlatformManager.PlatformManager.currentPlatform != $z1BasePlatform.Platform.WEB_LINK && $z1PlatformManager.PlatformManager.currentPlatform != $z1BasePlatform.Platform.ANDROID_233 && $z1PlatformManager.PlatformManager.currentPlatform != $z1BasePlatform.Platform.ANDROID_4399;

      if (e) {
        var i = t.btn_Report.parent.convertToNodeSpaceAR(n);
        t.btn_Report.setPosition(i);
      }
    });
  };

  _ctor.prototype.start = function () {
    var t = this;
    ($z1SdkMgr.SdkMgr.getInstance().getCheckVersion($z1PlatformSetting.SwitchID.ShenHe) || $z1PlatformManager.PlatformManager.currentPlatform == $z1BasePlatform.Platform.WEB_LINK || $z1PlatformManager.PlatformManager.currentPlatform == $z1BasePlatform.Platform.ANDROID_233 || $z1PlatformManager.PlatformManager.currentPlatform == $z1BasePlatform.Platform.ANDROID_4399) && (this.btn_Report.active = false);
    this.btn_Report.on(cc.Node.EventType.TOUCH_END, function () {
      t.openUI($z1Config.UIID.UIReport);
    });
  };

  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btn_Report", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_UIReportTop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1VJUmVwb3J0VG9wLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VQbGF0Zm9ybSIsInJlcXVpcmUiLCIkejFCYXNlVUkiLCIkejFBcHBjZmciLCIkejFQbGF0Zm9ybVNldHRpbmciLCIkejFQbGF0Zm9ybU1hbmFnZXIiLCIkejFTZGtNZ3IiLCIkejFDb25maWciLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX3Byb3BlcnR5IiwicHJvcGVydHkiLCJkZWZfVUlSZXBvcnRUb3AiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidG5fUmVwb3J0IiwicHJvdG90eXBlIiwib25Mb2FkIiwiYWRkRXZlbnQiLCJCYXNlRXZlbnROYW1lIiwiUmVmcmVzaFJlcG9ydCIsIm4iLCJhY3RpdmUiLCJTZGtNZ3IiLCJnZXRJbnN0YW5jZSIsImdldENoZWNrVmVyc2lvbiIsIlN3aXRjaElEIiwiU2hlbkhlIiwiUGxhdGZvcm1NYW5hZ2VyIiwiY3VycmVudFBsYXRmb3JtIiwiUGxhdGZvcm0iLCJXRUJfTElOSyIsIkFORFJPSURfMjMzIiwiQU5EUk9JRF80Mzk5IiwicGFyZW50IiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJzZXRQb3NpdGlvbiIsInN0YXJ0Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib3BlblVJIiwiVUlJRCIsIlVJUmVwb3J0IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsZUFBZSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUE3Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQXZCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsa0JBQWtCLEdBQUdILE9BQU8sQ0FBQyxpQkFBRCxDQUFoQzs7QUFDQSxJQUFJSSxrQkFBa0IsR0FBR0osT0FBTyxDQUFDLGlCQUFELENBQWhDOztBQUNBLElBQUlLLFNBQVMsR0FBR0wsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSU0sU0FBUyxHQUFHTixPQUFPLENBQUMsUUFBRCxDQUF2Qjs7QUFDQSxJQUFJTyxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQSxJQUFJQyxZQUFZLEdBQUdMLGFBQWEsQ0FBQ00sUUFBakM7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHLFVBQVVDLENBQVYsRUFBYTtFQUNqQyxTQUFTQyxLQUFULEdBQWlCO0lBQ2YsSUFBSUMsQ0FBQyxHQUFHLFNBQVNGLENBQVQsSUFBY0EsQ0FBQyxDQUFDRyxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWQsSUFBMEMsSUFBbEQ7SUFDQUYsQ0FBQyxDQUFDRyxVQUFGLEdBQWUsSUFBZjtJQUNBLE9BQU9ILENBQVA7RUFDRDs7RUFDRDFCLFdBQVcsQ0FBQ3lCLEtBQUQsRUFBUUQsQ0FBUixDQUFYOztFQUNBQyxLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLE1BQWhCLEdBQXlCLFlBQVk7SUFDbkMsSUFBSVAsQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLUSxRQUFMLENBQWNyQixTQUFTLENBQUNzQixhQUFWLENBQXdCQyxhQUF0QyxFQUFxRCxVQUFVUixDQUFWLEVBQWFTLENBQWIsRUFBZ0I7TUFDbkVYLENBQUMsQ0FBQ0ssVUFBRixDQUFhTyxNQUFiLEdBQXNCVixDQUFDLElBQUksQ0FBQ1osU0FBUyxDQUFDdUIsTUFBVixDQUFpQkMsV0FBakIsR0FBK0JDLGVBQS9CLENBQStDM0Isa0JBQWtCLENBQUM0QixRQUFuQixDQUE0QkMsTUFBM0UsQ0FBTixJQUE0RjVCLGtCQUFrQixDQUFDNkIsZUFBbkIsQ0FBbUNDLGVBQW5DLElBQXNEbkMsZUFBZSxDQUFDb0MsUUFBaEIsQ0FBeUJDLFFBQTNLLElBQXVMaEMsa0JBQWtCLENBQUM2QixlQUFuQixDQUFtQ0MsZUFBbkMsSUFBc0RuQyxlQUFlLENBQUNvQyxRQUFoQixDQUF5QkUsV0FBdFEsSUFBcVJqQyxrQkFBa0IsQ0FBQzZCLGVBQW5CLENBQW1DQyxlQUFuQyxJQUFzRG5DLGVBQWUsQ0FBQ29DLFFBQWhCLENBQXlCRyxZQUExWDs7TUFDQSxJQUFJckIsQ0FBSixFQUFPO1FBQ0wsSUFBSTNCLENBQUMsR0FBR3lCLENBQUMsQ0FBQ0ssVUFBRixDQUFhbUIsTUFBYixDQUFvQkMsb0JBQXBCLENBQXlDZCxDQUF6QyxDQUFSO1FBQ0FYLENBQUMsQ0FBQ0ssVUFBRixDQUFhcUIsV0FBYixDQUF5Qm5ELENBQXpCO01BQ0Q7SUFDRixDQU5EO0VBT0QsQ0FURDs7RUFVQTBCLEtBQUssQ0FBQ0ssU0FBTixDQUFnQnFCLEtBQWhCLEdBQXdCLFlBQVk7SUFDbEMsSUFBSTNCLENBQUMsR0FBRyxJQUFSO0lBQ0EsQ0FBQ1YsU0FBUyxDQUFDdUIsTUFBVixDQUFpQkMsV0FBakIsR0FBK0JDLGVBQS9CLENBQStDM0Isa0JBQWtCLENBQUM0QixRQUFuQixDQUE0QkMsTUFBM0UsS0FBc0Y1QixrQkFBa0IsQ0FBQzZCLGVBQW5CLENBQW1DQyxlQUFuQyxJQUFzRG5DLGVBQWUsQ0FBQ29DLFFBQWhCLENBQXlCQyxRQUFySyxJQUFpTGhDLGtCQUFrQixDQUFDNkIsZUFBbkIsQ0FBbUNDLGVBQW5DLElBQXNEbkMsZUFBZSxDQUFDb0MsUUFBaEIsQ0FBeUJFLFdBQWhRLElBQStRakMsa0JBQWtCLENBQUM2QixlQUFuQixDQUFtQ0MsZUFBbkMsSUFBc0RuQyxlQUFlLENBQUNvQyxRQUFoQixDQUF5QkcsWUFBL1YsTUFBaVgsS0FBS2xCLFVBQUwsQ0FBZ0JPLE1BQWhCLEdBQXlCLEtBQTFZO0lBQ0EsS0FBS1AsVUFBTCxDQUFnQnVCLEVBQWhCLENBQW1CbkMsRUFBRSxDQUFDb0MsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUFyQyxFQUFnRCxZQUFZO01BQzFEL0IsQ0FBQyxDQUFDZ0MsTUFBRixDQUFTekMsU0FBUyxDQUFDMEMsSUFBVixDQUFlQyxRQUF4QjtJQUNELENBRkQ7RUFHRCxDQU5EOztFQU9BeEQsWUFBWSxDQUFDLENBQUNtQixZQUFZLENBQUNKLEVBQUUsQ0FBQ29DLElBQUosQ0FBYixDQUFELEVBQTBCNUIsS0FBSyxDQUFDSyxTQUFoQyxFQUEyQyxZQUEzQyxFQUF5RDZCLFNBQXpELENBQVo7RUFDQSxPQUFPekQsWUFBWSxDQUFDLENBQUNpQixXQUFELENBQUQsRUFBZ0JNLEtBQWhCLENBQW5CO0FBQ0QsQ0ExQnFCLENBMEJwQmYsU0FBUyxXQTFCVyxDQUF0Qjs7QUEyQkFKLE9BQU8sV0FBUCxHQUFrQmlCLGVBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFCYXNlUGxhdGZvcm0gPSByZXF1aXJlKFwiQmFzZVBsYXRmb3JtXCIpO1xudmFyICR6MUJhc2VVSSA9IHJlcXVpcmUoXCJCYXNlVUlcIik7XG52YXIgJHoxQXBwY2ZnID0gcmVxdWlyZShcIkFwcGNmZ1wiKTtcbnZhciAkejFQbGF0Zm9ybVNldHRpbmcgPSByZXF1aXJlKFwiUGxhdGZvcm1TZXR0aW5nXCIpO1xudmFyICR6MVBsYXRmb3JtTWFuYWdlciA9IHJlcXVpcmUoXCJQbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHoxU2RrTWdyID0gcmVxdWlyZShcIlNka01nclwiKTtcbnZhciAkejFDb25maWcgPSByZXF1aXJlKFwiQ29uZmlnXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX1VJUmVwb3J0VG9wID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuYnRuX1JlcG9ydCA9IG51bGw7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUFwcGNmZy5CYXNlRXZlbnROYW1lLlJlZnJlc2hSZXBvcnQsIGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICB0LmJ0bl9SZXBvcnQuYWN0aXZlID0gZSAmJiAhJHoxU2RrTWdyLlNka01nci5nZXRJbnN0YW5jZSgpLmdldENoZWNrVmVyc2lvbigkejFQbGF0Zm9ybVNldHRpbmcuU3dpdGNoSUQuU2hlbkhlKSAmJiAkejFQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm1NYW5hZ2VyLmN1cnJlbnRQbGF0Zm9ybSAhPSAkejFCYXNlUGxhdGZvcm0uUGxhdGZvcm0uV0VCX0xJTksgJiYgJHoxUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtTWFuYWdlci5jdXJyZW50UGxhdGZvcm0gIT0gJHoxQmFzZVBsYXRmb3JtLlBsYXRmb3JtLkFORFJPSURfMjMzICYmICR6MVBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybU1hbmFnZXIuY3VycmVudFBsYXRmb3JtICE9ICR6MUJhc2VQbGF0Zm9ybS5QbGF0Zm9ybS5BTkRST0lEXzQzOTk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB2YXIgaSA9IHQuYnRuX1JlcG9ydC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobik7XG4gICAgICAgIHQuYnRuX1JlcG9ydC5zZXRQb3NpdGlvbihpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICAoJHoxU2RrTWdyLlNka01nci5nZXRJbnN0YW5jZSgpLmdldENoZWNrVmVyc2lvbigkejFQbGF0Zm9ybVNldHRpbmcuU3dpdGNoSUQuU2hlbkhlKSB8fCAkejFQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm1NYW5hZ2VyLmN1cnJlbnRQbGF0Zm9ybSA9PSAkejFCYXNlUGxhdGZvcm0uUGxhdGZvcm0uV0VCX0xJTksgfHwgJHoxUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtTWFuYWdlci5jdXJyZW50UGxhdGZvcm0gPT0gJHoxQmFzZVBsYXRmb3JtLlBsYXRmb3JtLkFORFJPSURfMjMzIHx8ICR6MVBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybU1hbmFnZXIuY3VycmVudFBsYXRmb3JtID09ICR6MUJhc2VQbGF0Zm9ybS5QbGF0Zm9ybS5BTkRST0lEXzQzOTkpICYmICh0aGlzLmJ0bl9SZXBvcnQuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuYnRuX1JlcG9ydC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQub3BlblVJKCR6MUNvbmZpZy5VSUlELlVJUmVwb3J0KTtcbiAgICB9KTtcbiAgfTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuX1JlcG9ydFwiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX1VJUmVwb3J0VG9wOyJdfQ==