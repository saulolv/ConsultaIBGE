import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaNomesComponent } from './consulta-nomes/consulta-nomes.component';
import { ResultadoNomesComponent } from './resultado-nomes/resultado-nomes.component';

const routes: Routes = [
  { path: '', component: ConsultaNomesComponent },
  { path: 'resultado/:nome', component: ResultadoNomesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
