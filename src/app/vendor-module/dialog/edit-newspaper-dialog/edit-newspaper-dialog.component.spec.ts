import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewspaperDialogComponent } from './edit-newspaper-dialog.component';

describe('EditNewspaperDialogComponent', () => {
  let component: EditNewspaperDialogComponent;
  let fixture: ComponentFixture<EditNewspaperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewspaperDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewspaperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
