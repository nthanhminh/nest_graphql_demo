import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class CommentWhereInput {

    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    postId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
