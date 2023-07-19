import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminRoutingModule } from '../../admin-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  standalone: true,
  selector: 'auth-sidenav-component',
  templateUrl: './sidenav-component.component.html',
  styleUrls: ['./sidenav-component.component.css'],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
})
export class SidenavComponent {

}
