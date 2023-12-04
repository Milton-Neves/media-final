import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  boletim = {
    obterBim1: () => 0,
    obterBim2: () => 0,
  };

  resultadoParcial = '';
  resultadoFinal = '';

  mediaParcial = 0;

  calcMP(bim1: number, bim2: number): void {
    this.mediaParcial = (bim1 + bim2) / 2;
    this.resultadoParcial = `Média Parcial: ${this.mediaParcial}`;
  }

  calcMF(naf: number): void {
    this.resultadoFinal = `Média Final: ${(this.mediaParcial + naf) / 2}`;
  }
}
