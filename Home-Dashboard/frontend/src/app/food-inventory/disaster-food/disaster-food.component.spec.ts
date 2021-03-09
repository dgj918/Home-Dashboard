import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterFoodComponent } from './disaster-food.component';

describe('DisasterFoodComponent', () => {
  let component: DisasterFoodComponent;
  let fixture: ComponentFixture<DisasterFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
