import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodExpirationComponent } from './food-expiration.component';

describe('FoodExpirationComponent', () => {
  let component: FoodExpirationComponent;
  let fixture: ComponentFixture<FoodExpirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodExpirationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodExpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
