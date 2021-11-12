import User from 'App/Models/User';
import Vehicle from 'App/Models/Vehicle';
import { OptionSelect } from 'App/entities/types';

export interface SearchDataResponse {
  vehicle: Vehicle | null
  user: User | null
  licensePlate: string
  typeVehicleList: OptionSelect[]
}
