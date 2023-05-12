import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { LoginResponse } from '../Models/LoginResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  login(email: string, password: string): Observable<any> {
    const endPoint = 'https://localhost:8000/api/Auth/Login';
    return this.http.post(endPoint, { email, password }).pipe(
      catchError(this.errorHandler.handleError),
      map((response) => {
        const loginResponse = response as LoginResponse;
        if ('token' in loginResponse) {
          const token = loginResponse.token;
          if (token) {
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ email, token })
            );
          }
        } 
      })
    );
  }
}
