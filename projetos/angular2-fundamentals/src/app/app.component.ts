import { Component, Inject } from '@angular/core';
//Desnecessário com inject
//import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
  <ul>
    <li *ngFor="let message of mail.messages">{{message.text}}</li>
  </ul>
  <app-simple-form *ngFor="let message of mail.messages"
  [inputMessage]="message.text" (update)="onUpdate(message.id,$event.text)"
  >

  </app-simple-form>

  </div>
  `,
  styles: [`
  app-simple-form{
    margin-bottom:10px;
  }
  `]
})
export class AppComponent {
  title = 'Let´s get started!';

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  //Versão sem inject
  //constructor(private mail:MailService){}
  //Versão com inject:
  constructor( @Inject('mail') private mail) {

  }
}
