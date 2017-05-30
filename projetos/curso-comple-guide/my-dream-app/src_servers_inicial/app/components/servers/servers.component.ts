import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No Server was created";
  serverName: string = "TestServer";
  serverCreated: boolean = false;

  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = !this.allowNewServer;
      }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is: " + this.serverName;
  }

  //one way binding
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
