import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {ApiEndPoints} from "../../../core/constant/api-url-constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup
  isLogin : boolean = false
  user: any

  constructor(private formBuilder : FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.initializedForm()
  }

  initializedForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  get formControls() : {[p: string]: AbstractControl} {
    return this.loginForm.controls
  }

  onSubmit() {
    const formData = this.loginForm.value
    this.userService.login(formData).subscribe((res) => {
      this.isLogin = true;
      console.log('Res : ', res)
      this.user = res
    }, (err) => [
      console.log('Error : ', err)
    ])
  }

  protected readonly ApiEndPoints = ApiEndPoints;
}
