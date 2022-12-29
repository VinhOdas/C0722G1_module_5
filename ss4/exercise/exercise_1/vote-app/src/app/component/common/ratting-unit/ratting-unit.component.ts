import { Component, OnInit } from '@angular/core';
import {IRattingUnit} from "../../../i-ratting-unit";

@Component({
  selector: 'app-ratting-unit',
  templateUrl: './ratting-unit.component.html',
  styleUrls: ['./ratting-unit.component.css']
})
export class RattingUnitComponent implements OnInit {
  vote?: number;
  rattingUnits:  IRattingUnit[] = [{
    vote: 1
  },
    {
      vote: 2
    },
    {
      vote: 3
    },
    {
      vote: 4
    },
    {
      vote: 5
    },
    {
      vote: 6
    },
    {
      vote: 7
    },
    {
      vote: 8
    },{
      vote: 9
    },
    {
      vote: 10
    }]
  constructor() {
  }


  title = 'vote-app';

  ngOnInit(): void {
  }

  swapVote(item: number|undefined) {
    this.vote = item;
  }

}
