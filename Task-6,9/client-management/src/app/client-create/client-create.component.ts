import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService, Client } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {
  client: Client = { id: 0, name: '', email: '', phone: '' };

  constructor(private clientService: ClientService, private router: Router) { }

  createClient(): void {
    this.clientService.addClient(this.client);
    this.router.navigate(['/client-list']);
  }
}
