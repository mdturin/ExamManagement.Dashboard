import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  registerComponent = RegisterComponent;

  constructor(public modalService: NgbModal, public formBuilder: FormBuilder) {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

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

  login(event: Event) {
    event.preventDefault();
    console.log(this.loginForm.value);
  }
}
