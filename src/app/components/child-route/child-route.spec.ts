import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoute } from './child-route';

describe('ChildRoute', () => {
  let component: ChildRoute;
  let fixture: ComponentFixture<ChildRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildRoute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
