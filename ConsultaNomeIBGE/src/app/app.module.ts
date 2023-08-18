import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaNomesComponent } from './consulta-nomes/consulta-nomes.component';
import { ResultadoNomesComponent } from './resultado-nomes/resultado-nomes.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaNomesComponent,
    ResultadoNomesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
