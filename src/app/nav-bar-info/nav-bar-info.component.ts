import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar-info',
  templateUrl: './nav-bar-info.component.html',
  styleUrls: ['./nav-bar-info.component.css']
})
export class NavBarInfoComponent {
  isAuthorized: boolean = true;
  constructor() { }
}
