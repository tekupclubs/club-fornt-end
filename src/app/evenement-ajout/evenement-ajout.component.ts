import { EvenementService } from './../Service/evenement.service';
import { user } from './../models/user.modeles';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { evenement } from '../models/evenement.modeles';
@Component({
  selector: 'app-evenement-ajout',
  templateUrl: './evenement-ajout.component.html',
  styleUrls: ['./evenement-ajout.component.css']
})
export class EvenementAjoutComponent implements OnInit {
  registrationForm: FormGroup;
  evenement = new evenement('',0,'',0);
  isRegistered = false;
  submitted = false;
  errorMessage = '';
  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    this.evenement.Libelle = this.registrationForm.value.Libelle;
    this.evenement.Localisation = this.registrationForm.value.Localisation;
    this.evenement.Durée = this.registrationForm.value.Durée;
    this.evenement.Nbre_de_places = this.registrationForm.value.Nbre_de_places;

    this.registerUser()
}
registerUser(){
    this.evenementService.createevenement(this.evenement)
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
