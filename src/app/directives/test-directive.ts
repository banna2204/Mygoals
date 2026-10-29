import { Directive, ElementRef, HostListener, input, Input } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Directive({
  selector: '[appParaDirective]',
})
export class ParaDirective {
  constructor(private ele: ElementRef) {}
  title = input<string>();
  user = input<User>();

  ngAfterViewInit() {
    console.log(this.title());
    console.log(this.user());
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.color = 'black';
  }

  changeTextColor(color: string) {
    this.ele.nativeElement.style.color = color;
  }
}
