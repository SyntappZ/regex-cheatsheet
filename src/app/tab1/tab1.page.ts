import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  reg = '/^[a-z0-9_-]{3,16}$/'
  

  constructor() {
    
  }



}
