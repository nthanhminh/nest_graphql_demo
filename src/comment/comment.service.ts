import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateNewCommentDto } from "./dto/createNewComment.dto";
import { Comment } from "@prisma/client";
import { UpdateCommentDto } from "./dto/updateComment.dto";

@Injectable()
export class CommentService {
    constructor(private readonly prisma: PrismaService) {
    }

    async createNewComment(createNewCommentDto : CreateNewCommentDto) : Promise<Comment | null>{
        return this.prisma.comment.create({
            data: createNewCommentDto
        })
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