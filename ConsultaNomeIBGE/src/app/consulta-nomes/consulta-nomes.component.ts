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
      this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${this.nome}`)
        .subscribe(data => {
          console.log('Dados retornados da API:', data);
          this.resultados = data[0].res.filter((item: any) => item.periodo === 'Classe')
            .map((item: any) => ({
              decada: `${item.periodo_inicial} - ${item.periodo_final}`,
              frequencia: item.frequencia
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
