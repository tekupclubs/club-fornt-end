import { UserserviceService } from './../Service/userservice.service';
import { user } from './../models/user.modeles';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutuser',
  templateUrl: './ajoutuser.component.html',
  styleUrls: ['./ajoutuser.component.css']
})
export class AjoutuserComponent implements OnInit {
  registrationForm: FormGroup;
  user = new user('','','',0,[]);
  isRegistered = false;
  submitted = false;
  errorMessage = '';
  Roles = [''] ;
  constructor(private userservice:UserserviceService) { }
  selectChangeHandler (event: any) {
    this.Roles = event.target.value;
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    this.user.userName = this.registrationForm.value.userName;
this.user.email=this.registrationForm.value.email;
this.user.password=this.registrationForm.value.password;
this.user.telephone= this.registrationForm.value.telephone;
this.user.roles = this.Roles
this.registerUser()
}

registerUser(){
  this.userservice.createsuser(this.user)

    .subscribe(user=> {
        console.log(user);
        this.isRegistered = true;
    }, error=> {
        console.log(error);
        this.errorMessage = error;
        this.isRegistered = false;
    });
}





}











