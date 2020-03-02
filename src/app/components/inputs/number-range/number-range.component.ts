import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-range',
  templateUrl: './number-range.component.html',
  styleUrls: ['./number-range.component.sass']
})
export class NumberRangeComponent implements OnInit {
  @Input() min: number = 0;
  @Input() max: number = 1;
  value: number = 0;
  @Output() newValue = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.value = this.min;
  }

  add(num: number) {
    this.setValue(this.value + num);
  }
  setValue(num: any) {
    let newNum = parseInt(num);
    // console.log("setValue before check: ", num, newNum);
    newNum = isNaN(newNum) ? 0 : newNum;
    // console.log("setValue after check: ", num, newNum);

    this.value = Math.max(Math.min((newNum), this.max), this.min);
    this.newValue.emit(this.value); 
    // console.log("Final value is: ", this.value)
  }

}
