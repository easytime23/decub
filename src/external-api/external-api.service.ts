import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';

@Injectable()
export class ExternalApiService {
  private readonly httpClient: AxiosInstance;

  constructor(private httpService: HttpService) {
    this.httpClient = this.httpService.axiosRef;
  }

  async fetchSetores(url: string, apiKey: string) {
    try {
      const response = await this.httpClient.get(`${url}/rest/v1/setores?apikey=${apiKey}`, {
        headers: {
            'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar setores:', error.message);
      throw new Error('Fetch deu erro ao fazer o get');
    }
  }

  async fetchLeitos(url: string, apiKey: string, setorId: number) {
    try {
      const response = await this.httpClient.get(`${url}/rest/v1/leitos?setor_id=eq.${setorId}&apikey=${apiKey}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      return response.data;
    } catch (error) {
      throw new Error('Fetch dos leitos deu erro:' + error.message);
    }
  }
}
