import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/service/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: any;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['ROLE_USER', Validators.required],
      profileImage: [null]
    })
  }


  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.registerForm.patchValue({
      profileImage: file
    });
  }


  register() {

    const formData = new FormData();

    Object.keys(this.registerForm.value).forEach(key => {
      formData.append(key, this.registerForm.value[key]);
    });
    console.log("this.registerForm.value : ", this.registerForm.value);
    console.log("this.formData after assign : ", formData);


    this.authService.register(formData).subscribe(
      (response: any) => {
        console.log("response : ", response);
        this.router.navigate(['/user/login']);
      }, error => {
        console.error('error.error : ', error.error, '|| error.status : ', error.status);
      }
    )
  }





}
