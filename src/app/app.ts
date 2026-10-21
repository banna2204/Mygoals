import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Customization } from './components/customization/customization';
import { Graph } from './components/graph/graph';
import { DeferComponent } from './components/defer-component/defer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Graph, DeferComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = signal('Hello');
  dialog = inject(MatDialog);
  isAdmin = signal<boolean>(false);
  density = signal<string>('high');

  openDialog() {
    const dialogRef = this.dialog.open(Customization , {
      width: '400px',
      height: '400px',
    })
  }
}
