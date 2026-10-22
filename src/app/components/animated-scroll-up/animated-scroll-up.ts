import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-animated-scroll-up',
  imports: [],
  templateUrl: './animated-scroll-up.html',
  styleUrl: './animated-scroll-up.scss',
})
export class AnimatedScrollUp {
  isOpen = signal<boolean>(false);

  expandPanel() {
    this.isOpen.set(!this.isOpen());
  }
}
