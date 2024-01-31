import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tailorTabs: string[] = ['home', 'search', 'add', 'notifications', 'person']
  activeTab: string = 'add'
 
  constructor() { }
  
  switchTab(tab: string) {
    this.activeTab = tab
  }
  
}