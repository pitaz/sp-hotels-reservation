import { Field, Int, ObjectType } from 'type-graphql';
import { Room } from '../room/room.model';

@ObjectType()
export class Hotel {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field(type => [Room])
  rooms?: Room[];

}
