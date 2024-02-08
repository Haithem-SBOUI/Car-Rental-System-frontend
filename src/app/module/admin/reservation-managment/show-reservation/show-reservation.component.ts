import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {VehicleDetails} from "../../../../model/VehicleDetails.model";
import {VehicleService} from "../../../../core/service/vehicle.service";
import {Router} from "@angular/router";
import {ReservationService} from "../../../../core/service/reservation-service";
import {ReservationDetailsModel} from "../../../../model/ReservationDetails.model";
import {AuthService} from "../../../../core/service/auth.service";
import {StatusEnum} from "../../../../model/StatusEnum.enum";

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listReservationDetails: ReservationDetailsModel[] = [];
  statusOptions = ['CANCELED', 'PENDING', 'CONFIRMED', 'PAYED', 'COMPLETED'];
  selectedStatus!: StatusEnum;

  constructor(private vehicleService: VehicleService,
              private authService: AuthService,
              private reservationService: ReservationService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    console.log('Selected Status:', this.selectedStatus);

    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.reservationService.getAllReservation().subscribe(
      (response) => {
        if (response) {
          console.log("response find all vehicle : ", response)
          this.listReservationDetails = response;
          console.log("listReservationDetails  object : ", this.listReservationDetails)
          this.dtTrigger.next(null);

        }
      }, error => {
        console.log("error get all vehicle : ", error)
      }
    )


  }


  redirectToDetails(id
                      :
                      string | undefined
  ) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  }
  ;


  deleteVehicleById(id
                      :
                      string | undefined
  ) {


    this.vehicleService.deleteVehicleById(id).subscribe(
      (response) => {
        console.log(response)
        this.listReservationDetails = this.listReservationDetails
          .filter(item => item.id !== id);

      }, error => {
        alert("Problem Occurred: " + error.error.message);

      }
    )


  }


//
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

  deleteReservationById(id: string | undefined) {

    let userId = this.authService.getUserDetails("id");
    this.reservationService.deleteReservationById(userId, id).subscribe(
      response => {
        if (response) {
          this.listReservationDetails = this.listReservationDetails
            .filter(item => item.id !== id);
          alert("deleted successfully: " + response);
        }
      }, error => {
        alert("Problem Occurred: " + error);

      }
    )
  }

  changeReservationStatus(id: string | undefined, status: string | undefined) {
    this.reservationService.changeReservationStatus(id, status).subscribe(
      response => {
        if (response) {
          console.log("response : ", response)
          console.log("before listReservationDetails : ", this.listReservationDetails)

          this.listReservationDetails = this.listReservationDetails.map(item =>
            item.id === response.id ? response : item
          );
          console.log("after listReservationDetails : ", this.listReservationDetails)

          alert("status changed successfully: " + response);
        }
      }, error => {
        console.log("error.error.message : ", error)
        alert("Problem Occurred: " + error.error.message);
      }
    )
  }
}
