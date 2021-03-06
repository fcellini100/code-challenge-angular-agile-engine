import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { AuthResponse } from 'src/app/interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private AUTH_URL = 'http://interview.agileengine.com/auth';
  private API_KEY = '23567b218376f79d9415';

  auth(): Observable<AuthResponse> {
    const payload = { apiKey: this.API_KEY };
    const postObservable = this.httpClient.post<AuthResponse>(this.AUTH_URL, payload);

    const subject = new ReplaySubject<AuthResponse>(1);
    subject.subscribe((r: AuthResponse) => {
      this.setAccessToken(r.token);
    });

    postObservable.subscribe(subject);

    return subject;
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
