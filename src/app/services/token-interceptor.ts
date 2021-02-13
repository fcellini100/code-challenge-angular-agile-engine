import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.setAuthorization(request)
    return next.handle(request).pipe(catchError(error => {
        if (error.status === 401) {
          return this.authService.auth().pipe(
            switchMap(() => {
              request = this.setAuthorization(request)
              return next.handle(request)
            })
          )
        }else{
          return throwError(error);
        }
      })
    )
  }

  private setAuthorization(request: HttpRequest<unknown>): HttpRequest<unknown>{
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getAccessToken()}`
      }
    });
  }
}