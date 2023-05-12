import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NavBarInfoComponent } from './nav-bar-info/nav-bar-info.component';
import { NavBarInfoAuthorizedComponent } from './nav-bar-info-authorized/nav-bar-info-authorized.component';
import { NavBarInfoUnauthorizedComponent } from './nav-bar-info-unauthorized/nav-bar-info-unauthorized.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavBarComponent,
    NavBarInfoComponent,
    NavBarInfoAuthorizedComponent,
    NavBarInfoUnauthorizedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
