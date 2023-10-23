import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCartaComponent } from './listar-carta.component';

describe('ListarCartaComponent', () => {
  let component: ListarCartaComponent;
  let fixture: ComponentFixture<ListarCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
