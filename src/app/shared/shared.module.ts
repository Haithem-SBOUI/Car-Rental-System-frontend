import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateNumberCachingPipe } from './pipe/plate-number-caching.pipe';
import { CarBrandSelectComponent } from './car-brand-select/car-brand-select.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PlateNumberCachingPipe,
    CarBrandSelectComponent
  ],
  exports: [
    PlateNumberCachingPipe,
    CarBrandSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
