import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableBtnComponent } from './reusable-btn/reusable-btn.component';
import { NavBarComponent } from './header/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ReusableBtnComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
