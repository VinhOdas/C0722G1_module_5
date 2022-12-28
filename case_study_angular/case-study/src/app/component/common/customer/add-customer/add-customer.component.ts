import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  formReactive: FormGroup;
  constructor() {
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
  )

  }

  ngOnInit(): void {
  }

}
