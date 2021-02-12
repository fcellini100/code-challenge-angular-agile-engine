import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { AuthResponse } from 'src/app/interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {
  }

  AUTH_URL = 'http://interview.agileengine.com/auth';
  API_KEY = '23567b218376f79d9415';

  auth(): Observable<AuthResponse> {
    const payload = { apiKey: this.API_KEY };
    const postObservable = this.httpClient.post<AuthResponse>(this.AUTH_URL, payload);

    const subject = new ReplaySubject<AuthResponse>(1);
    subject.subscribe((r: AuthResponse) => {
      this.setAccessToken(r.token);
    }, (err) => {
      this.handleAuthenticationError(err);
    });

    postObservable.subscribe(subject);

    return subject;
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  private handleAuthenticationError(err: any) {
    this.setAccessToken(null);
  }

  private setAccessToken(accessToken: string) {
    if (!accessToken) {
      localStorage.removeItem('access_token');
    } else {
      localStorage.setItem('access_token', accessToken);
    }
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }
}
