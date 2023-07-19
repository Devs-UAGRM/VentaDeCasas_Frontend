import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./styles.css']
})
export class LoginPageComponent {

  private fl = inject(FormBuilder);
  private authService = inject(AuthService)

  public formLogin: FormGroup = this.fl.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  login() {

    const { correo, password } = this.formLogin.value;

    this.authService.login(correo, password)
      .subscribe(success => {

        console.log(success)
      })

    console.log(this.formLogin.value)
  }

}
