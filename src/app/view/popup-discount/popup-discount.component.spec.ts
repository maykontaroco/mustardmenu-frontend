import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDiscountComponent } from './popup-discount.component';

describe('PopupDiscountComponent', () => {
  let component: PopupDiscountComponent;
  let fixture: ComponentFixture<PopupDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupDiscountComponent]
    });
    fixture = TestBed.createComponent(PopupDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
