import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutPageComponent,
    children: [
      { path: '', component: DashboardPageComponent },
      { path: '**', redirectTo: 'dashboard' },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
