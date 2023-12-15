import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CommonModule
  ]
})
export class ClientModule {
}
