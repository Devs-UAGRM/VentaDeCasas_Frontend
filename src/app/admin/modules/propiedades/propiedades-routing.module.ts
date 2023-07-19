import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasasLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { HousePageComponent } from './pages/house-page/house-page.component';

const routes: Routes = [
  {
    path: '',
    component: CasasLayoutPageComponent,
    children: [
      { path: 'list', component: ListPageComponent },
      { path: 'create', component: CreatePageComponent },
      { path: 'edit/:id', component: EditPageComponent },
      { path: 'casas/:id', component: HousePageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropiedadesRoutingModule { }
