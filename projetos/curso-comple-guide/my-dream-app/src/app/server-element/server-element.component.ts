import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges,
  DoCheck, AfterViewInit, ElementRef, AfterViewChecked, ContentChild, ViewChild, AfterContentInit, AfterContentChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("srvElement") element: {
    type: string, name: string, content: string
  }
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;


  constructor() {
    console.log("constructor called");

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngOnInit() {
    console.log("ngOnInit called: " + this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log("AfterContentInit called. TC:" + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log("AfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit called: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("OnDestroy called");
  }

}
