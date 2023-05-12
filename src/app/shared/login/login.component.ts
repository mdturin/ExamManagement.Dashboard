import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  registerComponent = RegisterComponent;

  constructor(public modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }

  openRegisterModal(event: Event) {
    this.closeModal();
    event.preventDefault();
    this.modalService.open(this.registerComponent, {
      backdrop: 'static',
      centered: true,
    });
  }
}
