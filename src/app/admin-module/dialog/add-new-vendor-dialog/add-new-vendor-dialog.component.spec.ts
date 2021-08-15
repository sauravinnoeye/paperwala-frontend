import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVendorDialogComponent } from './add-new-vendor-dialog.component';

describe('AddNewVendorDialogComponent', () => {
  let component: AddNewVendorDialogComponent;
  let fixture: ComponentFixture<AddNewVendorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewVendorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVendorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
