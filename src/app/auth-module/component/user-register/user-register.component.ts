import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userForm! : FormGroup
  // file! : File[] | undefined
  file! : File

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initializedForm()
  }

  initializedForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }

  get formControls() : {[p: string]: AbstractControl} {
    return this.userForm.controls
  }

  onSubmit() {
    const form = this.userForm.value
    const user: User = {
      username: form.username,
      email: form.email,
      password: form.password,
    }
    const userData = new FormData()
    // if (this.file) {
    //   for(const f of this.file) {
    //     userData.append('file', f)
    //   }
    // }
    userData.append('file', this.file)
    userData.append('user', JSON.stringify(user))
    console.log('Form : ',userData)
    this.userService.saveUser(userData).subscribe( res => {
      console.log('Res : ', res)
      this.router.navigate(['/auth/login'])
    }, error => {
      console.log('Error : ',error)
    })
  }

  onFileSelect(file: any) {
    this.file = file.target.files[0]
  }
}
