import { SponsorService } from './../Service/sponsor.service';
import { sponsor } from './../models/sponsor.modeles';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-sponsorupdate',
  templateUrl: './sponsorupdate.component.html',
  styleUrls: ['./sponsorupdate.component.css']
})
export class SponsorupdateComponent implements OnInit {
id:number;
sponsor:sponsor;
  constructor(private route: ActivatedRoute,private router: Router,private sponsorservice:SponsorService) { }

  ngOnInit(): void {
    this.sponsor = new sponsor('',0,[],0);

    this.id = this.route.snapshot.params['id'];

    this.sponsorservice.getsponsor(this.id)
      .subscribe(data => {
        console.log(data)
        this.sponsor = data;
      }, error => console.log(error));
  }
  updatesponsor() {
    this.sponsorservice.updatesponsor(this.id,this.sponsor)
      .subscribe(data => {
        console.log(data);
        this.sponsor = new sponsor('',0,[],0);
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatesponsor();
  }

  gotoList() {
    this.router.navigate(['/listsponsor']);
  }

}
