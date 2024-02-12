export class CreateReservation {
  userId?: string;
  vehicleId?: string;
  pickupDate?: Date;
  returnDate?: Date;
  nbDays?: number;
  totalPrice?: number;

  constructor(
    userId?: string,
    vehicleId?: string,
    pickupDate?: Date,
    returnDate?: Date,
    nbDays?: number,
    totalPrice?: number
  ) {
    this.userId = userId;
    this.vehicleId = vehicleId;
    this.pickupDate = pickupDate;
    this.returnDate = returnDate;
    this.nbDays = nbDays;
    this.totalPrice = totalPrice;
  }
}
