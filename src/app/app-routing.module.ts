import { DetailsuserComponent } from './detailsuser/detailsuser.component';
import { AjoutuserComponent } from './ajoutuser/ajoutuser.component';
import { SponsorupdateComponent } from './sponsorupdate/sponsorupdate.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorAjoutComponent } from './sponsor-ajout/sponsor-ajout.component';
import { SingupComponent } from './singup/singup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SponsordetailsComponent } from './sponsordetails/sponsordetails.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { EvenementAjoutComponent } from './evenement-ajout/evenement-ajout.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementupdateComponent } from './evenementupdate/evenementupdate.component';
import { EvenementdetailsComponent } from './evenementdetails/evenementdetails.component';

const routes: Routes = [
  {path:'signup',component:SingupComponent},
  {path:'singin',component:SinginComponent},
  {path:'dashbord',component:DashbordComponent},
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






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
