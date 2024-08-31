import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {

  locations: any[] = []
  prices: any[] = []
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      const number = Math.floor(Math.random() * (3000 - 200 + 1)) + 200;
      this.prices.push(number);
      
    }

  }
  

}
