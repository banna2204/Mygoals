import { Component, computed, signal } from '@angular/core';

interface User {
  name: string,
  lastname: string
}

@Component({
  selector: 'app-animated-scroll-up',
  imports: [],
  templateUrl: './animated-scroll-up.html',
  styleUrl: './animated-scroll-up.scss',
})
export class AnimatedScrollUp {
  isOpen = signal<boolean>(true);
  name = signal<User>({name:'shubham', lastname:'panwar'});
  count = signal<number>(0);
  firstName = signal<string>('abcd');
  lastName = signal<string>('efgh');
  doubleCount = this.count.asReadonly()
  fullName = computed(() => this.firstName() + this.lastName())

  expandPanel() {
    console.log(this.fullName())
    this.lastName.update((ls)=> '1234');
    this.count.update((c) => c + 1);
    this.isOpen.set(!this.isOpen());
    this.name.update((name) => ({ ...name, lastname:'singh' }))
    // console.log(this.name());
    // console.log(this.count())
    // console.log(this.doubleCount())
  }
}
