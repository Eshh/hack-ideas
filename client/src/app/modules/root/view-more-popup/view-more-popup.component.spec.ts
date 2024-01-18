import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMorePopupComponent } from './view-more-popup.component';

describe('ViewMorePopupComponent', () => {
  let component: ViewMorePopupComponent;
  let fixture: ComponentFixture<ViewMorePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMorePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMorePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
