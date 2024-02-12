import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehicleDetails} from "../../model/VehicleDetails.model";
import {AuthService} from "./auth.service";
import {ReservationDetailsModel} from "../../model/ReservationDetails.model";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/api/v1/vehicle';
  loggedUserId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }

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

  createVehicle(vehicleForm: any) {
    return this.http.post<VehicleDetails>(`${this.baseUrl}/add-vehicle/${this.loggedUserId}`, vehicleForm);
  }
  updateVehicle(vehicleForm: any) {
    return this.http.put<VehicleDetails>(`${this.baseUrl}/update-vehicle-by-id`, vehicleForm);

  }


  deleteVehicleById(id: string | undefined) {
    return this.http.delete(`${this.baseUrl}/delete-vehicle-by-id/${this.loggedUserId}/${id}`);
  }
}
