import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeitosService {

    constructor(private prisma: PrismaService) {}

    async createLeito(data: { number: string; setorId: number }) {
        return this.prisma.leito.create({
            data: {
                number: data.number, // Aqui pegamos o valor do número do leito
                setor: {
                    connect: { id: data.setorId } // Conectamos o leito ao setor pelo ID
                }
            }
        });
    }
  
    async getLeitosBySetor(setorId: number) {
        return this.prisma.leito.findMany({
            where: { setorId } // Filtramos leitos que pertencem ao setor com o ID passado
        });
    }
  

}
