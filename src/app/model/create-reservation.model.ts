export class CreateReservation {
  userId?: string ;
  vehicleId?: string| undefined;
  pickupDate?: Date| undefined;
  returnDate?: Date| undefined;
  nbDays?: number| undefined;
  totalPrice?: number| undefined;

  constructor(userId: string, vehicleId: string | undefined, pickupDate: Date, returnDate: Date, nbDays: number, totalPrice: number) {
    this.userId = userId;
    this.vehicleId = vehicleId;
    this.pickupDate = pickupDate;
    this.returnDate = returnDate;
    this.nbDays = nbDays;
    this.totalPrice = totalPrice;
  }

}
