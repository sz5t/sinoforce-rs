import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridViewTemplateComponent} from './grid-view-template/grid-view-template.component';
import {MasterSlaverTemplateComponent} from './master-slaver-template/master-slaver-template.component';
import {MasterGridTemplateComponent} from './master-grid-template/master-grid-template.component';
import {SlaverGridTemplateComponent} from './slaver-grid-template/slaver-grid-template.component';
import {MasterTemplateComponent} from './master-template/master-template.component';
import {TreeGridTemplateComponent} from './tree-grid-template/tree-grid-template.component';
import {ApplicationsComponent} from './applications.component';
import {RouterModule, Routes} from '@angular/router';
import {CnForceRsModule} from '../components/cn-force-rs.module';
import {DataTablesModule} from 'angular-datatables';
import {CnBreadcrumbComponent} from '../components/layout/cn-breadcrumb/cn-breadcrumb.component';
import {LoginAuthService} from '../services/login-auth.service';
import {DashBroadTemplateComponent} from './dash-broad-template/dash-broad-template.component';
import {FormGridTemplateComponent} from '../application/form-grid-template/form-grid-template.component';

export const CHILDREN_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'app', component: ApplicationsComponent,
    children: [
      {path: 'dash-broad', component: DashBroadTemplateComponent},
      {path: 'grid-view-master/:name', component: MasterTemplateComponent, canActivate: [LoginAuthService]},
      {path: 'grid-view-master-slaver/:name', component: MasterSlaverTemplateComponent, canActivate: [LoginAuthService]},
      {path: 'tree-grid/:name', component: TreeGridTemplateComponent, canActivate: [LoginAuthService]},
      {path: 'form-grid/:name', component: FormGridTemplateComponent},
      {path: 'breadcrumb/:id', component: CnBreadcrumbComponent, outlet: 'breadcrumb'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    CnForceRsModule,
    DataTablesModule,
    RouterModule.forChild(CHILDREN_ROUTES)
  ],
  declarations: [
    GridViewTemplateComponent,
    MasterSlaverTemplateComponent,
    MasterGridTemplateComponent,
    SlaverGridTemplateComponent,
    MasterTemplateComponent,
    TreeGridTemplateComponent,
    ApplicationsComponent,
    DashBroadTemplateComponent,
    FormGridTemplateComponent
  ]
})
export class ApplicationsModule {
}
