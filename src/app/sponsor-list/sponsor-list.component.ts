import { Observable } from 'rxjs';
import { SponsorService } from './../Service/sponsor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sponsor } from '../models/sponsor.modeles';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css']
})
export class SponsorListComponent implements OnInit {
  sponsors: Observable<sponsor[]>
  constructor( private router: Router,private sponsorservice:SponsorService) { }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.sponsors = this.sponsorservice.getsponsorList();
  }

  deletesponsor(id: number) {
    this.sponsorservice.deletesponsor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  sponsord(id: number){
    this.router.navigate(['sponsordetails', id]);
  }

  updatesponsor(id: number){
    this.router.navigate(['updatesponsor', id]);
  }

addsponsor(){

    this.router.navigate(['/addsponsor']);
}


}
