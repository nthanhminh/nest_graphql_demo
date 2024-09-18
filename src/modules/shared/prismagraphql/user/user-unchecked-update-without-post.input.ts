import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPostInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput;
}
