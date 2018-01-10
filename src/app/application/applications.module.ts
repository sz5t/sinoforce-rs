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
import {FormGridTemplateComponent} from './form-grid-template/form-grid-template.component';
import {TabsDemoComponent} from './tabs-demo/tabs-demo.component';
import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {FormDemoComponent} from './form-demo/form-demo.component';
import {GridDemoComponent} from './grid-demo/grid-demo.component';
import {TimelineDemoComponent} from './timeline-demo/timeline-demo.component';
import {ApplicationTemplateComponent} from './application-template/application-template.component';

export const CHILDREN_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'app', component: ApplicationsComponent,
    children: [
      {path: 'application-template/:name', component: ApplicationTemplateComponent},
      {path: 'dash-broad', component: DashBroadTemplateComponent},
      {path: 'grid-demo', component: GridDemoComponent},
      {path: 'tree-demo', component: TreeDemoComponent},
      {path: 'tabs-demo', component: TabsDemoComponent},
      {path: 'form-demo', component: FormDemoComponent},
      {path: 'timeline-demo', component: TimelineDemoComponent},
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
    FormGridTemplateComponent,
    TabsDemoComponent,
    TreeDemoComponent,
    FormDemoComponent,
    GridDemoComponent,
    TimelineDemoComponent,
    ApplicationTemplateComponent
  ]
})
export class ApplicationsModule {
}
