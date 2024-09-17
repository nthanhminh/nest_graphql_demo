import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Comment } from '../comment/comment.model';
import { User } from '../user/user.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
