import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutUserInput } from '../post/post-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutCommentInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => PostCreateNestedManyWithoutUserInput, {nullable:true})
    Post?: PostCreateNestedManyWithoutUserInput;
}
