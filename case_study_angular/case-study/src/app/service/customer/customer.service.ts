import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  HTTP_CUSTOMER ="http://localhost:3000/customers";
  HTTP_CUSTOMER_TYPE ="http://localhost:3000/customerTypes";

  constructor(private httpClient:HttpClient) {

  }

  getAll():Observable<Customer[]> {
  // @ts-ignore
    return this.httpClient.get(this.HTTP_CUSTOMER);
  }

  getAllCustomerType() {
    return this.httpClient.get(this.HTTP_CUSTOMER_TYPE)
  }

  saveCustomerCreate(customer: Customer):Observable<Customer> {

  // @ts-ignore
    return this.httpClient.post(this.HTTP_CUSTOMER,customer)

  }
}
