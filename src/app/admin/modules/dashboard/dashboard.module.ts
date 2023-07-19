import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    DashboardLayoutPageComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
