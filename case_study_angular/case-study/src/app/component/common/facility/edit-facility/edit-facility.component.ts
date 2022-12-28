import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  formReactive: FormGroup;
  constructor() {
    this.formReactive = new FormGroup(
      {
        name: new FormControl("sadasd",[Validators.required]),
        area: new FormControl(1,[Validators.required]),
        cost: new FormControl(1,[Validators.required]),
        maxPeople: new FormControl(1,[Validators.required]),
        standardRoom: new FormControl("",[Validators.required]),
        descripttionOtherCovenience: new FormControl("",[Validators.required]),
        poolArea: new FormControl(1,[Validators.required]),
        floor: new FormControl(1,[Validators.required]),
        faciltyFree: new FormControl("",[Validators.required]),
      }
    )
  }

  ngOnInit(): void {
  }

}
