import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConfigService} from "../../../services/config.service";
import {Breadcrumb, BreadcrumbResolver} from "../../../framework/resolver/breadcrumb.resovler";

@Component({
  selector: 'cn-breadcrumb',
  templateUrl: './cn-breadcrumb.component.html',
  styleUrls: ['./cn-breadcrumb.component.css']
})
export class CnBreadcrumbComponent implements OnInit {
  title:string;
  desc:string;
  breadcrumbs:any[];
  breadcrumbData: Map<string,Breadcrumb> = new Map<string,Breadcrumb>();
  constructor(private route:ActivatedRoute,private configService:ConfigService) {
    this.breadcrumbData =
      new BreadcrumbResolver(this.configService.getProjectConfig()).config;
    /*this.configService.getConfig2().toPromise().then(response =>{
      this.breadcrumbData = new BreadcrumbResolver(response).config;
    });*/
  }

  ngOnInit() {
    // get bread info and set page value
    this.route.params.subscribe((params) => {
      let bread = this.breadcrumbData.get(params.id);
      if(bread){
        this.title = bread.breadcrumb.title;
        this.desc = bread.breadcrumb.desc;
        this.breadcrumbs = bread.breadcrumb.breadcrumbs;
      }
    });
  }

}


