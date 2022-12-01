import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConversorService } from '../services/conversor.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'conversorMoedas';

  formulario: any;
  valorConvertido: number;
  visibilidadeValorConvertido: boolean;

  visibilidadeValorConvertidoDolar: boolean;
  valorConvertido_dolar:number;

  constructor(private conversorService: ConversorService){ }

  ngOnInit(): void {
    this.visibilidadeValorConvertidoDolar = false; //comeca sem ser mostrado
    this.visibilidadeValorConvertido = false; //comeca sem ser mostrado
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });
  }

  Converter(): void {

    const valor = this.formulario.value.valor; //valor inserido no form
    this.visibilidadeValorConvertido = true; //mostrar o valor convertido

    //Real -> Dolar
    this.conversorService.RealizarConversao().subscribe(resultado => { //subscribe = executar (metodo do Observable)
      //console.log(resultado);
      this.valorConvertido = Number((valor * resultado.rates.BRL).toFixed(2));
    })
  }

  ConverterDolar(): void {

    const valor = this.formulario.value.valor; //valor inserido no form
    this.visibilidadeValorConvertidoDolar = true; //mostrar o valor convertido

    //Dolar -> Real
    this.conversorService.RealizarConversao().subscribe(resultado => { 
      this.valorConvertido_dolar = Number((valor / resultado.rates.BRL).toFixed(2));
      console.log(this.valorConvertido_dolar);
    })
  }
}
