import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginComponent = LoginComponent;
  constructor(public modalService: NgbModal){}
  
  closeModal(){
    this.modalService.dismissAll();
  }

  openLoginModal(event: Event){
    this.closeModal();
    event.preventDefault();
    this.modalService.open(this.loginComponent, {backdrop: 'static', centered: true});
  }
}
