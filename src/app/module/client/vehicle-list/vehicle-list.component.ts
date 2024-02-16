import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../core/service/vehicle.service";
import {VehicleDetails} from "../../../model/VehicleDetails.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicleDetails: VehicleDetails[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) {
  }

  ngOnInit(): void {
    // const today: Date = new Date();
    this.findAllFreeVehicleByDateTime(new Date().toISOString().split('T')[0]);

  }

  findAllFreeVehicleByDateTime(date: string){
    this.vehicleService.findAllFreeVehicleByDateTime(date).subscribe(
      // (response :VehicleDetails[])
      response  => {
        if (response) {
          console.log('response === ', response);
          this.vehicleDetails = response;
        }
      }, error => {
        console.log('error === ', error);
        alert("error fetching data");

      }
    )
  }

}
