export interface ITravel {
  from: string;
  to: string;
  listings: any[];
}

export interface IMaxPassengers {
  maxPassenger: number;
  name: string;
}

export interface IListing {
  name: string;
  pricePerPassenger: number;
  vehicleType: IMaxPassengers;
}

export enum Channel {
  director_customer = 'Director Customer',
  partner = 'Partner',
  agent = 'Agent',
}

export interface INewData {
  name: string;
  email: string;
  price: number;
  channel: Channel;
}
