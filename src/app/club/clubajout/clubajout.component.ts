import { ActivatedRoute } from '@angular/router';
import { ClubService } from './../../Service/club.service';
import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/Club';

@Component({
  selector: 'app-clubajout',
  templateUrl: './clubajout.component.html',
  styleUrls: ['./clubajout.component.css']
})
export class ClubajoutComponent implements OnInit {

Clubs : Club[];
fileToUpload : File = null;
showAdd:boolean =false;
auth:string;
iduser:string = null;

  constructor(private route : ActivatedRoute,private clubservice : ClubService) { }
noimageurl="/assets/images/noimage.png"
  ngOnInit(): void {
this.clubservice.getclubs().subscribe(
  res=>{this.Clubs = res.oblist  }


);
this.iduser = this.route.snapshot.paramMap.get('id');
}
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.noimageurl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
addclub(libelle:any,Activite:any,email:any,clubimage:any){
this.clubservice.addclub(libelle.value,Activite.value,email.value,this.iduser,this.fileToUpload).subscribe(res=>{

});
}
delclub(idclub11:any){
this.clubservice.deleteclub(idclub11.value).subscribe(res=>{
this.Clubs = res.oblist;
this.ngOnInit();
});}


show() {
  this.showAdd = true;
}
hide(): void {
  this.showAdd = false;
}

//function show1() {

  //throw new Error('Function not implemented.');
//}

//function handleFileInput(file: any, FileList: { new(): FileList; prototype: FileList; }) {
 // throw new Error('Function not implemented.');
//}











}
