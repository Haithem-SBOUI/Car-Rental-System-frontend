import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {VehicleDetailsComponent} from "./vehicle-details/vehicle-details.component";
import {AllVehicleComponent} from "./all-vehicle/all-vehicle.component";
import {RentDetailsComponent} from "./rent-details/rent-details.component";
import {RentalHistoryComponent} from "./rental-history/rental-history.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full',},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'all-vehicle', component: AllVehicleComponent},
  {path: 'rent-details/:id', component: RentDetailsComponent},
  {path: 'vehicle-details/:id', component: VehicleDetailsComponent},
  {path: 'rental-history', component: RentalHistoryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
