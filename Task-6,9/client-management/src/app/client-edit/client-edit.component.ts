import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit{
  client: Client | undefined;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.clientService.getClient(id).subscribe((data: Client) => {
      this.client = data;
    });
  }

  updateClient(): void {
    if (this.client) {
      this.clientService.updateClient(this.client).subscribe(() => {
        this.router.navigate(['/clients']);
      });
    }
  }
}
