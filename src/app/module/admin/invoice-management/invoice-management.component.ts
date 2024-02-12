import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {ReservationDetailsModel} from "../../../model/ReservationDetails.model";
import {VehicleService} from "../../../core/service/vehicle.service";
import {AuthService} from "../../../core/service/auth.service";
import {ReservationService} from "../../../core/service/reservation-service";

@Component({
  selector: 'app-invoice-management',
  templateUrl: './invoice-management.component.html',
  styleUrls: ['./invoice-management.component.css']
})
export class InvoiceManagementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listPayedReservationDetails: ReservationDetailsModel[] = [];

  constructor(private vehicleService: VehicleService,
              private authService: AuthService,
              private reservationService: ReservationService,
  ) {
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.reservationService.findAllPayedReservation().subscribe(
      (response) => {
        if (response) {
          console.log("response find all PayedReservation : ", response)
          this.listPayedReservationDetails = response;
          console.log("listPayedReservationDetails object : ", this.listPayedReservationDetails)
          this.dtTrigger.next(null);

        }
      }, error => {
        console.log("error get all Payed Reservation : ", error)
      }
    )


  }


//



  handleButtonClick() {
    console.log('Button clicked in App Component');
  }
}
