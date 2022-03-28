import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { CustomerListRoutingModule } from './customer-list-routing.module';

@NgModule({
  imports: [
    CommonModule, CustomerListRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomerListModule { }
