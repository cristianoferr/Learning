import { Component } from '@angular/core';
//Desnecessário com inject
//import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templatetye:`<div>
  <app-simple-form></app-simple-form>
  {{mail.message}}
  </div>
  `
})
export class AppComponent {
  title = 'Let´s get started!';

  //Versão sem inject
  //construct(private mail:MailService){}
  //Versão com inject:
  construct(@Inject('mail') private mail){}
}
