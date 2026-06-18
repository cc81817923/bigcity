
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/BasePlatform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99a91f+tQxEWIiBgY/dL3bP', 'BasePlatform');
// _script/BasePlatform.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Platform = undefined;

(function (t) {
  t.EDITOR = "editor";
  t.KUAIKAN = "h5_kuaikan";
  t.WECHAT = "h5_wechat";
  t.BYTEDANCE = "h5_bytedance";
  t.VIVO = "h5_vivo";
  t.BAIDU = "h5_baidu";
  t.OPPO = "h5_oppo";
  t.QQ = "h5_qq";
  t.ANDROID_233 = "android_233";
  t.ANDROID_XIAOMI = "android_xiaomi";
  t.ANDROID_VIVO = "android_vivo";
  t.ANDROID_OPPO = "android_oppo";
  t.ANDROID_oyahoo = "android_ohayoo";
  t.ANDROID_MMY = "android_mmy";
  t.ANDROID_4399 = "android_4399";
  t.ANDROID_DOUYIN = "android_bytedance";
  t.GOOGLE = "Google";
  t.Ios = "ios";
  t.KuaiShou = "kuaishou";
  t.HUAWEI_QUICK = "huawei";
  t.WEB_LINK = "weblink";
  t.BiliBili = "bilibili";
  t.H5d233 = "h5d233";
  t.PPX = "ppx";
  t.Implode = "implode";
})(exports.Platform || (exports.Platform = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0Jhc2VQbGF0Zm9ybS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBsYXRmb3JtIiwidW5kZWZpbmVkIiwidCIsIkVESVRPUiIsIktVQUlLQU4iLCJXRUNIQVQiLCJCWVRFREFOQ0UiLCJWSVZPIiwiQkFJRFUiLCJPUFBPIiwiUVEiLCJBTkRST0lEXzIzMyIsIkFORFJPSURfWElBT01JIiwiQU5EUk9JRF9WSVZPIiwiQU5EUk9JRF9PUFBPIiwiQU5EUk9JRF9veWFob28iLCJBTkRST0lEX01NWSIsIkFORFJPSURfNDM5OSIsIkFORFJPSURfRE9VWUlOIiwiR09PR0xFIiwiSW9zIiwiS3VhaVNob3UiLCJIVUFXRUlfUVVJQ0siLCJXRUJfTElOSyIsIkJpbGlCaWxpIiwiSDVkMjMzIiwiUFBYIiwiSW1wbG9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDO0FBR0FELE9BQU8sQ0FBQ0UsUUFBUixHQUFtQkMsU0FBbkI7O0FBQ0EsQ0FBQyxVQUFVQyxDQUFWLEVBQWE7RUFDWkEsQ0FBQyxDQUFDQyxNQUFGLEdBQVcsUUFBWDtFQUNBRCxDQUFDLENBQUNFLE9BQUYsR0FBWSxZQUFaO0VBQ0FGLENBQUMsQ0FBQ0csTUFBRixHQUFXLFdBQVg7RUFDQUgsQ0FBQyxDQUFDSSxTQUFGLEdBQWMsY0FBZDtFQUNBSixDQUFDLENBQUNLLElBQUYsR0FBUyxTQUFUO0VBQ0FMLENBQUMsQ0FBQ00sS0FBRixHQUFVLFVBQVY7RUFDQU4sQ0FBQyxDQUFDTyxJQUFGLEdBQVMsU0FBVDtFQUNBUCxDQUFDLENBQUNRLEVBQUYsR0FBTyxPQUFQO0VBQ0FSLENBQUMsQ0FBQ1MsV0FBRixHQUFnQixhQUFoQjtFQUNBVCxDQUFDLENBQUNVLGNBQUYsR0FBbUIsZ0JBQW5CO0VBQ0FWLENBQUMsQ0FBQ1csWUFBRixHQUFpQixjQUFqQjtFQUNBWCxDQUFDLENBQUNZLFlBQUYsR0FBaUIsY0FBakI7RUFDQVosQ0FBQyxDQUFDYSxjQUFGLEdBQW1CLGdCQUFuQjtFQUNBYixDQUFDLENBQUNjLFdBQUYsR0FBZ0IsYUFBaEI7RUFDQWQsQ0FBQyxDQUFDZSxZQUFGLEdBQWlCLGNBQWpCO0VBQ0FmLENBQUMsQ0FBQ2dCLGNBQUYsR0FBbUIsbUJBQW5CO0VBQ0FoQixDQUFDLENBQUNpQixNQUFGLEdBQVcsUUFBWDtFQUNBakIsQ0FBQyxDQUFDa0IsR0FBRixHQUFRLEtBQVI7RUFDQWxCLENBQUMsQ0FBQ21CLFFBQUYsR0FBYSxVQUFiO0VBQ0FuQixDQUFDLENBQUNvQixZQUFGLEdBQWlCLFFBQWpCO0VBQ0FwQixDQUFDLENBQUNxQixRQUFGLEdBQWEsU0FBYjtFQUNBckIsQ0FBQyxDQUFDc0IsUUFBRixHQUFhLFVBQWI7RUFDQXRCLENBQUMsQ0FBQ3VCLE1BQUYsR0FBVyxRQUFYO0VBQ0F2QixDQUFDLENBQUN3QixHQUFGLEdBQVEsS0FBUjtFQUNBeEIsQ0FBQyxDQUFDeUIsT0FBRixHQUFZLFNBQVo7QUFDRCxDQTFCRCxFQTBCRzdCLE9BQU8sQ0FBQ0UsUUFBUixLQUFxQkYsT0FBTyxDQUFDRSxRQUFSLEdBQW1CLEVBQXhDLENBMUJIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QbGF0Zm9ybSA9IHVuZGVmaW5lZDtcbihmdW5jdGlvbiAodCkge1xuICB0LkVESVRPUiA9IFwiZWRpdG9yXCI7XG4gIHQuS1VBSUtBTiA9IFwiaDVfa3VhaWthblwiO1xuICB0LldFQ0hBVCA9IFwiaDVfd2VjaGF0XCI7XG4gIHQuQllURURBTkNFID0gXCJoNV9ieXRlZGFuY2VcIjtcbiAgdC5WSVZPID0gXCJoNV92aXZvXCI7XG4gIHQuQkFJRFUgPSBcImg1X2JhaWR1XCI7XG4gIHQuT1BQTyA9IFwiaDVfb3Bwb1wiO1xuICB0LlFRID0gXCJoNV9xcVwiO1xuICB0LkFORFJPSURfMjMzID0gXCJhbmRyb2lkXzIzM1wiO1xuICB0LkFORFJPSURfWElBT01JID0gXCJhbmRyb2lkX3hpYW9taVwiO1xuICB0LkFORFJPSURfVklWTyA9IFwiYW5kcm9pZF92aXZvXCI7XG4gIHQuQU5EUk9JRF9PUFBPID0gXCJhbmRyb2lkX29wcG9cIjtcbiAgdC5BTkRST0lEX295YWhvbyA9IFwiYW5kcm9pZF9vaGF5b29cIjtcbiAgdC5BTkRST0lEX01NWSA9IFwiYW5kcm9pZF9tbXlcIjtcbiAgdC5BTkRST0lEXzQzOTkgPSBcImFuZHJvaWRfNDM5OVwiO1xuICB0LkFORFJPSURfRE9VWUlOID0gXCJhbmRyb2lkX2J5dGVkYW5jZVwiO1xuICB0LkdPT0dMRSA9IFwiR29vZ2xlXCI7XG4gIHQuSW9zID0gXCJpb3NcIjtcbiAgdC5LdWFpU2hvdSA9IFwia3VhaXNob3VcIjtcbiAgdC5IVUFXRUlfUVVJQ0sgPSBcImh1YXdlaVwiO1xuICB0LldFQl9MSU5LID0gXCJ3ZWJsaW5rXCI7XG4gIHQuQmlsaUJpbGkgPSBcImJpbGliaWxpXCI7XG4gIHQuSDVkMjMzID0gXCJoNWQyMzNcIjtcbiAgdC5QUFggPSBcInBweFwiO1xuICB0LkltcGxvZGUgPSBcImltcGxvZGVcIjtcbn0pKGV4cG9ydHMuUGxhdGZvcm0gfHwgKGV4cG9ydHMuUGxhdGZvcm0gPSB7fSkpOyJdfQ==