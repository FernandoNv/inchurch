import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, retry, take } from 'rxjs';

export interface IUser {
  id?: number;
  email: string;
  name: string;
}

export interface ISigninData {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL: string = `${environment.apiUrl}/users`;
  private user = signal<IUser | null>(null);
  private http: HttpClient = inject(HttpClient);
  private tokenService: TokenService = inject(TokenService);

  constructor() {
    if (this.tokenService.hasToken()) {
      this.decodeToken();
    }
  }

  private decodeToken(): void {
    try {
      const user: IUser = JSON.parse(this.tokenService.getToken());
      this.user.set(user);
    } catch (e) {
      console.log('Failed to get user information in localstorage');
      console.error(e);
    }
  }

  public signin(sigintData: ISigninData): Observable<IUser[]> {
    const params = new HttpParams().set('email', sigintData.email);

    return this.http
      .get<IUser[]>(this.API_URL, { params })
      .pipe(retry(3), take(1));
  }

  public saveToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeToken();
  }

  public isSignedIn(): boolean {
    return this.tokenService.hasToken();
  }

  public getEmployee() {
    return this.user.asReadonly();
  }

  public signout() {
    this.tokenService.removeToken();
  }

  public signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API_URL, user).pipe(retry(3), take(1));
  }
}
