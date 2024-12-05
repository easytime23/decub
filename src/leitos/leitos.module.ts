import { Module } from '@nestjs/common';
import { LeitosService } from './leitos.service';
import { LeitosController } from './leitos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LeitosService, PrismaService],
  controllers: [LeitosController]
})
export class LeitosModule {}
