import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.sass']
})
export class RadioButtonComponent implements OnInit {
  itemList: string[] = ["test1", "test2"];
  title: string;
  constructor(  ) { }

  ngOnInit() {
  }

}
