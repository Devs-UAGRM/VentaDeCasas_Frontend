import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongifLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RolListPageComponent } from './pages/rol-list-page/rol-list-page.component';
import { RolCreatePageComponent } from './pages/rol-create-page/rol-create-page.component';
import { RolEditPageComponent } from './pages/rol-edit-page/rol-edit-page.component';
import { CategoriaListPageComponent } from './pages/categoria-list-page/categoria-list-page.component';
import { CategoriaCreatePageComponent } from './pages/categoria-create-page/categoria-create-page.component';
import { CategoriaEditPageComponent } from './pages/categoria-edit-page/categoria-edit-page.component';
import { EstadoListPageComponent } from './pages/estado-list-page/estado-list-page.component';
import { EstadoCreatePageComponent } from './pages/estado-create-page/estado-create-page.component';
import { EstadoEditPageComponent } from './pages/estado-edit-page/estado-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: CongifLayoutPageComponent,
    children: [
      { path: 'rol-list', component: RolListPageComponent },
      { path: 'rol-create', component: RolCreatePageComponent },
      { path: 'rol-edit/:id', component: RolEditPageComponent },
      { path: 'categoria-list', component: CategoriaListPageComponent },
      { path: 'categoria-create', component: CategoriaCreatePageComponent },
      { path: 'categoria-edit/:id', component: CategoriaEditPageComponent },
      { path: 'estado-list', component: EstadoListPageComponent },
      { path: 'estado-create', component: EstadoCreatePageComponent },
      { path: 'estado-edit/:id', component: EstadoEditPageComponent },
      { path: '**', redirectTo: 'rol-list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
