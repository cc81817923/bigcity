
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/commonConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '874e6O0pGFN0ZuxWUaDDTtB', 'commonConfig');
// _script/commonConfig.js

"use strict";

var i;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = exports.game_UICF = exports.subGame_Conf = undefined;
var a;

var $z1Config = require("Config");

var $z1DataMgr = require("DataMgr");

(function (t) {
  t.gameA = "gameA";
})(a = exports.subGame_Conf || (exports.subGame_Conf = {}));

exports.game_UICF = ((i = {})[a.gameA] = {
  gameUIID: $z1Config.UIID,
  gameUICF: $z1Config.UICF,
  gameAudioCF: $z1Config.AudioCF,
  gameAudioId: $z1Config.AudioId,
  gameDataMgr: $z1DataMgr.DataMgr
}, i);

var exp_game = function () {
  function _ctor() {}

  _ctor.getGameConfig = function (t) {
    return exports.game_UICF[t];
  };

  return _ctor;
}();

exports.game = exp_game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L2NvbW1vbkNvbmZpZy5qcyJdLCJuYW1lcyI6WyJpIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJnYW1lIiwiZ2FtZV9VSUNGIiwic3ViR2FtZV9Db25mIiwidW5kZWZpbmVkIiwiYSIsIiR6MUNvbmZpZyIsInJlcXVpcmUiLCIkejFEYXRhTWdyIiwidCIsImdhbWVBIiwiZ2FtZVVJSUQiLCJVSUlEIiwiZ2FtZVVJQ0YiLCJVSUNGIiwiZ2FtZUF1ZGlvQ0YiLCJBdWRpb0NGIiwiZ2FtZUF1ZGlvSWQiLCJBdWRpb0lkIiwiZ2FtZURhdGFNZ3IiLCJEYXRhTWdyIiwiZXhwX2dhbWUiLCJfY3RvciIsImdldEdhbWVDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxJQUFSLEdBQWVGLE9BQU8sQ0FBQ0csU0FBUixHQUFvQkgsT0FBTyxDQUFDSSxZQUFSLEdBQXVCQyxTQUExRDtBQUNBLElBQUlDLENBQUo7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXhCOztBQUNBLENBQUMsVUFBVUUsQ0FBVixFQUFhO0VBQ1pBLENBQUMsQ0FBQ0MsS0FBRixHQUFVLE9BQVY7QUFDRCxDQUZELEVBRUdMLENBQUMsR0FBR04sT0FBTyxDQUFDSSxZQUFSLEtBQXlCSixPQUFPLENBQUNJLFlBQVIsR0FBdUIsRUFBaEQsQ0FGUDs7QUFHQUosT0FBTyxDQUFDRyxTQUFSLElBQXFCLENBQUNOLENBQUMsR0FBRyxFQUFMLEVBQVNTLENBQUMsQ0FBQ0ssS0FBWCxJQUFvQjtFQUN2Q0MsUUFBUSxFQUFFTCxTQUFTLENBQUNNLElBRG1CO0VBRXZDQyxRQUFRLEVBQUVQLFNBQVMsQ0FBQ1EsSUFGbUI7RUFHdkNDLFdBQVcsRUFBRVQsU0FBUyxDQUFDVSxPQUhnQjtFQUl2Q0MsV0FBVyxFQUFFWCxTQUFTLENBQUNZLE9BSmdCO0VBS3ZDQyxXQUFXLEVBQUVYLFVBQVUsQ0FBQ1k7QUFMZSxDQUFwQixFQU1sQnhCLENBTkg7O0FBT0EsSUFBSXlCLFFBQVEsR0FBRyxZQUFZO0VBQ3pCLFNBQVNDLEtBQVQsR0FBaUIsQ0FBRTs7RUFDbkJBLEtBQUssQ0FBQ0MsYUFBTixHQUFzQixVQUFVZCxDQUFWLEVBQWE7SUFDakMsT0FBT1YsT0FBTyxDQUFDRyxTQUFSLENBQWtCTyxDQUFsQixDQUFQO0VBQ0QsQ0FGRDs7RUFHQSxPQUFPYSxLQUFQO0FBQ0QsQ0FOYyxFQUFmOztBQU9BdkIsT0FBTyxDQUFDRSxJQUFSLEdBQWVvQixRQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdhbWUgPSBleHBvcnRzLmdhbWVfVUlDRiA9IGV4cG9ydHMuc3ViR2FtZV9Db25mID0gdW5kZWZpbmVkO1xudmFyIGE7XG52YXIgJHoxQ29uZmlnID0gcmVxdWlyZShcIkNvbmZpZ1wiKTtcbnZhciAkejFEYXRhTWdyID0gcmVxdWlyZShcIkRhdGFNZ3JcIik7XG4oZnVuY3Rpb24gKHQpIHtcbiAgdC5nYW1lQSA9IFwiZ2FtZUFcIjtcbn0pKGEgPSBleHBvcnRzLnN1YkdhbWVfQ29uZiB8fCAoZXhwb3J0cy5zdWJHYW1lX0NvbmYgPSB7fSkpO1xuZXhwb3J0cy5nYW1lX1VJQ0YgPSAoKGkgPSB7fSlbYS5nYW1lQV0gPSB7XG4gIGdhbWVVSUlEOiAkejFDb25maWcuVUlJRCxcbiAgZ2FtZVVJQ0Y6ICR6MUNvbmZpZy5VSUNGLFxuICBnYW1lQXVkaW9DRjogJHoxQ29uZmlnLkF1ZGlvQ0YsXG4gIGdhbWVBdWRpb0lkOiAkejFDb25maWcuQXVkaW9JZCxcbiAgZ2FtZURhdGFNZ3I6ICR6MURhdGFNZ3IuRGF0YU1nclxufSwgaSk7XG52YXIgZXhwX2dhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge31cbiAgX2N0b3IuZ2V0R2FtZUNvbmZpZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2FtZV9VSUNGW3RdO1xuICB9O1xuICByZXR1cm4gX2N0b3I7XG59KCk7XG5leHBvcnRzLmdhbWUgPSBleHBfZ2FtZTsiXX0=