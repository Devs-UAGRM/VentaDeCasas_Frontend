import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitacoraRoutingModule } from './bitacora-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    BitacoraRoutingModule
  ]
})
export class BitacoraModule { }
