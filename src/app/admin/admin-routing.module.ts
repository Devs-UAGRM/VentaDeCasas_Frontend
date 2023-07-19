import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { Error404PageComponent } from '../shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'bitacora',
    loadChildren: () => import('./modules/bitacora/bitacora.module').then(m => m.BitacoraModule)
  },
  {
    path: 'casas',
    loadChildren: () => import('./modules/propiedades/propiedades.module').then(m => m.PropiedadesModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./modules/reportes/reportes.module').then(m => m.ReportesModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./modules/config/config.module').then(m => m.ConfigModule)
  },
  // error 404
  {
    path: '404',
    component: Error404PageComponent
  },

  // default page
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  // otherwise redirect to auth page
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
