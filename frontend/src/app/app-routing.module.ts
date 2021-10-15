import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HomeComponent } from './components/home/home.component';
import { RhistoryComponent } from './components/rhistory/rhistory.component';
import { SearchComponent } from './components/search/search.component';
import { HlogeadoComponent } from './components/hlogeado/hlogeado.component';
/* import { Historial-ReservasComponent } from './components/home/historial-reservas.component'; */

const routes: Routes = [ 
  { path: 'signup', component: SignupComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'rhistory', component: RhistoryComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'hlogeado', component: HlogeadoComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  
/*   { path: 'historial-reservas', component: Historial-ReservasComponent }, */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
