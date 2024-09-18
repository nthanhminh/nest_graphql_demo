import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateNewUserGraphDto {
  @Field()
  username: string;

  @Field()
  password: string;
}
