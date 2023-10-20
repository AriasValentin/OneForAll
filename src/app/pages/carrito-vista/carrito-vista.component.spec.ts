import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoVistaComponent } from './carrito-vista.component';

describe('CarritoVistaComponent', () => {
  let component: CarritoVistaComponent;
  let fixture: ComponentFixture<CarritoVistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoVistaComponent]
    });
    fixture = TestBed.createComponent(CarritoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
