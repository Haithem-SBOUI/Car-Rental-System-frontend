import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../core/service/vehicle.service";
import {VehicleDetails} from "../../../model/VehicleDetails.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/service/auth.service";
import {ReservationService} from "../../../core/service/reservation-service";

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicleDetails = new VehicleDetails();

  reservationForm!: FormGroup;
  vehicleId: any;

  constructor(private vehicleService: VehicleService,
              private authService: AuthService,
              private reservationService: ReservationService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];

    });
    this.reservationForm = this.fb.group({
      pickupDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      user: this.fb.group({
        id: this.authService.getUserDetails("id") || 4
      }),
      vehicle: this.fb.group({
        id: this.vehicleId || 1
      })
    })


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

    // this.initializeForm();

    // end ngOnInit
  }


  createReservation() {

    console.log("this.reservationForm", this.reservationForm.value)
    this.reservationService.createReservation(this.reservationForm.value).subscribe(
      response => {
        console.log("response", response);
        this.router.navigateByUrl('/rental-history');
      }, error => {
        console.log("error", error);

      }
    )
  }


}

