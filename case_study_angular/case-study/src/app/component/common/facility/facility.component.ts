import {Component, OnInit} from '@angular/core';
import {FacilityType} from "../../../../model/facility/facility-type";
import {RentType} from "../../../../model/facility/rent-type";
import {Facility} from "../../../../model/facility/facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  xemthemFlag = false;

  villa: FacilityType = {
    id: 1,
    name: 'villa'
  }
  house: FacilityType = {
    id: 2,
    name: 'house'
  }
  room: FacilityType = {
    id: 3,
    name: 'room'
  }

  year: RentType = {
    id: 1,
    name: 'year'
  }
  month: RentType = {
    id: 2,
    name: 'month'
  }
  facilityList: Facility[] = [{
    id: 1,
    name: 'Villa Beach Front',
    area: 5,
    cost: 500000,
    maxPeople: 4,
    facilityType: this.villa,
    rentType: this.year,
    standardRoom: 'vip',
    descripttionOtherCovenience: 'Có hồ bơi',
    poolArea: 5,
    numberOfFloors: 5,
    facilityFree: 'co xe dap',
    status: 1
  },
    {
      id: 2,
      name: 'Villa Beach Front',
      area: 5,
      cost: 500000,
      maxPeople: 4,
      facilityType: this.villa,
      rentType: this.year,
      standardRoom: 'vip',
      descripttionOtherCovenience: 'Có hồ bơi',
      poolArea: 5,
      numberOfFloors: 5,
      facilityFree: 'co xe dap',
      status: 1
    }
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

  xemthem(id: number) {

    this.xemthemFlag = !this.xemthemFlag;


    // @ts-ignore
    document.getElementById("xemthemcard" + id).style.display = 'none';
    // @ts-ignore
    document.getElementById("phanxemthem" + id).style.display = 'block';
    // @ts-ignore
    document.getElementById("thugoncard" + id).style.display = 'block';



  }
}
