import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customization } from './customization';
import { By } from '@angular/platform-browser';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

describe('Customization', () => {
  let component: Customization;
  let fixture: ComponentFixture<Customization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customization],
    }).compileComponents();

    fixture = TestBed.createComponent(Customization);
    component = fixture.componentInstance;
    fixture.detectChanges()
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should autocomplete panel trigger', () => {
    const input = fixture.debugElement.query(By.css('input[autoComplete]'));

    const trigger = input.injector.get(MatAutocompleteTrigger);
    expect(trigger.panelOpen).toBeFalse();

    trigger.openPanel();
    expect(trigger.panelOpen).toBeTrue()
  });

  it('should render correct mat-icon', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const icon = compiled.querySelector('.search-icon');
    expect(icon?.textContent).toContain('apps');

    const input = fixture.debugElement.query(By.css('input[autoComplete]'));
    const trigger = input.injector.get(MatAutocompleteTrigger);

    trigger.openPanel();
    fixture.detectChanges()
    await fixture.whenStable();
    expect(icon?.textContent).toContain('search');
  });

  it('should render correct arrow icon', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const icon = compiled.querySelector('.arrow-icon');

    expect(icon?.textContent).toContain('keyboard_arrow_down');

    const input = fixture.debugElement.query(By.css('input[autoComplete'));
    const trigger = input.injector.get(MatAutocompleteTrigger);

    trigger.openPanel();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(icon?.textContent).toContain('keyboard_arrow_up')
  })
});
