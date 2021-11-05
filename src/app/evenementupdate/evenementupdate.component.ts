import { EvenementService } from './../Service/evenement.service';
import { evenement } from './../models/evenement.modeles';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-evenementupdate',
  templateUrl: './evenementupdate.component.html',
  styleUrls: ['./evenementupdate.component.css']
})
export class EvenementupdateComponent implements OnInit {
id:number;
evenement:evenement;
  constructor(private route: ActivatedRoute,private router: Router,private evenementservice:EvenementService) { }

  ngOnInit(): void {
    this.evenement = new evenement('',0,'',0);

    this.id = this.route.snapshot.params['id'];

    this.evenementservice.getevenement(this.id)
      .subscribe(data => {
        console.log(data)
        this.evenement = data;
      }, error => console.log(error));
  }
  updatesevenement() {
    this.evenementservice.updatesevenement(this.id,this.evenement)
      .subscribe(data => {
        console.log(data);
        this.evenement = new evenement('',0,'',0);
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatesevenement();
  }

  gotoList() {
    this.router.navigate(['/listevenement']);
  }

}
