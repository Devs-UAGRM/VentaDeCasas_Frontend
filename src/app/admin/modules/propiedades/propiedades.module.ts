import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadesRoutingModule } from './propiedades-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { HousePageComponent } from './pages/house-page/house-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    CreatePageComponent,
    EditPageComponent,
    HousePageComponent
  ],
  imports: [
    CommonModule,
    PropiedadesRoutingModule
  ]
})
export class PropiedadesModule { }
