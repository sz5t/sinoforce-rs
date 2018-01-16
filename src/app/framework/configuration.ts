/**
 * Created by zhaoxinlei on 2017/10/9.
 */
export class Configuration {
  public static web_api_2 = 'http://192.168.8.8:8005/f2771e4c90db29439e3c986d9859dc74/Res/';
  public static web_api = 'http://192.168.8.8:8006/add8f868178b4cd18a10d45de7b8ebc8/Res/'; // 化建
  public static web_platCustomer = 'add8f868178b4cd18a10d45de7b8ebc8';
  public static commonCode_code = 'sinoforce_web';
  public static validCode_resource = 'ValidCode';
  public static config_resource = '../assets/data/layout.json';
  public static config2_resource = '../assets/data/layoutAsyn.json';
  public static onlineUser_resource = 'OnlineUser';
  public static appUser_resource = 'AppUser';
  public static commonCode_resource = 'CommonCode';
  public static appModule_response = 'appModuleConfig';
  public static appModuleTree_response = 'appModuleConfig/{parentId}/appModuleConfig';
  public static appPermission_response = 'SinoForce.Data.AppPermission/Func.SinoForceWeb端';
  public static dataPermission_response = 'SinoForce.Data.AppPermission/Data';
  public static appConfig_resource = 'SinoForce.Data.AppConfigPack'

  public static HJ_AllAppConfig = 'HJProj.SinoForce.HJComm.AllModuleConfig';

  public static mock_api = 'http://category.cn';

  public static menuNavItemType = 'nav-item';

  public static AppPermissionType = {
    PERMITTED: 'Permitted',
    NOT_SET: 'NotSet',     // 未设置，可设定系统策略来确定默认值
    INVISIBLE: 'Invisible',  // 不可见
    DISABLED: 'Disabled',   // 不可用
  };
}
export class RenderColumnType {
  public static RENDER_COLUMN_TYPE = {
    NOT_NULL: 'notNull',
    CHECK_ALL: 'checkAll',
    BUTTONS: 'handleButtons',
    BUTTON_COMMON: 'commonButton',
    BUTTON_CONFIRM: 'confirmButton',
    CELL_STYLE: 'cellStyle',
    CELL_DATE: 'date',
    CELL_TIME: 'datetime',
    CELL_NUMBER: 'number'
  };
}
