import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaNomesComponent } from './consulta-nomes/consulta-nomes.component';

const routes: Routes = [
  { path: '', component: ConsultaNomesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
