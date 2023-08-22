import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultado-nomes',
  templateUrl: './resultado-nomes.component.html',
  styleUrls: ['./resultado-nomes.component.css']
})
export class ResultadoNomesComponent implements OnInit {
  nomePesquisado: string = '';
  frequenciasPorDecada: any[] = [];
  totalFrequenciaFormatado: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nomePesquisado = params['nome'];
      this.buscarNomes();
    });
  }

  buscarNomes() {
    this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${this.nomePesquisado}`)
      .subscribe(data => {
        console.log('Dados retornados da API:', data);
        this.frequenciasPorDecada = data[0].res.map((item: any) => ({
          decada: this.formatarPeriodo(item.periodo),
          frequencia: this.formatarNumeroComPontos(item.frequencia),
          frequenciaNumerica: Number(item.frequencia)
        }));
        console.log('Resultados mapeados:', this.frequenciasPorDecada);

        this.calcularTotal();
      });
  }

  calcularTotal() {
    const totalFrequencia = this.frequenciasPorDecada.reduce((total, item) => total + item.frequenciaNumerica, 0);
    this.totalFrequenciaFormatado = this.formatarNumeroComPontos(totalFrequencia);
  }

  formatarNumeroComPontos(valor: number): string {
    return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  formatarPeriodo(periodo: string): string {
    return periodo.replace(/,/g, ', ');
  }
}
