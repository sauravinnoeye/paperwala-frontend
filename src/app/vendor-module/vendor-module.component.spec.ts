import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorModuleComponent } from './vendor-module.component';

describe('VendorModuleComponent', () => {
  let component: VendorModuleComponent;
  let fixture: ComponentFixture<VendorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
