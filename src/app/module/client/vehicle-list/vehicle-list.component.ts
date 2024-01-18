import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../core/service/vehicle.service";
import {VehicleDetails} from "../../../model/VehicleDetails.model";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicleDetails: VehicleDetails[] = [];

  constructor(private vehicleService: VehicleService,) {
  }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(
      // (response :VehicleDetails[])
      (response: any) => {
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
