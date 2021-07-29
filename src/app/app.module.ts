import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableBtnComponent } from './display-comp/reusable-btn/reusable-btn.component';
import { NavBarComponent } from './header/nav-bar.component';
import { ReusableInputComponent } from './display-comp/reusable-input/reusable-input.component';
import { DisplayReusableComponent } from './display-comp/display-reusable.component';


@NgModule({
  declarations: [
    AppComponent,
    ReusableBtnComponent,
    NavBarComponent,
    ReusableInputComponent,
    DisplayReusableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
