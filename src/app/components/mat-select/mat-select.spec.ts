import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelect } from './mat-select';

describe('MatSelect', () => {
  let component: MatSelect;
  let fixture: ComponentFixture<MatSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(MatSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
