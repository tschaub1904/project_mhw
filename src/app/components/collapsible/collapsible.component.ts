import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.sass']
})
export class CollapsibleComponent implements OnInit {
  @Input('collapsibleTitle') title: string;
  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleActive() {
    this.active = !this.active;
  }
}
