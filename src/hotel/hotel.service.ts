import { Injectable } from '@nestjs/common';
import { Hotel } from './hotel.model';

@Injectable()
export class HotelService {
  private hotels: Hotel[] = [{
    id: 1,
    name: 'Mjau',
    address: 'ajalinkoko',
  },
  {
    id: 2,
    name: 'jamo',
    address: 'aja gbera',
  }];

  public getAllHotels(): Hotel[] {
    return this.hotels;
  }

  public getOneById(id: number): Hotel {
    return this.hotels.find(hotel => hotel.id === id) || this.hotels[0];
  }
}
