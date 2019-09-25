import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Hotel')
export class HotelResolver {
  hotels = [{
    id: 1,
    name: 'Mjau',
    age: 17,
  },
  {
    id: 2,
    name: 'jamo',
    age: 17,
  }];

  @Query()
  getHotels() {
    return this.hotels;
  }
}

export default HotelResolver;
