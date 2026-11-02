import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedScrollUp } from './animated-scroll-up';

describe('AnimatedScrollUp', () => {
  let component: AnimatedScrollUp;
  let fixture: ComponentFixture<AnimatedScrollUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedScrollUp],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedScrollUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
