import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoNomesComponent } from './resultado-nomes.component';

describe('ResultadoNomesComponent', () => {
  let component: ResultadoNomesComponent;
  let fixture: ComponentFixture<ResultadoNomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoNomesComponent]
    });
    fixture = TestBed.createComponent(ResultadoNomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
