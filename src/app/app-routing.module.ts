import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReusableBtnComponent} from "./reusable-btn/reusable-btn.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  // { path: '', component: AppComponent},
  // { path: 'reusable-btn', component: ReusableBtnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
