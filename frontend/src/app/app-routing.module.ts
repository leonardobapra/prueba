import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HomeComponent } from './components/home/home.component';
/* import { Historial-ReservasComponent } from './components/home/historial-reservas.component'; */

const routes: Routes = [ 
  { path: 'signup', component: SignupComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },  
  { path: 'home', component: HomeComponent },  
  { path: 'reservation', component: ReservationComponent },
/*   { path: 'historial-reservas', component: Historial-ReservasComponent }, */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }