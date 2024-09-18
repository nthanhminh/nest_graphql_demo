import { Field, InputType, OmitType } from "@nestjs/graphql";
import { CreateNewCommentDto } from "./createNewComment.dto";

@InputType()
export class UpdateCommentDto extends OmitType(CreateNewCommentDto, ['userId', 'postId'] as const) {
    @Field()
    id: number;
}