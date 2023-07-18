import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
