import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePaymentPageComponent } from './sale-payment-page.component';

describe('SalePaymentPageComponent', () => {
  let component: SalePaymentPageComponent;
  let fixture: ComponentFixture<SalePaymentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalePaymentPageComponent]
    });
    fixture = TestBed.createComponent(SalePaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
