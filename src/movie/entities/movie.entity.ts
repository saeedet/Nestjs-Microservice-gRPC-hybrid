import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  rating: number;

  @Field(() => Int)
  likes: number;
}
