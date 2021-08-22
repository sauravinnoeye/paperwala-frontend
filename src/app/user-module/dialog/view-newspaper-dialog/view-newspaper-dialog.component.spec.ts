import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewspaperDialogComponent } from './view-newspaper-dialog.component';

describe('ViewNewspaperDialogComponent', () => {
  let component: ViewNewspaperDialogComponent;
  let fixture: ComponentFixture<ViewNewspaperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewspaperDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewspaperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
