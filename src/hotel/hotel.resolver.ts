import { Query, Resolver, Args } from '@nestjs/graphql';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.model';

@Resolver('Hotel')
export class HotelResolver {
  constructor(
    private readonly hotelService: HotelService,
  ) {}

  @Query(returns => [Hotel])
  getHotels() {
    return this.hotelService.getAllHotels();
  }

  @Query(returns => Hotel)
  getOneHotel(@Args('id') id: number): Hotel {
    return this.hotelService.getOneById(id);
  }
}

export default HotelResolver;
