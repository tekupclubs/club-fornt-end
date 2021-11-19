import { FournisseurService } from './../../Service/fournisseur.service';
import { fournisseur } from './../../models/fournisseur';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listfournisseur',
  templateUrl: './listfournisseur.component.html',
  styleUrls: ['./listfournisseur.component.css']
})
export class ListfournisseurComponent implements OnInit {
  fournisseurs: Observable<fournisseur[]>

  constructor(private router: Router,private fournisseurservice:FournisseurService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.fournisseurs = this.fournisseurservice.getfournisseurList();
  }
  deletefournisseur(id: number) {
    this.fournisseurservice.deletefournisseur(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  fournisseurd(id: number){
    this.router.navigate(['fournisseurdetails', id]);
  }
  updatefournisseur(id: number){
    this.router.navigate(['updatefournisseur', id]);
  }
  addfournisseur(){

    this.router.navigate(['/addfournisseur']);
}

}
