import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutUserInput } from '../post/post-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCommentInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Post?: PostUncheckedCreateNestedManyWithoutUserInput;
}
