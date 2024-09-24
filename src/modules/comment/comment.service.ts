import { Injectable } from "@nestjs/common";
import { CreateNewCommentDto } from "./dto/createNewComment.dto";
import { Comment } from "@prisma/client";
import { UpdateCommentDto } from "./dto/updateComment.dto";
import { CommentSubscriptionService } from "./commentSubcription.service";
import { PrismaService } from "../prisma/prisma.service";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class CommentService {
    constructor(
        private readonly prisma: PrismaService, 
        private readonly commentSubscriptionService: CommentSubscriptionService,
        private eventEmitter: EventEmitter2
    ) {
    }

    async createNewComment(createNewCommentDto : CreateNewCommentDto) : Promise<Comment | null>{
        const newComment = await this.prisma.comment.create({
            data: createNewCommentDto
        })

        await this.commentSubscriptionService.publishCommentAdded(newComment);

        this.eventEmitter.emit('comment.created', newComment);

        return newComment;
    }

    async findCommentById(id : number) : Promise<Comment | null> {
        return this.prisma.comment.findUnique({
            where: {
                id: id
            }
        })
    }

    async adjustComment(updateCommentDto : UpdateCommentDto) : Promise<Comment | null> {
        const { id , ...data }  = updateCommentDto;
        return this.prisma.comment.update({
            data,
            where: {
                id
            }
        })
    }

    async findCommentsByPostId(postId : number) : Promise<Comment[] | null> {
        return this.prisma.comment.findMany({
            where: {
                postId
            }
        })
    }

    async findCommentsByUserId(userId : number) : Promise<Comment[] | null> {
        return this.prisma.comment.findMany({
            where: {
                userId
            }
        })
    }
}