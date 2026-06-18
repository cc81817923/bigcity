
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallPlayAniCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e51ae5Ue05JbaDPdCN0UOSa', 'KinghtFallPlayAniCtrl');
// _script/KinghtFallPlayAniCtrl.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallPlayAniCtrl = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.spAniMa = null;
    e.spAniBody = null;
    e.spAniDrap = null;
    e.spAniHead = null;
    e.spAniBow = null;
    e.spAniArrow = null;
    e.spAniHand = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.initView = function () {
    var t = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getEquipCfgList();

    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getPersonLevel(n.id);

      switch (n.id) {
        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Body:
          this.spAniDrap.setSkin(n.levelInfo[i - 1].EquipSkin);
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Head:
          this.spAniHead.setSkin(n.levelInfo[i - 1].EquipSkin);
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Arrow:
          this.spAniArrow.setSkin(n.levelInfo[i - 1].EquipSkin);
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Bow:
          this.spAniBow.setSkin(n.levelInfo[i - 1].EquipSkin);
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.Gloves:
          this.spAniHand.setSkin(n.levelInfo[i - 1].EquipSkin);
          break;

        case $z1KinghtFallEnum.KinghtFallEnumEquipEnum.horse:
          this.spAniMa.setSkin(n.levelInfo[i - 1].EquipSkin);
      }
    }
  };

  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Horse"
  })], _ctor.prototype, "spAniMa", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Body"
  })], _ctor.prototype, "spAniBody", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Cape"
  })], _ctor.prototype, "spAniDrap", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Head"
  })], _ctor.prototype, "spAniHead", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Bow"
  })], _ctor.prototype, "spAniBow", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Arrow"
  })], _ctor.prototype, "spAniArrow", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Hand"
  })], _ctor.prototype, "spAniHand", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}(cc.Component);

exports["default"] = def_KinghtFallPlayAniCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxQbGF5QW5pQ3RybC5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFLaW5naHRGYWxsRW51bSIsInJlcXVpcmUiLCIkejFLaW5naHRGYWxsRGF0YU1nciIsIiR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX3Byb3BlcnR5IiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbFBsYXlBbmlDdHJsIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwic3BBbmlNYSIsInNwQW5pQm9keSIsInNwQW5pRHJhcCIsInNwQW5pSGVhZCIsInNwQW5pQm93Iiwic3BBbmlBcnJvdyIsInNwQW5pSGFuZCIsInByb3RvdHlwZSIsImluaXRWaWV3IiwiS2luZ2h0RmFsbERhdGFNZ3IiLCJnZXRJbnN0YW5jZSIsImdldEVxdWlwQ2ZnTGlzdCIsImxlbmd0aCIsIm4iLCJLaW5naHRGYWxsUGxheWVyTWdyIiwiZ2V0VXNlckRhdGEiLCJnZXRQZXJzb25MZXZlbCIsImlkIiwiS2luZ2h0RmFsbEVudW1FcXVpcEVudW0iLCJCb2R5Iiwic2V0U2tpbiIsImxldmVsSW5mbyIsIkVxdWlwU2tpbiIsIkhlYWQiLCJBcnJvdyIsIkJvdyIsIkdsb3ZlcyIsImhvcnNlIiwidHlwZSIsInNwIiwiU2tlbGV0b24iLCJ0b29sdGlwIiwidW5kZWZpbmVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNB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ZSxZQUFZLENBQUM7SUFDekJvQyxJQUFJLEVBQUVDLEVBQUUsQ0FBQ0MsUUFEZ0I7SUFFekJDLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQbkMsS0FBSyxDQUFDVyxTQUhDLEVBR1UsVUFIVixFQUdzQnlCLFNBSHRCLENBQVo7RUFJQXZELFlBQVksQ0FBQyxDQUFDZSxZQUFZLENBQUM7SUFDekJvQyxJQUFJLEVBQUVDLEVBQUUsQ0FBQ0MsUUFEZ0I7SUFFekJDLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQbkMsS0FBSyxDQUFDVyxTQUhDLEVBR1UsWUFIVixFQUd3QnlCLFNBSHhCLENBQVo7RUFJQXZELFlBQVksQ0FBQyxDQUFDZSxZQUFZLENBQUM7SUFDekJvQyxJQUFJLEVBQUVDLEVBQUUsQ0FBQ0MsUUFEZ0I7SUFFekJDLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQbkMsS0FBSyxDQUFDVyxTQUhDLEVBR1UsV0FIVixFQUd1QnlCLFNBSHZCLENBQVo7RUFJQSxPQUFPdkQsWUFBWSxDQUFDLENBQUNhLFdBQUQsQ0FBRCxFQUFnQk0sS0FBaEIsQ0FBbkI7QUFDRCxDQXBFK0IsQ0FvRTlCUixFQUFFLENBQUM2QyxTQXBFMkIsQ0FBaEM7O0FBcUVBcEQsT0FBTyxXQUFQLEdBQWtCYSx5QkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUtpbmdodEZhbGxFbnVtID0gcmVxdWlyZShcIktpbmdodEZhbGxFbnVtXCIpO1xudmFyICR6MUtpbmdodEZhbGxEYXRhTWdyID0gcmVxdWlyZShcIktpbmdodEZhbGxEYXRhTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFBsYXllck1nclwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsUGxheUFuaUN0cmwgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5zcEFuaU1hID0gbnVsbDtcbiAgICBlLnNwQW5pQm9keSA9IG51bGw7XG4gICAgZS5zcEFuaURyYXAgPSBudWxsO1xuICAgIGUuc3BBbmlIZWFkID0gbnVsbDtcbiAgICBlLnNwQW5pQm93ID0gbnVsbDtcbiAgICBlLnNwQW5pQXJyb3cgPSBudWxsO1xuICAgIGUuc3BBbmlIYW5kID0gbnVsbDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0RXF1aXBDZmdMaXN0KCk7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICB2YXIgbiA9IHRbZV07XG4gICAgICB2YXIgaSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0UGVyc29uTGV2ZWwobi5pZCk7XG4gICAgICBzd2l0Y2ggKG4uaWQpIHtcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUVxdWlwRW51bS5Cb2R5OlxuICAgICAgICAgIHRoaXMuc3BBbmlEcmFwLnNldFNraW4obi5sZXZlbEluZm9baSAtIDFdLkVxdWlwU2tpbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1FcXVpcEVudW0uSGVhZDpcbiAgICAgICAgICB0aGlzLnNwQW5pSGVhZC5zZXRTa2luKG4ubGV2ZWxJbmZvW2kgLSAxXS5FcXVpcFNraW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtRXF1aXBFbnVtLkFycm93OlxuICAgICAgICAgIHRoaXMuc3BBbmlBcnJvdy5zZXRTa2luKG4ubGV2ZWxJbmZvW2kgLSAxXS5FcXVpcFNraW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtRXF1aXBFbnVtLkJvdzpcbiAgICAgICAgICB0aGlzLnNwQW5pQm93LnNldFNraW4obi5sZXZlbEluZm9baSAtIDFdLkVxdWlwU2tpbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1FcXVpcEVudW0uR2xvdmVzOlxuICAgICAgICAgIHRoaXMuc3BBbmlIYW5kLnNldFNraW4obi5sZXZlbEluZm9baSAtIDFdLkVxdWlwU2tpbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1FcXVpcEVudW0uaG9yc2U6XG4gICAgICAgICAgdGhpcy5zcEFuaU1hLnNldFNraW4obi5sZXZlbEluZm9baSAtIDFdLkVxdWlwU2tpbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogc3AuU2tlbGV0b24sXG4gICAgdG9vbHRpcDogXCJIb3JzZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInNwQW5pTWFcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IHNwLlNrZWxldG9uLFxuICAgIHRvb2x0aXA6IFwiQm9keVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInNwQW5pQm9keVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogc3AuU2tlbGV0b24sXG4gICAgdG9vbHRpcDogXCJDYXBlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwic3BBbmlEcmFwXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBzcC5Ta2VsZXRvbixcbiAgICB0b29sdGlwOiBcIkhlYWRcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzcEFuaUhlYWRcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IHNwLlNrZWxldG9uLFxuICAgIHRvb2x0aXA6IFwiQm93XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwic3BBbmlCb3dcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IHNwLlNrZWxldG9uLFxuICAgIHRvb2x0aXA6IFwiQXJyb3dcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzcEFuaUFycm93XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBzcC5Ta2VsZXRvbixcbiAgICB0b29sdGlwOiBcIkhhbmRcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzcEFuaUhhbmRcIiwgdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbFBsYXlBbmlDdHJsOyJdfQ==