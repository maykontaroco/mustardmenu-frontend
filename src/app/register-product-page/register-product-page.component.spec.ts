import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProductPageComponent } from './register-product-page.component';

describe('RegisterProductPageComponent', () => {
  let component: RegisterProductPageComponent;
  let fixture: ComponentFixture<RegisterProductPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterProductPageComponent]
    });
    fixture = TestBed.createComponent(RegisterProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
