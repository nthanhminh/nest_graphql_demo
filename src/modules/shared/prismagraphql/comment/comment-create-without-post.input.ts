import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';

@InputType()
export class CommentCreateWithoutPostInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => UserCreateNestedOneWithoutCommentInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentInput;
}
