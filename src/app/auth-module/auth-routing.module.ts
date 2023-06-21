import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {UserRegisterComponent} from "./component/user-register/user-register.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: UserRegisterComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
