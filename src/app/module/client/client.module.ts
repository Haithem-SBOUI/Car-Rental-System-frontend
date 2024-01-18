import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import { LoginComponent } from './auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './auth/register/register.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    VehicleListComponent,
    LoginComponent,
    RegisterComponent,
    VehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule {
}
