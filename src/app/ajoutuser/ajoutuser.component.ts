import { UserserviceService } from './../Service/userservice.service';
import { user } from './../models/user.modeles';
import { FormBuilder, FormControl,FormArray, FormGroup, Validators } from '@angular/forms';
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
  rolemembre = ['Admin']
  roles: any = [
    {name:'Admin', id:1, selected: true},
    {name:'MODERATEUR', id:2, selected: false},
    {name:'Role_MEMBRE', id:2, selected: false}
]
selectedRoles: string[];
  constructor(private userservice:UserserviceService,public fb : FormBuilder) { }
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      telephone:new FormControl(null, [Validators.required, Validators.minLength(8)]),
      roleSelection: this.createRoles(this.roles)
  });
}
createRoles(rolesList): FormArray{
  const arr = rolesList.map(role => {
  return new FormControl(role.selected)
  });
  return new FormArray(arr);
}




  onSubmit(){
    this.submitted = true;
    this.user.userName = this.registrationForm.value.userName;
this.user.email=this.registrationForm.value.email;
this.user.password=this.registrationForm.value.password;
this.user.telephone= this.registrationForm.value.telephone;
   this.user.roles = this.rolemembre;
   console.log(this.user.roles)
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





