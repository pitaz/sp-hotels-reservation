import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class Recipe {
  @Field()
  title: string;

  @Field({ nullable: true })
  averageRating?: number;
}
