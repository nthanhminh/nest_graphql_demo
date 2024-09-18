import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutUserInput } from '../post/post-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => PostCreateNestedManyWithoutUserInput, {nullable:true})
    Post?: PostCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    Comment?: CommentCreateNestedManyWithoutUserInput;
}
