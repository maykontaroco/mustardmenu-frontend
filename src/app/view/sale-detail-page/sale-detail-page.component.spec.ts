import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDetailPageComponent } from './sale-detail-page.component';

describe('SaleDetailPageComponent', () => {
  let component: SaleDetailPageComponent;
  let fixture: ComponentFixture<SaleDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleDetailPageComponent]
    });
    fixture = TestBed.createComponent(SaleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
