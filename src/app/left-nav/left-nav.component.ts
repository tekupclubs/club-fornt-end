import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Service/authservice.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  userName: string;
  userRoles: string;

 datetime :Date;
  constructor(private authservice : AuthserviceService) { }

  ngOnInit(): void {

  this.userName = sessionStorage.getItem("username");
  this.userRoles = sessionStorage.getItem("roles");
  this.datetime= new Date();

  }

  getUserName(){
    return sessionStorage.getItem("username");
 }
 onLogOut(){
   this.authservice.logout();
 }

 loggedIn(){
   return this.authservice.isLoggedIn()
 }

















}
