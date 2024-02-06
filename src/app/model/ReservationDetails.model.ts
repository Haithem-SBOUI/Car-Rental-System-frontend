import {VehicleDetails} from "./VehicleDetails.model";

export class ReservationDetailsModel {
  id?: string;
  pickupDate?: Date;
  returnDate?: Date;
  totalPrice?: number;
  nbDate?: number;
  status?: string;
  user?: any;
  vehicle?: VehicleDetails;


}
