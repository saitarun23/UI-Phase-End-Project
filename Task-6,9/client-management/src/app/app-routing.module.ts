import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'./clients',pathMatch:'full'},
  {path:'clients',component:ClientsComponent},
  { path: 'client/:id', component: ClientDetailComponent },
  { path: 'add-client', component: ClientAddComponent },
  { path: 'edit-client/:id', component: ClientEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
