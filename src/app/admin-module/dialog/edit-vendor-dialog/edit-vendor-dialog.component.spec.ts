import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorDialogComponent } from './edit-vendor-dialog.component';

describe('EditVendorDialogComponent', () => {
  let component: EditVendorDialogComponent;
  let fixture: ComponentFixture<EditVendorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVendorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
