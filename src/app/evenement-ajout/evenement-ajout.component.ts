import { EvenementService } from './../Service/evenement.service';
import { user } from './../models/user.modeles';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute } from '@angular/router';
import { evenement } from 'src/app/models/evenement.modeles'
import { Evenement } from '../models/Evenement';


@Component({
  selector: 'app-evenement-ajout',
  templateUrl: './evenement-ajout.component.html',
  styleUrls: ['./evenement-ajout.component.css']
})
export class EvenementAjoutComponent implements OnInit {

  Evenements : Evenement[];
  fileToUpload : File = null;
  showAdd:boolean =false;
  auth:string;
  idclub:string = null;
  
    constructor(private route : ActivatedRoute,private evenementservice : EvenementService) { }
  noimageurl="/assets/images/noimage.png"
    ngOnInit(): void {
  this.evenementservice.getevenements().subscribe(
    res=>{this.Evenements = res.oblist}
  );
  this.idclub = this.route.snapshot.paramMap.get('id');
  }
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.noimageurl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  addevenement(Libelle:any,Nbre_de_places:any,Localisation:any,Duree:any,evenementimage:any){
  
  this.evenementservice.addevenement(Libelle.value,Nbre_de_places.value,Localisation.value,Duree.value,this.fileToUpload,this.idclub).subscribe(res=>{
  this.Evenements= res.oblist;
  
  });
  }
  delevenement(idevenement11:any){
  this.evenementservice.deleteevenement(idevenement11.value).subscribe(res=>{
  this.Evenements = res.oblist;
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