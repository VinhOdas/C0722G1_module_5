import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color: string = "";
  result: string = "";




  swapColor($event: MouseEvent) {
    this.result = this.color;
  }
}
