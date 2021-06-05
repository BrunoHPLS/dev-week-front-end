import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input() stock = new Stock();


  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string{
    /*Pegou a variação e transformou em uma string, logo após isso, adicionou um sinal + caso o valor em numero
    seja positivo e um sinal - caso seja negativo */
    const localizedVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+': '-';
    return `${prefix} ${localizedVariationString.replace('-','')}%`;
  }

}
