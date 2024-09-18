import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostInput } from '../user/user-create-nested-one-without-post.input';

@InputType()
export class PostCreateWithoutCommentsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => UserCreateNestedOneWithoutPostInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPostInput;
}
