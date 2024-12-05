import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

interface CreateUserData {
  username: string;
  password: string;
  url: string;
  apiKey: string
}

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: CreateUserData) {
      // Verifica se o usuário já existe
      const existingUser = await this.prisma.user.findUnique({
        where: { username: data.username },
      });

      if (existingUser) {
        throw new Error('Username already exists');
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);

      return this.prisma.user.create({ 
        data: {
          username: data.username,
          password: hashedPassword,
          url: data.url,
          apiKey : data.apiKey
        } 
      });
    }
  
    async login(username: string, password: string) {
      const user = await this.prisma.user.findFirst({
        where: { username },
      });

      if (user && await bcrypt.compare(password, user.password)) {
        return user;
      }
      return null;
    }
    async findByUsername(username: string) {
      if (!username) {
        throw new Error('Username is required');
      }
      return await this.prisma.user.findUnique({ where: { username } });
    }
    
}
