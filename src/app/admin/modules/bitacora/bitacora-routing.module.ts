import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitacoraLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: BitacoraLayoutPageComponent,
    children: [
      { path: 'list', component: ListPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BitacoraRoutingModule { }
