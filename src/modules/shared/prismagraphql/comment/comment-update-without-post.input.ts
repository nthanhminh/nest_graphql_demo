import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentNestedInput } from '../user/user-update-one-required-without-comment-nested.input';

@InputType()
export class CommentUpdateWithoutPostInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCommentNestedInput;
}
