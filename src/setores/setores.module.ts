import { Module } from '@nestjs/common';
import { SetoresService } from './setores.service';
import { SetoresController } from './setores.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [SetoresService, PrismaService],
  controllers: [SetoresController]
})
export class SetoresModule {}
