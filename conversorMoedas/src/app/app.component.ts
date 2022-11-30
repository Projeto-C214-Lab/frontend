import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConversorService } from './conversor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conversorMoedas';

  formulario: any;
  valorConvertido: number;
  visibilidadeValorConvertido: boolean;

  constructor(private conversorService: ConversorService){ }

  ngOnInit(): void {
    this.visibilidadeValorConvertido = false; //comeca sem ser mostrado
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });
  }

  Converter(): void {

    const valor = this.formulario.value.valor; //valor inserido no form
    this.visibilidadeValorConvertido = true; //mostrar o valor convertido

    this.conversorService.RealizarConversao().subscribe(resultado => { //subscribe = executar (metodo do Observable)
      console.log(resultado);
      this.valorConvertido = Number((valor * resultado.rates.BRL).toFixed(2));
    })
  }
}
