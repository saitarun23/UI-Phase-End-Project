import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {
  client: Client = { id: 0, name: '', email: '', phone: '' };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  addClient(): void {
    this.clientService.addClient(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
