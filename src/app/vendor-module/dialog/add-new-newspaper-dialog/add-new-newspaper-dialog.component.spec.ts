import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNewspaperDialogComponent } from './add-new-newspaper-dialog.component';

describe('AddNewNewspaperDialogComponent', () => {
  let component: AddNewNewspaperDialogComponent;
  let fixture: ComponentFixture<AddNewNewspaperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewNewspaperDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewNewspaperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
