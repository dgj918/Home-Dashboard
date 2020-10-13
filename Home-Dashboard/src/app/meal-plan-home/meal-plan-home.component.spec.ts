import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanHomeComponent } from './meal-plan-home.component';

describe('MealPlanHomeComponent', () => {
  let component: MealPlanHomeComponent;
  let fixture: ComponentFixture<MealPlanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
