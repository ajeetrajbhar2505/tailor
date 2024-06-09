import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
}
