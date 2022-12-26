import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../../model/customer/customer-type";
import {Customer} from "../../../../model/customer/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerTypeList: CustomerType[] =[{
     id: 1,
    name: "Diamond"
  },
    {
      id: 2,
      name: 'Platinium'
    },
    {
      id: 3,
      name: 'Gold'
    },
    {
      id: 4,
      name: 'Silver'
    },
    {
      id: 5,
      name: 'Member'
    }
  ];
  customerList: Customer[] = [{
    id: 1,
    name: "Đỗ Đức Uy",
    dateOfBirth:"31-2-1997",
    gender: 0,
    idCard: "232321323213",
    phoneNumber: "0988777777",
    email: "DoDucUy@gmail.com",
    address: "Quảng Trị",
    customerType: this.customerTypeList[1]
  },
    {
      id: 2,
      name: "Phạm Quang Vinh",
      dateOfBirth:"17-11-1999",
      gender: 1,
      idCard: "232321323213",
      phoneNumber: "0988777777",
      email: "DoDucUy@gmail.com",
      address: "Quảng Trị",
      customerType: this.customerTypeList[0]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
