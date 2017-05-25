import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text">
      <button (click)="onClick($evemt,myInput.value)">Click Me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
//Events: click, mouseover
  onClick(event,value){
    console.log(event);
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
