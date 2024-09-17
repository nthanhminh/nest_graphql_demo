import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';
import { UserCreateNestedOneWithoutPostInput } from '../user/user-create-nested-one-without-post.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => CommentCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutPostInput;

    @Field(() => UserCreateNestedOneWithoutPostInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPostInput;
}
