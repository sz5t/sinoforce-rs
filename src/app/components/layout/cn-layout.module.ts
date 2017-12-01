import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CnLayoutComponent} from "./cn-layout/cn-layout.component";
import { CnHeaderComponent } from './cn-header/cn-header.component';
import { CnFooterComponent } from './cn-footer/cn-footer.component';
import { CnClearFixComponent } from './cn-clear-fix/cn-clear-fix.component';
import { CnTopMenuComponent } from './cn-top-menu/cn-top-menu.component';
import { CnTopDropdownComponent } from "./cn-top-dropdown/cn-top-dropdown.component";
import { CnTopDropdownItemComponent } from './cn-top-dropdown-item/cn-top-dropdown-item.component';
import { CnContainerComponent } from './cn-container/cn-container.component';
import { CnSidebarComponent } from './cn-sidebar/cn-sidebar.component';
import { CnPageComponent } from './cn-page/cn-page.component';
import { CnBreadcrumbComponent } from './cn-breadcrumb/cn-breadcrumb.component';
import {CnRowDirective} from './cn-row/cn-row.directive';
import {CnColumnComponent} from './cn-column/cn-column.component';
import {CnClearFixDirective} from './cn-clear-fix/cn-clear-fix.directive';

@NgModule({
  declarations:[
    CnLayoutComponent,
    CnHeaderComponent,
    CnFooterComponent,
    CnClearFixComponent,
    CnTopMenuComponent,
    CnTopDropdownComponent,
    CnTopDropdownItemComponent,
    CnContainerComponent,
    CnSidebarComponent,
    CnPageComponent,
    CnBreadcrumbComponent,
    CnRowDirective,
    CnColumnComponent,
    CnClearFixDirective
  ],
  exports:[
    CnLayoutComponent,
    CnHeaderComponent,
    CnFooterComponent,
    CnClearFixComponent,
    CnTopMenuComponent,
    CnTopDropdownComponent,
    CnTopDropdownItemComponent,
    CnContainerComponent,
    CnSidebarComponent,
    CnPageComponent,
    CnBreadcrumbComponent,
    CnRowDirective,
    CnColumnComponent,
    CnClearFixDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ]
})
export class CnLayoutModule { }
