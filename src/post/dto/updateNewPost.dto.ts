import { Field, InputType, OmitType } from "@nestjs/graphql";
import { CreateNewPostDto } from "./createNewPost.dto";

@InputType()
export class UpdatePostDto extends OmitType(CreateNewPostDto, ['userId'] as const) {
    @Field()
    id: number;
}