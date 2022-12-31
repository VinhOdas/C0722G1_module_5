import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  formReactive: FormGroup;
  constructor() {
    this.formReactive = new FormGroup(
      {
        nameFacility: new FormControl("",[Validators.required]),
        nameCustomer: new FormControl("",[Validators.required]),
        dayStart: new FormControl("",[Validators.required]),
        endDate: new FormControl("",[Validators.required]),
        deposit: new FormControl(1,[Validators.required])
      }
    )
  }

  ngOnInit(): void {
  }

}
