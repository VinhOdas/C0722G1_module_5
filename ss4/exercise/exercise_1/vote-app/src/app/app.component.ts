import {Component, OnInit} from '@angular/core';
import {IRattingUnit} from "./i-ratting-unit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
vote?: number;
  cha:  IRattingUnit[] = [{
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
