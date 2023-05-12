import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  registerComponent = RegisterComponent;

  constructor(
    public modalService: NgbModal,
    public formBuilder: FormBuilder,
    public authService: AuthService,
  ) {
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
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe(
      (response) => {
        this.closeModal();
      }
    );
  }
}
