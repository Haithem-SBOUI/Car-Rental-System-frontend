import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PanelComponent} from "./panel/panel.component";
import {AddVehicleComponent} from "./vehicle-managment/add-vehicle/add-vehicle.component";
import {UpdateVehicleComponent} from "./vehicle-managment/update-vehicle/update-vehicle.component";
import {ShowVehicleComponent} from "./vehicle-managment/show-vehicle/show-vehicle.component";
import {ShowReservationComponent} from "./reservation-managment/show-reservation/show-reservation.component";
import {InvoiceGeneratorComponent} from "./invoice-generator/invoice-generator.component";
import {InvoiceManagementComponent} from "./invoice-management/invoice-management.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PanelComponent,
    children: [
      { path: 'main', component: MainComponent },
      // vehicle
      { path: 'show-vehicle', component: ShowVehicleComponent },
      { path: 'add-vehicle', component: AddVehicleComponent },
      { path: 'update-vehicle/:id', component: UpdateVehicleComponent },
      // reservation
      { path: 'show-reservation', component: ShowReservationComponent },
      // Invoice
      { path: 'show-invoice', component: InvoiceManagementComponent },

      { path: 'pdf', component: InvoiceGeneratorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
