import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  active: boolean = false
  activePlace: string = ""
  closePopup: boolean = false
  places = [
    { name: 'All', active: true },
    { name: 'India', active: false },
    { name: 'Spain', active: false },
    { name: 'Maldives', active: false },
    { name: 'French Polynesia', active: false },
  ]

  constructor(private _https: WebService, private router: Router) { }

  navigate() {
    this._https.loadInterstitialAd()
      .then((result: boolean) => {
        this._https.showInterstitialAds()
        this._https.loadInterstitialAd()
          .then((result: boolean) => {
            this.router.navigate(['/course'])
          })
      })

  }
  setAllActive() {
    this.places.map(d => d.active = false)
  }

}
