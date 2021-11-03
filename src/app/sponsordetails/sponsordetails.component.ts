import { SponsorService } from './../Service/sponsor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sponsor } from '../models/sponsor.modeles';

@Component({
  selector: 'app-sponsordetails',
  templateUrl: './sponsordetails.component.html',
  styleUrls: ['./sponsordetails.component.css']
})
export class SponsordetailsComponent implements OnInit {
  id: number;
  sponsor: sponsor;
  constructor(private route: ActivatedRoute,private router: Router,private sponsorservice:SponsorService) { }
  ngOnInit() {
    this.sponsor = new sponsor('',0,[],0);

    this.id = this.route.snapshot.params['id'];

    this.sponsorservice.getsponsor(this.id)
      .subscribe(data => {
        console.log(data)
        this.sponsor = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/listsponsor']);
  }

}
