import { SponsorService } from './../Service/sponsor.service';
import { user } from './../models/user.modeles';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { sponsor } from '../models/sponsor.modeles';

@Component({
  selector: 'app-sponsor-ajout',
  templateUrl: './sponsor-ajout.component.html',
  styleUrls: ['./sponsor-ajout.component.css']
})
export class SponsorAjoutComponent implements OnInit {
  registrationForm: FormGroup;
  sponsor = new sponsor('',0,[],0);
  isRegistered = false;
  submitted = false;
  errorMessage = '';
  constructor(private sponsorService: SponsorService) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    this.sponsor.Libelle = this.registrationForm.value.Libelle;
    this.sponsor.budget = this.registrationForm.value.budget;
    this.sponsor.iduser = this.registrationForm.value.iduser;
    this.sponsor.idclubs = this.registrationForm.value.idclubs;

    this.registerUser()
}
registerUser(){
    this.sponsorService.createsponsor(this.sponsor)
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
