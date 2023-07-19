import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UsuariosListPageComponent } from './pages/usuarios-list-page/usuarios-list-page.component';
import { UsuariosReportPageComponent } from './pages/usuarios-report-page/usuarios-report-page.component';
import { VentasListPageComponent } from './pages/ventas-list-page/ventas-list-page.component';
import { VentasReportPageComponent } from './pages/ventas-report-page/ventas-report-page.component';
import { PagosListPageComponent } from './pages/pagos-list-page/pagos-list-page.component';
import { PagosReportPageComponent } from './pages/pagos-report-page/pagos-report-page.component';
import { TramiteListPageComponent } from './pages/tramite-list-page/tramite-list-page.component';
import { TramiteReportPageComponent } from './pages/tramite-report-page/tramite-report-page.component';
import { SidenavComponent } from '../../shared/sidenav-component/sidenav-component.component';


@NgModule({
  declarations: [
    ReportLayoutPageComponent,
    UsuariosListPageComponent,
    UsuariosReportPageComponent,
    VentasListPageComponent,
    VentasReportPageComponent,
    PagosListPageComponent,
    PagosReportPageComponent,
    TramiteListPageComponent,
    TramiteReportPageComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SidenavComponent
  ]
})
export class ReportesModule { }
