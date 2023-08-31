import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAdditionComponent } from './popup-addition.component';

describe('PopupAdditionComponent', () => {
  let component: PopupAdditionComponent;
  let fixture: ComponentFixture<PopupAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAdditionComponent]
    });
    fixture = TestBed.createComponent(PopupAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
