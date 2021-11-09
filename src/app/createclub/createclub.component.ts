import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from '../models/club.models';
import { ClubService } from '../Service/club.service';

@Component({
  selector: 'app-createclub',
  templateUrl: './createclub.component.html',
  styleUrls: ['./createclub.component.css']
})
export class CreateclubComponent implements OnInit {

Clubs : Club[];
fileToUpload : File = null;
showAdd:boolean =false;
auth:string;
iduser:string = null;

  constructor(private route : ActivatedRoute,private clubservice : ClubService) { }
  noimageurl="/assets/images/noimage.png"

  ngOnInit(): void {
    this.clubservice.getclubs().subscribe(
      res=>{this.Clubs = res.oblist}
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
    this.Clubs= res.oblist;
    
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
}
