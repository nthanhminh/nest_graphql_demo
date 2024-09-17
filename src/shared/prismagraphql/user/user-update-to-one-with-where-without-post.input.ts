import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPostInput } from './user-update-without-post.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPostInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPostInput, {nullable:false})
    @Type(() => UserUpdateWithoutPostInput)
    data!: UserUpdateWithoutPostInput;
}
