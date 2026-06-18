
(function () {
var scripts = [{"deps":{"./assets/_script/Appcfg":3,"./assets/_script/ArgsParseUtils":13,"./assets/_script/AudioMgr":5,"./assets/_script/AutoAIMgr":4,"./assets/_script/BPPayMgr":6,"./assets/_script/BaseButton":8,"./assets/_script/BaseCtrl":49,"./assets/_script/BaseData":25,"./assets/_script/BaseMgr":43,"./assets/_script/BasePlatform":44,"./assets/_script/BaseServer":9,"./assets/_script/BaseUI":27,"./assets/_script/Binary":7,"./assets/_script/BuildCustomEvent":10,"./assets/_script/ByteDanceServerMgr":11,"./assets/_script/CacheUtils":15,"./assets/_script/CityMgr":12,"./assets/_script/Config":17,"./assets/_script/DataMgr":16,"./assets/_script/DiamondApi":23,"./assets/_script/EditorManager":19,"./assets/_script/EventMgr":14,"./assets/_script/FeedCardMgr":18,"./assets/_script/FeedPlayableMgr":21,"./assets/_script/GADGameData":20,"./assets/_script/GADGameEnumData":22,"./assets/_script/GAD_App":30,"./assets/_script/GAD_Base":52,"./assets/_script/GAD_Bubble":24,"./assets/_script/GAD_BuffTips":28,"./assets/_script/GAD_Bullet":26,"./assets/_script/GAD_BulletEffect":29,"./assets/_script/GAD_CardItem":34,"./assets/_script/GAD_Cards":31,"./assets/_script/GAD_Configs":33,"./assets/_script/GAD_DataMgr":32,"./assets/_script/GAD_Door":35,"./assets/_script/GAD_Enemy_Ani":36,"./assets/_script/GAD_Enermy":37,"./assets/_script/GAD_PlayerMgr":38,"./assets/_script/GAD_UIGame":45,"./assets/_script/GAD_UIGameView":70,"./assets/_script/GAD_UILottery":50,"./assets/_script/GAD_UIPause":63,"./assets/_script/GAD_UIResult":42,"./assets/_script/GAD_UISetting":40,"./assets/_script/GAD_UserData":39,"./assets/_script/GameData":41,"./assets/_script/GameGuideData":46,"./assets/_script/GameShareData":100,"./assets/_script/GameTestSegData":47,"./assets/_script/GameTrackData":48,"./assets/_script/GameTrackDataEvent":51,"./assets/_script/GameUserData":55,"./assets/_script/HttpMgr":80,"./assets/_script/KinghtFallAudioMgr":53,"./assets/_script/KinghtFallBtnPress":54,"./assets/_script/KinghtFallBuildBarracks":56,"./assets/_script/KinghtFallBuildBartizan":58,"./assets/_script/KinghtFallBuildBase":57,"./assets/_script/KinghtFallBuildHome":59,"./assets/_script/KinghtFallBuildInfo":60,"./assets/_script/KinghtFallBuildMainFortress":61,"./assets/_script/KinghtFallBuildMill":62,"./assets/_script/KinghtFallBuildObstacle":71,"./assets/_script/KinghtFallBuildWall":65,"./assets/_script/KinghtFallBulletBase":67,"./assets/_script/KinghtFallBulletBuild":66,"./assets/_script/KinghtFallBulletEnemy":78,"./assets/_script/KinghtFallBulletEnemy8":69,"./assets/_script/KinghtFallBulletPlay":64,"./assets/_script/KinghtFallBulletSoldier":75,"./assets/_script/KinghtFallCommerce":68,"./assets/_script/KinghtFallConfig":72,"./assets/_script/KinghtFallDailyData":73,"./assets/_script/KinghtFallDataMgr":79,"./assets/_script/KinghtFallEnemyAuxiliary":74,"./assets/_script/KinghtFallEnemyBase":77,"./assets/_script/KinghtFallEnemyItem01":76,"./assets/_script/KinghtFallEnemyItem02":103,"./assets/_script/KinghtFallEnemyItem03":81,"./assets/_script/KinghtFallEnemyItem04":106,"./assets/_script/KinghtFallEnemyItem05":83,"./assets/_script/KinghtFallEnemyItem06":85,"./assets/_script/KinghtFallEnemyItem07":82,"./assets/_script/KinghtFallEnemyItem08":93,"./assets/_script/KinghtFallEnemyItem09":84,"./assets/_script/KinghtFallEnemyItem10":88,"./assets/_script/KinghtFallEnemyLong":86,"./assets/_script/KinghtFallEnemyMelee":87,"./assets/_script/KinghtFallEnum":92,"./assets/_script/KinghtFallExcData":91,"./assets/_script/KinghtFallGameCtrl":177,"./assets/_script/KinghtFallGameCtrlData":89,"./assets/_script/KinghtFallGameData":96,"./assets/_script/KinghtFallGameEffect":90,"./assets/_script/KinghtFallGameMap":95,"./assets/_script/KinghtFallGamePlayCtrl":94,"./assets/_script/KinghtFallGameUICtrl":98,"./assets/_script/KinghtFallGuideData":102,"./assets/_script/KinghtFallHomeBattleCtrl":181,"./assets/_script/KinghtFallHomePersonCtrl":97,"./assets/_script/KinghtFallHomeTalentCtrl":113,"./assets/_script/KinghtFallHomeTreasureCtrl":101,"./assets/_script/KinghtFallInterface":99,"./assets/_script/KinghtFallItemGood":112,"./assets/_script/KinghtFallItemHp":114,"./assets/_script/KinghtFallItemTreasure":105,"./assets/_script/KinghtFallLoopBack":104,"./assets/_script/KinghtFallMissionData":110,"./assets/_script/KinghtFallModle":108,"./assets/_script/KinghtFallPathInfo":111,"./assets/_script/KinghtFallPlayAniCtrl":107,"./assets/_script/KinghtFallPlayGameAniCtrl":109,"./assets/_script/KinghtFallPlayerMgr":115,"./assets/_script/KinghtFallSoldierBase":122,"./assets/_script/KinghtFallSoldierItem01":123,"./assets/_script/KinghtFallSoldierItem02":127,"./assets/_script/KinghtFallSoldierItem03":117,"./assets/_script/KinghtFallSoldierItem04":116,"./assets/_script/KinghtFallSweepLight":120,"./assets/_script/KinghtFallTextConfig":119,"./assets/_script/KinghtFallUIAchievement":121,"./assets/_script/KinghtFallUIAddCurrency":124,"./assets/_script/KinghtFallUIAddStrength":118,"./assets/_script/KinghtFallUIBPShop":180,"./assets/_script/KinghtFallUIBuff":128,"./assets/_script/KinghtFallUIBuildAtlas":130,"./assets/_script/KinghtFallUIBuildSel":126,"./assets/_script/KinghtFallUIExchangeCode":129,"./assets/_script/KinghtFallUIGM":158,"./assets/_script/KinghtFallUIGame":134,"./assets/_script/KinghtFallUIGameBack":183,"./assets/_script/KinghtFallUIGameEnd":125,"./assets/_script/KinghtFallUIGoldReward":135,"./assets/_script/KinghtFallUIHome":133,"./assets/_script/KinghtFallUINewGame":131,"./assets/_script/KinghtFallUINewModular":132,"./assets/_script/KinghtFallUIOnlineReward":196,"./assets/_script/KinghtFallUIPassport":137,"./assets/_script/KinghtFallUISetting":136,"./assets/_script/KinghtFallUISideBoard":142,"./assets/_script/KinghtFallUISignIn":138,"./assets/_script/KinghtFallUISuspend":140,"./assets/_script/KinghtFallUITalentInfo":139,"./assets/_script/KinghtFallUITop":141,"./assets/_script/KinghtFallUITreasureInfo":144,"./assets/_script/KinghtFallUITreasureReward":143,"./assets/_script/KinghtFallUIVideoTips":146,"./assets/_script/KinghtFallUserData":151,"./assets/_script/KinghtFallUtilLayout":148,"./assets/_script/LabelPlus":145,"./assets/_script/LanguageMgr":147,"./assets/_script/List":149,"./assets/_script/ListItem":150,"./assets/_script/LiveMgr":152,"./assets/_script/Loading":153,"./assets/_script/LogMgr":159,"./assets/_script/Main":155,"./assets/_script/NetInterface":157,"./assets/_script/NetManager":154,"./assets/_script/NetNode":176,"./assets/_script/Platform4399Manager":160,"./assets/_script/PlatformConfig":163,"./assets/_script/PlatformManager":168,"./assets/_script/PlatformSetting":156,"./assets/_script/PlayerMgr":162,"./assets/_script/PoolMgr":165,"./assets/_script/ResCacheMgr":161,"./assets/_script/ResourceMgr":164,"./assets/_script/ScrollCard":169,"./assets/_script/SdkMgr":167,"./assets/_script/SegBaseData":170,"./assets/_script/ServerDataMgr":166,"./assets/_script/SfSendQueue":190,"./assets/_script/SocketMgr":171,"./assets/_script/SpineUtils":173,"./assets/_script/SubscribeManager":172,"./assets/_script/TextConfig":178,"./assets/_script/TimeUtils":174,"./assets/_script/TranstaLabel":175,"./assets/_script/TranstanImg":179,"./assets/_script/TweenMgr":189,"./assets/_script/UIGuide":193,"./assets/_script/UIMgr":186,"./assets/_script/UIReport":185,"./assets/_script/UIReportTop":182,"./assets/_script/UITips":184,"./assets/_script/UITouch":188,"./assets/_script/UIUtils":187,"./assets/_script/Utils":198,"./assets/_script/WeachatServerMgr":192,"./assets/_script/WebSock":191,"./assets/_script/WechatPayMgr":199,"./assets/_script/commonConfig":2,"./assets/_script/director":195,"./assets/_script/gameCtrl":197,"./assets/_script/AppManager":194,"./assets/ts":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/ts.js"},{"deps":{"Config":17,"DataMgr":16},"path":"preview-scripts/assets/_script/commonConfig.js"},{"deps":{},"path":"preview-scripts/assets/_script/Appcfg.js"},{"deps":{},"path":"preview-scripts/assets/_script/AutoAIMgr.js"},{"deps":{"BaseMgr":43,"CacheUtils":15,"LogMgr":159,"ResourceMgr":164},"path":"preview-scripts/assets/_script/AudioMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/BPPayMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/Binary.js"},{"deps":{"AudioMgr":5},"path":"preview-scripts/assets/_script/BaseButton.js"},{"deps":{},"path":"preview-scripts/assets/_script/BaseServer.js"},{"deps":{"BasePlatform":44,"Appcfg":3,"PlatformConfig":163,"PlatformSetting":156},"path":"preview-scripts/assets/_script/BuildCustomEvent.js"},{"deps":{"Config":17,"Appcfg":3,"EventMgr":14,"SfSendQueue":190},"path":"preview-scripts/assets/_script/ByteDanceServerMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/CityMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/ArgsParseUtils.js"},{"deps":{},"path":"preview-scripts/assets/_script/EventMgr.js"},{"deps":{"BasePlatform":44,"PlatformManager":168,"ServerDataMgr":166,"Utils":198},"path":"preview-scripts/assets/_script/CacheUtils.js"},{"deps":{"Appcfg":3,"EventMgr":14,"ResourceMgr":164,"Config":17},"path":"preview-scripts/assets/_script/DataMgr.js"},{"deps":{"Appcfg":3},"path":"preview-scripts/assets/_script/Config.js"},{"deps":{"BasePlatform":44,"PlatformManager":168},"path":"preview-scripts/assets/_script/FeedCardMgr.js"},{"deps":{"UIUtils":187,"Utils":198},"path":"preview-scripts/assets/_script/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/_script/GADGameData.js"},{"deps":{"BasePlatform":44,"SfSendQueue":190,"TimeUtils":174,"HttpMgr":80,"PlatformManager":168},"path":"preview-scripts/assets/_script/FeedPlayableMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/GADGameEnumData.js"},{"deps":{"BPPayMgr":6,"KinghtFallPlayerMgr":115,"KinghtFallConfig":72,"UIMgr":186},"path":"preview-scripts/assets/_script/DiamondApi.js"},{"deps":{"GAD_Base":52},"path":"preview-scripts/assets/_script/GAD_Bubble.js"},{"deps":{"CacheUtils":15,"Config":17,"EventMgr":14,"PlatformManager":168,"ServerDataMgr":166,"Utils":198,"BasePlatform":44},"path":"preview-scripts/assets/_script/BaseData.js"},{"deps":{"GAD_Configs":33,"GADGameEnumData":22,"GAD_DataMgr":32,"GAD_PlayerMgr":38,"GAD_Base":52},"path":"preview-scripts/assets/_script/GAD_Bullet.js"},{"deps":{"EventMgr":14,"LanguageMgr":147,"PlatformManager":168,"ResCacheMgr":161,"ResourceMgr":164,"TweenMgr":189,"UIMgr":186,"ArgsParseUtils":13,"BasePlatform":44},"path":"preview-scripts/assets/_script/BaseUI.js"},{"deps":{"BaseCtrl":49,"PoolMgr":165,"GAD_DataMgr":32},"path":"preview-scripts/assets/_script/GAD_BuffTips.js"},{"deps":{},"path":"preview-scripts/assets/_script/GAD_BulletEffect.js"},{"deps":{"AudioMgr":5,"EventMgr":14,"UIMgr":186,"Config":17,"GAD_Configs":33,"GAD_DataMgr":32,"GAD_PlayerMgr":38},"path":"preview-scripts/assets/_script/GAD_App.js"},{"deps":{"AudioMgr":5,"GAD_Configs":33,"GADGameEnumData":22,"GAD_DataMgr":32,"GAD_PlayerMgr":38,"GAD_Base":52,"GAD_CardItem":34},"path":"preview-scripts/assets/_script/GAD_Cards.js"},{"deps":{"BasePlatform":44,"PlatformManager":168,"ResourceMgr":164,"GAD_Configs":33,"GADGameEnumData":22},"path":"preview-scripts/assets/_script/GAD_DataMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/GAD_Configs.js"},{"deps":{"GAD_Configs":33,"GAD_Base":52},"path":"preview-scripts/assets/_script/GAD_CardItem.js"},{"deps":{"AudioMgr":5,"Utils":198,"GAD_Configs":33,"GADGameEnumData":22,"GAD_DataMgr":32,"GAD_Base":52},"path":"preview-scripts/assets/_script/GAD_Door.js"},{"deps":{},"path":"preview-scripts/assets/_script/GAD_Enemy_Ani.js"},{"deps":{"AudioMgr":5,"GAD_Configs":33,"GADGameEnumData":22,"GAD_DataMgr":32,"GAD_Base":52,"GAD_Bubble":24,"GAD_Enemy_Ani":36},"path":"preview-scripts/assets/_script/GAD_Enermy.js"},{"deps":{"GAD_UserData":39},"path":"preview-scripts/assets/_script/GAD_PlayerMgr.js"},{"deps":{"BaseData":25,"Config":17},"path":"preview-scripts/assets/_script/GAD_UserData.js"},{"deps":{"BaseUI":27,"AudioMgr":5},"path":"preview-scripts/assets/_script/GAD_UISetting.js"},{"deps":{},"path":"preview-scripts/assets/_script/GameData.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"GAD_Configs":33,"GAD_App":30},"path":"preview-scripts/assets/_script/GAD_UIResult.js"},{"deps":{"EventMgr":14},"path":"preview-scripts/assets/_script/BaseMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/BasePlatform.js"},{"deps":{"BasePlatform":44,"BaseUI":27,"PlatformSetting":156,"AudioMgr":5,"SdkMgr":167,"UIMgr":186,"Utils":198,"Config":17,"GAD_Configs":33,"GAD_Bullet":26,"GAD_Cards":31,"GAD_Door":35,"GAD_Enermy":37,"GADGameEnumData":22,"GAD_DataMgr":32,"GAD_PlayerMgr":38},"path":"preview-scripts/assets/_script/GAD_UIGame.js"},{"deps":{"BaseData":25,"Config":17},"path":"preview-scripts/assets/_script/GameGuideData.js"},{"deps":{"SegBaseData":170,"Config":17},"path":"preview-scripts/assets/_script/GameTestSegData.js"},{"deps":{"BaseData":25,"BasePlatform":44,"Appcfg":3,"AppManager":194,"PlatformManager":168,"TimeUtils":174,"Utils":198,"Config":17,"GameTrackDataEvent":51},"path":"preview-scripts/assets/_script/GameTrackData.js"},{"deps":{"EventMgr":14,"LanguageMgr":147,"ResCacheMgr":161,"ResourceMgr":164},"path":"preview-scripts/assets/_script/BaseCtrl.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"Utils":198,"GAD_Configs":33,"GAD_DataMgr":32,"GAD_PlayerMgr":38},"path":"preview-scripts/assets/_script/GAD_UILottery.js"},{"deps":{},"path":"preview-scripts/assets/_script/GameTrackDataEvent.js"},{"deps":{"BaseCtrl":49,"GAD_Configs":33,"GADGameEnumData":22,"GAD_DataMgr":32,"GAD_PlayerMgr":38},"path":"preview-scripts/assets/_script/GAD_Base.js"},{"deps":{"AudioMgr":5,"LogMgr":159,"ResourceMgr":164,"CacheUtils":15},"path":"preview-scripts/assets/_script/KinghtFallAudioMgr.js"},{"deps":{"AudioMgr":5},"path":"preview-scripts/assets/_script/KinghtFallBtnPress.js"},{"deps":{"BaseData":25,"EventMgr":14,"LanguageMgr":147,"Config":17},"path":"preview-scripts/assets/_script/GameUserData.js"},{"deps":{"PlatformSetting":156,"SdkMgr":167,"UIMgr":186,"Utils":198,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallUIGame":134,"KinghtFallSoldierBase":122,"KinghtFallBuildBase":57},"path":"preview-scripts/assets/_script/KinghtFallBuildBarracks.js"},{"deps":{"AudioMgr":5,"EventMgr":14,"UIMgr":186,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallItemHp":114,"KinghtFallUIGame":134,"KinghtFallInterface":99,"KinghtFallBuildInfo":60},"path":"preview-scripts/assets/_script/KinghtFallBuildBase.js"},{"deps":{"UIMgr":186,"Utils":198,"Config":17,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallUIGame":134,"KinghtFallInterface":99,"KinghtFallBuildBase":57},"path":"preview-scripts/assets/_script/KinghtFallBuildBartizan.js"},{"deps":{"UIMgr":186,"Utils":198,"Config":17,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallUIGame":134,"KinghtFallGameCtrlData":89,"KinghtFallBuildBase":57},"path":"preview-scripts/assets/_script/KinghtFallBuildHome.js"},{"deps":{"KinghtFallEnum":92,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallBuildInfo.js"},{"deps":{"UIMgr":186,"Utils":198,"Config":17,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallUIGame":134,"KinghtFallInterface":99,"KinghtFallBuildBase":57},"path":"preview-scripts/assets/_script/KinghtFallBuildMainFortress.js"},{"deps":{"UIMgr":186,"Utils":198,"Config":17,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallUIGame":134,"KinghtFallBuildBase":57},"path":"preview-scripts/assets/_script/KinghtFallBuildMill.js"},{"deps":{"BaseUI":27,"GAD_UIGame":45},"path":"preview-scripts/assets/_script/GAD_UIPause.js"},{"deps":{"KinghtFallUIGame":134,"KinghtFallBulletBase":67},"path":"preview-scripts/assets/_script/KinghtFallBulletPlay.js"},{"deps":{"UIMgr":186,"Utils":198,"Config":17,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallModle":108,"KinghtFallUIGame":134,"KinghtFallInterface":99,"KinghtFallBuildBase":57},"path":"preview-scripts/assets/_script/KinghtFallBuildWall.js"},{"deps":{"KinghtFallUIGame":134,"KinghtFallBulletBase":67},"path":"preview-scripts/assets/_script/KinghtFallBulletBuild.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallBulletBase.js"},{"deps":{"Utils":198},"path":"preview-scripts/assets/_script/KinghtFallCommerce.js"},{"deps":{"KinghtFallUIGame":134,"KinghtFallBulletEnemy":78},"path":"preview-scripts/assets/_script/KinghtFallBulletEnemy8.js"},{"deps":{"BaseCtrl":49,"BasePlatform":44,"PlatformSetting":156,"AudioMgr":5,"PoolMgr":165,"UIMgr":186,"Config":17,"GAD_Configs":33,"GAD_BuffTips":28,"GAD_App":30,"GAD_DataMgr":32,"GAD_PlayerMgr":38},"path":"preview-scripts/assets/_script/GAD_UIGameView.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallBuildObstacle.js"},{"deps":{"Appcfg":3},"path":"preview-scripts/assets/_script/KinghtFallConfig.js"},{"deps":{"BaseData":25,"Config":17,"KinghtFallModle":108,"KinghtFallConfig":72},"path":"preview-scripts/assets/_script/KinghtFallDailyData.js"},{"deps":{"KinghtFallEnemyBase":77},"path":"preview-scripts/assets/_script/KinghtFallEnemyAuxiliary.js"},{"deps":{"KinghtFallUIGame":134,"KinghtFallBulletBase":67},"path":"preview-scripts/assets/_script/KinghtFallBulletSoldier.js"},{"deps":{"KinghtFallEnemyMelee":87},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem01.js"},{"deps":{"PoolMgr":165,"KinghtFallConfig":72,"KinghtFallMissionData":110,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallItemHp":114,"KinghtFallUIGame":134,"KinghtFallInterface":99},"path":"preview-scripts/assets/_script/KinghtFallEnemyBase.js"},{"deps":{"KinghtFallUIGame":134,"KinghtFallBulletBase":67},"path":"preview-scripts/assets/_script/KinghtFallBulletEnemy.js"},{"deps":{"BasePlatform":44,"PlatformSetting":156,"ResourceMgr":164,"DataMgr":16,"PlayerMgr":162},"path":"preview-scripts/assets/_script/KinghtFallDataMgr.js"},{"deps":{"BasePlatform":44,"PlatformSetting":156},"path":"preview-scripts/assets/_script/HttpMgr.js"},{"deps":{"KinghtFallEnemyLong":86},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem03.js"},{"deps":{"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallUIGame":134,"KinghtFallEnemyMelee":87},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem07.js"},{"deps":{"KinghtFallEnemyLong":86},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem05.js"},{"deps":{"PoolMgr":165,"KinghtFallConfig":72,"KinghtFallUIGame":134,"KinghtFallEnemyAuxiliary":74},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem09.js"},{"deps":{"KinghtFallUIGame":134,"KinghtFallInterface":99,"KinghtFallEnemyAuxiliary":74},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem06.js"},{"deps":{"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallModle":108,"KinghtFallUIGame":134,"KinghtFallBulletEnemy":78,"KinghtFallEnemyBase":77},"path":"preview-scripts/assets/_script/KinghtFallEnemyLong.js"},{"deps":{"KinghtFallEnemyBase":77},"path":"preview-scripts/assets/_script/KinghtFallEnemyMelee.js"},{"deps":{"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallModle":108,"KinghtFallUIGame":134,"KinghtFallInterface":99,"KinghtFallEnemyBase":77,"KinghtFallEnemyMelee":87},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem10.js"},{"deps":{"PlatformSetting":156,"EventMgr":14,"LogMgr":159,"SdkMgr":167,"Utils":198,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallUIGame":134,"KinghtFallBuildBase":57,"KinghtFallBuildObstacle":71,"KinghtFallCommerce":68,"KinghtFallInterface":99},"path":"preview-scripts/assets/_script/KinghtFallGameCtrlData.js"},{"deps":{"BaseCtrl":49,"PoolMgr":165,"KinghtFallConfig":72,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallGameEffect.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallExcData.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallEnum.js"},{"deps":{"KinghtFallUIGame":134,"KinghtFallEnemyLong":86},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem08.js"},{"deps":{"AudioMgr":5,"LogMgr":159,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallAudioMgr":53,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallItemHp":114,"KinghtFallPlayGameAniCtrl":109,"KinghtFallUIGame":134,"KinghtFallBulletPlay":64,"KinghtFallGameCtrlData":89,"KinghtFallInterface":99},"path":"preview-scripts/assets/_script/KinghtFallGamePlayCtrl.js"},{"deps":{"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallGameMap.js"},{"deps":{"BaseData":25,"Config":17,"KinghtFallConfig":72},"path":"preview-scripts/assets/_script/KinghtFallGameData.js"},{"deps":{"BaseCtrl":49,"BaseButton":8,"AudioMgr":5,"UIMgr":186,"Utils":198,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallMissionData":110,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallPlayAniCtrl":107},"path":"preview-scripts/assets/_script/KinghtFallHomePersonCtrl.js"},{"deps":{"EventMgr":14,"KinghtFallConfig":72,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallGameUICtrl.js"},{"deps":{"BaseCtrl":49,"PoolMgr":165,"KinghtFallConfig":72,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallInterface.js"},{"deps":{"BaseData":25,"LogMgr":159,"SdkMgr":167,"TimeUtils":174,"UIUtils":187,"Config":17},"path":"preview-scripts/assets/_script/GameShareData.js"},{"deps":{"BaseCtrl":49,"Appcfg":3,"AudioMgr":5,"LogMgr":159,"SdkMgr":167,"UIMgr":186,"Utils":198,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallHomeTreasureCtrl.js"},{"deps":{"BaseData":25,"Config":17,"KinghtFallConfig":72},"path":"preview-scripts/assets/_script/KinghtFallGuideData.js"},{"deps":{"KinghtFallEnemyMelee":87},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem02.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallLoopBack.js"},{"deps":{"BaseCtrl":49,"KinghtFallConfig":72,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallItemTreasure.js"},{"deps":{"KinghtFallEnemyMelee":87},"path":"preview-scripts/assets/_script/KinghtFallEnemyItem04.js"},{"deps":{"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallPlayAniCtrl.js"},{"deps":{"Appcfg":3,"AudioMgr":5,"EventMgr":14,"ResourceMgr":164,"UIMgr":186,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallMissionData":110,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallModle.js"},{"deps":{"AudioMgr":5,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallPlayGameAniCtrl.js"},{"deps":{"BaseData":25,"Config":17,"KinghtFallModle":108,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79},"path":"preview-scripts/assets/_script/KinghtFallMissionData.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallPathInfo.js"},{"deps":{"BaseCtrl":49,"KinghtFallConfig":72,"KinghtFallDataMgr":79,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallItemGood.js"},{"deps":{"BaseCtrl":49,"UIMgr":186,"Config":17,"KinghtFallConfig":72,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallHomeTalentCtrl.js"},{"deps":{"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallItemHp.js"},{"deps":{"EventMgr":14,"LanguageMgr":147,"UIMgr":186,"Config":17,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallDailyData":73,"KinghtFallGameData":96,"KinghtFallGuideData":102,"KinghtFallMissionData":110,"KinghtFallUserData":151,"DiamondApi":23,"KinghtFallEnum":92,"KinghtFallDataMgr":79},"path":"preview-scripts/assets/_script/KinghtFallPlayerMgr.js"},{"deps":{"KinghtFallSoldierBase":122},"path":"preview-scripts/assets/_script/KinghtFallSoldierItem04.js"},{"deps":{"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallModle":108,"KinghtFallUIGame":134,"KinghtFallBulletSoldier":75,"KinghtFallSoldierBase":122},"path":"preview-scripts/assets/_script/KinghtFallSoldierItem03.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"Utils":198,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"DiamondApi":23,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallUIAddStrength.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallTextConfig.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallSweepLight.js"},{"deps":{"BaseUI":27,"List":149,"PoolMgr":165,"KinghtFallConfig":72,"KinghtFallMissionData":110,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallItemGood":112},"path":"preview-scripts/assets/_script/KinghtFallUIAchievement.js"},{"deps":{"PoolMgr":165,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallModle":108,"KinghtFallItemHp":114,"KinghtFallUIGame":134,"KinghtFallGameCtrlData":89,"KinghtFallInterface":99},"path":"preview-scripts/assets/_script/KinghtFallSoldierBase.js"},{"deps":{"KinghtFallSoldierBase":122},"path":"preview-scripts/assets/_script/KinghtFallSoldierItem01.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"Utils":198,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallUIAddCurrency.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"PoolMgr":165,"DiamondApi":23,"UIMgr":186,"Config":17,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallUtilLayout":148,"KinghtFallItemGood":112,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallUIGameEnd.js"},{"deps":{"BaseUI":27,"SdkMgr":167,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallUIBuildSel.js"},{"deps":{"KinghtFallSoldierBase":122},"path":"preview-scripts/assets/_script/KinghtFallSoldierItem02.js"},{"deps":{"BasePlatform":44,"BaseUI":27,"Appcfg":3,"PlatformSetting":156,"SdkMgr":167,"Utils":198,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"UIGuide":193,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallUIBuff.js"},{"deps":{"BaseUI":27,"Config":17,"KinghtFallConfig":72,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallUIExchangeCode.js"},{"deps":{"BaseUI":27,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79},"path":"preview-scripts/assets/_script/KinghtFallUIBuildAtlas.js"},{"deps":{"BaseUI":27,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallUINewGame.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"KinghtFallConfig":72,"KinghtFallUtilLayout":148},"path":"preview-scripts/assets/_script/KinghtFallUINewModular.js"},{"deps":{"BasePlatform":44,"BaseUI":27,"Appcfg":3,"PlatformSetting":156,"AudioMgr":5,"FeedCardMgr":18,"PoolMgr":165,"Utils":198,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"UIGuide":193,"Main":155,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallHomeBattleCtrl":181},"path":"preview-scripts/assets/_script/KinghtFallUIHome.js"},{"deps":{"BasePlatform":44,"BaseUI":27,"Appcfg":3,"PlatformSetting":156,"AudioMgr":5,"SdkMgr":167,"UIMgr":186,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"UIGuide":193,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallGameCtrl":177,"KinghtFallGameCtrlData":89,"KinghtFallGameEffect":90,"KinghtFallGameUICtrl":98},"path":"preview-scripts/assets/_script/KinghtFallUIGame.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"PoolMgr":165,"KinghtFallConfig":72,"KinghtFallUtilLayout":148,"KinghtFallItemGood":112},"path":"preview-scripts/assets/_script/KinghtFallUIGoldReward.js"},{"deps":{"BasePlatform":44,"BaseUI":27,"PlatformConfig":163,"PlatformSetting":156,"AudioMgr":5,"SdkMgr":167,"ServerDataMgr":166,"PlayerMgr":162,"KinghtFallConfig":72},"path":"preview-scripts/assets/_script/KinghtFallUISetting.js"},{"deps":{"BaseUI":27,"List":149,"PoolMgr":165,"SdkMgr":167,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallItemGood":112},"path":"preview-scripts/assets/_script/KinghtFallUIPassport.js"},{"deps":{"BaseUI":27,"SdkMgr":167,"Utils":198,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallUISignIn.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"SdkMgr":167,"Utils":198,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallMissionData":110,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallUITalentInfo.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"Utils":198,"KinghtFallConfig":72,"KinghtFallUIGame":134},"path":"preview-scripts/assets/_script/KinghtFallUISuspend.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"Utils":198,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"BPPayMgr":6},"path":"preview-scripts/assets/_script/KinghtFallUITop.js"},{"deps":{"BaseUI":27,"Appcfg":3,"PlatformSetting":156,"ResourceMgr":164,"SdkMgr":167,"CacheUtils":15,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallUISideBoard.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"LogMgr":159,"PoolMgr":165,"SdkMgr":167,"Utils":198,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallUtilLayout":148,"KinghtFallItemGood":112,"KinghtFallItemTreasure":105},"path":"preview-scripts/assets/_script/KinghtFallUITreasureReward.js"},{"deps":{"BaseUI":27,"AudioMgr":5,"Utils":198,"Config":17,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallMissionData":110,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108},"path":"preview-scripts/assets/_script/KinghtFallUITreasureInfo.js"},{"deps":{},"path":"preview-scripts/assets/_script/LabelPlus.js"},{"deps":{"BaseUI":27,"DiamondApi":23},"path":"preview-scripts/assets/_script/KinghtFallUIVideoTips.js"},{"deps":{"DataMgr":16,"Appcfg":3},"path":"preview-scripts/assets/_script/LanguageMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/KinghtFallUtilLayout.js"},{"deps":{"ListItem":150},"path":"preview-scripts/assets/_script/List.js"},{"deps":{},"path":"preview-scripts/assets/_script/ListItem.js"},{"deps":{"BaseData":25,"EventMgr":14,"Config":17,"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallDataMgr":79},"path":"preview-scripts/assets/_script/KinghtFallUserData.js"},{"deps":{"Config":17,"SocketMgr":171,"HttpMgr":80,"UIMgr":186},"path":"preview-scripts/assets/_script/LiveMgr.js"},{"deps":{"KinghtFallModle":108,"Appcfg":3,"PlatformSetting":156,"AudioMgr":5,"EventMgr":14,"PlatformManager":168,"ResCacheMgr":161,"ResourceMgr":164,"SdkMgr":167,"UIMgr":186,"ServerDataMgr":166,"Config":17,"GameTrackDataEvent":51,"DataMgr":16,"PlayerMgr":162},"path":"preview-scripts/assets/_script/Loading.js"},{"deps":{},"path":"preview-scripts/assets/_script/NetManager.js"},{"deps":{"KinghtFallConfig":72,"KinghtFallEnum":92,"KinghtFallPlayerMgr":115,"EventMgr":14,"SdkMgr":167,"BPPayMgr":6,"UIMgr":186,"UIUtils":187,"Config":17,"GameTrackData":48,"GameTrackDataEvent":51,"GameUserData":55,"PlayerMgr":162},"path":"preview-scripts/assets/_script/Main.js"},{"deps":{"BasePlatform":44},"path":"preview-scripts/assets/_script/PlatformSetting.js"},{"deps":{},"path":"preview-scripts/assets/_script/NetInterface.js"},{"deps":{"BaseUI":27,"KinghtFallConfig":72,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115},"path":"preview-scripts/assets/_script/KinghtFallUIGM.js"},{"deps":{},"path":"preview-scripts/assets/_script/LogMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/Platform4399Manager.js"},{"deps":{"BaseMgr":43,"TimeUtils":174,"UIUtils":187,"ResourceMgr":164},"path":"preview-scripts/assets/_script/ResCacheMgr.js"},{"deps":{"Appcfg":3,"EventMgr":14,"LogMgr":159,"Config":17,"GameGuideData":46,"GameTestSegData":47,"GameTrackData":48,"GameUserData":55,"DataMgr":16},"path":"preview-scripts/assets/_script/PlayerMgr.js"},{"deps":{"BasePlatform":44,"Appcfg":3,"PlatformSetting":156},"path":"preview-scripts/assets/_script/PlatformConfig.js"},{"deps":{"BasePlatform":44,"ArgsParseUtils":13,"TimeUtils":174,"LogMgr":159,"PlatformManager":168,"PoolMgr":165,"ResCacheMgr":161},"path":"preview-scripts/assets/_script/ResourceMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/PoolMgr.js"},{"deps":{"BasePlatform":44,"PlatformConfig":163,"PlatformSetting":156,"EventMgr":14,"PlatformManager":168,"CacheUtils":15,"ByteDanceServerMgr":11,"WeachatServerMgr":192},"path":"preview-scripts/assets/_script/ServerDataMgr.js"},{"deps":{"Config":17,"AudioMgr":5,"BasePlatform":44,"LogMgr":159,"PlatformManager":168,"UIMgr":186,"PlayerMgr":162,"EventMgr":14,"Appcfg":3,"AppManager":194,"KinghtFallPlayerMgr":115,"KinghtFallEnum":92},"path":"preview-scripts/assets/_script/SdkMgr.js"},{"deps":{"BasePlatform":44,"EditorManager":19,"Config":17,"PlatformSetting":156,"Platform4399Manager":160},"path":"preview-scripts/assets/_script/PlatformManager.js"},{"deps":{},"path":"preview-scripts/assets/_script/ScrollCard.js"},{"deps":{"CacheUtils":15,"ServerDataMgr":166,"BaseData":25,"EventMgr":14,"Utils":198},"path":"preview-scripts/assets/_script/SegBaseData.js"},{"deps":{"NetInterface":157,"NetManager":154,"NetNode":176,"WebSock":191},"path":"preview-scripts/assets/_script/SocketMgr.js"},{"deps":{"BasePlatform":44,"PlatformManager":168},"path":"preview-scripts/assets/_script/SubscribeManager.js"},{"deps":{"ResourceMgr":164},"path":"preview-scripts/assets/_script/SpineUtils.js"},{"deps":{},"path":"preview-scripts/assets/_script/TimeUtils.js"},{"deps":{"LanguageMgr":147},"path":"preview-scripts/assets/_script/TranstaLabel.js"},{"deps":{},"path":"preview-scripts/assets/_script/NetNode.js"},{"deps":{"BaseCtrl":49,"PoolMgr":165,"UIMgr":186,"Utils":198,"Config":17,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallPathInfo":111,"KinghtFallUIGame":134,"KinghtFallBulletBuild":66,"KinghtFallBulletEnemy":78,"KinghtFallBulletPlay":64,"KinghtFallBulletSoldier":75,"KinghtFallEnemyBase":77,"KinghtFallGameCtrlData":89,"KinghtFallGamePlayCtrl":94,"KinghtFallInterface":99,"KinghtFallSoldierBase":122},"path":"preview-scripts/assets/_script/KinghtFallGameCtrl.js"},{"deps":{},"path":"preview-scripts/assets/_script/TextConfig.js"},{"deps":{"Appcfg":3,"LanguageMgr":147},"path":"preview-scripts/assets/_script/TranstanImg.js"},{"deps":{"BaseUI":27,"BPPayMgr":6,"KinghtFallPlayerMgr":115,"KinghtFallConfig":72},"path":"preview-scripts/assets/_script/KinghtFallUIBPShop.js"},{"deps":{"GAD_App":30,"BaseCtrl":49,"BasePlatform":44,"Appcfg":3,"PlatformSetting":156,"AudioMgr":5,"PlatformManager":168,"PoolMgr":165,"ResourceMgr":164,"SdkMgr":167,"UIMgr":186,"Utils":198,"Config":17,"TextConfig":178,"GameTrackData":48,"GameTrackDataEvent":51,"PlayerMgr":162,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallMissionData":110,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallModle":108,"KinghtFallItemGood":112},"path":"preview-scripts/assets/_script/KinghtFallHomeBattleCtrl.js"},{"deps":{"BasePlatform":44,"BaseUI":27,"Appcfg":3,"PlatformSetting":156,"PlatformManager":168,"SdkMgr":167,"Config":17},"path":"preview-scripts/assets/_script/UIReportTop.js"},{"deps":{"BaseUI":27,"Utils":198,"DiamondApi":23,"KinghtFallTextConfig":119,"KinghtFallEnum":92,"KinghtFallDataMgr":79,"KinghtFallItemGood":112},"path":"preview-scripts/assets/_script/KinghtFallUIGameBack.js"},{"deps":{"BaseUI":27},"path":"preview-scripts/assets/_script/UITips.js"},{"deps":{"BaseUI":27,"GameTrackDataEvent":51,"PlayerMgr":162},"path":"preview-scripts/assets/_script/UIReport.js"},{"deps":{"Config":17,"BaseUI":27,"Appcfg":3,"EventMgr":14,"LogMgr":159,"ResourceMgr":164},"path":"preview-scripts/assets/_script/UIMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/UIUtils.js"},{"deps":{"BaseUI":27,"Appcfg":3},"path":"preview-scripts/assets/_script/UITouch.js"},{"deps":{},"path":"preview-scripts/assets/_script/TweenMgr.js"},{"deps":{},"path":"preview-scripts/assets/_script/SfSendQueue.js"},{"deps":{},"path":"preview-scripts/assets/_script/WebSock.js"},{"deps":{"Config":17,"Appcfg":3,"EventMgr":14,"SfSendQueue":190},"path":"preview-scripts/assets/_script/WeachatServerMgr.js"},{"deps":{"BaseUI":27,"Appcfg":3,"EventMgr":14},"path":"preview-scripts/assets/_script/UIGuide.js"},{"deps":{"BasePlatform":44,"Appcfg":3,"PlatformConfig":163,"PlatformSetting":156},"path":"preview-scripts/assets/_script/AppManager.js"},{"deps":{},"path":"preview-scripts/assets/_script/director.js"},{"deps":{"BaseUI":27,"List":149,"PoolMgr":165,"Utils":198,"KinghtFallConfig":72,"KinghtFallTextConfig":119,"KinghtFallDataMgr":79,"KinghtFallPlayerMgr":115,"KinghtFallItemGood":112,"BPPayMgr":6,"EventMgr":14},"path":"preview-scripts/assets/_script/KinghtFallUIOnlineReward.js"},{"deps":{"BaseCtrl":49,"AudioMgr":5,"UIMgr":186,"Config":17,"commonConfig":2},"path":"preview-scripts/assets/_script/gameCtrl.js"},{"deps":{},"path":"preview-scripts/assets/_script/Utils.js"},{"deps":{"HttpMgr":80},"path":"preview-scripts/assets/_script/WechatPayMgr.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    