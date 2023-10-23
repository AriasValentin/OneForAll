import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoCartaComponent } from './marco-carta.component';

describe('MarcoCartaComponent', () => {
  let component: MarcoCartaComponent;
  let fixture: ComponentFixture<MarcoCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
