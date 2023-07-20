import { Component, inject } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../auth/services/auth.service';

@Component({
  selector: 'bitacora-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

  // private bitacoraService = inject(AuthService)
  private bitacoraService = inject(BitacoraService)
  private router = inject(Router)

  getBitacora() {
    const bitacora = this.bitacoraService.getBitacora()
      .subscribe({
        next: () => {
          console.log({ bitacora })
        },
        error: (msg) => {
          // Swal.fire('Error', msg, 'error')
        }
      })
  }

}
