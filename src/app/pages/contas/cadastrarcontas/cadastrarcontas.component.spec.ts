import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarcontasComponent } from './cadastrarcontas.component';

describe('CadastrarcontasComponent', () => {
  let component: CadastrarcontasComponent;
  let fixture: ComponentFixture<CadastrarcontasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarcontasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarcontasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
