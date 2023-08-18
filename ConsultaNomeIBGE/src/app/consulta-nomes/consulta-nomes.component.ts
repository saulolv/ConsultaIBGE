import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  buscarNomes() {
    if (this.nome) {
      this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${this.nome}`)
        .subscribe(data => {
          this.resultados = data[0].res.filter((item: any) => item.periodo === 'DECADA')
            .map((item: any) => ({
              decada: `${item.periodo_inicial} - ${item.periodo_final}`,
              frequencia: item.frequencia
            }));
        });
    }
  }

  cancelar() {
    this.nome = '';
    this.resultados = [];
  }
}
