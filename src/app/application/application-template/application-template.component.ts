import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientStorageService} from '../../services/client-storage.service';

@Component({
  selector: 'cn-application-template',
  templateUrl: './application-template.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./application-template.component.css']
})
export class ApplicationTemplateComponent implements OnInit {
  _config = [];
  configs;
  configs1 = {
    user: [
      [{
        'title': '用户列表',
        'titleColor': 'font-green',
        'titleIcon': 'fa fa-cogs',
        'isFullScreen': true,
        'isCollapse': true,
        'blockType': 'portlet',
        'size': {
          'xs': {
            'value': '12',
            'offset': ''
          },
          'sm': {
            'value': '12',
            'offset': ''
          },
          'md': {
            'value': '12',
            'offset': ''
          },
          'lg': {
            'value': '12',
            'offset': ''
          }
        },
        'viewCfg': {
          'viewId': 'userList',
          'component': 'grid_view',
          'classType': 'GridView',
          'toolbarsConfig': [
            {
              'id': 'new',
              'text': '新增',
              'color': 'btn btn-success',
              'img': 'fa fa-plus',
              'type': 'button',
              'events': {
                'title': '新增用户',
                'eventType': 'form_dialog',
                'execution': {
                  'api': 'SinoForce.Data.AppUser',
                  'method': 'post',
                  'keyID': '',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'Name',
                  'label': '登录名：',
                  'helpText': '',
                  'inputClass': 'input-group input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'icon': 'fa fa-user',
                  'iconPstn': 'right',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 2,
                      'errorMessage': ''
                    }
                  ]
                },
                /*{
                 'type': 'input',
                 'inputType': 'text',
                 'name': 'Password',
                 'label': '密码：',
                 'helpText': '',
                 'inputClass': 'input-group input-medium',
                 'placeholder': '',
                 'helpClass': 'help-inline',
                 'icon': 'fa fa-key',
                 'iconPstn': 'right',
                 'validations': [
                 {
                 'validator': 'required',
                 'errorMessage': ''
                 },
                 {
                 'validator': 'minLength',
                 'length': 6,
                 'errorMessage': ''
                 }
                 ]
                 },*/
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'MobileNumber',
                  'label': ' 联系方式：',
                  'helpText': '',
                  'inputClass': 'input-group input-medium',
                  'placeholder': '',
                  'icon': 'fa fa-phone',
                  'iconPstn': 'left',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'RealName',
                  'label': ' 真实姓名：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'NickName',
                  'label': ' 昵称：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': 'checked',
                      'disabled': false,
                      'value': '男',
                      'label': '男'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '女',
                      'label': '女'
                    }
                  ],
                  'name': 'Gender',
                  'label': '性别：',
                  'inputClass': 'mt-checkbox-inline'
                },
                {
                  'type': 'datepicker',
                  'inputType': 'text',
                  'name': 'Birthday',
                  'label': ' 出生日期：',
                  'helpText': '',
                  'inputClass': 'input-group input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'icon': 'fa fa-calender',
                  'iconPstn': 'right',
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'MailAddress',
                  'label': ' 邮箱地址：',
                  'helpText': '',
                  'inputClass': 'input-group',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'icon': 'fa fa-envelope',
                  'iconPstn': 'left',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'email',
                      'errorMessage': '邮箱格式从不正确'
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'IdCardNumber',
                  'label': ' 身份证号：',
                  'helpText': '',
                  'inputClass': 'input-group',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'icon': 'fa fa-credit-card',
                  'iconPstn': 'left',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'textarea',
                  'name': 'remark',
                  'label': '备注：'
                },
                {
                  'type': 'button',
                  'name': 'submit',
                  'disabled': false
                }
              ]
            },
            {
              'id': 'modify',
              'text': '编辑',
              'color': 'btn btn-success',
              'img': 'fa fa-edit',
              'type': 'button',
              'events': {
                'eventType': 'form_dialog',
                'title': '修改程序集信息',
                'execution': {
                  'api': 'SinoForce.Data.AppUser',
                  'method': 'put',
                  'keyID': 'Id',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'Id',
                  'label': 'ID：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'readonly': true
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'Name',
                  'label': '登录名：',
                  'helpText': '',
                  'inputClass': 'input-group input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'icon': 'fa fa-user',
                  'iconPstn': 'right',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                /*{
                 'type': 'input',
                 'inputType': 'text',
                 'name': 'Password',
                 'label': '密码：',
                 'helpText': '',
                 'inputClass': 'input-group input-medium',
                 'placeholder': '',
                 'helpClass': 'help-inline',
                 'icon': 'fa fa-key',
                 'iconPstn': 'right',
                 'validations': [
                 {
                 'validator': 'required',
                 'errorMessage': ''
                 }
                 ]
                 },*/
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'MobileNumber',
                  'label': ' 联系方式：',
                  'helpText': '',
                  'inputClass': 'input-group input-medium',
                  'placeholder': '',
                  'icon': 'fa fa-phone',
                  'iconPstn': 'left',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'RealName',
                  'label': ' 真实姓名：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'NickName',
                  'label': ' 昵称：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline'
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': 'checked',
                      'disabled': false,
                      'value': '男',
                      'label': '男'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '女',
                      'label': '女'
                    }
                  ],
                  'name': 'Gender',
                  'label': '性别：',
                  'inputClass': 'mt-checkbox-inline'
                },
                {
                  'type': 'datepicker',
                  'inputType': 'text',
                  'name': 'Birthday',
                  'label': ' 出生日期：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline'
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'MailAddress',
                  'label': ' 邮箱地址：',
                  'helpText': '',
                  'inputClass': 'input-group',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'icon': 'fa fa-envelope',
                  'iconPstn': 'left',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'email',
                      'errorMessage': '邮箱格式从不正确'
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'IdCardNumber',
                  'label': ' 身份证号：',
                  'helpText': '',
                  'inputClass': 'input-group',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'icon': 'fa fa-credit-card',
                  'iconPstn': 'left',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'textarea',
                  'name': 'remark',
                  'label': '备注：'
                },
                {
                  'type': 'button',
                  'name': 'submit',
                  'disabled': false
                }
              ]
            },
            {
              'id': 'del',
              'text': '批量删除',
              'color': 'btn btn-warning',
              'img': 'fa fa-remove',
              'type': 'button',
              'events': {
                'title': '确认提示',
                'text': '确定要删除选中的记录吗?',
                'eventType': 'confirm_dialog',
                'execution': {
                  'api': 'SinoForce.Data.AppUser',
                  'method': 'delete',
                  'keyId': 'Id'
                }
              }
            }
          ],
          'ordering': true,
          'paging': true,
          'processing': false,
          'searching': true,
          'deferRender': true,
          'columnConfigClass': 'AppUser',
          'columnFilter': 'Data',
          'autoWidth': true,
          'destroy': true,
          'lengthMenu': [
            5,
            10,
            20,
            30,
            40,
            50,
            100
          ],
          'rowId': 'Id',
          'pagingType': 'full_numbers',
          'pageLength': 20,
          'orderMulti': true,
          'select': true,
          'responsive': true,
          'columnDefs': [
            {
              'orderable': false,
              'targets': [0]
            }
          ],
          'order': [
            [1, 'asc']
          ],
          'dom': 'Bfr<"table-scrollable"t>ip',
          'columnConfigs': [
            {
              'title': `<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
            <input type="checkbox" class="group-checkable" data-set=".checkboxes" />
            <span></span>
            </label>`,
              'data': 'Id',
              'renderName': {
                'type': 'checkAll'
              },
              'className': 'text-center'
            },
            {
              'title': '用户名',
              'data': 'Name',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '用户名称',
              'data': 'RealName',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '编码',
              'data': 'Code',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '用户昵称',
              'data': 'NickName',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '手机',
              'data': 'MobileNumber',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '出生日期',
              'data': 'Birthday',
              'renderName': {
                'type': 'date',
                'data': [
                  {'className': 'font-green'},
                ]
              }
            },
            {
              'title': '账户状态',
              'data': 'Status',
              'renderName': {
                'type': 'notNull'
              }
            },
            {
              'title': '用户角色',
              'data': 'LoginLimitKind',
              'renderName': {
                'type': 'notNull'
              }
            },
            {
              'title': '',
              'data': 'Id',
              'renderName': {
                'type': 'handleButtons',
                'data': [
                  {
                    'text': '明细',
                    'img': 'fa fa-search',
                    'color': 'green-turquoise',
                    'type': 'commonButton',
                    'events': {
                      'execution': {
                        'api': 'SinoForce.Data.AppUser',
                        'method': 'delete',
                        'keyId': 'Id'
                      }
                    }
                  },
                  {
                    'text': '删除',
                    'img': 'fa fa-trash',
                    'color': 'btn-outline red-pink',
                    'type': 'confirmButton',
                    'events': {
                      'title': '确认提示',
                      'text': '确定要删除当前记录?',
                      'eventType': 'confirm_dialog',
                      'execution': {
                        'api': 'SinoForce.Data.AppUser',
                        'method': 'delete',
                        'keyId': 'Id'
                      }
                    }
                  }
                ]
              },
              'className': 'text-center',
              'width': '220'
            },
          ]
        }
      }]
    ],
    org: [[{
      'title': '组织机构列表',
      'titleColor': 'font-green',
      'titleIcon': 'fa fa-cogs',
      'isFullScreen': true,
      'isCollapse': true,
      'blockType': 'portlet',
      'size': {
        'xs': {
          'value': '12',
          'offset': ''
        },
        'sm': {
          'value': '12',
          'offset': ''
        },
        'md': {
          'value': '12',
          'offset': ''
        },
        'lg': {
          'value': '12',
          'offset': ''
        }
      },
      'viewCfg': {
        'viewId': 'area1',
        'component': 'grid_view',
        'classType': 'GridView',
        'toolbarsConfig': [
          {
            'id': 'new',
            'text': '新建',
            'color': 'btn btn-success',
            'img': 'fa fa-plus',
            'type': 'button',
            'events': {
              'title': '新建程序集',
              'eventType': 'form_dialog',
              'execution': {
                'api': 'DynamicResModule',
                'method': 'post',
                'keyID': '',
                'callback': ''
              }
            },
            'formConfig': [
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'Name',
                'label': '程序集名称：',
                'helpText': '动态读取程序集名称',
                'inputClass': 'input-inline input-medium',
                'placeholder': '例如：Company.cn.app',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  },
                  {
                    'validator': 'minLength',
                    'length': 6,
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'select2',
                'placeholder': '--请选择--',
                'ajax': {
                  'url': 'DataCategory?_select=Name as text,Id as value'
                },
                'name': 'Caption',
                'label': '中文名称：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'asyndropdown',
                'placeholder': '--请选择--',
                'ajax': {
                  'url': 'DataCategory?_select=Name as text,Id as id'
                },
                'name': 'Caption',
                'label': '中文名称：',
                'value': '',
                'inputClass': 'input-medium',
                'multiple': ''
              },
              {
                'type': 'asyndropdown',
                'placeholder': '--请选择--',
                'ajax': {
                  'url': 'DataCategory?_select=Name as text,Id as id'
                },
                'name': 'Caption',
                'label': '中文名称：',
                'value': '',
                'inputClass': 'input-large',
                'multiple': 'multiple'
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ContextName',
                'label': '上下文名称：',
                'icon': 'fa fa-book',
                'iconPstn': 'left',
                'inputClass': 'input-group',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ProviderName',
                'label': '提供者：',
                'inputClass': 'input-medium input-group',
                'icon': 'fa fa-bookmark-o',
                'iconPstn': 'right',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  },
                  {
                    'validator': 'maxLength',
                    'length': 20,
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '编译成功',
                    'value': '编译成功'
                  },
                  {
                    'text': '正在定义',
                    'value': '正在定义'
                  }
                ],
                'name': 'BuildState',
                'label': '编译状态：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '手动',
                    'value': '手动'
                  },
                  {
                    'text': '自动',
                    'value': '自动'
                  }
                ],
                'name': 'BuildMode',
                'label': '编译方式：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'DefaultNamespace',
                'label': '命名空间：',
                'inputClass': 'input-group',
                'icon': 'fa fa-bookmark-o',
                'iconPstn': 'left',
                'helpClass': 'help-inline',
                'helpText': '默认为程序编译后提供的命名空间',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'EntitiesName',
                'label': '实体名称：',
                'inputClass': 'input-group',
                'icon': 'fa fa-bookmark-o',
                'iconPstn': 'left',
                'helpClass': 'help-inline',
                'helpText': ''
              },
              {
                'type': 'checkbox',
                'options': [
                  {
                    'checked': 'checked',
                    'disabled': false,
                    'value': '1',
                    'label': '启用'
                  },
                  {
                    'checked': '',
                    'disabled': false,
                    'value': '2',
                    'label': '禁用'
                  }
                ],
                'name': 'ShareScope',
                'label': '使用范围：',
                'inputClass': 'mt-checkbox-inline'
              },
              {
                'type': 'textarea',
                'name': 'Remark',
                'label': '备注：'
              },
              {
                'type': 'button',
                'name': 'submit',
                'disabled': false
              }
            ]
          },
          {
            'id': 'del',
            'text': '删除',
            'color': 'btn btn-success',
            'img': 'fa fa-remove',
            'type': 'button',
            'events': {
              'title': '确认提示',
              'text': '确定要删除选中的记录吗?',
              'eventType': 'confirm_dialog',
              'execution': {
                'api': 'DynamicResModule',
                'method': 'delete',
                'keyId': 'Id'
              }
            }
          },
          {
            'id': 'sub',
            'text': '提交',
            'color': 'btn btn-success',
            'img': 'fa fa-save',
            'type': 'button',
            'events': {
              'title': '确认提示',
              'text': '是否提交当前数据?',
              'eventType': 'confirm_dialog',
              'execution': {
                'api': 'DynamicResModule',
                'method': 'proc'
              }
            }
          },
          {
            'id': 'modify',
            'text': '修改',
            'color': 'btn btn-success',
            'img': 'fa fa-edit',
            'type': 'button',
            'events': {
              'eventType': 'form_dialog',
              'title': '修改程序集信息',
              'execution': {
                'api': 'DynamicResModule',
                'method': 'put',
                'keyID': 'Id',
                'callback': ''
              }
            },
            'formConfig': [
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'Id',
                'label': 'ID：',
                'inputClass': 'input-inline input-medium',
                'placeholder': '例如：Company.cn.app',
                'helpClass': 'help-inline'
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'AssemblyName',
                'label': '程序集名称：',
                'helpText': '动态读取程序集名称',
                'inputClass': 'input-inline input-medium',
                'placeholder': '例如：Company.cn.app',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ContextName',
                'label': '上下文名称：',
                'icon': 'fa fa-book',
                'iconPstn': 'left',
                'inputClass': 'input-group',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ProviderName',
                'label': '提供者：',
                'inputClass': 'input-medium input-group',
                'icon': 'fa fa-bookmark-o',
                'iconPstn': 'right',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  },
                  {
                    'validator': 'maxLength',
                    'length': 20,
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '编译成功',
                    'value': '编译成功'
                  },
                  {
                    'text': '正在定义',
                    'value': '正在定义'
                  }
                ],
                'name': 'BuildState',
                'label': '编译状态：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '手动',
                    'value': '手动'
                  },
                  {
                    'text': '自动',
                    'value': '自动'
                  }
                ],
                'name': 'BuildMode',
                'label': '编译方式：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'DefaultNamespace',
                'label': '命名空间：',
                'inputClass': 'input-group',
                'icon': 'fa fa-bookmark-o',
                'iconPstn': 'left',
                'helpClass': 'help-inline',
                'helpText': '默认为程序编译后提供的命名空间',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  },
                  {
                    'validator': 'maxLength',
                    'length': 20,
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'EntitiesName',
                'label': '实体名称：',
                'inputClass': 'input-group',
                'icon': 'fa fa-bookmark-o',
                'iconPstn': 'left',
                'helpClass': 'help-inline',
                'helpText': ''
              },
              {
                'type': 'radio',
                'options': [
                  {
                    'checked': 'checked',
                    'disabled': false,
                    'value': 'true',
                    'label': '启用'
                  },
                  {
                    'checked': '',
                    'disabled': false,
                    'value': 'false',
                    'label': '禁用'
                  }
                ],
                'name': 'shareScope',
                'label': '启用状态：',
                'inputClass': 'mt-checkbox-inline'
              },
              {
                'type': 'textarea',
                'name': 'remark',
                'label': '备注：'
              },
              {
                'type': 'button',
                'name': 'submit',
                'disabled': false
              }
            ]
          }
        ],
        'ordering': true,
        'paging': true,
        'processing': false,
        'searching': true,
        'deferRender': true,
        'columnConfigClass': 'DynamicResModule',
        'columnFilter': 'Data',
        'autoWidth': true,
        'destroy': true,
        'lengthMenu': [
          5,
          10,
          20,
          30,
          40,
          50,
          100
        ],
        'rowId': 'Id',
        'pagingType': 'full_numbers',
        'pageLength': 5,
        'orderMulti': true,
        'select': true,
        'responsive': true,
        'columnDefs': [
          {
            'targets': 0,
            'orderable': false
          }
        ],
        'dom': 'Bfr<"table-scrollable"t>ip',
        'columnConfigs': [
          {
            'title': '',
            'data': 'Id',
            'renderName': {
              'type': 'checkAll'
            },
            'className': 'text-center'
          },
          {
            'title': '共享范围',
            'data': 'ShareScope',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '程序集名称',
            'data': 'AssemblyName',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '编译状态',
            'data': 'BuildState',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '编译方式',
            'data': 'BuildMode',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '错误消息',
            'data': 'ErrorMessage',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '编译消息',
            'data': 'BuildMessage',
            'renderName': {
              'type': 'notNull'
            }
          },
          {
            'title': '上下文名称',
            'data': 'ContextName',
            'renderName': {
              'type': 'notNull'
            }
          },
          {
            'title': '提供者',
            'data': 'ProviderName',
            'renderName': {
              'type': 'notNull'
            }
          },
          {
            'title': '默认命名空间',
            'data': 'DefaultNamespace',
            'renderName': {
              'type': 'notNull'
            }
          },
          {
            'title': '客户编号',
            'data': 'PlatCustomerId'
          },
          {
            'title': '创建时间',
            'data': 'CreateTime',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          }
        ]
      }
    }]],
    orgUser: [[
      {
        'title': '组织j机构树',
        'titleColor': 'font-blue',
        'titleIcon': 'fa fa-bars',
        'isFullScreen': true,
        'isCollapse': true,
        'blockType': 'portlet',
        'size': {
          'xs': {
            'value': '12',
            'offset': ''
          },
          'sm': {
            'value': '12',
            'offset': ''
          },
          'md': {
            'value': '3',
            'offset': ''
          },
          'lg': {
            'value': '3',
            'offset': ''
          }
        },
        'viewCfg': {
          'viewId': 'areaTree',
          'component': 'tree_view',
          'classType': 'tree',
          'rootConfigs': [
            {
              'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
              'img': 'fa fa-list green',
              'entityClass': 'AppUser',
              'localCreate': false,
              'readOnly': false,
              'columnConfigsClass': 'AppUser',
              'enabled': false,
              'textKey': 'Name',
              'idKey': 'Id'
            },
            {
              'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
              'nodeText': '公用资源',
              'img': 'fa fa-list green',
              'nodeTypes': [
                {
                  'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'nodeText': '动态资源',
                  'nodeTypes': [
                    {
                      'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                      'img': '',
                      'entityClass': 'DynamicResModule',
                      'localCreate': false,
                      'readOnly': false,
                      'columnConfigsClass': 'DynamicResModule',
                      'enabled': true,
                      'textKey': 'Name',
                      'idKey': 'Id'
                    }
                  ],
                  'pageConfigs': [
                    {
                      'title': '标题',
                      'titleColor': 'blue',
                      'icon': '',
                      'isFullScreen': true,
                      'isCollapse': true,
                      'size': {
                        'xs': {
                          'value': '12',
                          'offset': ''
                        },
                        'sm': {
                          'value': '12',
                          'offset': ''
                        },
                        'md': {
                          'value': '12',
                          'offset': ''
                        },
                        'lg': {
                          'value': '12',
                          'offset': ''
                        }
                      },
                      'viewCfg': {
                        'viewId': 'area1_1',
                        'component': 'grid_view',
                        'classType': 'GridView',
                        'toolbarsConfig': [
                          {
                            'id': 'new',
                            'text': '新建',
                            'color': 'btn btn-success',
                            'img': 'fa fa-plus',
                            'type': 'button',
                            'events': {
                              'title': '新建程序集',
                              'eventType': 'form_dialog',
                              'execution': {
                                'api': 'DynamicResModule',
                                'method': 'post',
                                'keyID': '',
                                'callback': ''
                              }
                            },
                            'formConfig': [
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'AssemblyName',
                                'label': '程序集名称：',
                                'helpText': '动态读取程序集名称',
                                'inputClass': 'input-inline input-medium',
                                'placeholder': '例如：Company.cn.app',
                                'helpClass': 'help-inline',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  },
                                  {
                                    'validator': 'minLength',
                                    'length': 6,
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'ContextName',
                                'label': '上下文名称：',
                                'icon': 'fa fa-book',
                                'iconPstn': 'left',
                                'inputClass': 'input-group',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'ProviderName',
                                'label': '提供者：',
                                'inputClass': 'input-medium input-group',
                                'icon': 'fa fa-bookmark-o',
                                'iconPstn': 'right',
                                'helpClass': 'help-inline',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  },
                                  {
                                    'validator': 'maxLength',
                                    'length': 20,
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'select',
                                'placeholder': '--请选择--',
                                'options': [
                                  {
                                    'text': '编译成功',
                                    'value': '编译成功'
                                  },
                                  {
                                    'text': '正在定义',
                                    'value': '正在定义'
                                  }
                                ],
                                'name': 'BuildState',
                                'label': '编译状态：',
                                'value': '',
                                'inputClass': 'input-medium'
                              },
                              {
                                'type': 'select',
                                'placeholder': '--请选择--',
                                'options': [
                                  {
                                    'text': '手动',
                                    'value': '手动'
                                  },
                                  {
                                    'text': '自动',
                                    'value': '自动'
                                  }
                                ],
                                'name': 'BuildMode',
                                'label': '编译方式：',
                                'value': '',
                                'inputClass': 'input-medium'
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'DefaultNamespace',
                                'label': '命名空间：',
                                'inputClass': 'input-group',
                                'icon': 'fa fa-bookmark-o',
                                'iconPstn': 'left',
                                'helpClass': 'help-inline',
                                'helpText': '默认为程序编译后提供的命名空间',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'EntitiesName',
                                'label': '实体名称：',
                                'inputClass': 'input-group',
                                'icon': 'fa fa-bookmark-o',
                                'iconPstn': 'left',
                                'helpClass': 'help-inline',
                                'helpText': ''
                              },
                              {
                                'type': 'checkbox',
                                'options': [
                                  {
                                    'checked': 'checked',
                                    'disabled': false,
                                    'value': '1',
                                    'label': '启用'
                                  },
                                  {
                                    'checked': '',
                                    'disabled': false,
                                    'value': '2',
                                    'label': '禁用'
                                  }
                                ],
                                'name': 'shareScope',
                                'label': '使用范围：',
                                'inputClass': 'mt-checkbox-inline'
                              },
                              {
                                'type': 'textarea',
                                'name': 'remark',
                                'label': '备注：'
                              },
                              {
                                'type': 'button',
                                'name': 'submit',
                                'disabled': false
                              }
                            ]
                          },
                          {
                            'id': 'del',
                            'text': '删除',
                            'color': 'btn btn-success',
                            'img': 'fa fa-remove',
                            'type': 'button',
                            'events': {
                              'title': '确认提示',
                              'text': '确定要删除选中的记录吗?',
                              'eventType': 'confirm_dialog',
                              'execution': {
                                'api': 'DynamicResModule',
                                'method': 'delete',
                                'keyId': 'Id'
                              }
                            }
                          },
                          {
                            'id': 'sub',
                            'text': '提交',
                            'color': 'btn btn-success',
                            'img': 'fa fa-save',
                            'type': 'button',
                            'events': {
                              'title': '确认提示',
                              'text': '是否提交当前数据?',
                              'eventType': 'confirm_dialog',
                              'execution': {
                                'api': 'DynamicResModule',
                                'method': 'proc'
                              }
                            }
                          },
                          {
                            'id': 'modify',
                            'text': '修改',
                            'color': 'btn btn-success',
                            'img': 'fa fa-edit',
                            'type': 'button',
                            'events': {
                              'eventType': 'form_dialog',
                              'title': '修改程序集信息',
                              'execution': {
                                'api': 'DynamicResModule',
                                'method': 'put',
                                'keyID': 'Id',
                                'callback': ''
                              }
                            },
                            'formConfig': [
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'Id',
                                'label': 'ID：',
                                'inputClass': 'input-inline input-medium',
                                'placeholder': '例如：Company.cn.app',
                                'helpClass': 'help-inline'
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'AssemblyName',
                                'label': '程序集名称：',
                                'helpText': '动态读取程序集名称',
                                'inputClass': 'input-inline input-medium',
                                'placeholder': '例如：Company.cn.app',
                                'helpClass': 'help-inline',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'ContextName',
                                'label': '上下文名称：',
                                'icon': 'fa fa-book',
                                'iconPstn': 'left',
                                'inputClass': 'input-group',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'ProviderName',
                                'label': '提供者：',
                                'inputClass': 'input-medium input-group',
                                'icon': 'fa fa-bookmark-o',
                                'iconPstn': 'right',
                                'helpClass': 'help-inline',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  },
                                  {
                                    'validator': 'maxLength',
                                    'length': 20,
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'select',
                                'placeholder': '--请选择--',
                                'options': [
                                  {
                                    'text': '编译成功',
                                    'value': '编译成功'
                                  },
                                  {
                                    'text': '正在定义',
                                    'value': '正在定义'
                                  }
                                ],
                                'name': 'BuildState',
                                'label': '编译状态：',
                                'value': '',
                                'inputClass': 'input-medium'
                              },
                              {
                                'type': 'select',
                                'placeholder': '--请选择--',
                                'options': [
                                  {
                                    'text': '手动',
                                    'value': '手动'
                                  },
                                  {
                                    'text': '自动',
                                    'value': '自动'
                                  }
                                ],
                                'name': 'BuildMode',
                                'label': '编译方式：',
                                'value': '',
                                'inputClass': 'input-medium'
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'DefaultNamespace',
                                'label': '命名空间：',
                                'inputClass': 'input-group',
                                'icon': 'fa fa-bookmark-o',
                                'iconPstn': 'left',
                                'helpClass': 'help-inline',
                                'helpText': '默认为程序编译后提供的命名空间',
                                'validations': [
                                  {
                                    'validator': 'required',
                                    'errorMessage': ''
                                  },
                                  {
                                    'validator': 'maxLength',
                                    'length': 20,
                                    'errorMessage': ''
                                  }
                                ]
                              },
                              {
                                'type': 'input',
                                'inputType': 'text',
                                'name': 'EntitiesName',
                                'label': '实体名称：',
                                'inputClass': 'input-group',
                                'icon': 'fa fa-bookmark-o',
                                'iconPstn': 'left',
                                'helpClass': 'help-inline',
                                'helpText': ''
                              },
                              {
                                'type': 'radio',
                                'options': [
                                  {
                                    'checked': 'checked',
                                    'disabled': false,
                                    'value': 'true',
                                    'label': '启用'
                                  },
                                  {
                                    'checked': '',
                                    'disabled': false,
                                    'value': 'false',
                                    'label': '禁用'
                                  }
                                ],
                                'name': 'shareScope',
                                'label': '启用状态：',
                                'inputClass': 'mt-checkbox-inline'
                              },
                              {
                                'type': 'textarea',
                                'name': 'remark',
                                'label': '备注：'
                              },
                              {
                                'type': 'button',
                                'name': 'submit',
                                'disabled': false
                              }
                            ]
                          }
                        ],
                        'ordering': true,
                        'paging': true,
                        'processing': false,
                        'searching': true,
                        'deferRender': true,
                        'columnConfigClass': 'DynamicResModule',
                        'columnFilter': 'Data',
                        'autoWidth': true,
                        'destroy': true,
                        'lengthMenu': [
                          5,
                          10,
                          20,
                          30,
                          40,
                          50,
                          100
                        ],
                        'rowId': 'Id',
                        'pagingType': 'full_numbers',
                        'pageLength': 5,
                        'orderMulti': true,
                        'select': true,
                        'responsive': true,
                        'columnDefs': [
                          {
                            'targets': 0,
                            'orderable': false
                          }
                        ],
                        'dom': 'Bfr<"table-scrollable"t>ip',
                        'columnConfigs': [
                          {
                            'title': '',
                            'data': 'Id',
                            'renderName': {
                              'type': 'checkAll'
                            },
                            'className': 'text-center'
                          },
                          {
                            'title': '共享范围',
                            'data': 'ShareScope',
                            'renderName': {
                              'type': 'notNull',
                              'data': {}
                            }
                          },
                          {
                            'title': '程序集名称',
                            'data': 'AssemblyName',
                            'renderName': {
                              'type': 'notNull',
                              'data': {}
                            }
                          },
                          {
                            'title': '编译状态',
                            'data': 'BuildState',
                            'renderName': {
                              'type': 'notNull',
                              'data': {}
                            }
                          },
                          {
                            'title': '编译方式',
                            'data': 'BuildMode',
                            'renderName': {
                              'type': 'notNull',
                              'data': {}
                            }
                          },
                          {
                            'title': '错误消息',
                            'data': 'ErrorMessage',
                            'renderName': {
                              'type': 'notNull',
                              'data': {}
                            }
                          },
                          {
                            'title': '编译消息',
                            'data': 'BuildMessage',
                            'renderName': {
                              'type': 'notNull'
                            }
                          },
                          {
                            'title': '上下文名称',
                            'data': 'ContextName',
                            'renderName': {
                              'type': 'notNull'
                            }
                          },
                          {
                            'title': '提供者',
                            'data': 'ProviderName',
                            'renderName': {
                              'type': 'notNull'
                            }
                          },
                          {
                            'title': '默认命名空间',
                            'data': 'DefaultNamespace',
                            'renderName': {
                              'type': 'notNull'
                            }
                          },
                          {
                            'title': '客户编号',
                            'data': 'PlatCustomerId'
                          },
                          {
                            'title': '创建时间',
                            'data': 'CreateTime',
                            'renderName': {
                              'type': 'notNull',
                              'data': {}
                            }
                          }
                        ]
                      }
                    }
                  ],
                  'localCreate': false,
                  'readOnly': false,
                  'enabled': true
                }
              ],
              'entityClass': '公用资源',
              'localCreate': false,
              'readOnly': false,
              'columnConfigsClass': '公用资源',
              'enabled': true
            },
            {
              'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
              'nodeText': '客户 — 项目',
              'img': 'fa fa-list green',
              'nodeTypes': [
                {
                  'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                  'entityClass': 'PlatformCustomer',
                  'img': 'fa fa-list green',
                  'textKey': 'Name',
                  'idKey': 'Id',
                  'parameters': [
                    '_includeRoot=True'
                  ],
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': 'PlatformCustomer',
                  'enabled': true
                }
              ],
              'entityClass': '客户 — 项目',
              'localCreate': false,
              'readOnly': false,
              'columnConfigsClass': '客户 — 项目',
              'enabled': true
            }
          ],
          'childConfigList': [
            {
              'classType': 'SFDW_Classes.TTreeNodeChildrenConfig',
              'img': 'fa fa-list green',
              'nodeTypes': [
                {
                  'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'filters': [
                    {
                      'classType': 'SFDW_Classes.TEntityLink',
                      'masterClass': 'PlatformCustomer',
                      'slaveClass': 'AppProject',
                      'propLinks': [
                        {
                          'classType': 'SFDW_Classes.TPropertyLink',
                          'masterProp': 'Id',
                          'slaveProp': 'PlatCustomerId'
                        }
                      ]
                    }
                  ],
                  'entityClass': 'AppProject',
                  'parameters': [
                    '_customers=~ParentId~'
                  ],
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': 'AppProject',
                  'enabled': true,
                  'textKey': 'Name',
                  'idKey': 'Id'
                },
                {
                  'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'nodeText': '（企业公共资源）',
                  'nodeTypes': [
                    {
                      'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
                      'img': 'fa fa-list green',
                      'nodeText': '（数据分类）',
                      'nodeTypes': [
                        {
                          'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                          'img': 'fa fa-list green',
                          'filters': [
                            {
                              'classType': 'SFDW_Classes.TEntityLink',
                              'masterClass': 'PlatformCustomer',
                              'slaveClass': 'DataCategory',
                              'propLinks': [
                                {
                                  'classType': 'SFDW_Classes.TPropertyLink',
                                  'masterProp': 'Id',
                                  'slaveProp': 'PlatCustomerId'
                                }
                              ]
                            }
                          ],
                          'entityClass': 'DataCategory',
                          'localCreate': false,
                          'readOnly': false,
                          'columnConfigsClass': 'DataCategory',
                          'enabled': true,
                          'textKey': 'Name',
                          'idKey': 'Id'
                        }
                      ],
                      'entityClass': '（数据分类）',
                      'localCreate': false,
                      'readOnly': false,
                      'columnConfigsClass': '（数据分类）',
                      'enabled': true
                    },
                    {
                      'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
                      'img': 'fa fa-list green',
                      'nodeText': '组织机构',
                      'entityClass': '组织机构',
                      'localCreate': false,
                      'readOnly': false,
                      'columnConfigsClass': '组织机构',
                      'enabled': true,
                      'Tag': 101001
                    }
                  ],
                  'entityClass': '（企业公共资源）',
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': '（企业公共资源）',
                  'enabled': true
                }
              ],
              'entityClass': 'PlatformCustomer',
              'localCreate': false,
              'readOnly': false,
              'columnConfigsClass': 'PlatformCustomer',
              'enabled': true
            },
            {
              'classType': 'SFDW_Classes.TTreeNodeChildrenConfig',
              'img': 'fa fa-list green',
              'nodeTypes': [
                {
                  'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'nodeText': '(资源模块)',
                  'nodeTypes': [
                    {
                      'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                      'img': 'fa fa-list green',
                      'filters': [
                        {
                          'classType': 'SFDW_Classes.TEntityLink',
                          'masterClass': 'AppProject',
                          'slaveClass': 'DynamicResModule',
                          'propLinks': [
                            {
                              'classType': 'SFDW_Classes.TPropertyLink',
                              'masterProp': 'PlatCustomerId',
                              'slaveProp': 'PlatCustomerId'
                            }
                          ]
                        }
                      ],
                      'entityClass': 'DynamicResModule',
                      'Parameters': [
                        'OwnerId=~ParentId~'
                      ],
                      'localCreate': false,
                      'readOnly': false,
                      'columnConfigsClass': 'DynamicResModule',
                      'enabled': true,
                      'textKey': 'AssemblyName',
                      'idKey': 'DrmId'
                    }
                  ],
                  'entityClass': '(资源模块)',
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': '(资源模块)',
                  'enabled': true
                },
                {
                  'classType': 'SFDW_Classes.TStaticTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'nodeText': '(数据分类)',
                  'nodeTypes': [
                    {
                      'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                      'img': 'fa fa-list green',
                      'filters': [
                        {
                          'classType': 'SFDW_Classes.TEntityLink',
                          'masterClass': 'AppProject',
                          'slaveClass': 'DataCategory',
                          'propLinks': [
                            {
                              'classType': 'SFDW_Classes.TPropertyLink',
                              'masterProp': 'PlatCustomerId',
                              'slaveProp': 'PlatCustomerId'
                            },
                            {
                              'classType': 'SFDW_Classes.TPropertyLink',
                              'masterProp': 'ProjId',
                              'slaveProp': 'ParentId'
                            }
                          ]
                        }
                      ],
                      'entityClass': 'DataCategory',
                      'localCreate': false,
                      'readOnly': false,
                      'columnConfigsClass': 'DataCategory',
                      'enabled': true,
                      'textKey': 'Name',
                      'idKey': 'Id'
                    }
                  ],
                  'entityClass': '(数据分类)',
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': '(数据分类)',
                  'enabled': true
                }
              ],
              'entityClass': 'AppProject',
              'localCreate': false,
              'readOnly': false,
              'columnConfigsClass': 'AppProject',
              'enabled': true,
              'textKey': 'Name',
              'idKey': 'Id'
            },
            {
              'classType': 'SFDW_Classes.TTreeNodeChildrenConfig',
              'img': 'fa fa-list green',
              'nodeTypes': [
                {
                  'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'filters': [
                    {
                      'classType': 'SFDW_Classes.TEntityLink',
                      'masterClass': 'DataCategory',
                      'slaveClass': 'DataCategory',
                      'propLinks': [
                        {
                          'classType': 'SFDW_Classes.TPropertyLink',
                          'masterProp': 'Id',
                          'slaveProp': 'ParentId'
                        },
                        {
                          'classType': 'SFDW_Classes.TPropertyLink',
                          'masterProp': 'PlatCustomerId',
                          'slaveProp': 'PlatCustomerId'
                        }
                      ]
                    }
                  ],
                  'entityClass': 'DataCategory',
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': 'DataCategory',
                  'enabled': true,
                  'textKey': 'Name',
                  'idKey': 'Id'
                },
                {
                  'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'filters': [
                    {
                      'classType': 'SFDW_Classes.TEntityLink',
                      'masterClass': 'DataCategory',
                      'slaveClass': 'EntityDefine',
                      'propLinks': [
                        {
                          'classType': 'SFDW_Classes.TPropertyLink',
                          'masterProp': 'OwnerId',
                          'slaveProp': 'OwnerId'
                        },
                        {
                          'classType': 'SFDW_Classes.TPropertyLink',
                          'masterProp': 'PlatCustomerId',
                          'slaveProp': 'PlatCustomerId'
                        }
                      ]
                    }
                  ],
                  'entityClass': 'EntityDefine',
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': 'EntityDefine',
                  'enabled': true,
                  'textKey': 'Name',
                  'idKey': 'Id'
                }
              ],
              'entityClass': 'DataCategory',
              'localCreate': false,
              'readOnly': false,
              'columnConfigsClass': 'DataCategory',
              'enabled': true,
              'textKey': 'Name',
              'idKey': 'Id'
            },
            {
              'classType': 'SFDW_Classes.TTreeNodeChildrenConfig',
              'img': 'fa fa-list green',
              'entityClass': 'DynamicResModule',
              'localCreate': false,
              'readOnly': false,
              'columnConfigsClass': 'DynamicResModule',
              'enabled': true,
              'textKey': 'Name',
              'idKey': 'Id',
              'nodeTypes': [
                {
                  'classType': 'SFDW_Classes.TDynaTreeNodeConfig',
                  'img': 'fa fa-list green',
                  'filters': [
                    {
                      'classType': 'SFDW_Classes.TEntityLink',
                      'masterClass': 'DynamicResModule',
                      'slaveClass': 'ResourceType',
                      'propLinks': [
                        {
                          'classType': 'SFDW_Classes.TPropertyLink',
                          'masterProp': 'Id',
                          'slaveProp': 'DrmId'
                        }
                      ]
                    }
                  ],
                  'entityClass': 'ResourceType',
                  'parameters': [
                    '_customers=~ParentId~'
                  ],
                  'localCreate': false,
                  'readOnly': false,
                  'columnConfigsClass': 'ResourceType',
                  'enabled': true,
                  'textKey': 'Name',
                  'idKey': 'Id'
                }
              ],
              'pageConfigs': [
                {
                  'title': '标题',
                  'titleColor': 'blue',
                  'icon': '',
                  'isFullScreen': true,
                  'isCollapse': true,
                  'size': {
                    'xs': {
                      'value': '12',
                      'offset': ''
                    },
                    'sm': {
                      'value': '12',
                      'offset': ''
                    },
                    'md': {
                      'value': '12',
                      'offset': ''
                    },
                    'lg': {
                      'value': '12',
                      'offset': ''
                    }
                  },
                  'viewCfg': {
                    'viewId': 'area2_2',
                    'parentViewId': 'areaTree',
                    'component': 'grid_multi_view',
                    'classType': 'GridView',
                    'toolbarsConfig': [
                      {
                        'id': 'new',
                        'text': '新建',
                        'color': 'green-jungle',
                        'img': 'fa fa-plus',
                        'type': 'button',
                        'events': {
                          'eventType': 'form_dialog',
                          'execution': {
                            'api': 'ResourceType',
                            'method': 'get',
                            'keyID': '',
                            'callback': ''
                          }
                        },
                        'formConfig': [
                          {
                            'type': 'input',
                            'inputType': 'text',
                            'name': 'Name',
                            'label': '资源名称：',
                            'helpText': '资源编译后自动生成',
                            'inputClass': 'input-inline input-medium',
                            'placeholder': '例如：Company.cn.app',
                            'helpClass': 'help-inline',
                            'validations': [
                              {
                                'validator': 'required',
                                'errorMessage': ''
                              },
                              {
                                'validator': 'minLength',
                                'length': 6,
                                'errorMessage': ''
                              }
                            ]
                          },
                          {
                            'type': 'input',
                            'inputType': 'text',
                            'name': 'OwnerNameSpace',
                            'label': '命名空间：',
                            'icon': 'fa fa-book',
                            'iconPstn': 'left',
                            'inputClass': 'input-group',
                            'validations': [
                              {
                                'validator': 'required',
                                'errorMessage': ''
                              },
                              {
                                'validator': 'minLength',
                                'length': 6,
                                'errorMessage': ''
                              }
                            ]
                          },
                          {
                            'type': 'input',
                            'inputType': 'text',
                            'name': 'OwnerAssembly',
                            'label': '程序集：',
                            'inputClass': 'input-medium input-group',
                            'icon': 'fa fa-bookmark-o',
                            'iconPstn': 'right',
                            'helpClass': 'help-inline',
                            'validations': [
                              {
                                'validator': 'required',
                                'errorMessage': ''
                              },
                              {
                                'validator': 'minLength',
                                'length': 6,
                                'errorMessage': ''
                              }
                            ]
                          },
                          {
                            'type': 'select',
                            'placeholder': '--请选择--',
                            'options': [
                              {
                                'text': '编译成功',
                                'value': '编译成功'
                              },
                              {
                                'text': '正在定义',
                                'value': '正在定义'
                              }
                            ],
                            'name': 'BuildState',
                            'label': '编译状态：',
                            'value': '',
                            'inputClass': 'input-medium'
                          },
                          {
                            'type': 'select',
                            'placeholder': '--请选择--',
                            'options': [
                              {
                                'text': '手动',
                                'value': '手动'
                              },
                              {
                                'text': '自动',
                                'value': '自动'
                              }
                            ],
                            'name': 'BuildMode',
                            'label': '编译方式：',
                            'value': '',
                            'inputClass': 'input-medium'
                          },
                          {
                            'type': 'radio',
                            'options': [
                              {
                                'checked': '',
                                'disabled': false,
                                'value': '1',
                                'label': '独立'
                              },
                              {
                                'checked': '',
                                'disabled': false,
                                'value': '2',
                                'label': '共享'
                              },
                              {
                                'checked': '',
                                'disabled': false,
                                'value': '3',
                                'label': '指定区域'
                              }
                            ],
                            'name': 'ShareScope',
                            'label': '使用范围：',
                            'inputClass': 'mt-radio-list'
                          },
                          {
                            'type': 'textarea',
                            'name': 'Note',
                            'label': '备注：'
                          },
                          {
                            'type': 'button',
                            'name': 'submit'
                          }
                        ]
                      },
                      {
                        'id': 'del',
                        'text': '删除',
                        'color': 'red',
                        'img': 'fa fa-remove',
                        'type': 'button',
                        'events': {
                          'title': '确认提示',
                          'text': '确定要删除选中的记录吗?',
                          'eventType': 'confirm_dialog',
                          'execution': {
                            'api': 'ResourceType',
                            'method': 'delete',
                            'keyId': 'RtId'
                          }
                        }
                      },
                      {
                        'id': 'sub',
                        'text': '提交',
                        'color': 'green',
                        'img': 'fa fa-save',
                        'type': 'button',
                        'events': {
                          'title': '确认提示',
                          'text': '是否提交当前数据?',
                          'eventType': 'confirm_dialog',
                          'execution': {
                            'api': 'ResourceType',
                            'method': 'proc'
                          }
                        }
                      },
                      {
                        'id': 'modify',
                        'text': '修改',
                        'color': 'yellow',
                        'img': 'fa fa-edit',
                        'type': 'button',
                        'events': {
                          'eventType': 'form_dialog',
                          'execution': {
                            'api': 'ResourceType',
                            'method': 'put',
                            'keyID': 'RtId',
                            'callback': ''
                          }
                        },
                        'formConfig': [
                          {
                            'type': 'input',
                            'inputType': 'text',
                            'name': 'Name',
                            'label': '资源名称：',
                            'helpText': '资源编译后自动生成',
                            'inputClass': 'input-inline input-medium',
                            'placeholder': '例如：Company.cn.app',
                            'helpClass': 'help-inline',
                            'validations': [
                              {
                                'validator': 'required',
                                'errorMessage': ''
                              },
                              {
                                'validator': 'minLength',
                                'length': 6,
                                'errorMessage': ''
                              }
                            ]
                          },
                          {
                            'type': 'input',
                            'inputType': 'text',
                            'name': 'OwnerNameSpace',
                            'label': '命名空间：',
                            'icon': 'fa fa-book',
                            'iconPstn': 'left',
                            'inputClass': 'input-group',
                            'validations': [
                              {
                                'validator': 'required',
                                'errorMessage': ''
                              },
                              {
                                'validator': 'minLength',
                                'length': 6,
                                'errorMessage': ''
                              }
                            ]
                          },
                          {
                            'type': 'input',
                            'inputType': 'text',
                            'name': 'OwnerAssembly',
                            'label': '程序集：',
                            'inputClass': 'input-medium input-group',
                            'icon': 'fa fa-bookmark-o',
                            'iconPstn': 'right',
                            'helpClass': 'help-inline',
                            'validations': [
                              {
                                'validator': 'required',
                                'errorMessage': ''
                              },
                              {
                                'validator': 'minLength',
                                'length': 6,
                                'errorMessage': ''
                              }
                            ]
                          },
                          {
                            'type': 'select',
                            'placeholder': '--请选择--',
                            'options': [
                              {
                                'text': '编译成功',
                                'value': '编译成功'
                              },
                              {
                                'text': '正在定义',
                                'value': '正在定义'
                              }
                            ],
                            'name': 'BuildState',
                            'label': '编译状态：',
                            'value': '',
                            'inputClass': 'input-medium'
                          },
                          {
                            'type': 'select',
                            'placeholder': '--请选择--',
                            'options': [
                              {
                                'text': '手动',
                                'value': '手动'
                              },
                              {
                                'text': '自动',
                                'value': '自动'
                              }
                            ],
                            'name': 'BuildMode',
                            'label': '编译方式：',
                            'value': '',
                            'inputClass': 'input-medium'
                          },
                          {
                            'type': 'radio',
                            'options': [
                              {
                                'checked': '',
                                'disabled': false,
                                'value': '1',
                                'label': '独立'
                              },
                              {
                                'checked': '',
                                'disabled': false,
                                'value': '2',
                                'label': '共享'
                              },
                              {
                                'checked': '',
                                'disabled': false,
                                'value': '3',
                                'label': '指定区域'
                              }
                            ],
                            'name': 'ShareScope',
                            'label': '使用范围：',
                            'inputClass': 'mt-radio-list'
                          },
                          {
                            'type': 'textarea',
                            'name': 'Note',
                            'label': '备注：'
                          },
                          {
                            'type': 'button',
                            'name': 'submit'
                          }
                        ]
                      }
                    ],
                    'ordering': true,
                    'paging': true,
                    'processing': false,
                    'searching': true,
                    'deferRender': true,
                    'columnConfigClass': 'ResourceType',
                    'columnFilter': 'Data',
                    'autoWidth': false,
                    'destroy': true,
                    'lengthMenu': [
                      5,
                      10,
                      20,
                      30,
                      40,
                      50,
                      100
                    ],
                    'rowId': 'RtId',
                    'pagingType': 'numbers',
                    'pageLength': 5,
                    'orderMulti': true,
                    'select': true,
                    'responsive': true,
                    'columnDefs': [
                      {
                        'targets': 0,
                        'orderable': false
                      }
                    ],
                    'dom': 'Bfr<"table-scrollable"t>ip',
                    'columnConfigs': [
                      {
                        'title': '',
                        'data': 'Id',
                        'renderName': {
                          'type': 'checkAll'
                        },
                        'className': 'text-center'
                      },
                      {
                        'title': '资源名称',
                        'data': 'Name',
                        'renderName': {
                          'type': 'notNull',
                          'data': {}
                        }
                      },
                      {
                        'title': '命名空间',
                        'data': 'OwnerNameSpace',
                        'renderName': {
                          'type': 'notNull',
                          'data': {}
                        }
                      },
                      {
                        'title': '程序集',
                        'data': 'OwnerAssembly',
                        'renderName': {
                          'type': 'notNull',
                          'data': {}
                        }
                      },
                      {
                        'title': '共享范围',
                        'data': 'ShareScope'
                      },
                      {
                        'title': '错误消息',
                        'data': 'BuildMode',
                        'renderName': {
                          'type': 'notNull',
                          'data': {}
                        }
                      },
                      {
                        'title': ' 编译状态',
                        'data': 'BuildState',
                        'renderName': {
                          'type': 'notNull'
                        }
                      },
                      {
                        'title': '表类型',
                        'data': 'TableType',
                        'renderName': {
                          'type': 'notNull'
                        }
                      },
                      {
                        'title': '备注',
                        'data': 'Note',
                        'renderName': {
                          'type': 'notNull'
                        }
                      },
                      {
                        'title': '客户编号',
                        'data': 'PlatCustomerId',
                        'renderName': {
                          'type': 'notNull'
                        }
                      },
                      {
                        'title': 'DrmId',
                        'data': 'DrmId'
                      }
                    ],
                    'filterConfig': [
                      {
                        'classType': 'SFDW_Classes.TEntityLink',
                        'masterClass': 'DynamicResModule',
                        'slaveClass': 'ResourceType',
                        'propLinks': [
                          {
                            'classType': 'SFDW_Classes.TPropertyLink',
                            'masterProp': 'PlatCustomerId',
                            'slaveProp': 'PlatCustomerId'
                          },
                          {
                            'classType': 'SFDW_Classes.TPropertyLink',
                            'masterProp': 'Id',
                            'slaveProp': 'DrmId'
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      {
        'title': '用户列表',
        'titleColor': 'font-green',
        'titleIcon': 'fa fa-cogs',
        'isFullScreen': true,
        'isCollapse': true,
        'blockType': 'portlet',
        'size': {
          'xs': {
            'value': '12',
            'offset': ''
          },
          'sm': {
            'value': '12',
            'offset': ''
          },
          'md': {
            'value': '9',
            'offset': ''
          },
          'lg': {
            'value': '9',
            'offset': ''
          }
        },
        'viewCfg': {
          'viewId': 'area4',
          'parentViewId': 'areaTree',
          'component': 'grid_multi_view',
          'classType': 'GridView',
          'toolbarsConfig': [
            {
              'id': 'new',
              'text': '新建',
              'color': 'green-jungle',
              'img': 'fa fa-plus',
              'type': 'button',
              'events': {
                'eventType': 'form_dialog',
                'execution': {
                  'api': 'ResourceType',
                  'method': 'get',
                  'keyID': '',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'Name',
                  'label': '资源名称：',
                  'helpText': '资源编译后自动生成',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '例如：Company.cn.app',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'OwnerNameSpace',
                  'label': '命名空间：',
                  'icon': 'fa fa-book',
                  'iconPstn': 'left',
                  'inputClass': 'input-group',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'OwnerAssembly',
                  'label': '程序集：',
                  'inputClass': 'input-medium input-group',
                  'icon': 'fa fa-bookmark-o',
                  'iconPstn': 'right',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'select',
                  'placeholder': '--请选择--',
                  'options': [
                    {
                      'text': '编译成功',
                      'value': '编译成功'
                    },
                    {
                      'text': '正在定义',
                      'value': '正在定义'
                    }
                  ],
                  'name': 'BuildState',
                  'label': '编译状态：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'select',
                  'placeholder': '--请选择--',
                  'options': [
                    {
                      'text': '手动',
                      'value': '手动'
                    },
                    {
                      'text': '自动',
                      'value': '自动'
                    }
                  ],
                  'name': 'BuildMode',
                  'label': '编译方式：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '1',
                      'label': '独立'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '2',
                      'label': '共享'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '3',
                      'label': '指定区域'
                    }
                  ],
                  'name': 'ShareScope',
                  'label': '使用范围：',
                  'inputClass': 'mt-radio-list'
                },
                {
                  'type': 'textarea',
                  'name': 'Note',
                  'label': '备注：'
                },
                {
                  'type': 'button',
                  'name': 'submit'
                }
              ]
            },
            {
              'id': 'del',
              'text': '删除',
              'color': 'red',
              'img': 'fa fa-remove',
              'type': 'button',
              'events': {
                'title': '确认提示',
                'text': '确定要删除选中的记录吗?',
                'eventType': 'confirm_dialog',
                'execution': {
                  'api': 'ResourceType',
                  'method': 'delete',
                  'keyId': 'RtId'
                }
              }
            },
            {
              'id': 'sub',
              'text': '提交',
              'color': 'green',
              'img': 'fa fa-save',
              'type': 'button',
              'events': {
                'title': '确认提示',
                'text': '是否提交当前数据?',
                'eventType': 'confirm_dialog',
                'execution': {
                  'api': 'ResourceType',
                  'method': 'proc'
                }
              }
            },
            {
              'id': 'modify',
              'text': '修改',
              'color': 'yellow',
              'img': 'fa fa-edit',
              'type': 'button',
              'events': {
                'eventType': 'form_dialog',
                'execution': {
                  'api': 'ResourceType',
                  'method': 'put',
                  'keyID': 'RtId',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'Name',
                  'label': '资源名称：',
                  'helpText': '资源编译后自动生成',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '例如：Company.cn.app',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'OwnerNameSpace',
                  'label': '命名空间：',
                  'icon': 'fa fa-book',
                  'iconPstn': 'left',
                  'inputClass': 'input-group',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'OwnerAssembly',
                  'label': '程序集：',
                  'inputClass': 'input-medium input-group',
                  'icon': 'fa fa-bookmark-o',
                  'iconPstn': 'right',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'select',
                  'placeholder': '--请选择--',
                  'options': [
                    {
                      'text': '编译成功',
                      'value': '编译成功'
                    },
                    {
                      'text': '正在定义',
                      'value': '正在定义'
                    }
                  ],
                  'name': 'BuildState',
                  'label': '编译状态：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'select',
                  'placeholder': '--请选择--',
                  'options': [
                    {
                      'text': '手动',
                      'value': '手动'
                    },
                    {
                      'text': '自动',
                      'value': '自动'
                    }
                  ],
                  'name': 'BuildMode',
                  'label': '编译方式：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '1',
                      'label': '独立'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '2',
                      'label': '共享'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '3',
                      'label': '指定区域'
                    }
                  ],
                  'name': 'ShareScope',
                  'label': '使用范围：',
                  'inputClass': 'mt-radio-list'
                },
                {
                  'type': 'textarea',
                  'name': 'Note',
                  'label': '备注：'
                },
                {
                  'type': 'button',
                  'name': 'submit'
                }
              ]
            }
          ],
          'ordering': true,
          'paging': true,
          'processing': false,
          'searching': true,
          'deferRender': true,
          'columnConfigClass': 'ResourceType',
          'columnFilter': 'Data',
          'autoWidth': false,
          'destroy': true,
          'lengthMenu': [
            5,
            10,
            20,
            30,
            40,
            50,
            100
          ],
          'rowId': 'RtId',
          'pagingType': 'numbers',
          'pageLength': 5,
          'orderMulti': true,
          'select': true,
          'responsive': true,
          'columnDefs': [
            {
              'targets': 0,
              'orderable': false
            }
          ],
          'dom': 'Bfr<"table-scrollable"t>ip',
          'columnConfigs': [
            {
              'title': '',
              'data': 'Id',
              'renderName': {
                'type': 'checkAll'
              },
              'className': 'text-center'
            },
            {
              'title': '资源名称',
              'data': 'Name'
            },
            {
              'title': '命名空间',
              'data': 'OwnerNameSpace',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '程序集',
              'data': 'OwnerAssembly'
            },
            {
              'title': '共享范围',
              'data': 'ShareScope'
            },
            {
              'title': '错误消息',
              'data': 'BuildMode',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': ' 编译状态',
              'data': 'BuildState',
              'renderName': {
                'type': 'notNull'
              }
            },
            {
              'title': '表类型',
              'data': 'TableType',
              'renderName': {
                'type': 'notNull'
              }
            },
            {
              'title': '备注',
              'data': 'Note',
              'renderName': {
                'type': 'notNull'
              }
            },
            {
              'title': '客户编号',
              'data': 'PlatCustomerId',
              'renderName': {
                'type': 'notNull'
              }
            },
            {
              'title': '是否启用',
              'data': 'enabled'
            },
            {
              'title': '创建事件',
              'data': 'CreateTime'
            },
            {
              'title': 'DrmId',
              'data': 'DrmId'
            }
          ]
        }
      }
    ]],
    'HJProj.SinoForce.HJComm.BaseModule.JcUnit': [[{
      'title': '计量单位',
      'titleColor': 'font-green',
      'titleIcon': 'fa fa-cogs',
      'isFullScreen': true,
      'isCollapse': true,
      'blockType': 'portlet',
      'size': {
        'xs': {
          'value': '12',
          'offset': ''
        },
        'sm': {
          'value': '12',
          'offset': ''
        },
        'md': {
          'value': '12',
          'offset': ''
        },
        'lg': {
          'value': '12',
          'offset': ''
        }
      },
      'viewCfg': {
        'viewId': 'area1',
        'component': 'grid_view',
        'classType': 'GridView',
        'toolbarsConfig': [
          {
            'id': 'new',
            'text': '新建',
            'color': 'btn btn-success',
            'img': 'fa fa-plus',
            'type': 'button',
            'events': {
              'title': '新建计量单位',
              'eventType': 'form_dialog',
              'execution': {
                'api': 'SinoForce.HJComm.JcUnit',
                'method': 'post',
                'keyID': '',
                'callback': ''
              }
            },
            'formConfig': [
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'UnitCode',
                'label': '计量单位编码：',
                'helpText': '建议编码采用大写字母',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'UnitName',
                'label': '计量单位名称：',
                'helpText': '名称应能表述单位的具体含义',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'UnitShortName',
                'label': '计量单位简称：',
                'helpText': '简称应简明扼要',
                'inputClass': 'input-inline input-medium',
                'placeholder': '例如：米、台',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '启用',
                    'value': '启用'
                  },
                  {
                    'text': '未启用',
                    'value': '未启用'
                  }
                ],
                'name': 'UsedStatus',
                'label': '启用状态：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'button',
                'name': 'submit',
                'disabled': false
              }
            ]
          },
          {
            'id': 'del',
            'text': '删除',
            'color': 'btn btn-success',
            'img': 'fa fa-remove',
            'type': 'button',
            'events': {
              'title': '确认提示',
              'text': '确定要删除选中的计量单位吗?',
              'eventType': 'confirm_dialog',
              'execution': {
                'api': 'SinoForce.HJComm.JcUnit',
                'method': 'delete',
                'keyId': 'Id'
              }
            }
          },
          {
            'id': 'modify',
            'text': '编辑',
            'color': 'btn btn-success',
            'img': 'fa fa-edit',
            'type': 'button',
            'events': {
              'eventType': 'form_dialog',
              'title': '编辑计量单位',
              'execution': {
                'api': 'SinoForce.HJComm.JcUnit',
                'method': 'put',
                'keyID': 'Id',
                'callback': ''
              }
            },
            'formConfig': [
              {
                'type': 'input',
                'inputType': 'hidden',
                'name': 'Id',
                'label': '',
                'helpText': '',
                'inputClass': '',
                'placeholder': '',
                'helpClass': ''
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'UnitCode',
                'label': '计量单位编码：',
                'helpText': '建议编码采用大写字母',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'UnitName',
                'label': '计量单位名称：',
                'helpText': '名称应能表述单位的具体含义',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'UnitShortName',
                'label': '计量单位简称：',
                'helpText': '简称应简明扼要',
                'inputClass': 'input-inline input-medium',
                'placeholder': '例如：米、台',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '启用',
                    'value': '启用'
                  },
                  {
                    'text': '未启用',
                    'value': '未启用'
                  }
                ],
                'name': 'UsedStatus',
                'label': '启用状态：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'button',
                'name': 'submit',
                'disabled': false
              }
            ]
          }
        ],
        'ordering': true,
        'paging': true,
        'processing': false,
        'searching': true,
        'deferRender': true,
        'columnConfigClass': 'SinoForce.HJComm.JcUnit',
        'columnFilter': 'Data',
        'autoWidth': true,
        'destroy': true,
        'lengthMenu': [
          5,
          10,
          20,
          30,
          40,
          50,
          100
        ],
        'rowId': 'Id',
        'pagingType': 'full_numbers',
        'pageLength': 5,
        'orderMulti': true,
        'select': true,
        'responsive': true,
        'columnDefs': [
          {
            'targets': 0,
            'orderable': false
          }
        ],
        'dom': 'Bfr<"table-scrollable"t>ip',
        'columnConfigs': [
          {
            'title': '',
            'data': 'Id',
            'renderName': {
              'type': 'checkAll'
            },
            'className': 'text-center'
          },
          {
            'title': '计量单位编码',
            'data': 'UnitCode',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '计量单位名称',
            'data': 'UnitName',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '计量单位简称',
            'data': 'UnitShortName',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '启用状态',
            'data': 'UsedStatus',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          }
        ]
      }
    }]],
    problemType: [[{
      'title': '问题类型',
      'titleColor': 'font-green',
      'titleIcon': 'fa fa-cogs',
      'isFullScreen': true,
      'isCollapse': true,
      'blockType': 'portlet',
      'size': {
        'xs': {
          'value': '12',
          'offset': ''
        },
        'sm': {
          'value': '12',
          'offset': ''
        },
        'md': {
          'value': '12',
          'offset': ''
        },
        'lg': {
          'value': '12',
          'offset': ''
        }
      },
      'viewCfg': {
        'viewId': 'areaPT',
        'component': 'grid_view',
        'classType': 'GridView',
        'toolbarsConfig': [
          {
            'id': 'new',
            'text': '新建',
            'color': 'btn btn-success',
            'img': 'fa fa-plus',
            'type': 'button',
            'events': {
              'title': '新建问题类型',
              'eventType': 'form_dialog',
              'execution': {
                'api': 'SinoForce.HJComm.JcProblemType',
                'method': 'post',
                'keyID': '',
                'callback': ''
              }
            },
            'formConfig': [
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ProblemTypeCode',
                'label': '问题类型编码：',
                'helpText': '建议编码采用大写字母',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ProblemTypeName',
                'label': '问题类型名称：',
                'helpText': '',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '启用',
                    'value': '启用'
                  },
                  {
                    'text': '未启用',
                    'value': '未启用'
                  }
                ],
                'name': 'UsedStatus',
                'label': '启用状态：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'button',
                'name': 'submit',
                'disabled': false
              }
            ]
          },
          {
            'id': 'del',
            'text': '删除',
            'color': 'btn btn-success',
            'img': 'fa fa-remove',
            'type': 'button',
            'events': {
              'title': '确认提示',
              'text': '确定要删除选中的计量单位吗?',
              'eventType': 'confirm_dialog',
              'execution': {
                'api': 'SinoForce.HJComm.JcProblemType',
                'method': 'delete',
                'keyId': 'Id'
              }
            }
          },
          {
            'id': 'modify',
            'text': '编辑',
            'color': 'btn btn-success',
            'img': 'fa fa-edit',
            'type': 'button',
            'events': {
              'eventType': 'form_dialog',
              'title': '编辑问题类型',
              'execution': {
                'api': 'SinoForce.HJComm.JcProblemType',
                'method': 'put',
                'keyID': 'Id',
                'callback': ''
              }
            },
            'formConfig': [
              {
                'type': 'input',
                'inputType': 'hidden',
                'name': 'Id',
                'label': '',
                'helpText': '',
                'inputClass': '',
                'placeholder': '',
                'helpClass': ''
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ProblemTypeCode',
                'label': '问题类型编码：',
                'helpText': '建议编码采用大写字母',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'input',
                'inputType': 'text',
                'name': 'ProblemTypeName',
                'label': '问题类型名称：',
                'helpText': '',
                'inputClass': 'input-inline input-medium',
                'placeholder': '',
                'helpClass': 'help-inline',
                'validations': [
                  {
                    'validator': 'required',
                    'errorMessage': ''
                  }
                ]
              },
              {
                'type': 'select',
                'placeholder': '--请选择--',
                'options': [
                  {
                    'text': '启用',
                    'value': '启用'
                  },
                  {
                    'text': '未启用',
                    'value': '未启用'
                  }
                ],
                'name': 'UsedStatus',
                'label': '启用状态：',
                'value': '',
                'inputClass': 'input-medium'
              },
              {
                'type': 'button',
                'name': 'submit',
                'disabled': false
              }
            ]
          }
        ],
        'ordering': true,
        'paging': true,
        'processing': false,
        'searching': true,
        'deferRender': true,
        'columnConfigClass': 'SinoForce.HJComm.JcProblemType',
        'columnFilter': 'Data',
        'autoWidth': true,
        'destroy': true,
        'lengthMenu': [
          5,
          10,
          20,
          30,
          40,
          50,
          100
        ],
        'rowId': 'Id',
        'pagingType': 'full_numbers',
        'pageLength': 5,
        'orderMulti': true,
        'select': true,
        'responsive': true,
        'columnDefs': [
          {
            'targets': 0,
            'orderable': false
          }
        ],
        'dom': 'Bfr<"table-scrollable"t>ip',
        'columnConfigs': [
          {
            'title': '',
            'data': 'Id',
            'renderName': {
              'type': 'checkAll'
            },
            'className': 'text-center'
          },
          {
            'title': '问题类型编码',
            'data': 'ProblemTypeCode',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '问题类型名称',
            'data': 'ProblemTypeName',
            'renderName': {
              'type': 'notNull',
              'data': {}
            }
          },
          {
            'title': '启用状态',
            'data': 'UsedStatus',
            'renderName': {
              'type': 'cellStyle',
              'data': [
                {'value': '未启用', 'icon': 'fa fa-cog', 'className': 'label alert-success', 'valueas': '禁用'},
                {'value': '已启用', 'icon': 'fa fa-cogs', 'className': 'label alert-warning', 'valueas': '启用'}
              ]
            }
          }
        ]
      }
    }]],
    dataDictionary: [[
      {
        'title': '数据字典类型',
        'titleColor': 'font-green',
        'titleIcon': 'fa fa-cogs',
        'isFullScreen': true,
        'isCollapse': true,
        'blockType': 'portlet',
        'size': {
          'xs': {
            'value': '12',
            'offset': ''
          },
          'sm': {
            'value': '12',
            'offset': ''
          },
          'md': {
            'value': '12',
            'offset': ''
          },
          'lg': {
            'value': '12',
            'offset': ''
          }
        },
        'viewCfg': {
          'viewId': 'areaSJZDLX',
          'component': 'grid_view',
          'classType': 'GridView',
          'toolbarsConfig': [
            {
              'id': 'new',
              'text': '新建',
              'color': 'btn btn-success',
              'img': 'fa fa-plus',
              'type': 'button',
              'events': {
                'title': '新建数据字典类型',
                'eventType': 'form_dialog',
                'execution': {
                  'api': 'SinoForce.HJComm.JcDictionaryType',
                  'method': 'post',
                  'keyID': '',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryTypeCode',
                  'label': '类型编码：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryTypeName',
                  'label': '类型名称：',
                  'icon': 'fa fa-book',
                  'iconPstn': 'left',
                  'inputClass': 'input-group input-medium',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': 'checked',
                      'disabled': false,
                      'value': '1',
                      'label': '启用'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '2',
                      'label': '禁用'
                    }
                  ],
                  'name': 'UsedStatus',
                  'label': '启用状态：',
                  'inputClass': 'mt-radio-inline'
                },
                {
                  'type': 'button',
                  'name': 'submit',
                  'disabled': false
                }
              ]
            },
            {
              'id': 'del',
              'text': '删除',
              'color': 'btn btn-success',
              'img': 'fa fa-remove',
              'type': 'button',
              'events': {
                'title': '确认提示',
                'text': '确定要删除选中的记录吗?',
                'eventType': 'confirm_dialog',
                'execution': {
                  'api': 'SinoForce.HJComm.JcDictionaryType',
                  'method': 'delete',
                  'keyId': 'Id'
                }
              }
            },
            {
              'id': 'sub',
              'text': '提交',
              'color': 'btn btn-success',
              'img': 'fa fa-save',
              'type': 'button',
              'events': {
                'title': '确认提示',
                'text': '是否提交当前数据?',
                'eventType': 'confirm_dialog',
                'execution': {
                  'api': 'SinoForce.HJComm.JcDictionaryType',
                  'method': 'proc'
                }
              }
            },
            {
              'id': 'modify',
              'text': '修改',
              'color': 'btn btn-success',
              'img': 'fa fa-edit',
              'type': 'button',
              'events': {
                'eventType': 'form_dialog',
                'title': '修改程序集信息',
                'execution': {
                  'api': 'SinoForce.HJComm.JcDictionaryType',
                  'method': 'put',
                  'keyID': 'Id',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'hidden',
                  'name': 'Id',
                  'label': '类型ID：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryTypeCode',
                  'label': '类型编码：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryTypeName',
                  'label': '类型名称：',
                  'icon': 'fa fa-book',
                  'iconPstn': 'left',
                  'inputClass': 'input-group input-medium',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': 'checked',
                      'disabled': false,
                      'value': '1',
                      'label': '启用'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '2',
                      'label': '禁用'
                    }
                  ],
                  'name': 'UsedStatus',
                  'label': '启用状态：',
                  'inputClass': 'mt-radio-inline'
                },
                {
                  'type': 'button',
                  'name': 'submit',
                  'disabled': false
                }
              ]
            }
          ],
          'ordering': true,
          'paging': true,
          'processing': false,
          'searching': true,
          'deferRender': true,
          'columnConfigClass': 'SinoForce.HJComm.JcDictionaryType',
          'columnFilter': 'Data',
          'autoWidth': true,
          'destroy': true,
          'lengthMenu': [
            5,
            10,
            20,
            30,
            40,
            50,
            100
          ],
          'rowId': 'Id',
          'pagingType': 'full_numbers',
          'pageLength': 5,
          'orderMulti': true,
          'select': true,
          'responsive': true,
          'columnDefs': [
            {
              'orderable': false,
              'targets': [0]
            }
          ],
          'order': [
            [1, 'asc']
          ],
          'dom': 'Bfr<"table-scrollable"t>ip',
          'columnConfigs': [
            {
              'title': `<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                          <input type="checkbox" class="group-checkable" data-set=".checkboxes" />
                          <span></span>
                      </label>`,
              'data': 'Id',
              'renderName': {
                'type': 'checkAll'
              },
              'className': 'text-center',
              'width': '50'
            },
            {
              'title': '问题类型编码',
              'data': 'DictionaryTypeCode',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '问题类型名称',
              'data': 'DictionaryTypeName',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '启用状态',
              'data': 'UsedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '未启用', 'className': 'label label-warning', 'valueas': '禁用'},
                  {'value': '已启用', 'className': 'label label-info', 'valueas': '启用'}
                ]
              },
              'width': '50',
              'className': 'text-center'
            }
          ]
        }
      },
      {
        'title': '数据字典值',
        'titleColor': 'font-green',
        'titleIcon': 'fa fa-cogs',
        'isFullScreen': true,
        'isCollapse': true,
        'blockType': 'portlet',
        'size': {
          'xs': {
            'value': '12',
            'offset': ''
          },
          'sm': {
            'value': '12',
            'offset': ''
          },
          'md': {
            'value': '12',
            'offset': ''
          },
          'lg': {
            'value': '12',
            'offset': ''
          }
        },
        'viewCfg': {
          'viewId': 'areaSUZDZ',
          'parentViewId': 'areaSJZDLX',
          'component': 'grid_view',
          'classType': 'GridView',
          'toolbarsConfig': [
            {
              'id': 'new',
              'text': '新建',
              'color': 'green-jungle',
              'img': 'fa fa-plus',
              'type': 'button',
              'events': {
                'title': '新建数据字典值',
                'eventType': 'form_dialog',
                'execution': {
                  'api': 'SinoForce.HJComm.JcDictionaryValue',
                  'method': 'post',
                  'keyID': '',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryValueCode',
                  'label': '数据字典值编码：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'select2',
                  'placeholder': '--请选择--',
                  'ajax': {
                    'url': 'JcDictionaryType?_select=DictionaryTypeName as text,Id as value'
                  },
                  'name': 'DictionaryTypeId',
                  'label': '数据字典类型：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryValueName',
                  'label': '数据字典值名称：',
                  'icon': 'fa fa-book',
                  'iconPstn': 'left',
                  'inputClass': 'input-group input-medium',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': 'checked',
                      'disabled': false,
                      'value': '1',
                      'label': '启用'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '0',
                      'label': '禁用'
                    }
                  ],
                  'name': 'UsedStatus',
                  'label': '启用状态：',
                  'inputClass': 'mt-radio-inline'
                },
                {
                  'type': 'button',
                  'name': 'submit'
                }
              ]
            },
            {
              'id': 'del',
              'text': '删除',
              'color': 'red',
              'img': 'fa fa-remove',
              'type': 'button',
              'events': {
                'title': '确认提示',
                'text': '确定要删除选中的记录吗?',
                'eventType': 'confirm_dialog',
                'execution': {
                  'api': 'SinoForce.HJComm.JcDictionaryValue',
                  'method': 'delete',
                  'keyId': 'Id'
                }
              }
            },
            {
              'id': 'modify',
              'text': '编辑',
              'color': 'yellow',
              'img': 'fa fa-edit',
              'type': 'button',
              'events': {
                'title': '编辑数据字典值',
                'eventType': 'form_dialog',
                'execution': {
                  'api': 'SinoForce.HJComm.JcDictionaryValue',
                  'method': 'put',
                  'keyID': 'Id',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'hidden',
                  'name': 'Id',
                  'label': '',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryValueCode',
                  'label': '数据字典值编码：',
                  'helpText': '',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DictionaryValueName',
                  'label': '数据字典值名称：',
                  'icon': 'fa fa-book',
                  'iconPstn': 'left',
                  'inputClass': 'input-group',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'minLength',
                      'length': 6,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': 'checked',
                      'disabled': false,
                      'value': '1',
                      'label': '启用'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': '2',
                      'label': '禁用'
                    }
                  ],
                  'name': 'UsedStatus',
                  'label': '启用状态：',
                  'inputClass': 'mt-radio-inline'
                },
                {
                  'type': 'select2',
                  'placeholder': '--请选择--',
                  'ajax': {
                    'url': 'JcDictionaryType?_select=DictionaryTypeName as text,Id as value'
                  },
                  'name': 'DictionaryTypeId',
                  'label': '数据字典类型：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'button',
                  'name': 'submit',
                  'disabled': false
                }
              ]
            }
          ],
          'searchForm': [
            {
              'type': 'input',
              'inputType': 'text',
              'name': 'DictionaryValueCode',
              'label': '数据字典值编码：',
              'helpText': '',
              'inputClass': 'input-inline input-medium',
              'placeholder': '',
              'helpClass': 'help-inline',
              'layout': 'col-md-6 col-lg-4 col-sm-12 col-sx-6'
            },
            {
              'type': 'select2',
              'placeholder': '--请选择--',
              'ajax': {
                'url': 'JcDictionaryType?_select=DictionaryTypeName as text,Id as value'
              },
              'name': 'DictionaryTypeId',
              'label': '数据字典类型：',
              'value': '',
              'inputClass': 'input-medium',
              'layout': 'col-md-6 col-lg-4 col-sm-12 col-sx-6',
            },
            {
              'type': 'input',
              'inputType': 'text',
              'name': 'DictionaryValueName',
              'label': '数据字典值名称：',
              'icon': 'fa fa-book',
              'iconPstn': 'left',
              'inputClass': 'input-group input-medium',
              'layout': 'col-md-6 col-lg-4 col-sm-12 col-sx-6',
            },
            {
              'type': 'radio',
              'options': [
                {
                  'checked': 'checked',
                  'disabled': false,
                  'value': '1',
                  'label': '启用'
                },
                {
                  'checked': '',
                  'disabled': false,
                  'value': '0',
                  'label': '禁用'
                }
              ],
              'name': 'UsedStatus',
              'label': '启用状态：',
              'inputClass': 'mt-radio-inline',
              'layout': 'col-md-6 col-lg-4 col-sm-12 col-sx-6',
            },
            {
              'type': 'searchbutton',
              'name': 'submit',
              'layout': 'col-md-12 col-lg-12 col-sm-12 col-sx-12',
            }
          ],
          'detailView': [
            [
              {
                'title': '数据字典值',
                'titleColor': 'font-green',
                'titleIcon': 'fa fa-cogs',
                'isFullScreen': true,
                'isCollapse': true,
                'blockType': 'portlet',
                'size': {
                  'xs': {
                    'value': '12',
                    'offset': ''
                  },
                  'sm': {
                    'value': '12',
                    'offset': ''
                  },
                  'md': {
                    'value': '12',
                    'offset': ''
                  },
                  'lg': {
                    'value': '12',
                    'offset': ''
                  }
                },
                'viewCfg': {
                  'viewId': 'areaSUZDZ',
                  'parentViewId': 'areaSJZDLX',
                  'component': 'detail_view',
                  'classType': 'DetailView',
                  'detailViewCfg': {
                    'title': '数据字典值明细',
                    'fields': [
                      [
                        {
                          'name': 'Id',
                          'label': '字典值编号',
                          'icon': '',
                          'size': {
                            'md': {
                              'value': '6',
                              'offset': ''
                            }
                          },
                          'className': ''
                        },
                        {
                          'name': 'DictionaryValueCode',
                          'label': '字典值编码',
                          'icon': '',
                          'size': {
                            'md': {
                              'value': '6',
                              'offset': ''
                            }
                          },
                          'className': ''
                        }
                      ],
                      [
                        {
                          'name': 'DictionaryValueName',
                          'label': '字典值名称',
                          'icon': '',
                          'size': {
                            'md': {
                              'value': '6',
                              'offset': ''
                            }
                          },
                          'className': ''
                        },
                        {
                          'name': 'CreateTime',
                          'label': '创建时间',
                          'icon': '',
                          'size': {
                            'md': {
                              'value': '6',
                              'offset': ''
                            }
                          },
                          'className': ''
                        }
                      ],
                      [
                        {
                          'name': 'UsedState',
                          'label': '启用状态',
                          'icon': '',
                          'size': {
                            'md': {
                              'value': '6',
                              'offset': ''
                            }
                          },
                          'className': ''
                        },
                        {
                          'name': 'CreateUserName',
                          'label': '创建人',
                          'icon': '',
                          'size': {
                            'md': {
                              'value': '6',
                              'offset': ''
                            }
                          },
                          'className': ''
                        }
                      ]
                    ],
                  },
                  'detailConfigClass': 'SinoForce.HJComm.JcDictionaryValue',
                }
              },
              {
                'title': '用户列表',
                'titleColor': 'font-green',
                'titleIcon': 'fa fa-cogs',
                'isFullScreen': true,
                'isCollapse': true,
                'blockType': 'portlet',
                'size': {
                  'xs': {
                    'value': '12',
                    'offset': ''
                  },
                  'sm': {
                    'value': '12',
                    'offset': ''
                  },
                  'md': {
                    'value': '12',
                    'offset': ''
                  },
                  'lg': {
                    'value': '12',
                    'offset': ''
                  }
                },
                'viewCfg': {
                  'viewId': 'userList',
                  'component': 'grid_view',
                  'classType': 'GridView',
                  'toolbarsConfig': [
                    {
                      'id': 'new',
                      'text': '新增',
                      'color': 'btn btn-success',
                      'img': 'fa fa-plus',
                      'type': 'button',
                      'events': {
                        'title': '新增用户',
                        'eventType': 'form_dialog',
                        'execution': {
                          'api': 'SinoForce.Data.AppUser',
                          'method': 'post',
                          'keyID': '',
                          'callback': ''
                        }
                      },
                      'formConfig': [
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'Name',
                          'label': '登录名：',
                          'helpText': '',
                          'inputClass': 'input-group input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'icon': 'fa fa-user',
                          'iconPstn': 'right',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            },
                            {
                              'validator': 'minLength',
                              'length': 2,
                              'errorMessage': ''
                            }
                          ]
                        },
                        /*{
                         'type': 'input',
                         'inputType': 'text',
                         'name': 'Password',
                         'label': '密码：',
                         'helpText': '',
                         'inputClass': 'input-group input-medium',
                         'placeholder': '',
                         'helpClass': 'help-inline',
                         'icon': 'fa fa-key',
                         'iconPstn': 'right',
                         'validations': [
                         {
                         'validator': 'required',
                         'errorMessage': ''
                         },
                         {
                         'validator': 'minLength',
                         'length': 6,
                         'errorMessage': ''
                         }
                         ]
                         },*/
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'MobileNumber',
                          'label': ' 联系方式：',
                          'helpText': '',
                          'inputClass': 'input-group input-medium',
                          'placeholder': '',
                          'icon': 'fa fa-phone',
                          'iconPstn': 'left',
                          'helpClass': 'help-inline',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'RealName',
                          'label': ' 真实姓名：',
                          'helpText': '',
                          'inputClass': 'input-inline input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'NickName',
                          'label': ' 昵称：',
                          'helpText': '',
                          'inputClass': 'input-inline input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        {
                          'type': 'radio',
                          'options': [
                            {
                              'checked': 'checked',
                              'disabled': false,
                              'value': '男',
                              'label': '男'
                            },
                            {
                              'checked': '',
                              'disabled': false,
                              'value': '女',
                              'label': '女'
                            }
                          ],
                          'name': 'Gender',
                          'label': '性别：',
                          'inputClass': 'mt-checkbox-inline'
                        },
                        {
                          'type': 'datepicker',
                          'inputType': 'text',
                          'name': 'Birthday',
                          'label': ' 出生日期：',
                          'helpText': '',
                          'inputClass': 'input-group input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'icon': 'fa fa-calender',
                          'iconPstn': 'right',
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'MailAddress',
                          'label': ' 邮箱地址：',
                          'helpText': '',
                          'inputClass': 'input-group',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'icon': 'fa fa-envelope',
                          'iconPstn': 'left',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            },
                            {
                              'validator': 'email',
                              'errorMessage': '邮箱格式从不正确'
                            }
                          ]
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'IdCardNumber',
                          'label': ' 身份证号：',
                          'helpText': '',
                          'inputClass': 'input-group',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'icon': 'fa fa-credit-card',
                          'iconPstn': 'left',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        {
                          'type': 'textarea',
                          'name': 'remark',
                          'label': '备注：'
                        },
                        {
                          'type': 'button',
                          'name': 'submit',
                          'disabled': false
                        }
                      ]
                    },
                    {
                      'id': 'modify',
                      'text': '编辑',
                      'color': 'btn btn-success',
                      'img': 'fa fa-edit',
                      'type': 'button',
                      'events': {
                        'eventType': 'form_dialog',
                        'title': '修改程序集信息',
                        'execution': {
                          'api': 'SinoForce.Data.AppUser',
                          'method': 'put',
                          'keyID': 'Id',
                          'callback': ''
                        }
                      },
                      'formConfig': [
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'Id',
                          'label': 'ID：',
                          'helpText': '',
                          'inputClass': 'input-inline input-medium',
                          'readonly': true
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'Name',
                          'label': '登录名：',
                          'helpText': '',
                          'inputClass': 'input-group input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'icon': 'fa fa-user',
                          'iconPstn': 'right',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        /*{
                         'type': 'input',
                         'inputType': 'text',
                         'name': 'Password',
                         'label': '密码：',
                         'helpText': '',
                         'inputClass': 'input-group input-medium',
                         'placeholder': '',
                         'helpClass': 'help-inline',
                         'icon': 'fa fa-key',
                         'iconPstn': 'right',
                         'validations': [
                         {
                         'validator': 'required',
                         'errorMessage': ''
                         }
                         ]
                         },*/
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'MobileNumber',
                          'label': ' 联系方式：',
                          'helpText': '',
                          'inputClass': 'input-group input-medium',
                          'placeholder': '',
                          'icon': 'fa fa-phone',
                          'iconPstn': 'left',
                          'helpClass': 'help-inline',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'RealName',
                          'label': ' 真实姓名：',
                          'helpText': '',
                          'inputClass': 'input-inline input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'NickName',
                          'label': ' 昵称：',
                          'helpText': '',
                          'inputClass': 'input-inline input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline'
                        },
                        {
                          'type': 'radio',
                          'options': [
                            {
                              'checked': 'checked',
                              'disabled': false,
                              'value': '男',
                              'label': '男'
                            },
                            {
                              'checked': '',
                              'disabled': false,
                              'value': '女',
                              'label': '女'
                            }
                          ],
                          'name': 'Gender',
                          'label': '性别：',
                          'inputClass': 'mt-checkbox-inline'
                        },
                        {
                          'type': 'datepicker',
                          'inputType': 'text',
                          'name': 'Birthday',
                          'label': ' 出生日期：',
                          'helpText': '',
                          'inputClass': 'input-inline input-medium',
                          'placeholder': '',
                          'helpClass': 'help-inline'
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'MailAddress',
                          'label': ' 邮箱地址：',
                          'helpText': '',
                          'inputClass': 'input-group',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'icon': 'fa fa-envelope',
                          'iconPstn': 'left',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            },
                            {
                              'validator': 'email',
                              'errorMessage': '邮箱格式从不正确'
                            }
                          ]
                        },
                        {
                          'type': 'input',
                          'inputType': 'text',
                          'name': 'IdCardNumber',
                          'label': ' 身份证号：',
                          'helpText': '',
                          'inputClass': 'input-group',
                          'placeholder': '',
                          'helpClass': 'help-inline',
                          'icon': 'fa fa-credit-card',
                          'iconPstn': 'left',
                          'validations': [
                            {
                              'validator': 'required',
                              'errorMessage': ''
                            }
                          ]
                        },
                        {
                          'type': 'textarea',
                          'name': 'remark',
                          'label': '备注：'
                        },
                        {
                          'type': 'button',
                          'name': 'submit',
                          'disabled': false
                        }
                      ]
                    },
                    {
                      'id': 'del',
                      'text': '批量删除',
                      'color': 'btn btn-warning',
                      'img': 'fa fa-remove',
                      'type': 'button',
                      'events': {
                        'title': '确认提示',
                        'text': '确定要删除选中的记录吗?',
                        'eventType': 'confirm_dialog',
                        'execution': {
                          'api': 'SinoForce.Data.AppUser',
                          'method': 'delete',
                          'keyId': 'Id'
                        }
                      }
                    }
                  ],
                  'ordering': true,
                  'paging': true,
                  'processing': false,
                  'searching': true,
                  'deferRender': true,
                  'columnConfigClass': 'AppUser',
                  'columnFilter': 'Data',
                  'autoWidth': true,
                  'destroy': true,
                  'lengthMenu': [
                    5,
                    10,
                    20,
                    30,
                    40,
                    50,
                    100
                  ],
                  'rowId': 'Id',
                  'pagingType': 'full_numbers',
                  'pageLength': 20,
                  'orderMulti': true,
                  'select': true,
                  'responsive': true,
                  'columnDefs': [
                    {
                      'orderable': false,
                      'targets': [0]
                    }
                  ],
                  'order': [
                    [1, 'asc']
                  ],
                  'dom': 'Bfr<"table-scrollable"t>ip',
                  'columnConfigs': [
                    {
                      'title': `<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
            <input type="checkbox" class="group-checkable" data-set=".checkboxes" />
            <span></span>
            </label>`,
                      'data': 'Id',
                      'renderName': {
                        'type': 'checkAll'
                      },
                      'className': 'text-center'
                    },
                    {
                      'title': '用户名',
                      'data': 'Name',
                      'renderName': {
                        'type': 'notNull',
                        'data': {}
                      }
                    },
                    {
                      'title': '用户名称',
                      'data': 'RealName',
                      'renderName': {
                        'type': 'notNull',
                        'data': {}
                      }
                    },
                    {
                      'title': '编码',
                      'data': 'Code',
                      'renderName': {
                        'type': 'notNull',
                        'data': {}
                      }
                    },
                    {
                      'title': '用户昵称',
                      'data': 'NickName',
                      'renderName': {
                        'type': 'notNull',
                        'data': {}
                      }
                    },
                    {
                      'title': '手机',
                      'data': 'MobileNumber',
                      'renderName': {
                        'type': 'notNull',
                        'data': {}
                      }
                    },
                    {
                      'title': '出生日期',
                      'data': 'Birthday',
                      'renderName': {
                        'type': 'date',
                        'data': [
                          {'className': 'font-green'},
                        ]
                      }
                    },
                    {
                      'title': '账户状态',
                      'data': 'Status',
                      'renderName': {
                        'type': 'notNull'
                      }
                    },
                    {
                      'title': '用户角色',
                      'data': 'LoginLimitKind',
                      'renderName': {
                        'type': 'notNull'
                      }
                    },
                    {
                      'title': '',
                      'data': 'Id',
                      'renderName': {
                        'type': 'handleButtons',
                        'data': [
                          {
                            'text': '明细',
                            'img': 'fa fa-search',
                            'color': 'green-turquoise',
                            'type': 'commonButton',
                            'events': {
                              'execution': {
                                'api': 'SinoForce.Data.AppUser',
                                'method': 'delete',
                                'keyId': 'Id'
                              }
                            }
                          },
                          {
                            'text': '删除',
                            'img': 'fa fa-trash',
                            'color': 'btn-outline red-pink',
                            'type': 'confirmButton',
                            'events': {
                              'title': '确认提示',
                              'text': '确定要删除当前记录?',
                              'eventType': 'confirm_dialog',
                              'execution': {
                                'api': 'SinoForce.Data.AppUser',
                                'method': 'delete',
                                'keyId': 'Id'
                              }
                            }
                          }
                        ]
                      },
                      'className': 'text-center',
                      'width': '220'
                    },
                  ]
                }
              }
            ]
          ],
          'ordering': true,
          'paging': true,
          'processing': false,
          'searching': true,
          'deferRender': true,
          'columnConfigClass': 'SinoForce.HJComm.JcDictionaryValue',
          'columnFilter': 'Data',
          'autoWidth': false,
          'destroy': true,
          'lengthMenu': [5, 10, 20, 30, 40, 50, 100],
          'rowId': 'Id',
          'pagingType': 'numbers',
          'pageLength': 5,
          'orderMulti': true,
          'select': true,
          'responsive': true,
          'columnDefs': [
            {
              'orderable': false,
              'targets': [0]
            }
          ],
          'order': [
            [1, 'asc']
          ],
          'dom': 'Bfr<"table-scrollable"t>ip',
          'columnConfigs': [
            {
              'title': `<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                          <input type="checkbox" class="group-checkable" data-set=".checkboxes" />
                          <span></span>
                      </label>`,
              'data': 'Id',
              'renderName': {
                'type': 'checkAll'
              },
              'width': '50',
              'className': 'text-center'
            },
            {
              'title': '数据字典值编码',
              'data': 'DictionaryValueCode',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '数据字典值名称',
              'data': 'DictionaryValueName',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '启用状态',
              'data': 'UsedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '未启用', 'className': 'label label-danger', 'valueas': '禁用'},
                  {'value': '已启用', 'className': 'label label-success', 'valueas': '启用'}
                ]
              },
              'width': '50',
              'className': 'text-center'
            },
            {
              'title': '',
              'data': 'Id',
              'renderName': {
                'type': 'handleButtons',
                'data': [
                  {
                    'text': '明细',
                    'img': 'fa fa-search',
                    'color': 'green-turquoise',
                    'type': 'commonButton',
                    'events': {
                      'execution': {
                        'api': 'SinoForce.HJComm.JcDictionaryValue',
                        'method': 'get',
                        'keyId': 'Id'
                      }
                    }
                  },
                  {
                    'text': '删除',
                    'img': 'fa fa-trash',
                    'color': 'btn-outline red-pink',
                    'type': 'confirmButton',
                    'events': {
                      'title': '确认提示',
                      'text': '确定要删除当前记录?',
                      'eventType': 'confirm_dialog',
                      'execution': {
                        'api': 'SinoForce.HJComm.JcDictionaryValue',
                        'method': 'delete',
                        'keyId': 'Id'
                      }
                    }
                  }
                ]
              },
              'className': 'text-center',
              'width': '220'
            },
          ],
          'filterConfig': [
            {
              'classType': 'SFDW_Classes.TEntityLink',
              'masterClass': 'SinoForce.HJComm.JcDictionaryType',
              'slaveClass': 'SinoForce.HJComm.JcDictionaryValue',
              'propLinks': [
                {
                  'classType': 'SFDW_Classes.TPropertyLink',
                  'masterProp': 'Id',
                  'slaveProp': 'DictionaryTypeId'
                }
              ]
            }
          ]
        }
      }
    ]],
    workOrder: [
      [
        {
          'title': '派工单',
          'titleColor': 'font-green',
          'titleIcon': 'fa fa-cogs',
          'isFullScreen': true,
          'isCollapse': true,
          'blockType': 'portlet',
          'size': {
            'xs': {
              'value': '12',
              'offset': ''
            },
            'sm': {
              'value': '12',
              'offset': ''
            },
            'md': {
              'value': '12',
              'offset': ''
            },
            'lg': {
              'value': '12',
              'offset': ''
            }
          },
          'viewCfg': {
            'viewId': 'areapgd',
            'component': 'grid_view',
            'classType': 'GridView',
            'toolbarsConfig': [
              {
                'id': 'new',
                'text': '发布',
                'color': 'btn btn-success',
                'img': 'fa fa-plus',
                'type': 'button',
                'events': {
                  'title': '发布派工单',
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'post',
                    'keyID': '',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '程序集名称：',
                    'helpText': '动态读取程序集名称',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select2',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as value'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'asyndropdown',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as id'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-medium',
                    'multiple': ''
                  },
                  {
                    'type': 'asyndropdown',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as id'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-large',
                    'multiple': 'multiple'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ContextName',
                    'label': '上下文名称：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ProviderName',
                    'label': '提供者：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'DefaultNamespace',
                    'label': '命名空间：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': '默认为程序编译后提供的命名空间',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'EntitiesName',
                    'label': '实体名称：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': ''
                  },
                  {
                    'type': 'checkbox',
                    'options': [
                      {
                        'checked': 'checked',
                        'disabled': false,
                        'value': '1',
                        'label': '启用'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '禁用'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-checkbox-inline'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Remark',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit',
                    'disabled': false
                  }
                ]
              },
              {
                'id': 'startWork',
                'text': '开始作业',
                'color': 'btn btn-success',
                'img': 'fa fa-remove',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '确定要删除选中的记录吗?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'delete',
                    'keyId': 'Id'
                  }
                }
              },
              {
                'id': 'finishCheck',
                'text': '完工报检',
                'color': 'btn btn-success',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'finishCerten',
                'text': '完工确认',
                'color': 'btn btn-success',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'searchWork',
                'text': '查询',
                'color': 'btn btn-success',
                'img': 'fa fa-edit',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'title': '修改程序集信息',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'put',
                    'keyID': 'Id',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Id',
                    'label': 'ID：',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'AssemblyName',
                    'label': '程序集名称：',
                    'helpText': '动态读取程序集名称',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ContextName',
                    'label': '上下文名称：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ProviderName',
                    'label': '提供者：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'DefaultNamespace',
                    'label': '命名空间：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': '默认为程序编译后提供的命名空间',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'EntitiesName',
                    'label': '实体名称：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': ''
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': 'checked',
                        'disabled': false,
                        'value': 'true',
                        'label': '启用'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': 'false',
                        'label': '禁用'
                      }
                    ],
                    'name': 'shareScope',
                    'label': '启用状态：',
                    'inputClass': 'mt-checkbox-inline'
                  },
                  {
                    'type': 'textarea',
                    'name': 'remark',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit',
                    'disabled': false
                  }
                ]
              }
            ],
            'ordering': true,
            'paging': true,
            'processing': false,
            'searching': true,
            'deferRender': true,
            'columnConfigClass': 'SinoForce.HJComm.ZyWorkOrder',
            'columnFilter': 'Data',
            'autoWidth': true,
            'destroy': true,
            'lengthMenu': [
              5,
              10,
              20,
              30,
              40,
              50,
              100
            ],
            'rowId': 'Id',
            'pagingType': 'full_numbers',
            'pageLength': 5,
            'orderMulti': true,
            'select': true,
            'responsive': true,
            'columnDefs': [
              {
                'targets': 0,
                'orderable': false
              }
            ],
            'dom': 'Bfr<"table-scrollable"t>ip',
            'columnConfigs': [
              {
                'title': '',
                'data': 'Id',
                'renderName': {
                  'type': 'checkAll'
                },
                'className': 'text-center'
              },
              {
                'title': '产品名称',
                'data': 'ProductName',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '产品编号',
                'data': 'ProductSerialNumber',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '派工单编号',
                'data': 'WorkOrderSerialNumber',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '工序名称',
                'data': 'ProcessName',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任车间',
                'data': 'WorkShopId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '计划开始日期',
                'data': 'PlanBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'},
                  ]
                }
              },
              {
                'title': '计划结束日期',
                'data': 'PlanEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-red'},
                  ]
                }
              },
              {
                'title': '计划工期（天）',
                'data': 'PlanPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-info'}
                  ]
                }
              },
              {
                'title': '实际开始日期',
                'data': 'ActualBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-blue'},
                  ]
                }
              },
              {
                'title': '实际结束日期',
                'data': 'ActualEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-orange'},
                  ]
                }
              },
              {
                'title': '实际工期',
                'data': 'ActualPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-info'}
                  ]
                }
              },
              {
                'title': '发布状态',
                'data': 'PublishedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '已发布', 'className': 'label label-default', 'valueas': '已发布'},
                    {'value': '未发布', 'className': 'label label-success', 'valueas': '未发布'}
                  ]
                }
              },
              {
                'title': '执行状态',
                'data': 'OperateStatus',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任检验员',
                'data': 'CheckerId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '检查结果',
                'data': 'CheckResult',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '合格', 'className': 'label label-info', 'valueas': '合格'},
                    {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                  ]
                }
              },
              {
                'title': '通过状态',
                'data': 'PassedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                    {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                  ]
                }
              }
            ]
          }
        },
        {
          'title': '派工单明细',
          'titleColor': 'font-green',
          'titleIcon': 'fa fa-cogs',
          'isFullScreen': true,
          'isCollapse': true,
          'blockType': 'portlet',
          'size': {
            'xs': {
              'value': '12',
              'offset': ''
            },
            'sm': {
              'value': '12',
              'offset': ''
            },
            'md': {
              'value': '12',
              'offset': ''
            },
            'lg': {
              'value': '12',
              'offset': ''
            }
          },
          'viewCfg': {
            'viewId': 'areapgdmx1',
            'parentViewId': 'areapgd',
            'component': 'grid_view',
            'classType': 'GridView',
            'toolbarsConfig': [
              {
                'id': 'new',
                'text': '新增',
                'color': 'green-jungle',
                'img': 'fa fa-plus',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'get',
                    'keyID': '',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '资源名称：',
                    'helpText': '资源编译后自动生成',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerNameSpace',
                    'label': '命名空间：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerAssembly',
                    'label': '程序集：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '1',
                        'label': '独立'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '共享'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '3',
                        'label': '指定区域'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-radio-list'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Note',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit'
                  }
                ]
              },
              {
                'id': 'modify',
                'text': '修改',
                'color': 'yellow',
                'img': 'fa fa-edit',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'put',
                    'keyID': 'RtId',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '资源名称：',
                    'helpText': '资源编译后自动生成',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerNameSpace',
                    'label': '命名空间：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerAssembly',
                    'label': '程序集：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '1',
                        'label': '独立'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '共享'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '3',
                        'label': '指定区域'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-radio-list'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Note',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit'
                  }
                ]
              },
              {
                'id': 'del',
                'text': '删除',
                'color': 'red',
                'img': 'fa fa-remove',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '确定要删除选中的记录吗?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'delete',
                    'keyId': 'RtId'
                  }
                }
              },
              {
                'id': 'sub',
                'text': '开始作业',
                'color': 'green',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'proc'
                  }
                }
              }
            ],
            'ordering': true,
            'paging': true,
            'processing': false,
            'searching': true,
            'deferRender': true,
            'columnConfigClass': 'SinoForce.HJComm.VZyWorkOrderDetail',
            'columnFilter': 'Data',
            'autoWidth': false,
            'destroy': true,
            'lengthMenu': [
              5,
              10,
              20,
              30,
              40,
              50,
              100
            ],
            'rowId': 'RtId',
            'pagingType': 'numbers',
            'pageLength': 5,
            'orderMulti': true,
            'select': true,
            'responsive': true,
            'columnDefs': [
              {
                'targets': 0,
                'orderable': false
              }
            ],
            'dom': 'Bfr<"table-scrollable"t>ip',
            'columnConfigs': [
              {
                'title': '',
                'data': 'Id',
                'renderName': {
                  'type': 'checkAll'
                },
                'className': 'text-center'
              },
              {
                'title': '任务内容',
                'data': 'TaskContent',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任车间',
                'data': 'WorkshopId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任班组',
                'data': 'WorkteamId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '班组长',
                'data': 'TeamLeaderId'
              },
              {
                'title': '带班长',
                'data': 'AgentTeamLeaderId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': ' 计划开始日期',
                'data': 'PlanBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'}
                  ]
                }
              },
              {
                'title': '计划结束日期',
                'data': 'PlanEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'}
                  ]
                }
              },
              {
                'title': '计划工期（天）',
                'data': 'PlanPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-info'}
                  ]
                },
              },
              {
                'title': '实际开始日期',
                'data': 'ActualBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'}
                  ]
                }
              },
              {
                'title': '实际结束日期',
                'data': 'ActualEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-red'}
                  ]
                }
              },
              {
                'title': '实际工期（天）',
                'data': 'ActualPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-success'}
                  ]
                },
                'className': 'text-center'
              },
              {
                'title': '执行状态',
                'data': 'FinishedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '已完成', 'className': 'label label-success'},
                    {'value': '未开始', 'className': 'label label-default'},
                    {'value': '执行中', 'className': 'label label-warning'}
                  ]
                }
              }
            ],
            'filterConfig': [
              {
                'classType': 'SFDW_Classes.TEntityLink',
                'masterClass': 'SinoForce.HJComm.ZyWorkOrder',
                'slaveClass': 'SinoForce.HJComm.VZyWorkOrderDetail',
                'propLinks': [
                  {
                    'classType': 'SFDW_Classes.TPropertyLink',
                    'masterProp': 'Id',
                    'slaveProp': 'WorkOrderId'
                  }
                ]
              }
            ]
          }
        }
      ],
    ],
    manufactureProcess: [[
      {
        'title': '产品进度看板',
        'titleColor': 'font-green',
        'titleIcon': 'fa fa-cogs',
        'isFullScreen': true,
        'isCollapse': true,
        'blockType': 'portlet',
        'size': {
          'xs': {
            'value': '12',
            'offset': ''
          },
          'sm': {
            'value': '12',
            'offset': ''
          },
          'md': {
            'value': '12',
            'offset': ''
          },
          'lg': {
            'value': '12',
            'offset': ''
          }
        },
        'viewCfg': {
          'viewId': 'areapgdcp',
          'component': 'grid_view',
          'classType': 'GridView',
          'toolbarsConfig': [
            {
              'id': 'searchWork',
              'text': '查询',
              'color': 'btn btn-success btn-outerline',
              'img': 'fa fa-edit',
              'type': 'button',
              'events': {
                'eventType': 'form_dialog',
                'title': '修改程序集信息',
                'execution': {
                  'api': 'DynamicResModule',
                  'method': 'put',
                  'keyID': 'Id',
                  'callback': ''
                }
              },
              'formConfig': [
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'Id',
                  'label': 'ID：',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '例如：Company.cn.app',
                  'helpClass': 'help-inline'
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'AssemblyName',
                  'label': '程序集名称：',
                  'helpText': '动态读取程序集名称',
                  'inputClass': 'input-inline input-medium',
                  'placeholder': '例如：Company.cn.app',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'ContextName',
                  'label': '上下文名称：',
                  'icon': 'fa fa-book',
                  'iconPstn': 'left',
                  'inputClass': 'input-group',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'ProviderName',
                  'label': '提供者：',
                  'inputClass': 'input-medium input-group',
                  'icon': 'fa fa-bookmark-o',
                  'iconPstn': 'right',
                  'helpClass': 'help-inline',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'maxLength',
                      'length': 20,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'select',
                  'placeholder': '--请选择--',
                  'options': [
                    {
                      'text': '编译成功',
                      'value': '编译成功'
                    },
                    {
                      'text': '正在定义',
                      'value': '正在定义'
                    }
                  ],
                  'name': 'BuildState',
                  'label': '编译状态：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'select',
                  'placeholder': '--请选择--',
                  'options': [
                    {
                      'text': '手动',
                      'value': '手动'
                    },
                    {
                      'text': '自动',
                      'value': '自动'
                    }
                  ],
                  'name': 'BuildMode',
                  'label': '编译方式：',
                  'value': '',
                  'inputClass': 'input-medium'
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'DefaultNamespace',
                  'label': '命名空间：',
                  'inputClass': 'input-group',
                  'icon': 'fa fa-bookmark-o',
                  'iconPstn': 'left',
                  'helpClass': 'help-inline',
                  'helpText': '默认为程序编译后提供的命名空间',
                  'validations': [
                    {
                      'validator': 'required',
                      'errorMessage': ''
                    },
                    {
                      'validator': 'maxLength',
                      'length': 20,
                      'errorMessage': ''
                    }
                  ]
                },
                {
                  'type': 'input',
                  'inputType': 'text',
                  'name': 'EntitiesName',
                  'label': '实体名称：',
                  'inputClass': 'input-group',
                  'icon': 'fa fa-bookmark-o',
                  'iconPstn': 'left',
                  'helpClass': 'help-inline',
                  'helpText': ''
                },
                {
                  'type': 'radio',
                  'options': [
                    {
                      'checked': 'checked',
                      'disabled': false,
                      'value': 'true',
                      'label': '启用'
                    },
                    {
                      'checked': '',
                      'disabled': false,
                      'value': 'false',
                      'label': '禁用'
                    }
                  ],
                  'name': 'shareScope',
                  'label': '启用状态：',
                  'inputClass': 'mt-checkbox-inline'
                },
                {
                  'type': 'textarea',
                  'name': 'remark',
                  'label': '备注：'
                },
                {
                  'type': 'button',
                  'name': 'submit',
                  'disabled': false
                }
              ]
            }
          ],
          'ordering': true,
          'paging': true,
          'processing': false,
          'searching': true,
          'deferRender': true,
          'columnConfigClass': 'SinoForce.HJComm.VJhManufacturePlanBroad',
          'columnFilter': 'Data',
          'autoWidth': true,
          'destroy': true,
          'lengthMenu': [
            5,
            10,
            20,
            30,
            40,
            50,
            100
          ],
          'rowId': 'Id',
          'pagingType': 'full_numbers',
          'pageLength': 5,
          'orderMulti': true,
          'select': true,
          'responsive': true,
          'columnDefs': [
            {
              'targets': 0,
              'orderable': false
            }
          ],
          'dom': 'Bfr<"table-scrollable"t>ip',
          'columnConfigs': [
            {
              'title': '',
              'data': 'Id',
              'renderName': {
                'type': 'checkAll'
              },
              'className': 'text-center'
            },
            {
              'title': '产品名称',
              'data': 'ProductName',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '产品编号',
              'data': 'ProductSerialNumber',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '数量',
              'data': 'WorkOrderSerialNumber',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '计划开始日期',
              'data': 'PlanBeginDate',
              'renderName': {
                'type': 'date',
                'data': [
                  {'className': 'font-green'},
                ]
              }
            },
            {
              'title': '计划结束日期',
              'data': 'PlanEndDate',
              'renderName': {
                'type': 'date',
                'data': [
                  {'className': 'font-red'},
                ]
              }
            },
            {
              'title': '计划工期（天）',
              'data': 'PlanPeriod',
              'renderName': {
                'type': 'number',
                'data': [
                  {'className': 'badge badge-info'}
                ]
              }
            },
            {
              'title': '实际开始日期',
              'data': 'ActualBeginDate',
              'renderName': {
                'type': 'date',
                'data': [
                  {'className': 'font-blue'},
                ]
              }
            },
            {
              'title': '实际结束日期',
              'data': 'ActualEndDate',
              'renderName': {
                'type': 'date',
                'data': [
                  {'className': 'font-orange'},
                ]
              }
            },
            {
              'title': '实际工期',
              'data': 'ActualPeriod',
              'renderName': {
                'type': 'number',
                'data': [
                  {'className': 'badge badge-info'}
                ]
              }
            },
            {
              'title': '生产方式',
              'data': 'PublishedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '已发布', 'className': 'label label-default', 'valueas': '已发布'},
                  {'value': '未发布', 'className': 'label label-success', 'valueas': '未发布'}
                ]
              }
            },
            {
              'title': '生产地点',
              'data': 'OperateStatus',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '发布状态',
              'data': 'CheckerId',
              'renderName': {
                'type': 'notNull',
                'data': {}
              }
            },
            {
              'title': '执行状态',
              'data': 'CheckResult',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '合格', 'className': 'label label-info', 'valueas': '合格'},
                  {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                ]
              }
            },
            {
              'title': '交付状态',
              'data': 'PassedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                  {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                ]
              }
            },
            {
              'title': '开工时间监控',
              'data': 'PassedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                  {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                ]
              }
            },
            {
              'title': '完工时间监控',
              'data': 'PassedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                  {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                ]
              }
            },
            {
              'title': '工期监控',
              'data': 'PassedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                  {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                ]
              }
            }, {
              'title': '完工百分比',
              'data': 'PassedStatus',
              'renderName': {
                'type': 'cellStyle',
                'data': [
                  {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                  {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                ]
              }
            }
          ]
        }
      }
    ]],
    qualityFeedback: [
      [
        {
          'title': '问题反馈',
          'titleColor': 'font-green',
          'titleIcon': 'fa fa-cogs',
          'isFullScreen': true,
          'isCollapse': true,
          'blockType': 'portlet',
          'size': {
            'xs': {
              'value': '12',
              'offset': ''
            },
            'sm': {
              'value': '12',
              'offset': ''
            },
            'md': {
              'value': '12',
              'offset': ''
            },
            'lg': {
              'value': '12',
              'offset': ''
            }
          },
          'viewCfg': {
            'viewId': 'areapgd',
            'component': 'grid_view',
            'classType': 'GridView',
            'toolbarsConfig': [
              {
                'id': 'new',
                'text': '发布',
                'color': 'btn btn-success',
                'img': 'fa fa-plus',
                'type': 'button',
                'events': {
                  'title': '发布派工单',
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'post',
                    'keyID': '',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '程序集名称：',
                    'helpText': '动态读取程序集名称',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select2',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as value'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'asyndropdown',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as id'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-medium',
                    'multiple': ''
                  },
                  {
                    'type': 'asyndropdown',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as id'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-large',
                    'multiple': 'multiple'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ContextName',
                    'label': '上下文名称：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ProviderName',
                    'label': '提供者：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'DefaultNamespace',
                    'label': '命名空间：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': '默认为程序编译后提供的命名空间',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'EntitiesName',
                    'label': '实体名称：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': ''
                  },
                  {
                    'type': 'checkbox',
                    'options': [
                      {
                        'checked': 'checked',
                        'disabled': false,
                        'value': '1',
                        'label': '启用'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '禁用'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-checkbox-inline'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Remark',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit',
                    'disabled': false
                  }
                ]
              },
              {
                'id': 'startWork',
                'text': '开始作业',
                'color': 'btn btn-success',
                'img': 'fa fa-remove',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '确定要删除选中的记录吗?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'delete',
                    'keyId': 'Id'
                  }
                }
              },
              {
                'id': 'finishCheck',
                'text': '完工报检',
                'color': 'btn btn-success',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'finishCerten',
                'text': '完工确认',
                'color': 'btn btn-success',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'searchWork',
                'text': '查询',
                'color': 'btn btn-success',
                'img': 'fa fa-edit',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'title': '修改程序集信息',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'put',
                    'keyID': 'Id',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Id',
                    'label': 'ID：',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'AssemblyName',
                    'label': '程序集名称：',
                    'helpText': '动态读取程序集名称',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ContextName',
                    'label': '上下文名称：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ProviderName',
                    'label': '提供者：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'DefaultNamespace',
                    'label': '命名空间：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': '默认为程序编译后提供的命名空间',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'EntitiesName',
                    'label': '实体名称：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': ''
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': 'checked',
                        'disabled': false,
                        'value': 'true',
                        'label': '启用'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': 'false',
                        'label': '禁用'
                      }
                    ],
                    'name': 'shareScope',
                    'label': '启用状态：',
                    'inputClass': 'mt-checkbox-inline'
                  },
                  {
                    'type': 'textarea',
                    'name': 'remark',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit',
                    'disabled': false
                  }
                ]
              }
            ],
            'ordering': true,
            'paging': true,
            'processing': false,
            'searching': true,
            'deferRender': true,
            'columnConfigClass': 'SinoForce.HJComm.ZyWorkOrder',
            'columnFilter': 'Data',
            'autoWidth': true,
            'destroy': true,
            'lengthMenu': [
              5,
              10,
              20,
              30,
              40,
              50,
              100
            ],
            'rowId': 'Id',
            'pagingType': 'full_numbers',
            'pageLength': 5,
            'orderMulti': true,
            'select': true,
            'responsive': true,
            'columnDefs': [
              {
                'targets': 0,
                'orderable': false
              }
            ],
            'dom': 'Bfr<"table-scrollable"t>ip',
            'columnConfigs': [
              {
                'title': '',
                'data': 'Id',
                'renderName': {
                  'type': 'checkAll'
                },
                'className': 'text-center'
              },
              {
                'title': '产品名称',
                'data': 'ProductName',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '产品编号',
                'data': 'ProductSerialNumber',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '派工单编号',
                'data': 'WorkOrderSerialNumber',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '工序名称',
                'data': 'ProcessName',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任车间',
                'data': 'WorkShopId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '计划开始日期',
                'data': 'PlanBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'},
                  ]
                }
              },
              {
                'title': '计划结束日期',
                'data': 'PlanEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-red'},
                  ]
                }
              },
              {
                'title': '计划工期（天）',
                'data': 'PlanPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-info'}
                  ]
                }
              },
              {
                'title': '实际开始日期',
                'data': 'ActualBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-blue'},
                  ]
                }
              },
              {
                'title': '实际结束日期',
                'data': 'ActualEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-orange'},
                  ]
                }
              },
              {
                'title': '实际工期',
                'data': 'ActualPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-info'}
                  ]
                }
              },
              {
                'title': '发布状态',
                'data': 'PublishedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '已发布', 'className': 'label label-default', 'valueas': '已发布'},
                    {'value': '未发布', 'className': 'label label-success', 'valueas': '未发布'}
                  ]
                }
              },
              {
                'title': '执行状态',
                'data': 'OperateStatus',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任检验员',
                'data': 'CheckerId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '检查结果',
                'data': 'CheckResult',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '合格', 'className': 'label label-info', 'valueas': '合格'},
                    {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                  ]
                }
              },
              {
                'title': '通过状态',
                'data': 'PassedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                    {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                  ]
                }
              }
            ]
          }
        },
        {
          'title': '问题记录',
          'titleColor': 'font-green',
          'titleIcon': 'fa fa-cogs',
          'isFullScreen': true,
          'isCollapse': true,
          'blockType': 'portlet',
          'size': {
            'xs': {
              'value': '12',
              'offset': ''
            },
            'sm': {
              'value': '12',
              'offset': ''
            },
            'md': {
              'value': '12',
              'offset': ''
            },
            'lg': {
              'value': '12',
              'offset': ''
            }
          },
          'viewCfg': {
            'viewId': 'areapgdmx1',
            'parentViewId': 'areapgd',
            'component': 'grid_view',
            'classType': 'GridView',
            'toolbarsConfig': [
              {
                'id': 'new',
                'text': '新增',
                'color': 'green-jungle',
                'img': 'fa fa-plus',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'get',
                    'keyID': '',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '资源名称：',
                    'helpText': '资源编译后自动生成',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerNameSpace',
                    'label': '命名空间：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerAssembly',
                    'label': '程序集：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '1',
                        'label': '独立'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '共享'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '3',
                        'label': '指定区域'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-radio-list'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Note',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit'
                  }
                ]
              },
              {
                'id': 'modify',
                'text': '修改',
                'color': 'yellow',
                'img': 'fa fa-edit',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'put',
                    'keyID': 'RtId',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '资源名称：',
                    'helpText': '资源编译后自动生成',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerNameSpace',
                    'label': '命名空间：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerAssembly',
                    'label': '程序集：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '1',
                        'label': '独立'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '共享'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '3',
                        'label': '指定区域'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-radio-list'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Note',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit'
                  }
                ]
              },
              {
                'id': 'del',
                'text': '删除',
                'color': 'red',
                'img': 'fa fa-remove',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '确定要删除选中的记录吗?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'delete',
                    'keyId': 'RtId'
                  }
                }
              },
              {
                'id': 'sub',
                'text': '提交调度',
                'color': 'green',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'sub1',
                'text': '处理意见',
                'color': 'green',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'sub2',
                'text': '调度已处理',
                'color': 'green',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'sub3',
                'text': '完成',
                'color': 'green',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'sub4',
                'text': '确认',
                'color': 'green',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'proc'
                  }
                }
              }
            ],
            'ordering': true,
            'paging': true,
            'processing': false,
            'searching': true,
            'deferRender': true,
            'columnConfigClass': 'SinoForce.HJComm.SinoForce.HJComm.ZyProblemRecord',
            'columnFilter': 'Data',
            'autoWidth': false,
            'destroy': true,
            'lengthMenu': [
              5,
              10,
              20,
              30,
              40,
              50,
              100
            ],
            'rowId': 'RtId',
            'pagingType': 'numbers',
            'pageLength': 5,
            'orderMulti': true,
            'select': true,
            'responsive': true,
            'columnDefs': [
              {
                'targets': 0,
                'orderable': false
              }
            ],
            'dom': 'Bfr<"table-scrollable"t>ip',
            'columnConfigs': [
              {
                'title': '',
                'data': 'Id',
                'renderName': {
                  'type': 'checkAll'
                },
                'className': 'text-center'
              },
              {
                'title': '问题类型',
                'data': 'ProblemTypeId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '问题内容',
                'data': 'ProblemContent',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '反馈人',
                'data': 'FeedbackWorkerId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': ' 反馈时间',
                'data': 'FeedbackTime',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'}
                  ]
                }
              },
              {
                'title': '调度员',
                'data': 'TechnologistId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '调度处理时间',
                'data': 'PlanEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'}
                  ]
                }
              },
              {
                'title': '处理意见',
                'data': 'TechnologistHandleContent',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '问题状态',
                'data': 'FinishedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '已完成', 'className': 'label label-success'},
                    {'value': '已确认', 'className': 'label label-default'},
                    {'value': '执行中', 'className': 'label label-warning'}
                  ]
                }
              },
              {
                'title': '处理结果',
                'data': 'HandleResult',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '未处理', 'className': 'label label-error'},
                    {'value': '已按要求处理', 'className': 'label label-success'},
                  ]
                }
              }
            ],
            'filterConfig': [
              {
                'classType': 'SFDW_Classes.TEntityLink',
                'masterClass': 'SinoForce.HJComm.ZyWorkOrder',
                'slaveClass': 'SinoForce.HJComm.SinoForce.HJComm.ZyProblemRecord',
                'propLinks': [
                  {
                    'classType': 'SFDW_Classes.TPropertyLink',
                    'masterProp': 'Id',
                    'slaveProp': 'WorkOrderId'
                  }
                ]
              }
            ]
          }
        }
      ],
    ],
    qualityCheck: [
      [
        {
          'title': '质量检查',
          'titleColor': 'font-green',
          'titleIcon': 'fa fa-cogs',
          'isFullScreen': true,
          'isCollapse': true,
          'blockType': 'portlet',
          'size': {
            'xs': {
              'value': '12',
              'offset': ''
            },
            'sm': {
              'value': '12',
              'offset': ''
            },
            'md': {
              'value': '12',
              'offset': ''
            },
            'lg': {
              'value': '12',
              'offset': ''
            }
          },
          'viewCfg': {
            'viewId': 'areapgd',
            'component': 'grid_view',
            'classType': 'GridView',
            'toolbarsConfig': [
              {
                'id': 'new',
                'text': '发布',
                'color': 'btn btn-success',
                'img': 'fa fa-plus',
                'type': 'button',
                'events': {
                  'title': '发布派工单',
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'post',
                    'keyID': '',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '程序集名称：',
                    'helpText': '动态读取程序集名称',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select2',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as value'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'asyndropdown',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as id'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-medium',
                    'multiple': ''
                  },
                  {
                    'type': 'asyndropdown',
                    'placeholder': '--请选择--',
                    'ajax': {
                      'url': 'DataCategory?_select=Name as text,Id as id'
                    },
                    'name': 'Caption',
                    'label': '中文名称：',
                    'value': '',
                    'inputClass': 'input-large',
                    'multiple': 'multiple'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ContextName',
                    'label': '上下文名称：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ProviderName',
                    'label': '提供者：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'DefaultNamespace',
                    'label': '命名空间：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': '默认为程序编译后提供的命名空间',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'EntitiesName',
                    'label': '实体名称：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': ''
                  },
                  {
                    'type': 'checkbox',
                    'options': [
                      {
                        'checked': 'checked',
                        'disabled': false,
                        'value': '1',
                        'label': '启用'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '禁用'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-checkbox-inline'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Remark',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit',
                    'disabled': false
                  }
                ]
              },
              {
                'id': 'startWork',
                'text': '开始作业',
                'color': 'btn btn-success',
                'img': 'fa fa-remove',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '确定要删除选中的记录吗?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'delete',
                    'keyId': 'Id'
                  }
                }
              },
              {
                'id': 'finishCheck',
                'text': '完工报检',
                'color': 'btn btn-success',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'finishCerten',
                'text': '完工确认',
                'color': 'btn btn-success',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'proc'
                  }
                }
              },
              {
                'id': 'searchWork',
                'text': '查询',
                'color': 'btn btn-success',
                'img': 'fa fa-edit',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'title': '修改程序集信息',
                  'execution': {
                    'api': 'DynamicResModule',
                    'method': 'put',
                    'keyID': 'Id',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Id',
                    'label': 'ID：',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'AssemblyName',
                    'label': '程序集名称：',
                    'helpText': '动态读取程序集名称',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ContextName',
                    'label': '上下文名称：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'ProviderName',
                    'label': '提供者：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'DefaultNamespace',
                    'label': '命名空间：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': '默认为程序编译后提供的命名空间',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'maxLength',
                        'length': 20,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'EntitiesName',
                    'label': '实体名称：',
                    'inputClass': 'input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'left',
                    'helpClass': 'help-inline',
                    'helpText': ''
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': 'checked',
                        'disabled': false,
                        'value': 'true',
                        'label': '启用'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': 'false',
                        'label': '禁用'
                      }
                    ],
                    'name': 'shareScope',
                    'label': '启用状态：',
                    'inputClass': 'mt-checkbox-inline'
                  },
                  {
                    'type': 'textarea',
                    'name': 'remark',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit',
                    'disabled': false
                  }
                ]
              }
            ],
            'ordering': true,
            'paging': true,
            'processing': false,
            'searching': true,
            'deferRender': true,
            'columnConfigClass': 'SinoForce.HJComm.ZyWorkOrder',
            'columnFilter': 'Data',
            'autoWidth': true,
            'destroy': true,
            'lengthMenu': [
              5,
              10,
              20,
              30,
              40,
              50,
              100
            ],
            'rowId': 'Id',
            'pagingType': 'full_numbers',
            'pageLength': 5,
            'orderMulti': true,
            'select': true,
            'responsive': true,
            'columnDefs': [
              {
                'targets': 0,
                'orderable': false
              }
            ],
            'dom': 'Bfr<"table-scrollable"t>ip',
            'columnConfigs': [
              {
                'title': '',
                'data': 'Id',
                'renderName': {
                  'type': 'checkAll'
                },
                'className': 'text-center'
              },
              {
                'title': '产品名称',
                'data': 'ProductName',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '产品编号',
                'data': 'ProductSerialNumber',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '派工单编号',
                'data': 'WorkOrderSerialNumber',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '工序名称',
                'data': 'ProcessName',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任车间',
                'data': 'WorkShopId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '计划开始日期',
                'data': 'PlanBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-green'},
                  ]
                }
              },
              {
                'title': '计划结束日期',
                'data': 'PlanEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-red'},
                  ]
                }
              },
              {
                'title': '计划工期（天）',
                'data': 'PlanPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-info'}
                  ]
                }
              },
              {
                'title': '实际开始日期',
                'data': 'ActualBeginDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-blue'},
                  ]
                }
              },
              {
                'title': '实际结束日期',
                'data': 'ActualEndDate',
                'renderName': {
                  'type': 'date',
                  'data': [
                    {'className': 'font-orange'},
                  ]
                }
              },
              {
                'title': '实际工期',
                'data': 'ActualPeriod',
                'renderName': {
                  'type': 'number',
                  'data': [
                    {'className': 'badge badge-info'}
                  ]
                }
              },
              {
                'title': '发布状态',
                'data': 'PublishedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '已发布', 'className': 'label label-default', 'valueas': '已发布'},
                    {'value': '未发布', 'className': 'label label-success', 'valueas': '未发布'}
                  ]
                }
              },
              {
                'title': '执行状态',
                'data': 'OperateStatus',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '责任检验员',
                'data': 'CheckerId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '检查结果',
                'data': 'CheckResult',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '合格', 'className': 'label label-info', 'valueas': '合格'},
                    {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                  ]
                }
              },
              {
                'title': '通过状态',
                'data': 'PassedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '通过', 'className': 'label label-success', 'valueas': '通过'},
                    {'value': '无', 'className': 'label label-default', 'valueas': '无'}
                  ]
                }
              }
            ]
          }
        },
        {
          'title': '检验记录',
          'titleColor': 'font-green',
          'titleIcon': 'fa fa-cogs',
          'isFullScreen': true,
          'isCollapse': true,
          'blockType': 'portlet',
          'size': {
            'xs': {
              'value': '12',
              'offset': ''
            },
            'sm': {
              'value': '12',
              'offset': ''
            },
            'md': {
              'value': '12',
              'offset': ''
            },
            'lg': {
              'value': '12',
              'offset': ''
            }
          },
          'viewCfg': {
            'viewId': 'areapgdmx1',
            'parentViewId': 'areapgd',
            'component': 'grid_view',
            'classType': 'GridView',
            'toolbarsConfig': [
              {
                'id': 'new',
                'text': '检验合格',
                'color': 'green-jungle',
                'img': 'fa fa-plus',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'get',
                    'keyID': '',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '资源名称：',
                    'helpText': '资源编译后自动生成',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerNameSpace',
                    'label': '命名空间：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerAssembly',
                    'label': '程序集：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '1',
                        'label': '独立'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '共享'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '3',
                        'label': '指定区域'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-radio-list'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Note',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit'
                  }
                ]
              },
              {
                'id': 'modify',
                'text': '检验不合格',
                'color': 'yellow',
                'img': 'fa fa-edit',
                'type': 'button',
                'events': {
                  'eventType': 'form_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'put',
                    'keyID': 'RtId',
                    'callback': ''
                  }
                },
                'formConfig': [
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'Name',
                    'label': '资源名称：',
                    'helpText': '资源编译后自动生成',
                    'inputClass': 'input-inline input-medium',
                    'placeholder': '例如：Company.cn.app',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerNameSpace',
                    'label': '命名空间：',
                    'icon': 'fa fa-book',
                    'iconPstn': 'left',
                    'inputClass': 'input-group',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'input',
                    'inputType': 'text',
                    'name': 'OwnerAssembly',
                    'label': '程序集：',
                    'inputClass': 'input-medium input-group',
                    'icon': 'fa fa-bookmark-o',
                    'iconPstn': 'right',
                    'helpClass': 'help-inline',
                    'validations': [
                      {
                        'validator': 'required',
                        'errorMessage': ''
                      },
                      {
                        'validator': 'minLength',
                        'length': 6,
                        'errorMessage': ''
                      }
                    ]
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '编译成功',
                        'value': '编译成功'
                      },
                      {
                        'text': '正在定义',
                        'value': '正在定义'
                      }
                    ],
                    'name': 'BuildState',
                    'label': '编译状态：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'select',
                    'placeholder': '--请选择--',
                    'options': [
                      {
                        'text': '手动',
                        'value': '手动'
                      },
                      {
                        'text': '自动',
                        'value': '自动'
                      }
                    ],
                    'name': 'BuildMode',
                    'label': '编译方式：',
                    'value': '',
                    'inputClass': 'input-medium'
                  },
                  {
                    'type': 'radio',
                    'options': [
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '1',
                        'label': '独立'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '2',
                        'label': '共享'
                      },
                      {
                        'checked': '',
                        'disabled': false,
                        'value': '3',
                        'label': '指定区域'
                      }
                    ],
                    'name': 'ShareScope',
                    'label': '使用范围：',
                    'inputClass': 'mt-radio-list'
                  },
                  {
                    'type': 'textarea',
                    'name': 'Note',
                    'label': '备注：'
                  },
                  {
                    'type': 'button',
                    'name': 'submit'
                  }
                ]
              },
              {
                'id': '上传结果',
                'text': '删除',
                'color': 'red',
                'img': 'fa fa-remove',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '确定要删除选中的记录吗?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'delete',
                    'keyId': 'RtId'
                  }
                }
              },
              {
                'id': 'sub',
                'text': '通过',
                'color': 'green',
                'img': 'fa fa-save',
                'type': 'button',
                'events': {
                  'title': '确认提示',
                  'text': '是否提交当前数据?',
                  'eventType': 'confirm_dialog',
                  'execution': {
                    'api': 'ResourceType',
                    'method': 'proc'
                  }
                }
              }
            ],
            'ordering': true,
            'paging': true,
            'processing': false,
            'searching': true,
            'deferRender': true,
            'columnConfigClass': 'SinoForce.HJComm.SinoForce.HJComm.VZyCheckRecord',
            'columnFilter': 'Data',
            'autoWidth': false,
            'destroy': true,
            'lengthMenu': [
              5,
              10,
              20,
              30,
              40,
              50,
              100
            ],
            'rowId': 'RtId',
            'pagingType': 'numbers',
            'pageLength': 5,
            'orderMulti': true,
            'select': true,
            'responsive': true,
            'columnDefs': [
              {
                'targets': 0,
                'orderable': false
              }
            ],
            'dom': 'Bfr<"table-scrollable"t>ip',
            'columnConfigs': [
              {
                'title': '',
                'data': 'Id',
                'renderName': {
                  'type': 'checkAll'
                },
                'className': 'text-center'
              },
              {
                'title': '报查人',
                'data': 'SubmitWorkerId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '报检时间',
                'data': 'SubmitTime',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '检验员',
                'data': 'CheckerId',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '检验时间',
                'data': 'CheckTime',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '附件名称',
                'data': 'AttachmentName',
                'renderName': {
                  'type': 'notNull',
                  'data': {}
                }
              },
              {
                'title': '通过状态',
                'data': 'PassedStatus',
                'renderName': {
                  'type': 'cellStyle',
                  'data': [
                    {'value': '无', 'className': 'label label-error'},
                    {'value': '通过', 'className': 'label label-success'},
                  ]
                }
              }
            ],
            'filterConfig': [
              {
                'classType': 'SFDW_Classes.TEntityLink',
                'masterClass': 'SinoForce.HJComm.ZyWorkOrder',
                'slaveClass': 'SinoForce.HJComm.SinoForce.HJComm.VZyCheckRecord',
                'propLinks': [
                  {
                    'classType': 'SFDW_Classes.TPropertyLink',
                    'masterProp': 'Id',
                    'slaveProp': 'WorkOrderId'
                  }
                ]
              }
            ]
          }
        }
      ],
    ],
  };

  constructor(private router: ActivatedRoute, private clientStorage: ClientStorageService) {
    this.configs = this.clientStorage.getSessionStorage('appConfig');
    this.router.params.subscribe(param => {
      this._config = this.configs1[param.name];
    });
  }

  ngOnInit() {

  }
}
