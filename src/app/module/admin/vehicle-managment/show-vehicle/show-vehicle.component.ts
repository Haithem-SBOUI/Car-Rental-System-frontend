import {Component, OnInit} from '@angular/core';
import {VehicleDetails} from "../../../../model/VehicleDetails.model";
import {VehicleService} from "../../../../core/service/vehicle.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.css']
})
export class ShowVehicleComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listVehicleDetails: VehicleDetails[] = [];


  constructor(private vehicleService: VehicleService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.vehicleService.getAll().subscribe(
      (response) => {
        if (response) {
          this.listVehicleDetails = response;
          console.log("response get all vehicle : ", response)
          console.log("listVehicleDetails error get all vehicle : ", this.listVehicleDetails)
          this.dtTrigger.next(null);

        }
      }, error => {
        console.log("error get all vehicle : ", error)
      }
    )




  }



  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };


  deleteVehicleById(id: string | undefined) {


    this.vehicleService.deleteVehicleById(id).subscribe(
      (response) => {
        console.log(response)
          this.listVehicleDetails = this.listVehicleDetails
            .filter(item => item.id !== id);

      }, error =>{
        alert("Problem Occurred: "+ error.error.message);

      }
    )


  }


  //
}
