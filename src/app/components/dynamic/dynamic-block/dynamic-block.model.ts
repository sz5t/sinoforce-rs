export interface IDynamicBlockModel {
  title;
  titleColor;
  titleIcon;
  isFullScreen;
  isCollapse;
  actions;
}

export interface IDynamicBlock {
  dynamicBlockField: IDynamicBlockModel;
  templateConfig: any;
}
