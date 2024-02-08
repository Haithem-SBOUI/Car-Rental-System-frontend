import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateReservation} from "../../model/create-reservation.model";
import {ReservationDetailsModel} from "../../model/ReservationDetails.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/v1/reservation';


  constructor(private http: HttpClient) {
  }

  getAllReservation() {
    return this.http.get<ReservationDetailsModel[]>(`${this.baseUrl}/find-all-reservation`);
  }

  createReservation( reservation: CreateReservation){
    return this.http.post(`${this.baseUrl}/create-reservation`, reservation);
  }

  findReservationByUser( id: string){
    return this.http.get<ReservationDetailsModel[]>(`${this.baseUrl}/find-reservation-by-user-id/${id}`);
  }

  findReservationById(id: string | undefined) {
    return this.http.get<ReservationDetailsModel>(`${this.baseUrl}/find-reservation-by-id/${id}`);
  }

  deleteReservationById(userId: string | undefined, id: string | undefined) {
    return this.http.delete<ReservationDetailsModel>(`${this.baseUrl}/delete-reservation-by-id/${userId}/${id}`);
  }


  changeReservationStatus(id: string | undefined, status: string | undefined) {
    return this.http.put<ReservationDetailsModel>(`${this.baseUrl}/change-reservation-status/${id}`, status);
  }
}
