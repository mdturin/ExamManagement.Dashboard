import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar-info',
  templateUrl: './nav-bar-info.component.html',
  styleUrls: ['./nav-bar-info.component.css']
})
export class NavBarInfoComponent {
  constructor(private authService: AuthService) {
  }

  public isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }
}
