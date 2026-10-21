import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dialog } from './dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

describe('Dialog', () => {
  let component: Dialog;
  let fixture: ComponentFixture<Dialog>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<Dialog>>;

  const mockDialogData = { name: 'Angular 21 Test'};

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [Dialog],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Dialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render data', () => {
    const compile = fixture.nativeElement as HTMLElement;
    component.data = {name:'Angular 21 Test'};
    expect(compile.querySelector('h1')?.textContent).toContain('Hello,', mockDialogData);
  });

  it('should call onCancel when the cancel button is clicked', () => {
    spyOn(component, 'closeDialog');
    const cancelBtn = fixture.debugElement.query(By.css('#cancel-btn')).nativeElement;
    
    cancelBtn.click();
    
    expect(component.closeDialog).toHaveBeenCalled();
  });

  it('should dialog close', () => {
    component.closeDialog()
    expect(dialogRefSpy.close).toHaveBeenCalled()
  })
});
