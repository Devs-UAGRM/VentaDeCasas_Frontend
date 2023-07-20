import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environments';
import { User } from '../../../../interfaces/user.interface';
import { AuthStatus } from '../../../../auth/interface/auth-status.enum';
import { BitacoraInterface } from '../../../interfaces/bitacora.interface';

@Injectable({
    providedIn: 'root'
})
export class BitacoraService {

    private readonly baseUrl: string = environment.baseUrl;
    private http = inject(HttpClient);

    private _currentUser = signal<User | null>(null);
    private _authStatus = signal<AuthStatus>(AuthStatus.checking);

    private router = inject(Router);

    // Al mundo exterior
    public currentUser = computed(() => this._currentUser());
    public authStatus = computed(() => this._authStatus());

    constructor() { }



    /// Eliminar

    getBitacora(): Observable<boolean> {
        const url = `${this.baseUrl}/api/bitacora`;
        const token = localStorage.getItem('token');
        if (!token) return of(false);
        const headers = new HttpHeaders()
            .set('token', `${token}`);
        const bitacora = this.http.get<BitacoraInterface>(url, { headers });
        return bitacora
            .pipe(
                map((resp) => {
                    console.log({ resp }, "Desde get bitacora - bitacoraServices")
                    return true;
                }),
                catchError(() => {
                    return of(false)
                })
            )
    }

}
