import { UserserviceService } from './../Service/userservice.service';
import { SponsorService } from './../Service/sponsor.service';
import { user } from './../models/user.modeles';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id:number;
  user:user;
  role:[''];
    constructor(private route: ActivatedRoute,private router: Router,private userservice:UserserviceService) { }

    ngOnInit(): void {
      this.user = new user('','','',0,[]);

      this.id = this.route.snapshot.params['id'];

      this.userservice.getuser(this.id)
        .subscribe(data => {
          console.log(data)
          this.user = data;
        }, error => console.log(error));
    }
    selectChangeHandler (event: any) {
      this.role = event.target.value;
    }
    updateuser() {
      this.userservice.updateuser(this.id,this.user)
        .subscribe(data => {
          console.log(data);
          this.user = new user('','','',0,[]);
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
      this.updateuser();
    }
    gotoList() {
      this.router.navigate(['/listuser']);
    }
}
