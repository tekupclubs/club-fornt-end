import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { SponsorAjoutComponent } from './sponsor-ajout/sponsor-ajout.component';
import { SponsordetailsComponent } from './sponsordetails/sponsordetails.component';
import { SponsorupdateComponent } from './sponsorupdate/sponsorupdate.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { AjoutuserComponent } from './ajoutuser/ajoutuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DetailsuserComponent } from './detailsuser/detailsuser.component';
import { EvenementAjoutComponent } from './evenement-ajout/evenement-ajout.component';

import { ImgNavigationComponent } from './img-navigation/img-navigation.component';
import { ClubajoutComponent } from './club/clubajout/clubajout.component';
import { ClubdetailsComponent } from './club/clubdetails/clubdetails.component';
import { ClubupdateComponent } from './club/clubupdate/clubupdate.component';
import { ClublistComponent } from './club/clublist/clublist.component';
import { EvenementdetailsComponent } from './evenementdetails/evenementdetails.component';
import { EvenementupdateComponent } from './evenementupdate/evenementupdate.component';
import { EvenementlistComponent } from './evenementlist/evenementlist.component';
import { CreateclubComponent } from './createclub/createclub.component';


@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    SingupComponent,
    LeftNavComponent,
    SponsorAjoutComponent,
    SponsorListComponent,
    SponsordetailsComponent,
    SponsorupdateComponent,
    ListeuserComponent,
    AjoutuserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    DetailsuserComponent,
    EvenementAjoutComponent,

    ImgNavigationComponent,
    ClubajoutComponent,
    ClubdetailsComponent,
    ClubupdateComponent,
    ClublistComponent,
    EvenementdetailsComponent,
    EvenementupdateComponent,
    EvenementlistComponent,
    CreateclubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
