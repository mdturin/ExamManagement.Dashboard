import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { HttpService } from './Services/http.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NavBarModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
