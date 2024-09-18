import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateNewUserGraphDto } from "./dto/createNewUserGraph.dto";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    async createUser(createNewUser: CreateNewUserGraphDto) {
        return await this.prisma.user.create({
            data: createNewUser
        })
    }

    async findUserById(id: number) {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            }
        })
    }

    async findUserByUsername(username: string) {
        return await this.prisma.user.findFirst({
            where: {
                username: username
            }
        })
    }
}