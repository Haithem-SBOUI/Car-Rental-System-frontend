import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../core/service/vehicle.service";
import {VehicleDetails} from "../../../model/VehicleDetails.model";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {CreateReservation} from "../../../model/create-reservation.model";
import {AuthService} from "../../../core/service/auth.service";
import {ReservationService} from "../../../core/service/reservation-service";

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicleDetails = new VehicleDetails();
  createReservationForm: any;
  totalPrice!: number;
  totalDay!: number;
  // createReservationObj!: CreateReservation;

  // createReservationObj: CreateReservation;

  constructor(private vehicleService: VehicleService, private authService: AuthService, private reservationService: ReservationService, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        this.vehicleDetails.id = params["id"];
        console.log("this.vehicleDetails.id", this.vehicleDetails.id)
      }
    );

    this.vehicleService.findById(this.vehicleDetails.id).subscribe(
      response => {
        if (response) {
          this.vehicleDetails = response;
        }
      }, error => {
        alert("error fetching vehicle details" + error.message);
      }
    );

    this.initializeForm();

    // end ngOnInit
  }

  calculateTotalPrice() {
    if (this.vehicleDetails.pricePerDay != undefined) {
      // get data from form
      let pickupDate = this.createReservationForm.get("pickupDate").value;
      let returnDate = this.createReservationForm.get("returnDate").value;

      // convert to date object and extract timestamp from it
      pickupDate = new Date(pickupDate).getTime();
      returnDate = new Date(returnDate).getTime();

      this.totalDay = Math.ceil((returnDate - pickupDate) / (1000 * 3600 * 24));
      console.log("totalDay:", this.totalDay);
      this.totalPrice = this.totalDay * this.vehicleDetails.pricePerDay;
      console.log("totalPrice:", this.totalPrice);
    }
  }

  createReservation(id: string | undefined) {
    console.log(this.authService.getUserDetails("id"));
    let userDetails = this.authService.getUserDetails("all");
    console.log(userDetails);

    // // this.createReservationObj.userId = "2";
    // this.createReservationObj.vehicleId = id;
    // this.createReservationObj.pickupDate = this.createReservationForm.get("pickupDate").value;
    // this.createReservationObj.returnDate = this.createReservationForm.get("pickupDate").value;
    // this.createReservationObj.nbDays = this.totalDay;
    // this.createReservationObj.totalPrice = this.totalPrice;

    let createReservationObj = new CreateReservation(
      this.authService.getUserDetails("id"),
      id,
      this.createReservationForm.get("pickupDate").value,
      this.createReservationForm.get("pickupDate").value,
      // todo: fix totalDay doesnt reach backend
      this.totalDay,

    );

    this.reservationService.createReservation(createReservationObj).subscribe(
      response => {
        if (response) {
          console.log("response", response);
        }
      }, error => {
        console.log("error", error);

      }
    )

    // createReservationObj = new CreateReservation();
  }

  private initializeForm() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    this.createReservationForm = this.fb.group({
      pickupDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    })

  }


}
