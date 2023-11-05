import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPagCartasUnknownComponent } from './vista-pag-cartas-unknown.component';

describe('VistaPagCartasUnknownComponent', () => {
  let component: VistaPagCartasUnknownComponent;
  let fixture: ComponentFixture<VistaPagCartasUnknownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPagCartasUnknownComponent]
    });
    fixture = TestBed.createComponent(VistaPagCartasUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
