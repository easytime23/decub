import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SetoresModule } from './setores/setores.module';
import { LeitosModule } from './leitos/leitos.module';
import { HttpModule } from '@nestjs/axios';
import { ExternalApiService } from './external-api/external-api.service';
import { ExternalApiModule } from './external-api/external-api.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [ UsersModule, SetoresModule, LeitosModule, HttpModule, ExternalApiModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ExternalApiService ] ,
})
export class AppModule {}
