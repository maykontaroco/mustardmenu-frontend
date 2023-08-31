import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleHistoryPageComponent } from './sale-history-page.component';

describe('SaleHistoryPageComponent', () => {
  let component: SaleHistoryPageComponent;
  let fixture: ComponentFixture<SaleHistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleHistoryPageComponent]
    });
    fixture = TestBed.createComponent(SaleHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
