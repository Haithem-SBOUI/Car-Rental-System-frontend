import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../../../../core/service/vehicle.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {VehicleDetails} from "../../../../model/VehicleDetails.model";

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  vehicleDetails = new VehicleDetails();

  vehicleForm!: FormGroup;


  constructor(private vehicleService: VehicleService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    const vehicleId = this.route.snapshot.params['id'];

    this.vehicleForm.patchValue({id: vehicleId});

    this.vehicleService.findById(this.vehicleForm.value.id).subscribe(
      response => {
        if (response) {
          console.log("vehicleDetails : ", this.vehicleForm.value, " response : ", response)
          this.vehicleForm.setValue(response);
          console.log("vehicleDetails : ", this.vehicleForm.value)
        }
      }, error => {
        alert("error fetching vehicle details" + error.message);
      }
    );
  }

  initForm(): void {
    this.vehicleForm = this.fb.group({
      id: [null],
      licensePlateNumber: [null, Validators.required],
      brand: [null, Validators.required],
      model: [null, Validators.required],
      launchYear: [null, Validators.required],
      color: [null, Validators.required],
      mileage: [null, Validators.required],
      fuel: [null, Validators.required],
      transmissionType: [null, Validators.required],
      horsPower: [null, Validators.required],
      pricePerDay: [null, Validators.required],
      isAvailable: [null],
      lastMaintenanceMileage: [null, Validators.required],
    });
  }

  updateForm(vehicleDetails: VehicleDetails): void {
    this.vehicleForm.patchValue(vehicleDetails);
  }

  updateVehicle() {
    this.vehicleService.updateVehicle(this.vehicleForm.value).subscribe(
      (response) => {
        console.log("form before send", this.vehicleForm.value);
        console.log("response", response);
        alert("updated successfully")
      },
      (error) => {
        console.error('Error creating vehicle:', error.error.message);
        alert("updating error " + error.error.message)

      }
    );
  }

}
