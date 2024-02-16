import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './auth/register/register.component';
import {VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
import {SharedModule} from "../../shared/shared.module";
import {AllVehicleComponent} from './all-vehicle/all-vehicle.component';
import {RentDetailsComponent} from './rent-details/rent-details.component';
import {RentalHistoryComponent} from './rental-history/rental-history.component';
import {RouterModule} from "@angular/router";
import {CarouselModule} from "ngx-owl-carousel-o";
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    VehicleDetailsComponent,
    AllVehicleComponent,
    RentDetailsComponent,
    RentalHistoryComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    CarouselModule,
    // Routes
  ]
})
export class ClientModule {
}
