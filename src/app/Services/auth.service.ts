import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpService: HttpService) { }

  login(email: string, password: string): Observable<any> {
    return this.httpService.login(email, password);
  }

  isUserLoggedIn(): boolean {
    const user = localStorage.getItem('currentUser');
    return user !== null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
