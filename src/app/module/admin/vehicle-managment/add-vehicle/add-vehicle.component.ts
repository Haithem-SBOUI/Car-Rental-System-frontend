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
      picture: [null]
    });
  }

  onFileChange(event: any) {
    const files: FileList | null = (event.target as HTMLInputElement).files;
    this.vehicleForm.patchValue({
      picture: files
    });
  }


  createVehicle() {
    const formData = new FormData();

    // Append each file to the formData
    if (this.vehicleForm.value.picture) {
      for (let i = 0; i < this.vehicleForm.value.picture.length; i++) {
        formData.append('pictures', this.vehicleForm.value.picture[i]);
      }
    }

    // Append other form values
    Object.keys(this.vehicleForm.value).forEach(key => {
      if (key !== 'picture') {
        formData.append(key, this.vehicleForm.value[key]);
      }
    });

    console.log("this.registerForm.value : ", this.vehicleForm.value);
    console.log("this.formData after assign : ", formData);


    this.vehicleService.createVehicle(formData).subscribe(
        (response) => {
          console.log("response", response);

          // this.vehicleForm.reset();
        },
        (error) => {
          console.error('Error creating vehicle:', error.error.message);
        }
      );
    }

}
