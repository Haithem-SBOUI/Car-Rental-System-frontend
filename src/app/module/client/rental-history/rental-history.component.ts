import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../../core/service/reservation-service";
import {Router} from "@angular/router";
import {ReservationDetailsModel} from "../../../model/ReservationDetails.model";
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'app-rental-history',
  templateUrl: './rental-history.component.html',
  styleUrls: ['./rental-history.component.css']
})
export class RentalHistoryComponent implements OnInit {
  rentalHistory: ReservationDetailsModel[] = [];


  constructor(private authService: AuthService, private reservationService: ReservationService, private router: Router) {
  }

  ngOnInit(): void {
    this.reservationService.findReservationByUser("4").subscribe(
      response => {
        if (response) {
          console.log("response rentalHistory:", response)
          this.rentalHistory = response;
        }
      },
      error => {
        console.log("error rentalHistory:", error)

      }
    );
  }

  getStatusClass(status: string | undefined): string {
    switch (status) {
      case 'CANCELED':
        return 'badge bg-gradient-danger';
      case 'PENDING':
        return 'badge bg-gradient-warning';
      case 'CONFIRMED':
        return 'badge bg-gradient-info';
      case 'PAYED':
        return 'badge bg-gradient-success';
      case 'COMPLETED':
        return 'badge bg-gradient-secondary';
      default:
        return 'badge'; // default class if the status doesn't match any case

    }
  }


  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };


  deleteReservationById(id: string | undefined) {

    let userId = this.authService.getUserDetails("id");
    this.reservationService.deleteReservationById(userId, id).subscribe(
      response => {
        if (response) {
          this.rentalHistory = this.rentalHistory
            .filter(item => item.id !== id);
          alert("Canceled successfully: " + response);
        }
      }, error =>{
        alert("Problem Occurred: "+ error);

      }
    )
  }

}
