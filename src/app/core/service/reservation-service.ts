import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateReservation} from "../../model/create-reservation.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/v1/reservation';


  constructor(private http: HttpClient) {
  }


  createReservation( reservation: CreateReservation){
    return this.http.post(`${this.baseUrl}/create-reservation`, reservation);
  }

}
