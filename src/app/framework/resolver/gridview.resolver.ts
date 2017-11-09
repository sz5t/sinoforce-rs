import {Configuration, RenderColumnType} from "../configuration";
import ColumnSettings = DataTables.ColumnSettings;
import {Validators} from "@angular/forms";
/**
 * Created by zhaoxinlei on 2017/10/26.
 */
export class MasterGridViewResolver {
  protected _viewCfg;
  private _filterItem;
  constructor(viewCfg) {
    this._viewCfg = viewCfg;
  }

  set filterItem (item){
    this._filterItem = item;
  }
  get buttonConfig() {
    this._viewCfg && this._viewCfg.toolbarsConfig.forEach(btn =>{
      if(btn.formConfig){
        btn.formConfig.forEach(tag =>{
          let validation = [];
          if(tag.validations){

            tag.validations.forEach(valid => {
              if(valid.validator === 'required' || valid.validator === 'email'){
                validation.push(Validators[valid.validator]);
              }else if(valid.validator === 'minLength' || valid.validator === 'maxLength'){
                validation.push(Validators[valid.validator](valid.length));
              }
              else if(valid.validator === 'pattern'){
                validation.push(Validators[valid.validator](valid.value));
              }
            });
            tag.validation = validation;
          }
        });
      }

    });
    return this._viewCfg.toolbarsConfig;
  };

  get gridConfig() {

    let config: DataTables.Settings;
    this._viewCfg && (()=>{
      config = {...this._viewCfg};
      this._filterItem
        ?this._viewCfg.columnConfigClass && ( config.ajax = this._buildAjaxWithFilter())
        :this._viewCfg.columnConfigClass && ( config.ajax = this._buildAjax());

      this._viewCfg.columnConfigs && (config.columns = this._buildColumns());
      config.buttons = [];
    })();
    return config;
  }
  private _buildAjax(){
    return {
      url:Configuration.web_api + this._viewCfg.columnConfigClass,
      dataSrc:this._viewCfg.columnFilter
    }
  }
  private _buildAjaxWithFilter(){
    let condition = "";
    if(this._viewCfg.filterConfig){
      this._viewCfg.filterConfig.forEach(filter =>{
        if(filter){
          for(let propLink of filter.propLinks){
            if(this._filterItem){
              condition += propLink["slaveProp"] +'='+ this._filterItem[propLink.masterProp]+'&';
            }
          }
        }
      });
    }

    return {
      url:Configuration.web_api + this._viewCfg.columnConfigClass+'?'+condition,
      dataSrc:this._viewCfg.columnFilter
    }
  }
  private _buildColumns():ColumnSettings[]{
    let columns:ColumnSettings[] = [];
    let column:ColumnSettings = {};
    this._viewCfg.columnConfigs.forEach(col =>{
      column = {...col};
      if(col.renderName){
        column.render = this._buildRenderFunction(col.renderName);
      }
      columns.push(column);

    })
    return columns;
  }
  private _buildRenderFunction(renderName){
    //notNull
    //checkAll
    switch (renderName.type){
      case RenderColumnType.RENDER_COLUMN_TYPE.NOT_NULL:
        return ((data ,type ,row, meta) => {
          return data == null?"":data;
        });
      case RenderColumnType.RENDER_COLUMN_TYPE.CHECK_ALL:
        return ((data ,type ,row, meta) => {
          return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
          '<input type="checkbox" class="group-checkable" name="checkchild" value=""+data+"" />' +
          ' <span></span> </label>';
        });
    }
  }
}
export class SlaverGridViewResolver extends MasterGridViewResolver{
  constructor(viewCfg){
    super(viewCfg);
    this._viewCfg = viewCfg;
  }
  get filterConfig(){
    return this._viewCfg.filterConfig;
  }
}


