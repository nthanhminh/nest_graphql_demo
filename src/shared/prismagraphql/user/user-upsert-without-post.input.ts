import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPostInput } from './user-update-without-post.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPostInput } from './user-create-without-post.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPostInput {

    @Field(() => UserUpdateWithoutPostInput, {nullable:false})
    @Type(() => UserUpdateWithoutPostInput)
    update!: UserUpdateWithoutPostInput;

    @Field(() => UserCreateWithoutPostInput, {nullable:false})
    @Type(() => UserCreateWithoutPostInput)
    create!: UserCreateWithoutPostInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
