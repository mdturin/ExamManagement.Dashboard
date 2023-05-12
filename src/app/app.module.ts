import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { HttpService } from './Services/http.service';
import { AuthService } from './Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlerService } from './Services/error-handler.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavBarModule,
    HttpClientModule,
  ],
  providers: [HttpService, AuthService, ErrorHandlerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
