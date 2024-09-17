import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateOneRequiredWithoutCommentsNestedInput } from '../post/post-update-one-required-without-comments-nested.input';
import { UserUpdateOneRequiredWithoutCommentNestedInput } from '../user/user-update-one-required-without-comment-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCommentNestedInput;
}
