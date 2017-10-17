import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridViewTemplateComponent} from "../application/grid-view-template/grid-view-template.component";

export const routes: Routes = [
  {path: 'grid-view', component: GridViewTemplateComponent},
  {path: 'grid-view2', component: GridViewTemplateComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class CnRouter { }
