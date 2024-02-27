export class VehicleDetails {
  id?: string;
  licensePlateNumber?: string;
  brand?: string;
  model?: string;
  launchYear?: string;
  color?: string;
  mileage?: number;
  fuel?: string;
  transmissionType?: string;
  horsPower?: number;
  pricePerDay?: number;
  isAvailable?: boolean;
  insurance?: any;
  lastMaintenanceMileage?: number;
  picturePaths?: string[];

  constructor(
    id?: string,
  licensePlateNumber?: string,
  brand?: string,
  model?: string,
  launchYear?: string,
  color?: string,
  mileage?: number,
  fuel?: string,
  transmissionType?: string,
  horsPower?: number,
  pricePerDay?: number,
  isAvailable?: boolean,
  insurance?: any,
  lastMaintenanceMileage?: number,
   picturePaths?: string[]

) {
    this.id = id;
    this.licensePlateNumber = licensePlateNumber;
    this.brand = brand;
    this.model = model;
    this.launchYear = launchYear;
    this.color = color;
    this.mileage = mileage;
    this.fuel = fuel;
    this.transmissionType = transmissionType;
    this.horsPower = horsPower;
    this.pricePerDay = pricePerDay;
    this.isAvailable = isAvailable;
    this.insurance = insurance;
    this.lastMaintenanceMileage = lastMaintenanceMileage;
    this.picturePaths = picturePaths;
  }


}
