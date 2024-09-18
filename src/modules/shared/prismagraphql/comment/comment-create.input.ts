import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => PostCreateNestedOneWithoutCommentsInput, {nullable:false})
    post!: PostCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutCommentInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentInput;
}
