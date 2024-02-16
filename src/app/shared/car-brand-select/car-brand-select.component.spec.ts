import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBrandSelectComponent } from './car-brand-select.component';

describe('CarBrandSelectComponent', () => {
  let component: CarBrandSelectComponent;
  let fixture: ComponentFixture<CarBrandSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarBrandSelectComponent]
    });
    fixture = TestBed.createComponent(CarBrandSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
