import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedToBuyComponent } from './need-to-buy.component';

describe('NeedToBuyComponent', () => {
  let component: NeedToBuyComponent;
  let fixture: ComponentFixture<NeedToBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedToBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
