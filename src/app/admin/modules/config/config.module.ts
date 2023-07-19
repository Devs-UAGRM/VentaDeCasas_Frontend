import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RolListPageComponent } from './pages/rol-list-page/rol-list-page.component';
import { RolCreatePageComponent } from './pages/rol-create-page/rol-create-page.component';
import { RolEditPageComponent } from './pages/rol-edit-page/rol-edit-page.component';
import { CategoriaEditPageComponent } from './pages/categoria-edit-page/categoria-edit-page.component';
import { CategoriaCreatePageComponent } from './pages/categoria-create-page/categoria-create-page.component';
import { CategoriaListPageComponent } from './pages/categoria-list-page/categoria-list-page.component';
import { EstadoListPageComponent } from './pages/estado-list-page/estado-list-page.component';
import { EstadoCreatePageComponent } from './pages/estado-create-page/estado-create-page.component';
import { EstadoEditPageComponent } from './pages/estado-edit-page/estado-edit-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    RolListPageComponent,
    RolCreatePageComponent,
    RolEditPageComponent,
    CategoriaEditPageComponent,
    CategoriaCreatePageComponent,
    CategoriaListPageComponent,
    EstadoListPageComponent,
    EstadoCreatePageComponent,
    EstadoEditPageComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
