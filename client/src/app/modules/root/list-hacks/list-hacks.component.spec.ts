import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHacksComponent } from './list-hacks.component';

describe('ListHacksComponent', () => {
  let component: ListHacksComponent;
  let fixture: ComponentFixture<ListHacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
