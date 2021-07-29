import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReusableComponent } from './display-reusable.component';

describe('DisplayReusableComponent', () => {
  let component: DisplayReusableComponent;
  let fixture: ComponentFixture<DisplayReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReusableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
