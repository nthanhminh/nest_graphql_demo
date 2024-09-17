import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostInput } from './user-create-without-post.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPostInput } from './user-create-or-connect-without-post.input';
import { UserUpsertWithoutPostInput } from './user-upsert-without-post.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPostInput } from './user-update-to-one-with-where-without-post.input';

@InputType()
export class UserUpdateOneRequiredWithoutPostNestedInput {

    @Field(() => UserCreateWithoutPostInput, {nullable:true})
    @Type(() => UserCreateWithoutPostInput)
    create?: UserCreateWithoutPostInput;

    @Field(() => UserCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostInput)
    connectOrCreate?: UserCreateOrConnectWithoutPostInput;

    @Field(() => UserUpsertWithoutPostInput, {nullable:true})
    @Type(() => UserUpsertWithoutPostInput)
    upsert?: UserUpsertWithoutPostInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPostInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPostInput)
    update?: UserUpdateToOneWithWhereWithoutPostInput;
}
