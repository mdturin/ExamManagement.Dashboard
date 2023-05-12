import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-info-authorized',
  templateUrl: './nav-bar-info-authorized.component.html',
  styleUrls: ['./nav-bar-info-authorized.component.css']
})
export class NavBarInfoAuthorizedComponent {
  logout(){
    localStorage.removeItem('currentUser');
  }
}
