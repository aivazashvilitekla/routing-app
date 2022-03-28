import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shell/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/customer-list/customer-list.module').then((m) => m.CustomerListModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./pages/customer-details/customer-details.module').then((m) => m.CustomerDetailsModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
