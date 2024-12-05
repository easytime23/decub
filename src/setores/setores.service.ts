import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SetoresService {
    constructor(private prisma: PrismaService) {}

    async createSetor(data: { name: string; userId: number }) {
      return this.prisma.setor.create({
        data: {
          name: data.name,
          user: {
            connect: { id: data.userId } // Conecta o setor ao usuário
          }
        }
      });
    }
  
    async getSetoresByUser(userId: number) {
      return this.prisma.setor.findMany({
        where: { userId },
      });
    }


}
