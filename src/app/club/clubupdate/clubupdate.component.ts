import { ClubService } from './../../Service/club.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/models/Club';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Service/authservice.service';

@Component({
  selector: 'app-clubupdate',
  templateUrl: './clubupdate.component.html',
  styleUrls: ['./clubupdate.component.css']
})
export class ClubupdateComponent implements OnInit {
  userName: string;
  userRoles: string;

 datetime :Date;
club : Club ={
  idclub:null,
  libelle : null,
  Activite: null,
  email:null,
  clubimage:null
}
clubs : Club[]=[];
fileToUpload : File=null ;
idclub:string;
noimageurl="/assets/images/noimage.png"



  constructor(private route : ActivatedRoute,private router : Router,private clubservice :ClubService,private authservice: AuthserviceService) {

this.clubservice.getclubs().subscribe(res=>{

res.oblist.array.forEach(clubdb => {
  if(clubdb.idclub == this.idclub){
this.club = clubdb;
this.fileToUpload = clubdb.clubimage;
  }
});
});
}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idclub = params["clubparam"];
      })
this.userName = sessionStorage.getItem("username");
  this.userRoles = sessionStorage.getItem("roles");
  this.datetime= new Date();
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.noimageurl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  updateclub(libelle:any,Activite:any,email:any,clubimage:any){

    this.clubservice.updateclub(libelle.value,Activite.value,email.value,this.idclub,this.fileToUpload).subscribe(res=>{
    this.router.navigate(["../clubajout"]);

    });
    }

    getUserName(){
      return sessionStorage.getItem("username");
   }
   onLogOut(){
     this.authservice.logout();
   }

   loggedIn(){
     return this.authservice.isLoggedIn()
   }














}
