import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Customization } from './components/customization/customization';
import { Graph } from './components/graph/graph';
import { DeferComponent } from './components/defer-component/defer-component';
import { Button } from './components/button/button';
import { AnimatedScrollUp } from './components/animated-scroll-up/animated-scroll-up';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Graph, DeferComponent, Button, AnimatedScrollUp],
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
      width: '700px',
      height: '600px',
      maxHeight: '95vh',
      maxWidth: '90vw'
    })
  }

  userClicked(event: Event) {
    console.log(event)
  }
}
