import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  seeDetails({id}: Customer) {
    this.router.navigate(['details', id]);
  }
  customers: Customer[] = [];
  constructor(
    private router: Router,
    private customerService: CustomersService
  ) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomersList();
  }
}
