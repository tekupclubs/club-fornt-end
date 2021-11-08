import { ClubupdateComponent } from './club/clubupdate/clubupdate.component';
import { ClubajoutComponent } from './club/clubajout/clubajout.component';
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
import { ImgNavigationComponent } from './img-navigation/img-navigation.component';

const routes: Routes = [
  {path:'signup',component:SingupComponent},
  {path:'singin',component:SinginComponent},
  {path:'dashbord',component:LeftNavComponent,children :[
  {path:"navimg",component:ImgNavigationComponent},
  {path:'listuser',component:ListeuserComponent},
  {path:'adduser',component:AjoutuserComponent},
  {path:'updateuser/:id',component:UpdateuserComponent},
  {path:'userdetails/:id',component:DetailsuserComponent},
  {path:'clubajout/:id',component:ClubajoutComponent},
  {path:'updateclub',component:ClubupdateComponent}]},
  {path:'addsponsor',component:SponsorAjoutComponent},
  {path:'listsponsor',component:SponsorListComponent},
  {path:'updatesponsor',component:SponsorupdateComponent},
  {path:'sponsordetails',component:SponsordetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
