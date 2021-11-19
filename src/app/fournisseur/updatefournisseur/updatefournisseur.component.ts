import { FournisseurService } from './../../Service/fournisseur.service';
import { fournisseur } from './../../models/fournisseur';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from 'src/app/club/clubajout/node_modules/@angular/router/router';

@Component({
  selector: 'app-updatefournisseur',
  templateUrl: './updatefournisseur.component.html',
  styleUrls: ['./updatefournisseur.component.css']
})
export class UpdatefournisseurComponent implements OnInit {
  id:number;
fournisseur:fournisseur;

  constructor(private route: ActivatedRoute,private router:Router,private fournisseurservice:FournisseurService) { }

  ngOnInit(): void {
    this.fournisseur = new fournisseur('',0,[],0);

    this.id = this.route.snapshot.params['id'];

    this.fournisseurservice.getfournisseur(this.id)
      .subscribe(data => {
        console.log(data)
        this.fournisseur = data;
      }, error => console.log(error));


  }
  updatefournisseur() {
    this.fournisseurservice.updatefournisseur(this.id,this.fournisseur)
      .subscribe(data => {
        console.log(data);
        this.fournisseur = new fournisseur('',0,[],0);
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this. updatefournisseur()
  }

  gotoList() {
    this.router.navigate(['/listfournisseur']);
  }

}
