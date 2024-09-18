import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostInput } from './user-create-without-post.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPostInput } from './user-create-or-connect-without-post.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPostInput {

    @Field(() => UserCreateWithoutPostInput, {nullable:true})
    @Type(() => UserCreateWithoutPostInput)
    create?: UserCreateWithoutPostInput;

    @Field(() => UserCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostInput)
    connectOrCreate?: UserCreateOrConnectWithoutPostInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
