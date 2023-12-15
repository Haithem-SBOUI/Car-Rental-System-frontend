import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import {MainComponent} from './main/main.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
