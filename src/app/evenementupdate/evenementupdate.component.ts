import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../models/Evenement';
import { EvenementService } from '../Service/evenement.service';

@Component({
  selector: 'app-evenementupdate',
  templateUrl: './evenementupdate.component.html',
  styleUrls: ['./evenementupdate.component.css']
})
export class EvenementupdateComponent implements OnInit {

  evenement : Evenement ={
    idevenement:null,
    Libelle : null,
    Nbre_de_places: null,
    Localisation:null,
    Duree:null,
    evenementimage:null
  }
  evenements : Evenement[]=[];
  fileToUpload : File=null ;
  idevenement:string;
  noimageurl="/assets/images/noimage.png"
  
  
  
    constructor(private route : ActivatedRoute,private router : Router,private evenementservice :EvenementService) {
  
  this.evenementservice.getevenements().subscribe(res=>{
  
  res.oblist.array.forEach(evenementdb => {
    if(evenementdb.idevenement == this.idevenement){
  this.evenement = evenementdb;
  this.fileToUpload = evenementdb.evenementimage;
    }
  });
  });
  }
  
    ngOnInit(): void {
  this.idevenement = this.route.snapshot.paramMap.get('idevenement');
    }
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.noimageurl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
    updateevenement(Libelle:any,Nbre_de_places:any,Localisation:any,Duree:any,evenementimage:any){
  
      this.evenementservice.updateevenement(Libelle.value,Nbre_de_places.value,Localisation.value,evenementimage.value,this.fileToUpload,this.idevenement).subscribe(res=>{
      this.router.navigate(["../evenementajout"]);
  
      });
      }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}
