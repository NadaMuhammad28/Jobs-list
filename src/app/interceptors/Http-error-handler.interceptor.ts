import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(()=>console.log('dd')),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) {

            this.showAlert('Unauthorized: Please login again');
          } else if (err.status == 500) {
            this.showAlert('internal server Error');

          }
        } else {
          this.showAlert('Something went wrong. Please try again later.');
          console.error(err);
        }
        return throwError(() => err);
      })
    );
  }

  showAlert(message: string): void {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-danger');
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
}
