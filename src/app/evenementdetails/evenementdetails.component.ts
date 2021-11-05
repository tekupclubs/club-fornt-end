import { EvenementService } from './../Service/evenement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { evenement } from '../models/evenement.modeles';

@Component({
  selector: 'app-evenementdetails',
  templateUrl: './evenementdetails.component.html',
  styleUrls: ['./evenementdetails.component.css']
})
export class EvenementdetailsComponent implements OnInit {
  id: number;
  evenement: evenement;
  constructor(private route: ActivatedRoute,private router: Router,private evenementservice:EvenementService) { }
  ngOnInit() {
    this.evenement = new evenement('',0,'',0);

    this.id = this.route.snapshot.params['id'];

    this.evenementservice.getsponsor(this.id)
      .subscribe(data => {
        console.log(data)
        this.evenement = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/listsponsor']);
  }

}
