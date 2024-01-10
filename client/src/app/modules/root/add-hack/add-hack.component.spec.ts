import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHackComponent } from './add-hack.component';

describe('AddHackComponent', () => {
  let component: AddHackComponent;
  let fixture: ComponentFixture<AddHackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
