import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
/*No TypeScript, ao inves de se colocar uma documentação, os métodos são feitos esperando receber e
 enviar algo já pre-definido */
  readonly baseUrl = 'https://devweek-bootcamp-santander-dio.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  /*Método utilizado para pegar os stocks do banco de dados por meio do método ja criado no backend */
  async getStocks(): Promise<Stock[]>{
    /*toJava: const ~= final, let ~= variável normal, var ~= static*/

    /*Basicamente falando para a URL que vá buscar um Array de stock por meio do método get */
    /*                  o mesmo que  this.baseUrl + '/stock'        */
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
