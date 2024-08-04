import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService, Client } from '../client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: Client | undefined;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.clientService.getClient(id).subscribe(client => this.client = client);
  }

  updateClient(): void {
    if (this.client) {
      this.clientService.updateClient(this.client);
      this.router.navigate(['/client-list']);
    }
  }
}
