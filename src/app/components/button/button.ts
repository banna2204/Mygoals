import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() color : string = '';
  @Input() bgColor : string = '';
  @Output() clicked = new EventEmitter();

  onClick() {
    this.clicked.emit('clicked');
  }
}
