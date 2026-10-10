import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelect } from './components/mat-select/mat-select';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSelect],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-goals');
}
