import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePageComponent } from './sale-page.component';

describe('SalePageComponent', () => {
  let component: SalePageComponent;
  let fixture: ComponentFixture<SalePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalePageComponent]
    });
    fixture = TestBed.createComponent(SalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
