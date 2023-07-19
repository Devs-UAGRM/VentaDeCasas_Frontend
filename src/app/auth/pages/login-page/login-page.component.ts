import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./styles.css']
})
export class LoginPageComponent {

  private fl = inject(FormBuilder);
  private authService = inject(AuthService)
  private router = inject(Router)

  public formLogin: FormGroup = this.fl.group({
    correo: ['vegetta777@gmail.com', [Validators.required, Validators.email]],
    password: ['vegetta777', [Validators.required, Validators.minLength(6)]],
  })

  login() {

    const { correo, password } = this.formLogin.value;

    this.authService.login(correo, password)
      .subscribe({
        next: () => {
          if (this.authService.currentUser()?.id_rol === 3) {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/casas');
          }
        },
        error: (msg) => {
          Swal.fire('Error', msg, 'error')
        }
      })
  }

}
