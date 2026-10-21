import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { MatDialog } from '@angular/material/dialog';
import { Customization } from './components/customization/customization';
import { By } from '@angular/platform-browser';

describe('App', () => {
  let component : App;
  let fixture : ComponentFixture<App>;
  let dialogSpy : jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: MatDialog, useValue: dialogSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', async () => {
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Hello');
  });

  it('should render the dialog', () => {
    component.openDialog();

    expect(dialogSpy.open).toHaveBeenCalledWith(Customization, {
      width: '400px',
      height: '400px',
    })
  });

  it('should openDialog function invoke', () => {
    const compiled = fixture.debugElement.queryAll(By.css('div'));
    const targetEle = compiled.find((e) => e.nativeElement.textContent.includes('open dialog'))

    spyOn(component, 'openDialog');
    targetEle?.triggerEventHandler('click')

    expect(component.openDialog).toHaveBeenCalled()
  })

  it('should isAdmin class dynamically added', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const testing = compiled.querySelector('.testing')

    component.isAdmin.set(true);
    await fixture.whenStable();

    expect(testing?.textContent).toContain('classes and styles')
    expect(testing?.classList).toContain('admin')
  });
});
