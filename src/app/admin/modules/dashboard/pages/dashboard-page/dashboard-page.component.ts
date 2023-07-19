import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styles: [
  ]
})
export class DashboardPageComponent {

  private fl = inject(FormBuilder);
  private authService = inject(AuthService)

  public formLogin: FormGroup = this.fl.group({
  })

  login() {
    const bitacora = this.authService.getBitacora();
    bitacora
      .subscribe({
        next: (bitacora) => {
          console.log({ bitacora })
        },
        error: (msg) => {
          console.log({ msg })
        }
      })
  }

}
