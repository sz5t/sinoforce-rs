import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfigService} from '../../services/config.service';
import {Broadcaster} from '../../broadcast/broadcaster';
import {ClientStorageService} from '../../services/client-storage.service';
import {ConfigAdapter} from '../../framework/adapter/config.adapter';
import {CnDynamicFormComponent} from '../../components/form/cn-dynamic-form.component';

@Component({
  selector: 'cn-form-grid-template',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './form-grid-template.component.html',
  styleUrls: ['./form-grid-template.component.css']
})
export class FormGridTemplateComponent implements OnInit {
  @ViewChild(CnDynamicFormComponent)
  form: CnDynamicFormComponent;
  _formConfig;
  _submitValid = false;
  _gridConfig;

  constructor(private route: ActivatedRoute,
              private configService: ConfigService,
              private _broadcast: Broadcaster,
              private _clientStorage: ClientStorageService) {
    this.route.params.subscribe(params => {
      const data = ConfigAdapter.moduleFinder(
        this._clientStorage.getSessionStorage('appModuleConfig'),
        params.name
      );
      this._formConfig = data[0].totalArea.pageConfigs[0].viewCfg.formConfig;
      this._gridConfig = {
        language: {
          'processing': '处理中...',
          'lengthMenu': '显示 _MENU_ 项结果',
          'zeroRecords': '没有匹配结果',
          'info': '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
          'infoEmpty': '显示第 0 至 0 项结果，共 0 项',
          'infoFiltered': '(由 _MAX_ 项结果过滤)',
          'infoPostFix': '',
          'search': '搜索:',
          'url': '',
          'emptyTable': '表中数据为空',
          'loadingRecords': '载入中...',
          'thousands': ',',
          'paginate': {
            'first': '首页',
            'previous': '上一页',
            'next': '下一页',
            'last': '末页'
          },
          'aria': {
            'sortAscending': ': 以升序排列此列',
            'sortDescending': ': 以降序排列此列'
          }
        },
        pagingType: 'full_numbers',
        columns: [
          {data: 'qq', visible: false},
          {data: 'ww', visible: false},
          {data: 'ee', visible: false},
          {visible: false, data: 'ABwddCX'},
          {visible: false, data: 'ABqwCX'},
          {visible: false, data: 'ABweCX'},
          {visible: false, data: 'ABvdgCX'},
          {visible: false, data: 'ABsdCX'},
          {visible: false, data: 'ABcsCX'},
          {visible: false, data: 'ABdfCX'},
          {visible: false, data: 'ABcdCX'},
          {visible: false, data: 'ABcceeCX'},
          {visible: false, data: 'ABCwX'},
          {visible: false, data: 'AB4CX'},
          {visible: false, data: 'ABdCX'},
          {visible: false, data: 'AB5CX'},
          {visible: false, data: 'AB6CX'},
          {visible: false, data: 'AB7CX'},
          {visible: false, data: 'AB8CX'},
          {visible: false, data: 'AB9CX'},
          {visible: false, data: 'A0BCX'},
          {visible: false, data: 'ABC--X'},
          {visible: false, data: 'ABC8X'},
        ]
      };
    });
  }

  ngOnInit() {

  }

  submit() {

  }

}
