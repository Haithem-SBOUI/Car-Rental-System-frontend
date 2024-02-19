import {Component, OnInit} from '@angular/core';
import {VehicleDetails} from "../../../model/VehicleDetails.model";
import {VehicleService} from "../../../core/service/vehicle.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-all-vehicle',
  templateUrl: './all-vehicle.component.html',
  styleUrls: ['./all-vehicle.component.css']
})
export class AllVehicleComponent implements OnInit {

  vehicleForm!: FormGroup; // Set the default form control name
  vehicleDetails: VehicleDetails[] = [];
  carBrands: any;

  constructor(private formBuilder: FormBuilder,
              private vehicleService: VehicleService,
              private router: Router) {
  }

  ngOnInit(): void {
    // const today: Date = new Date().toISOString().split('T')[0];
    // this.findAllFreeVehicleByDateTime(new Date().toISOString().split('T')[0]);
    const today: string = new Date().toISOString().split('T')[0];
    console.log("today", today);
    this.vehicleForm = this.formBuilder.group({
      pickupDate: [today],
      brand: [''],
      model: [''],
      maxPrice: [''],
    });

    this.onSubmit();


    this.vehicleService.findAllBrand().subscribe(brands => {
      this.carBrands = brands;
    });
  }

  onSubmit() {
    console.log("filterForm :", this.vehicleForm.value);
    const formValue = this.vehicleForm.value;
    // const formattedDate = this.formatDate(formValue.pickupDate);

    this.vehicleService.findByFilters(
      formValue.pickupDate,
      formValue.brand,
      formValue.model,
      formValue.maxPrice
    ).subscribe(
      response => {
        console.log(response);
        this.vehicleDetails = response;
      }, error => {
        console.log(error);

      }
    );
  }

}
