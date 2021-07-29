import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReusableBtnComponent} from "./display-comp/reusable-btn/reusable-btn.component";
import {AppComponent} from "./app.component";
import {NavBarComponent} from "./header/nav-bar.component";

import {DisplayReusableComponent} from "./display-comp/display-reusable.component";
import {ReusableInputComponent} from "./display-comp/reusable-input/reusable-input.component";

const appRoutes: Routes = [
  { path: '', component: NavBarComponent },
  { path: ':type', component: DisplayReusableComponent,
    // children:
    //   [
    //     {path: 'reusable-input', component: ReusableInputComponent},
    //     {path: 'reusable-btn', component: DisplayReusableComponent}
    //   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
