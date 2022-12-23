import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberOne: number =0;
  numberTwo: number = 0;
  result: number = 0;
  error: string = "";


  constructor() { }

  ngOnInit(): void {
  }
  sum($event: MouseEvent){
    if (this.numberTwo == 0){
      this.error = "";
    }
    this.result = this.numberOne + this.numberTwo
  }
  subtraction($event: MouseEvent){
    if (this.numberTwo == 0){
      this.error = "";
    }
    this.result = this.numberOne - this.numberTwo
  }
  multiplication($event: MouseEvent){
    if (this.numberTwo == 0){
      this.error = "";
    }

    this.result = this.numberOne * this.numberTwo
  }
  division($event: MouseEvent){
    if (this.numberTwo == 0){
      this.error = "anh giang điên";
    }
    else {
      this.error = "";
    }
    this.result = this.numberOne / this.numberTwo
  }



}
