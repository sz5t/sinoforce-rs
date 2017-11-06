# SinoforceRs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



{
  "moduleName":"MasterGridView",
  "moduleTitle":"单表示例",
  "moduleDescription":"展示单表基本配置的页面效果和功能",
  "breadcrumbs":"",
  "template":"grid-view-master",
  "totalArea":{
    "pageConfigs":[
      {
        "title":"标题",
        "titleColor":"blue",
        "icon":"",
        "isFullScreen":true,
        "isCollapse":true,
        "size":{
          "xs":{
            "value":"12",
            "offset":"0"
          },
          "sm":{
            "value":"12",
            "offset":""
          },
          "md":{
            "value":"12",
            "offset":""
          },
          "lg":{
            "value":"12",
            "offset":""
          }
        },
        "viewCfg":{
          "classType":"GridView",
          "toolbarsConfig":[
            {
              id: 'new', text: '新建', color: 'green-jungle', img:'fa fa-plus', type: 'button',
              "events":{
                "eventType":"dialog",
                "execution":{
                  "api":"DynamicResModule",
                  "method":"post",
                  "keyID":"",
                  "callback":""
                }
              },
              formConfig:[
                {
                  type:'input',
                  inputType:'text',
                  name:'AssemblyName',
                  label:'程序集名称：',
                  helpText:'动态读取程序集名称',
                  inputClass:'input-inline input-medium',
                  placeholder:'例如：Company.cn.app',
                  helpClass:'help-inline',
                  validation:[Validators.required,Validators.minLength(6)]
                },
                {
                  type:'input',
                  inputType:'text',
                  name:'ContextName',
                  label:'上下文名称：',
                  icon:'fa fa-book',
                  iconPstn:'left',
                  inputClass:'input-group',
                  validation:[Validators.required]
                },
                {
                  type:'input',
                  inputType:'text',
                  name:'ProviderName',
                  label:'提供者：',
                  inputClass:'input-medium input-group',
                  icon:'fa fa-bookmark-o',
                  iconPstn:'right',
                  helpClass:'help-inline',
                  validation:[Validators.maxLength(20)]
                },
                {
                  type:'select',
                  placeholder:'--请选择--',
                  options:[
                    {text:'编译成功',value:'编译成功'},
                    {text:'正在定义',value:'正在定义'}
                  ],
                  name:'BuildState',
                  label:'编译状态：',
                  value:'',
                  inputClass:'input-medium'
                },
                {
                  type:'select',
                  placeholder:'--请选择--',
                  options:[
                    {text:'手动',value:'手动'},
                    {text:'自动',value:'自动'}
                  ],
                  name:'BuildMode',
                  label:'编译方式：',
                  value:'',
                  inputClass:'input-medium'
                },
                {
                  type:'input',
                  inputType:'text',
                  name:'DefaultNamespace',
                  label:'命名空间：',
                  inputClass:'input-group',
                  icon:'fa fa-bookmark-o',
                  iconPstn:'left',
                  helpClass:'help-inline',
                  helpText:'默认为程序编译后提供的命名空间',
                  validation:[Validators.required]
                },
                {
                  type:'input',
                  inputType:'text',
                  name:'EntitiesName',
                  label:'实体名称：',
                  inputClass:'input-group',
                  icon:'fa fa-bookmark-o',
                  iconPstn:'left',
                  helpClass:'help-inline',
                  helpText:''
                },
                {
                  type:'checkbox',
                  options:[
                    {checked:'checked',disabled:false,value:'1',label:'启用'},
                    {checked:'',disabled:false,value:'2',label:'禁用'}
                  ],
                  name:'shareScope',
                  label:'使用范围：',
                  inputClass:'mt-checkbox-inline' // mt-checkbox-list
                },
                {
                  type:'textarea',
                  name:'remark',
                  label:'备注：'
                },
                {
                  type:'button',
                  name:'submit',
                  disabled:false
                }
              ]
            },
            {
              id: 'del', text: '删除', color: 'red', img:'fa fa-remove', type: 'button',
              "events":{
                "title":"确认提示",
                "text":"确定要删除选中的记录吗?",
                "eventType":"confirm",
                "execution":{
                  "api":"DynamicResModule",
                  "method":"delete",
                  "keyId":"DrmId"
                }
              }
            },
            {
              id: 'sub', text: '提交', color: 'green', img:'fa fa-save', type: 'button',
              "events":{
                "title":"确认提示",
                "text":"是否提交当前数据?",
                "eventType":"confirm",
                "execution":{
                  "api":"DynamicResModule",
                  "method":"proc",
                  //"keyId":"Id"
                }
              }
            },
            {
              id: 'modify', text: '修改',color: 'yellow', img:'fa fa-edit', type: 'button',
              "events":{
                "eventType":"dialog",
                "execution":{
                  "api":"DynamicResModule",
                  "method":"put",
                  "keyID":"DrmId",
                  "callback":""
                }
              },formConfig:[
              {
                type:'input',
                inputType:'text',
                name:'DrmId',
                label:'ID：',
                //helpText:'',
                inputClass:'input-inline input-medium',
                placeholder:'例如：Company.cn.app',
                helpClass:'help-inline',
                validation:[Validators.required,Validators.minLength(6)]
              },
              {
                type:'input',
                inputType:'text',
                name:'AssemblyName',
                label:'程序集名称：',
                helpText:'动态读取程序集名称',
                inputClass:'input-inline input-medium',
                placeholder:'例如：Company.cn.app',
                helpClass:'help-inline',
                validation:[Validators.required,Validators.minLength(6)]
              },
              {
                type:'input',
                inputType:'text',
                name:'ContextName',
                label:'上下文名称：',
                icon:'fa fa-book',
                iconPstn:'left',
                inputClass:'input-group',
                validation:[Validators.required]
              },
              {
                type:'input',
                inputType:'text',
                name:'ProviderName',
                label:'提供者：',
                inputClass:'input-medium input-group',
                icon:'fa fa-bookmark-o',
                iconPstn:'right',
                helpClass:'help-inline',
                validation:[Validators.maxLength(20)]
              },
              {
                type:'select',
                placeholder:'--请选择--',
                options:[
                  {text:'编译成功',value:'编译成功'},
                  {text:'正在定义',value:'正在定义'}
                ],
                name:'BuildState',
                label:'编译状态：',
                value:'',
                inputClass:'input-medium'
              },
              {
                type:'select',
                placeholder:'--请选择--',
                options:[
                  {text:'手动',value:'手动'},
                  {text:'自动',value:'自动'}
                ],
                name:'BuildMode',
                label:'编译方式：',
                value:'',
                inputClass:'input-medium'
              },
              {
                type:'input',
                inputType:'text',
                name:'DefaultNamespace',
                label:'命名空间：',
                inputClass:'input-group',
                icon:'fa fa-bookmark-o',
                iconPstn:'left',
                helpClass:'help-inline',
                helpText:'默认为程序编译后提供的命名空间',
                validation:[Validators.required]
              },
              {
                type:'input',
                inputType:'text',
                name:'EntitiesName',
                label:'实体名称：',
                inputClass:'input-group',
                icon:'fa fa-bookmark-o',
                iconPstn:'left',
                helpClass:'help-inline',
                helpText:''
              },
              {
                type:'radio',
                options:[
                  {checked:'checked',disabled:false,value:'true',label:'启用'},
                  {checked:'',disabled:false,value:'false',label:'禁用'}
                ],
                name:'shareScope',
                label:'启用状态：',
                inputClass:'mt-checkbox-inline' // mt-checkbox-list
              },
              {
                type:'textarea',
                name:'remark',
                label:'备注：'
              },
              {
                type:'button',
                name:'submit',
                disabled:false
              }
            ]
            },
            {
              id: 'search', text: '查询',color: 'blue', img:'fa fa-search', type: 'button',
              "events":{
                "eventType":"dialog",
                "execution":{
                  "api":"DynamicResModule",
                  "method":"get",
                  "keyID":"",
                  "callback":""
                }
              }
            }
          ],
          "ordering":true,
          "paging":true,
          "processing":true,
          "searching":true,
          "deferRender":true,
          "ajax":{
            "url":Configuration.web_api + "DynamicResModule",
            "dataSrc":""
          },
          "autoWidth":true,
          "destroy":true,
          "lengthMenu": [ 5, 10, 20, 30, 40, 50, 100 ],
          "rowId":"DrmId",
          "pagingType":"full_numbers",
          "pageLength":5,
          "orderMulti":true,
          "select":true,
          "responsive": true,
          "columnDefs":[
            {
              "targets":0,
              "orderable":false
            }
          ],
          "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
          "columnConfigs":[
            {
              "title":"<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> " +
              "<input type="checkbox" class="group-checkable" id="checkall" />" +
              " <span></span> </label>",
              "data":"Id",
              "render":(data ,type ,row, meta) =>{
              return "<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> " +
              "<input type="checkbox" class="group-checkable" name="checkchild" value=""+data+"" />" +
              " <span></span> </label>";
            },
            "className": "text-center"
            },
            {
              "title":"共享范围", "data":"ShareScope",
            },
            {
              "title":"程序集名称", "data":"AssemblyName",
              "render":function(data, type, row, meta){
              return data==null?"":data;
            }
          },
            {
              "title":"编译状态", "data":"BuildState",
            },
            {
              "title":"编译方式", "data":"BuildMode",
            },
            {
              "title":"错误消息", "data":"ErrorMessage",
              "render":function(data, type, row, meta){
              return data==null?"":data;
            }
          },
            {
              "title":"编译消息", "data":"BuildMessage",
              "render":function(data, type, row, meta){
              return data==null?"":data;
            }
          },
            {
              "title":"上下文名称", "data":"ContextName",
              "render":function(data, type, row, meta){
              return data==null?"":data;
            }
          },
            {
              "title":"提供者", "data":"ProviderName",
              "render":function(data, type, row, meta){
              return data==null?"":data;
            }
          },
            {
              "title":"默认命名空间", data:"DefaultNamespace",
              "render":function(data, type, row, meta){
              return data==null?"":data;
            }
          },
            {
              "title":"客户编号", "data":"PlatCustomerId",
            },
            {
              "title":"是否启用", "data":"Enabled",
            },
            {
              "title":"创建时间", "data":"CreateTime",
            }
          ]
        }
      },
      {
        "pageConfigs":[
          {
            "viewCfg":{

            }
          },
          {
            "viewCfg":{

            }
          },
          {
            "viewCfg":{

            }
          }
        ]
      },
      {
        "pageConfigs":[
          {
            "pageConfigs":[
              {
                "viewCfg":{

                },
                "viewCfg":{

                }
              }
            ],
            "pageConfigs":[
              {
                "viewCfg":{

                },
                "viewCfg":{

                }
              }
            ]
          }
        ]
      }
    ]
  }
}
