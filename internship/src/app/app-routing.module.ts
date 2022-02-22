import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SideNaveComponent } from './side-nave/side-nave.component';

const routes: Routes = [
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "register",
    component : RegistrationComponent
  },
  {
    path: "sidenav",
    component : SideNaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
