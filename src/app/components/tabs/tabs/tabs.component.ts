import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

  constructor() { }

  ngAfterContentInit(){
    let activeTabs = this.tabs.filter(tab => tab.active)

    if(activeTabs.length === 0){
      this.selectedTab(this.tabs.first)
    }
  }

  selectedTab(tab: TabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false)

    tab.active = true
  }
}
