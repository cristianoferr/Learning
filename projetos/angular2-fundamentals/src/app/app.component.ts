import { Component } from '@angular/core';
//Desnecessário com inject
//import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templatetye:`<div>
  <app-simple-form></app-simple-form>
  {{mail.message}}
  <hr>
  {{api}}
  </div>
  `
})
export class AppComponent {
  title = 'Let´s get started!';

  //Versão sem inject
  //construct(private mail:MailService){}
  //Versão com inject:
  construct(@Inject('mail') private mail,
  @Inject('api') private api){

  }
}
https://egghead.io/lessons/angular-2-provide-and-share-values-with-angular-2-dependency-injection