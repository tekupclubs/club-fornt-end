import { AuthserviceService } from './../Service/authservice.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { user } from '../models/user.modeles';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  registrationForm: FormGroup;
    user = new user('','',0,'',[]);
    isRegistered = false;
    submitted = false;
    errorMessage = '';
    rolemembre = ['membre']
    roles: any = [
        {name:'Membre', id:1, selected: true},
        {name:'Moderator', id:2, selected: false},
    ]
    selectedRoles: string[];
    constructor(private authService: AuthserviceService){ }
    ngOnInit() {
        this.registrationForm = new FormGroup({
            userName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
            telephone:new FormControl(null, [Validators.required, Validators.minLength(8)]),
            roleSelection: this.createRoles(this.roles)
        });
    }
      // Create form array
    createRoles(rolesList): FormArray{
        const arr = rolesList.map(role => {
        return new FormControl(role.selected)
        });
        return new FormArray(arr);
    }
    onSubmit(){
        this.submitted = true;
        this.user.userName = this.registrationForm.value.userName;
        this.user.email = this.registrationForm.value.email;
        this.user.password = this.registrationForm.value.password;
        this.user.telephone = this.registrationForm.value.telephone;
        //console.log(this.getSelectedRoles());
        this.user.roles = this.rolemembre;
        this.registerUser()
    }
    registerUser(){
        this.authService.signup(this.user)
        .subscribe(user=> {
            console.log(user);
            this.isRegistered = true;
        }, error=> {
            console.log(error);
            this.errorMessage = error;
            this.isRegistered = false;
        });
    }

    getSelectedRoles():string[]  {
        this.selectedRoles = this.registrationForm.value.roleSelection.map((selected, i) => {
          if(selected){
            return this.roles[i].name;
          }else {
            return '';
          }
        });
        // return selected roles
        return this.selectedRoles.filter(function (element) {
          if (element !== '') {
            return element;
          }
        });
      }

}
