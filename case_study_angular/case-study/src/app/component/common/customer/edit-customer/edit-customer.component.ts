import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  formReactive: FormGroup;
  constructor() {
    this.formReactive = new FormGroup(
      {
        name: new FormControl("", [Validators.required]),
        dateOfBirth: new FormControl("", [Validators.required]),
        gender: new FormControl("", [Validators.required]),
        idCard: new FormControl("", [Validators.required]),
        phoneNumber: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        address: new FormControl("", [Validators.required]),

      }
    )
  }

  ngOnInit(): void {
  }

}
