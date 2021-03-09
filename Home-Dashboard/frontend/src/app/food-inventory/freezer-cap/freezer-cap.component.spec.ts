import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezerCapComponent } from './freezer-cap.component';

describe('FreezerCapComponent', () => {
  let component: FreezerCapComponent;
  let fixture: ComponentFixture<FreezerCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezerCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezerCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
