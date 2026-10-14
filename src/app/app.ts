import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Customization } from './components/customization/customization';
import { Graph } from './components/graph/graph';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Graph],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = signal('Hello');
  dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(Customization , {
      width: '400px',
      height: '400px',
    })
  }
}
