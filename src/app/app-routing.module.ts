import { LeftNavComponent } from './left-nav/left-nav.component';
import { DetailsuserComponent } from './detailsuser/detailsuser.component';
import { AjoutuserComponent } from './ajoutuser/ajoutuser.component';
import { SponsorupdateComponent } from './sponsorupdate/sponsorupdate.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorAjoutComponent } from './sponsor-ajout/sponsor-ajout.component';
import { SingupComponent } from './singup/singup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { SponsordetailsComponent } from './sponsordetails/sponsordetails.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { EvenementAjoutComponent } from './evenement-ajout/evenement-ajout.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementupdateComponent } from './evenementupdate/evenementupdate.component';
import { EvenementdetailsComponent } from './evenementdetails/evenementdetails.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { ModeratorClubComponent } from './moderator-club/moderator-club.component';
import { ModeratorprofileComponent } from './moderatorprofile/moderatorprofile.component';
import { CreateclubComponent } from './createclub/createclub.component';

const routes: Routes = [
  {path:'signup',component:SingupComponent},
  {path:'singin',component:SinginComponent},
  {path:'dashbord',component:LeftNavComponent},
  {path:'addsponsor',component:SponsorAjoutComponent},
  {path:'listsponsor',component:SponsorListComponent},
  {path:'updatesponsor',component:SponsorupdateComponent},
  {path:'sponsordetails',component:SponsordetailsComponent},
  {path:'adduser',component:AjoutuserComponent},
  {path:'listuser',component:ListeuserComponent},
  {path:'updateuser',component:UpdateuserComponent},
  {path:'userdetails',component:DetailsuserComponent},
  {path:'addevenement',component:EvenementAjoutComponent},
  {path:'listevenement',component:EvenementListComponent},
  {path:'updatesevenement',component:EvenementupdateComponent},
  {path:'evenementdetails',component:EvenementdetailsComponent},
  {path:'moderator',component:ModeratorComponent},
  {path:'moderator-club',component:ModeratorClubComponent},
  {path:'moderatorprofile',component:ModeratorprofileComponent},
  {path:'createclub',component:CreateclubComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
