import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients: Client[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' }
  ];

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(this.clients);
  }

  getClient(id: number): Observable<Client | undefined> {
    return of(this.clients.find(client => client.id === id));
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  updateClient(client: Client): void {
    const index = this.clients.findIndex(c => c.id === client.id);
    if (index !== -1) {
      this.clients[index] = client;
    }
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter(client => client.id !== id);
  }
}
