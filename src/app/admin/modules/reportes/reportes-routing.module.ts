import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PagosListPageComponent } from './pages/pagos-list-page/pagos-list-page.component';
import { PagosReportPageComponent } from './pages/pagos-report-page/pagos-report-page.component';
import { TramiteListPageComponent } from './pages/tramite-list-page/tramite-list-page.component';
import { TramiteReportPageComponent } from './pages/tramite-report-page/tramite-report-page.component';
import { UsuariosListPageComponent } from './pages/usuarios-list-page/usuarios-list-page.component';
import { UsuariosReportPageComponent } from './pages/usuarios-report-page/usuarios-report-page.component';
import { VentasListPageComponent } from './pages/ventas-list-page/ventas-list-page.component';
import { VentasReportPageComponent } from './pages/ventas-report-page/ventas-report-page.component';

const routes: Routes = [
  {
    path: '',
    component: ReportLayoutPageComponent,
    children: [
      { path: 'pagos-list', component: PagosListPageComponent },
      { path: 'pagos-report/:id', component: PagosReportPageComponent },
      { path: 'tramite-list', component: TramiteListPageComponent },
      { path: 'tramite-report/:id', component: TramiteReportPageComponent },
      { path: 'user-list', component: UsuariosListPageComponent },
      { path: 'user-report/:id', component: UsuariosReportPageComponent },
      { path: 'ventas-list', component: VentasListPageComponent },
      { path: 'ventas-report/:id', component: VentasReportPageComponent },
      { path: '**', redirectTo: 'user-list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
