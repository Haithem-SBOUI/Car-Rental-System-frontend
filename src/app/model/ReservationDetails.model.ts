import {VehicleDetails} from "./VehicleDetails.model";
import {UserModel} from "./User.model";

export class ReservationDetailsModel {
  id?: string;
  pickupDate?: Date;
  returnDate?: Date;
  totalPrice?: number;
  nbDate?: number;
  status?: string;
  user?: UserModel;
  vehicle?: VehicleDetails;


  constructor(
    id?: string,
    pickupDate?: Date,
    returnDate?: Date,
    totalPrice?: number,
    nbDate?: number,
    status?: string,
    user?: UserModel,
    vehicle?: VehicleDetails
  ) {
    this.id = id;
    this.pickupDate = pickupDate;
    this.returnDate = returnDate;
    this.totalPrice = totalPrice;
    this.nbDate = nbDate;
    this.status = status;
    this.user = user;
    this.vehicle = vehicle;
  }


}
