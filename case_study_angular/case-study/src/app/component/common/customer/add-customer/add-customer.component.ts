import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../../../../model/customer/customer";
import {CustomerType} from "../../../../../model/customer/customer-type";
import {CustomerService} from "../../../../service/customer/customer.service";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  formReactive: FormGroup;
  customers: Customer[] = [];
  customerType: CustomerType[] = []
  constructor(private customerService: CustomerService
              ) {
  this.formReactive = new FormGroup(
    {
        name: new FormControl("", [Validators.required]),
        dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      idCard: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      address: new FormControl("", [Validators.required]),

    }
  );



  }

  ngOnInit(): void {
    this.getAll();
    this.getCustomerTypes();
  }

  saveCreateCustomer() {
    console.log(this.formReactive.value)
    // @ts-ignore
    this.customerService.saveCustomerCreate(this.formReactive.value).subscribe(data =>{

    })
  }

  private getAll() {
    this.customerService.getAll().subscribe(data=>{
      this.customers = data
    });


  }

  private getCustomerTypes() {
    this.customerService.getAllCustomerType().subscribe(data =>{
      // @ts-ignore
      this.customerType = data
    });

  }
}
