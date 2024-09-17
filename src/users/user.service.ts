import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
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
}