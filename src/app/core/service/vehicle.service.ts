import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehicleDetails} from "../../model/VehicleDetails.model";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/api/v1/vehicle';

  constructor(private http: HttpClient) { }

  getAll() {
    // return this.http.get<VehicleDetails>(this.baseUrl);
    return this.http.get<VehicleDetails[]>(`${this.baseUrl}/get-all-vehicle`);
  }

  findAllFreeVehicleByDateTime(date: string) {
    // return this.http.get<VehicleDetails>(this.baseUrl);
    return this.http.get<VehicleDetails[]>(`${this.baseUrl}/find-all-free-vehicle-by-date-time?startDate=${date}`);
  }

  findById(idVehicle: string | undefined) {
    return this.http.get<VehicleDetails>(`${this.baseUrl}/find-vehicle-by-id/${idVehicle}`);
  }
}
