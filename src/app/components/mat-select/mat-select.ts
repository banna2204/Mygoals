import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mat-select',
  imports: [FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatIconModule],
  templateUrl: './mat-select.html',
  styleUrl: './mat-select.scss',
})
export class MatSelect {
  isPanelOpen = signal(false);
  value = signal<number | null>(null);
  options = [
    {label: 'None', value: null},
    {label: 'One', value: 1},
    {label: 'Two', value: 2},
    {label: 'Three', value: 3},
  ];

}
