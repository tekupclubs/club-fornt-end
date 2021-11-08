import { UserserviceService } from './../Service/userservice.service';
import { Observable } from 'rxjs';
import { user } from './../models/user.modeles';
import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {
  users: any
  role:any;

  constructor( private router: Router,private userservice:UserserviceService,private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.reloadData()
  }
  reloadData() {
    this.users =  this.userservice.getuserList();
    this.users.forEach(element => {
      this.role = element[0].roles[0].roleName
    });
  }

  deleteuser(id: number) {
    this.userservice.deleteuser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userd(id: number){
    this.router.navigate(['../userdetails', id]);
  }

  updateuser(id: number){
    this.router.navigate(['updateuser',id],{relativeTo:this.route})
  }
/**
adduser(){

    this.router.navigate(['/listuser/adduser']);
}
*/
}
