import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesLoginComponent } from './botones-login.component';

describe('BotonesLoginComponent', () => {
  let component: BotonesLoginComponent;
  let fixture: ComponentFixture<BotonesLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesLoginComponent]
    });
    fixture = TestBed.createComponent(BotonesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
