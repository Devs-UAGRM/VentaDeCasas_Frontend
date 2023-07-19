import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./styles.css']
})
export class LoginPageComponent {

  private fl = inject(FormBuilder);

  public formLogin: FormGroup = this.fl.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(6)]
  })

  login() {
    console.log(this.formLogin.value)
  }

}
