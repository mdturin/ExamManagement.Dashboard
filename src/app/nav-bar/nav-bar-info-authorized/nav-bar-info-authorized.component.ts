import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar-info-authorized',
  templateUrl: './nav-bar-info-authorized.component.html',
  styleUrls: ['./nav-bar-info-authorized.component.css']
})
export class NavBarInfoAuthorizedComponent {

  constructor(private authService: AuthService) {
  }
  
  logout(){
    this.authService.logout();
  }
}
