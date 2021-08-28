import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSubscriptionComponent } from './active-subscription.component';

describe('ActiveSubscriptionComponent', () => {
  let component: ActiveSubscriptionComponent;
  let fixture: ComponentFixture<ActiveSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
