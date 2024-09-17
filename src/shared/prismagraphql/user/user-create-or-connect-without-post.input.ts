import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPostInput } from './user-create-without-post.input';

@InputType()
export class UserCreateOrConnectWithoutPostInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutPostInput, {nullable:false})
    @Type(() => UserCreateWithoutPostInput)
    create!: UserCreateWithoutPostInput;
}
