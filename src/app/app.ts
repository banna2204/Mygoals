import { Component, ElementRef, inject, signal, ViewChild, viewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ParaDirective } from './directives/test-directive';
import { Test } from './components/test/test';
import { CommonClass } from './directives/common-class';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParaDirective, CommonClass],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-goals');
  @ViewChild(ParaDirective) paraDirective!: ParaDirective;
  @ViewChild('content') ele!: ElementRef;

  isActive = signal<boolean>(false);
  router = inject(Router);
  user = signal<User>({ name: 'John Doe', age: 30 });

  onColorChange() {
    this.paraDirective.changeTextColor('green');
    this.ele.nativeElement.innerText = 'hello'
  }

  navigateTo() {
    this.router.navigate(['/test'],{
      queryParams:{
        title:'angular'
      }
    })
  }
}
