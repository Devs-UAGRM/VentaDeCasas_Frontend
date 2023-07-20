import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitacoraRoutingModule } from './bitacora-routing.module';
import { BitacoraLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BitacoraListPageComponent } from './pages/list-page/list-page.component';
import { SidenavComponent } from '../../shared/sidenav-component/sidenav-component.component';


@NgModule({
  declarations: [
    BitacoraLayoutPageComponent,
    BitacoraListPageComponent
  ],
  imports: [
    CommonModule,
    BitacoraRoutingModule,
    SidenavComponent

  ]
})
export class BitacoraModule { }
