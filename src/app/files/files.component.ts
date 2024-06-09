import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent {

  constructor(private _https:WebService,private router:Router){}


  showloadRewardedInterstialAds(){    
    this._https.loadRewardedInterstialAd()
    .then((result: boolean) => {
      this._https.showloadRewardedInterstialAds()
        .then((result: boolean) => {
          console.log({result});
          this.router.navigate(['/watch'])
        })
    })

  }

}
