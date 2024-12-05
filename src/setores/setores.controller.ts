import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SetoresService } from './setores.service';

@Controller('setores')
export class SetoresController {
    constructor(private readonly setoresService: SetoresService) {}

    @Post()
    async createSetor(@Body() body: { name: string; userId: number }) {
      return this.setoresService.createSetor(body);
    }
  
    @Get(':userId')
    async getSetores(@Param('userId') userId: number) {
      return this.setoresService.getSetoresByUser(+userId);
    }
    


}
