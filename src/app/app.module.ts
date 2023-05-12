import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarInfoComponent } from './nav-bar-info/nav-bar-info.component';
import { NavBarInfoAuthorizedComponent } from './nav-bar-info-authorized/nav-bar-info-authorized.component';
import { NavBarInfoUnauthorizedComponent } from './nav-bar-info-unauthorized/nav-bar-info-unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarInfoComponent,
    NavBarInfoAuthorizedComponent,
    NavBarInfoUnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
