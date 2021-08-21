import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNewspaperComponent } from './manage-newspaper.component';

describe('ManageNewspaperComponent', () => {
  let component: ManageNewspaperComponent;
  let fixture: ComponentFixture<ManageNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
