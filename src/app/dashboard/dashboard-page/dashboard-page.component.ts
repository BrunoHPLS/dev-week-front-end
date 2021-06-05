import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
/*NgOnInit é o primeiro método que é acionado quando o componente renderiza pela primeira vez
OnChange acontece toda vez que ocorre uma mudança naquele componente
OnDestroy acontece quando o componente sai da tela */
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    /*Assim que o componente for montado, este método será chamado */
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void>{
    /*Esse método diz que ele vai aguardar a resposta do servidor para atribuir o retorno nesse atributo */
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);
  }

}
