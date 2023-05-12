import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar-info-unauthorized',
  templateUrl: './nav-bar-info-unauthorized.component.html',
  styleUrls: ['./nav-bar-info-unauthorized.component.css']
})
export class NavBarInfoUnauthorizedComponent {
  constructor(public modalService: NgbModal){}
  
  openModal(content: any){
    this.modalService.open(content, {backdrop: 'static', centered: true});
  }
}
