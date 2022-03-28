import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerDetailsRoutingModule } from './customer-details-routing.module';

@NgModule({
  imports: [
    CommonModule, CustomerDetailsRoutingModule
  ],
  declarations: [CustomerDetailsComponent]
})
export class CustomerDetailsModule { }
