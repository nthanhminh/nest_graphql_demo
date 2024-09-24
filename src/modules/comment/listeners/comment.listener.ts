import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { CommentCreatedEvent } from "../events/comment.event";

@Injectable()
export class CommentCreatedListener {
    @OnEvent('comment.created')
    handleNewCommentCreated(event: CommentCreatedEvent) {
        console.log("event", event);
    }
}