import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { AdminRoutingModule } from '../../admin-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthStatus } from 'src/app/auth/interface';
import { Router } from '@angular/router';

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

  private authService = inject(AuthService);
  // private router = inject(Router);

  onLogOut() {
    this.authService.logout();
  }

  // public authStatusChangedEffect = effect(() => {
  //   switch (this.authService.authStatus()) {

  //     case AuthStatus.checking:
  //       return;

  //     case AuthStatus.authenticated:
  //       this.router.navigateByUrl('/admin/dashboard');
  //       return;

  //     case AuthStatus.notAuthenticated:
  //       this.router.navigateByUrl('/auth/login');
  //       return;

  //   }
  // })

}
