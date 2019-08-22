import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { DataComponent } from './data/data.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { CalcComponent } from './calc/calc.component';
import { GradeComponent } from './grade/grade.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    DataComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    DisplaynameComponent,
    CalcComponent,
    GradeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
