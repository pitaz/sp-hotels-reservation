import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelResolver } from './hotel/hotel.resolver';
import { HotelModule } from './hotel/hotel.module';
import { RoomResolver } from './room/room.resolver';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      // autoSchemaFile: 'schemas/schema.graphql',
      autoSchemaFile: './schema.gql',
    }),
    HotelModule,
    RoomModule,
  ],
  controllers: [AppController],
  providers: [AppService, HotelResolver, RoomResolver],
})
export class AppModule {}
