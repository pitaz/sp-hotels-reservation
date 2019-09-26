import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Room {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  type?: string;
}
