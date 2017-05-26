import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //Versão sem inject
  //providers: [MailService],
  //Versão com inject
  providers: [{ provide: 'mail', useClass: MailService },
  { provide: 'api', useValue: 'http://localhost:3000/' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
