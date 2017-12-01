import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfigService} from '../../../services/config.service';
import {Breadcrumb, BreadcrumbResolver} from '../../../framework/resolver/breadcrumb.resovler';
import {ClientStorageService} from '../../../services/client-storage.service';

@Component({
  selector: 'cn-breadcrumb',
  templateUrl: './cn-breadcrumb.component.html',
  styleUrls: ['./cn-breadcrumb.component.css']
})
export class CnBreadcrumbComponent implements OnInit {
  title: string;
  desc: string;
  breadcrumbs: any[];
  breadcrumbData: Map<string, Breadcrumb> = new Map<string, Breadcrumb>();

  constructor(private route: ActivatedRoute, private clientStorage: ClientStorageService) {
    /*this.breadcrumbData =
     new BreadcrumbResolver(this.configService.getProjectConfig()).config;*/
    this.breadcrumbData =
      new BreadcrumbResolver(this.clientStorage.getSessionStorage('appModuleConfig')).config;
  }

  ngOnInit() {
    // get bread info and set page value
    this.route.params.subscribe((params) => {
      const bread = this.breadcrumbData.get(params.id);
      if (bread) {
        this.title = bread.breadcrumb.title;
        this.desc = bread.breadcrumb.desc;
        this.breadcrumbs = bread.breadcrumb.breadcrumbs;
      }
    });
  }

}


