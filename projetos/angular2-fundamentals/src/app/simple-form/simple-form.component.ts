import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
      <input 
      #myInput 
      type="text" 
      [(ngModel)]="inputMessage"
      [ngClass]="{mousedown:isMouseDown}"
      (mousedown)="isMouseDown=true"
      (mouseup)="isMouseDown=false"
      (mouseleave)="isMouseDown=false"
      >
      <button (click)="update.emit({text:inputMessage})">Click Me!</button>
  `,
  styles: [`
  :host{
    display:flex;
    flex-direction:column;
  }

  .mousedown{
    border:2px solid green;
  }

  input:focus{
    font-weight:bold;
    outline:none;
  }

  button{border:none;}
  `]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  @Input() inputMessage;

  @Output() update = new EventEmitter();

  //Events: (click), (mouseover)
  // sintaxe [(ngModel)] significa two-way binding
  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
