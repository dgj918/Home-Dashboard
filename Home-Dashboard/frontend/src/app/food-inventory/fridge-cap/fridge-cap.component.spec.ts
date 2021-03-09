import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeCapComponent } from './fridge-cap.component';

describe('FridgeCapComponent', () => {
  let component: FridgeCapComponent;
  let fixture: ComponentFixture<FridgeCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FridgeCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
