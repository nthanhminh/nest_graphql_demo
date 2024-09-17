import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateNewPostDto } from "./dto/createNewPost.dto";
import { Post } from "@prisma/client";
import { UpdatePostDto } from "./dto/updateNewPost.dto";

@Injectable()
export class PostService {
    constructor(
        private readonly prisma: PrismaService,
    ) {}
    
    async createNewPost(createNewPostDto: CreateNewPostDto) : Promise<Post | null> {
        return this.prisma.post.create({
            data: createNewPostDto
        })
    }

    async findPostById(id: number) : Promise<Post | null> {
        return await this.prisma.post.findUnique({
            where: { id: id },
        })
    }

    async findPostByUserId(userId: number) : Promise<Post[] | null> {
        return await this.prisma.post.findMany({
            where: { userId: userId },
        })
    }

    async updatePost(updatePostDto: UpdatePostDto) : Promise<Post | null> {
        const {id, ...data} = updatePostDto;
        return await this.prisma.post.update({
            data,
            where: {
                id
            }
        })
    }
}
