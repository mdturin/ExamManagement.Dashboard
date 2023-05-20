import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    InputComponent,
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    InputComponent,
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
  ],
})
export class SharedModule {}
