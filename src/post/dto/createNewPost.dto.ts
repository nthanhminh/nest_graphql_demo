import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateNewPostDto {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  likes: number;

  @Field()
  userId: number;
}
