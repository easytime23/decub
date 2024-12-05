import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() body: { username: string; password: string; url : string , apiKey: string }) {
      try {
        return await this.usersService.createUser(body);
      } catch (error) {
        if (error.message === 'Username already exists') {
          return { message: 'Username is already taken' };
        }
        throw error;
      }
    }
  
    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
      const user = await this.usersService.login(body.username, body.password);
      if (!user) {
        return { message: 'Invalid credentials' };
      }
      const { password, ...result } = user; 
      return result;
    }
}
