import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../../core/service/vehicle.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicleForm!: FormGroup;


  constructor(private vehicleService: VehicleService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.vehicleForm = this.fb.group({
      licensePlateNumber: ['', Validators.required, Validators.minLength(6)],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      launchYear: ['', Validators.required],
      color: ['', Validators.required],
      mileage: ['', Validators.required],
      fuel: ['', Validators.required],
      transmissionType: ['', Validators.required],
      horsPower: ['', Validators.required],
      pricePerDay: ['', Validators.required],
      lastMaintenanceMileage: ['', Validators.required],
      isAvailable: [null, Validators.required],
    });
  }


  createVehicle() {
      this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (response) => {
          console.log("form before send", this.vehicleForm.value);
          console.log("response", response);

          // this.vehicleForm.reset();
        },
        (error) => {
          console.error('Error creating vehicle:', error.error.message);
        }
      );
    }

}
