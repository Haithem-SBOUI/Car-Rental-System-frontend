import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {VehicleService} from "../../../core/service/vehicle.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehicleForm!: FormGroup; // Set the default form control name
  carBrands: any;


  constructor(private formBuilder: FormBuilder,
              private vehicleService: VehicleService) {
  }


  ngOnInit() {
    this.vehicleForm = this.formBuilder.group({
      pickupDate: [''],
      brand: [''],
      model: [''],
      maxPrice: [''],
    });

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
    ).subscribe((response) => {
      // Handle the response from the server
      console.log(response);
    });
  }


  private formatDate(date: string): string {
    // Use toLocaleDateString to format the date without the time
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString();
  }

}
