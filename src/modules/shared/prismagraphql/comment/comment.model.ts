import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { User } from '../user/user.model';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Post, {nullable:false})
    post?: Post;

    @Field(() => User, {nullable:false})
    user?: User;
}
