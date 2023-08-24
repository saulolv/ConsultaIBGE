import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface ResultadoDecada {
  decada: string;
  frequencia: number;
}

@Component({
  selector: 'app-consulta-nomes',
  templateUrl: './consulta-nomes.component.html',
  styleUrls: ['./consulta-nomes.component.css']
})
export class ConsultaNomesComponent {
  nome: string = '';
  resultados: ResultadoDecada[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  buscarNomes() {
    console.log('Função buscarNomes() foi chamada.'); 
    if (this.nome) {
      this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${this.nomePesquisado}`)
        .subscribe(data => {
          console.log('Dados retornados da API:', data);
          this.frequenciasPorDecada = data[0].res.map((item: any) => ({
            decada: this.formatarPeriodo(item.periodo),
            frequencia: this.formatarNumeroComPontos(item.frequencia),
            frequenciaNumerica: Number(item.frequencia)
          }));
            console.log('Resultados mapeados:', this.resultados);
        });
        this.router.navigate(['/resultado', this.nome]);
    }
  }
console.log('Função buscarNomes() foi chamada.'); 
    if (this.nome) {
      this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${this.nomePesquisado}`)
      .subscribe(data => {
        console.log('Dados retornados da API:', data);
        this.frequenciasPorDecada = data[0].res.map((item: any) => ({
          decada: this.formatarPeriodo(item.periodo),
          frequencia: this.formatarNumeroComPontos(item.frequencia),
          frequenciaNumerica: Number(item.frequencia)
        }));
            console.log('Resultados mapeados:', this.resultados);
        });
        this.router.navigate(['/resultado', this.nome]);
    }
  }

  cancelar() {
    console.log('Função cancelar() foi chamada.');
    this.nome = '';
    this.resultados = [];
  }
}
