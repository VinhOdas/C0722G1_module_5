import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../../model/customer/customer-type";
import {Customer} from "../../../../model/customer/customer";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 customers: Customer[] = []
  customerTypes: CustomerType[]= []
  constructor(private customerService: CustomerService, private router: Router) {
      this.customerService.getAll().subscribe(data =>
      {
        console.log(data)
        this.customers = data;
      })

  }

  ngOnInit(): void {
  }

}
