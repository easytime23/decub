
import { Body, Controller, Post, Param } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ExternalApiService } from './external-api.service';

@Controller('external')
export class ExternalApiController {
        constructor(
            private readonly usersService : UsersService,
            private readonly externalApiService :ExternalApiService,
        ){}

        @Post('setores')
        async getSetores(@Body() body:{username: string } ){
            const user = await this.usersService.findByUsername(body.username);

            if(!user){
                return { message: 'credencias invalidas'};
            }

            const {url , apiKey} = user
            const setores  = await  this.externalApiService.fetchSetores(url, apiKey)
            return setores;
        }
        @Post('leitos/:setorId')
        async getLeitos(

            @Param('setorId') setorId : number,
            @Body() body : {username:string}
        ){
            const user = await this.usersService.findByUsername(body.username);
            if(!user){
                return { message: 'credencias invalidas'};
            }
            const {url , apiKey} = user
            const leitos = await this.externalApiService.fetchLeitos(url,apiKey , setorId)
            return leitos;
        }}
