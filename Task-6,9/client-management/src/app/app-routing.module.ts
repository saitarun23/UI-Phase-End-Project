import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/client-list', pathMatch: 'full' },
  { path: 'client-list', component: ClientListComponent },
  { path: 'client-details/:id', component: ClientDetailsComponent },
  { path: 'client-create', component: ClientCreateComponent },
  { path: 'client-edit/:id', component: ClientEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
