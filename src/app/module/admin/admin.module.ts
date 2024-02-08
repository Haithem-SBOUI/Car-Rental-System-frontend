import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from './main/main.component';
import { PanelComponent } from './panel/panel.component';
import { AddVehicleComponent } from './vehicle-managment/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './vehicle-managment/update-vehicle/update-vehicle.component';
import {DataTablesModule} from "angular-datatables";
import { ShowVehicleComponent } from './vehicle-managment/show-vehicle/show-vehicle.component';
import { ShowReservationComponent } from './reservation-managment/show-reservation/show-reservation.component';
import { AddReservationComponent } from './reservation-managment/add-reservation/add-reservation.component';


@NgModule({
  declarations: [
    MainComponent,
    PanelComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    ShowVehicleComponent,
    ShowReservationComponent,
    AddReservationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class AdminModule { }
