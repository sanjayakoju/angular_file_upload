import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {UserRegisterComponent} from './component/user-register/user-register.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { UserListComponent } from './component/user-list/user-list.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserRegisterComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,

  ]
})
export class AuthModule { }
