import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateNumberCachingPipe } from './pipe/plate-number-caching.pipe';



@NgModule({
  declarations: [
    PlateNumberCachingPipe
  ],
  exports: [
    PlateNumberCachingPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
