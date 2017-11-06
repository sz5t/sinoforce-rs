import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConfigService} from "../../services/config.service";
import {ConfigAdapter} from "../../framework/adapter/config.adapter";

@Component({
  selector: 'cn-tree-grid-template',
  templateUrl: './tree-grid-template.component.html',
  styleUrls: ['./tree-grid-template.component.css']
})
export class TreeGridTemplateComponent implements OnInit {

  _treeConfig;
  _slaverConfig;
  constructor(private route:ActivatedRoute,private configService:ConfigService) {
    this.route.params.subscribe(params => {
      const data = ConfigAdapter.moduleFinder(
        this.configService.getProjectConfig(),
        params.name
      );
      this._treeConfig = data[0].totalArea.pageConfigs[0];
      //this._slaverConfig = data[0].totalArea.pageConfigs[1];
    });
  }

  ngOnInit() {
  }

}
