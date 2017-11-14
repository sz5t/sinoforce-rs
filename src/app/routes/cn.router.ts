import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridViewTemplateComponent} from "../application/grid-view-template/grid-view-template.component";
import {MasterSlaverTemplateComponent} from "../application/master-slaver-template/master-slaver-template.component";
import {MasterTemplateComponent} from "../application/master-template/master-template.component";
import {CnBreadcrumbComponent} from "../components/layout/cn-breadcrumb/cn-breadcrumb.component";
import {TreeGridTemplateComponent} from "../application/tree-grid-template/tree-grid-template.component";
//import {ApplicationComponent} from '../application/application.component';

/*export const routes: Routes = [
  {path: 'app', component: ApplicationComponent};
  {path: 'grid-view', component: GridViewTemplateComponent},
  {path: 'master-slaver', component: MasterSlaverTemplateComponent},
  {path: 'grid-view-master/:name',component:MasterTemplateComponent},
  {path: 'grid-view-master-slaver/:name', component:MasterSlaverTemplateComponent},
  {path: 'tree-grid/:name', component: TreeGridTemplateComponent},
  {path: 'breadcrumb/:id', component:CnBreadcrumbComponent, outlet:'breadcrumb'}
];*/

@NgModule({
  imports: [
    RouterModule
  ],
  exports:[RouterModule]
})
export class CnRouter { }
