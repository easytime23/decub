import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LeitosService } from './leitos.service';

@Controller('leitos')
export class LeitosController {

    constructor(private readonly leitosService: LeitosService) {}

    @Post()
    async createLeito(@Body() body: { number: string; setorId: number }) {
      return this.leitosService.createLeito(body);
    }
  
    @Get('setor/:setorId')
    async getLeitosBySetor(@Param('setorId') setorId: string) {
      return this.leitosService.getLeitosBySetor(+setorId);
    }
     
  
  
}
