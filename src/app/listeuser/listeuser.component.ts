import { UserserviceService } from './../Service/userservice.service';
import { Observable } from 'rxjs';
import { user } from './../models/user.modeles';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {
  users: Observable<user[]>

  constructor( private router: Router,private userservice:UserserviceService) { }



  ngOnInit(): void {
    this.reloadData()
  }
  reloadData() {
    this.users = this.userservice.getuserList();

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
    this.router.navigate(['userdetails', id]);
  }

  updateuser(id: number){
    this.router.navigate(['updateuser', id]);
  }

adduser(){

    this.router.navigate(['/adduser']);
}

}
