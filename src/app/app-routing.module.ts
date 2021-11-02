import { SingupComponent } from './singup/singup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
  {path:'signup',component:SingupComponent},
  {path:'singin',component:SinginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
