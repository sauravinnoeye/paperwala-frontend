import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredSubscriptionComponent } from './expired-subscription.component';

describe('ExpiredSubscriptionComponent', () => {
  let component: ExpiredSubscriptionComponent;
  let fixture: ComponentFixture<ExpiredSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
