import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dialog } from './dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('Dialog', () => {
  let component: Dialog;
  let fixture: ComponentFixture<Dialog>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<Dialog>>;

  const mockDialogData = { name: 'Angular 21 Test', id: 101 };

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
    // await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
