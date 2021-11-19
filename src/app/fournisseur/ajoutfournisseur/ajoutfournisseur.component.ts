import { FournisseurService } from './../../Service/fournisseur.service';
import { FormGroup } from '@angular/forms';
import { fournisseur } from './../../models/fournisseur';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutfournisseur',
  templateUrl: './ajoutfournisseur.component.html',
  styleUrls: ['./ajoutfournisseur.component.css']
})
export class AjoutfournisseurComponent implements OnInit {
  registrationForm: FormGroup;
  fournisseur = new fournisseur('',0,[],0);
  isRegistered = false;
  submitted = false;
  errorMessage = '';

  constructor(private FournisseurService: FournisseurService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    this.fournisseur.Libelle = this.registrationForm.value.Libelle;
    this.fournisseur.budget = this.registrationForm.value.budget;
    this.fournisseur.iduser = this.registrationForm.value.iduser;
    this.fournisseur.idclubs = this.registrationForm.value.idclubs;
    this.registerUser()

}
registerUser(){
  this.FournisseurService.createfournisseur(this.fournisseur)
  .subscribe(user=> {
      console.log(user);
      this.isRegistered = true;
  }, error=> {
      console.log(error);
      this.errorMessage = error;
      this.isRegistered = false;
  });
}}
