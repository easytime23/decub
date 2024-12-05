import { Module } from '@nestjs/common';
import { ExternalApiController } from './external-api.controller';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from 'src/users/users.module';
import { ExternalApiService } from './external-api.service';

@Module({
  imports : [HttpModule, UsersModule],
  exports: [ExternalApiService],
  providers: [ExternalApiService],
  controllers: [ExternalApiController]
  
})
export class ExternalApiModule {}
