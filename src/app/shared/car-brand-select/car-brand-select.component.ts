import {Component, Input, OnInit} from '@angular/core';
import {VehicleService} from "../../core/service/vehicle.service";

@Component({
  selector: 'app-car-brand-select',
  template: `
    <label for="brand">Car Brand:</label>
    <select id="brand" >
      <option *ngFor="let brand of carBrands" [value]="brand">{{ brand }}</option>
    </select>
  `,
  styleUrls: ['./car-brand-select.component.css']
})
export class CarBrandSelectComponent implements OnInit{

  @Input()
  carBrands: any;

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit() {
    this.vehicleService.findAllBrand().subscribe(brands => {
      this.carBrands = brands;
    });
  }

}
