import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirdSubscriptionComponent } from './expird-subscription.component';

describe('ExpirdSubscriptionComponent', () => {
  let component: ExpirdSubscriptionComponent;
  let fixture: ComponentFixture<ExpirdSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirdSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirdSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
