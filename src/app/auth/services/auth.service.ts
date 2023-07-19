import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { AuthStatus, LoginResponse } from '../interface';
import { BitacoraInterface } from '../../admin/interfaces/bitacora.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // Al mundo exterior
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() { }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);
    return true;
  }

  login(correo: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/api/auth/login`;
    const body = { correo, password };
    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        // Todo: errores
        catchError(err => throwError(() => err.error.msg)
        )
      )

  }

  getBitacora(): Observable<boolean> {
    const url = `${this.baseUrl}/api/bitacora/2`;
    const token = localStorage.getItem('token');
    if (!token) return of(false);
    const headers = new HttpHeaders()
      .set('token', `${token}`);
    // .set('Authorization', `Bearer ${token}`)
    const bitacora = this.http.get<BitacoraInterface>(url, { headers });

    return bitacora
      .pipe(
        map((resp) => {
          console.log({ resp }, "Desde get bitacora")
          return true;
        }),
        catchError(() => {
          // this._authStatus.set( AuthStatus.notAuthenticated );
          return of(false)
        })
      )
  }

}
