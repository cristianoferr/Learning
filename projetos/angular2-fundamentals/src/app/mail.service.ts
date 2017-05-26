import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [{ id: 0, text: `Mensagem1` },
  { id: 1, text: `Mensagem2` },
  { id: 2, text: `Mensagem3` }
  ];

  update(id, text) {
    this.messages = this.messages.map(m => m.id === id ? { id, text } : m
    );
  }

  constructor() { }

}
