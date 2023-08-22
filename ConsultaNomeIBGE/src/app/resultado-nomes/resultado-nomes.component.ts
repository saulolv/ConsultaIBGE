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
          decada: `${item.periodo}`,
          frequencia: item.frequencia
        }));
        console.log('Resultados mapeados:', this.frequenciasPorDecada);
      });
  }
}
