import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateManyWithoutUserNestedInput } from '../post/post-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutCommentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutUserNestedInput, {nullable:true})
    Post?: PostUpdateManyWithoutUserNestedInput;
}
