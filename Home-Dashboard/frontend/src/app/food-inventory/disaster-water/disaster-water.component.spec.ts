import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterWaterComponent } from './disaster-water.component';

describe('DisasterWaterComponent', () => {
  let component: DisasterWaterComponent;
  let fixture: ComponentFixture<DisasterWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
