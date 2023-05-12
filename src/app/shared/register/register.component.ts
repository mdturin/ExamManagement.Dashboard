import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  loginComponent = LoginComponent;

  registerForm!: FormGroup;

  constructor(public modalService: NgbModal, private formBuilder: FormBuilder) {
    this.buildRegisterForm();
  }

  buildRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
      confirmPassword: [''],
      organization: [''],
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  openLoginModal(event: Event) {
    this.closeModal();
    event.preventDefault();
    this.modalService.open(this.loginComponent, {
      backdrop: 'static',
      centered: true,
    });
  }

  register() {
    console.log(this.registerForm.value);
  }
}
