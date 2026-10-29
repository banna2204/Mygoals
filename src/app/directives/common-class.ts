import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCommonClass]',
})
export class CommonClass {
  @HostBinding('style.color')
  color = 'green';

  @HostListener('click')
  onClick() {
    this.color = 'red';
  }
}
