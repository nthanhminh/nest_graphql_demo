import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateNewCommentDto {
    @Field()
    content: string;

    @Field()
    postId: number;

    @Field()
    userId: number;
}