import { Injectable } from '@angular/core';

export interface Customer {
  id: number;
  username: string;
}
export interface CustomerDetails {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  aboutMe: string;
}
export const customers: CustomerDetails[] = [
  {
    id: 1,
    username: 'namizo',
    firstName: 'tekla',
    lastName: 'aivazashvili',
    aboutMe: 'about tekla',
  },
  {
    id: 2,
    username: 'namizo2',
    firstName: 'tekla2',
    lastName: 'aivazashvili2',
    aboutMe: 'about tekla2',
  },
];
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  getCustomersList(): Customer[] {
    return customers;
  }
  getCustomerById(id: number): CustomerDetails | undefined {
    return customers.find((r) => r.id === id);
  }
  constructor() {}
}
