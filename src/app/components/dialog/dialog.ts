import { Component } from '@angular/core';
import {inject} from '@angular/core';
import { MatDialogRef, MatDialogClose } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog',
  imports: [MatButtonModule, MatDialogClose, MatDialogTitle, MatDialogContent, MatRadioModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  dialogRef = inject(MatDialogRef);
  data = inject<{name: string}>(MAT_DIALOG_DATA);

  closeDialog() {
    this.dialogRef.close();
  }

  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
}
