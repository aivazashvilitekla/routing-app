import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CustomerDetails,
  CustomersService,
} from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerDetails: CustomerDetails | undefined;

  constructor(
    private customerService: CustomersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.customerDetails = this.customerService.getCustomerById(Number(id));
  }
}
