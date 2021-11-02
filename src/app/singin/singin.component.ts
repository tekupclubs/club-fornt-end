import { AuthserviceService } from './../Service/authservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthserviceService, private router: Router) { }
    submitted = false;
    errorMessage = '';
    isLoggedin = false;
    isLoginFailed = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
  });}

  onSubmit(){
    this.submitted = true;
    this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
        data=>{
            this.isLoggedin = true
            this.router.navigate(['/signup']);
        },
        error=>{
            console.log(error);
            this.errorMessage = error;
            this.isLoggedin = false;
            this.isLoginFailed = true;
        }
    );
}

}
