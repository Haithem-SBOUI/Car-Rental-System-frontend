import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {VehicleDetails} from "../../model/VehicleDetails.model";
import {AuthService} from "./auth.service";
import {ReservationDetailsModel} from "../../model/ReservationDetails.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/api/v1/vehicle';
  loggedUserId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }

  findAllBrand() {
    // return this.http.get<VehicleDetails>(this.baseUrl);
    return this.http.get(`${this.baseUrl}/all-vehicle-brand`);
  }

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

  findByFilters(
    pickupDate: string | null,
    brand: string | null,
    model: string | null,
    maxPrice: number | null
  ): Observable<any> {
    let params = new HttpParams()
      .set('pickupDate', pickupDate || '')
      .set('brand', brand || '')
      .set('model', model || '')
      .set('maxPrice', maxPrice !== null ? maxPrice.toString() : '');


    return this.http.get(`${this.baseUrl}/filter-vehicle`, { params });
  }
}
