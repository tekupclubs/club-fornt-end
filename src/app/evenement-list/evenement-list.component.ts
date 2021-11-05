import { Observable } from 'rxjs';
import { EvenementService } from './../Service/evenement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { evenement } from '../models/evenement.modeles';

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {
  evenement: Observable<evenement[]>
  constructor( private router: Router,private evenementservice:EvenementService) { }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.evenement = this.evenementservice.getevenementList();
  }

  deleteevenement(id: number) {
    this.evenementservice.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  evenementd(id: number){
    this.router.navigate(['evenementdetails', id]);
  }

  updatesevenement(id: number){
    this.router.navigate(['updatesevenement', id]);
  }

addevenement(){

    this.router.navigate(['/addevenement']);
}


}

