import {Component, OnInit} from '@angular/core';
import {VehicleDetails} from "../../../model/VehicleDetails.model";
import {VehicleService} from "../../../core/service/vehicle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-vehicle',
  templateUrl: './all-vehicle.component.html',
  styleUrls: ['./all-vehicle.component.css']
})
export class AllVehicleComponent implements OnInit {

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

  redirectToDetails(vehicleId: string | undefined) {
    console.log(vehicleId);
    this.router.navigate(['/user/vehicle-details', vehicleId]);
  };

}
