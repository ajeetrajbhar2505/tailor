
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AdmobAds, BannerPosition, BannerSize } from 'capacitor-admob-ads'
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root',
})
export class WebService {
  public isSplashLoaded = false;
  public alertButtons = ['OK'];
  headers: any = new Headers({});
  isRewarded: boolean = false
  nativeAds:Array<any> = []

  constructor(public toastCtrl: ToastController) {
    AdmobAds.addListener('rewardedVideoAdOnRewarded',()=>{
      this.isRewarded = true
    })
  }

  shakeButton(ableToEdit: boolean, show: boolean): boolean {
    if (!ableToEdit) {
      show ? this.vibrateOnError() : null;
      return show;
    }
    return false;
  }

  vibrateOnError() {
    // Check if the Vibration API is supported
    if ('vibrate' in navigator) {
      // Vibrate for 500ms
      navigator.vibrate(500);
    }
  }

  limitText(formGroup: any, formcontrolName: string, maxNumber: number) {
    const formcontrol = formGroup.get(formcontrolName);
    if (formcontrol.value.toString().length > maxNumber) {
      const truncatedNumber = formcontrol.value.toString().slice(0, maxNumber);
      formcontrol.patchValue(truncatedNumber);
    }
  }

  getLocation(): Promise<{ latitude: string; longitude: string }> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude.toString();
            const longitude = position.coords.longitude.toString();
            resolve({ latitude, longitude });
          },
          (error) => {
            console.error('Error getting geolocation:', error.message);
            reject(error);
          }
        );
      } else {
        console.error('Geolocation is not available in this browser.');
        reject(new Error('Geolocation is not available'));
      }
    });
  }

  // Create a function to fetch the IP address
  async getIPAddress() {
    try {
      const response = await fetch('https://api64.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return null;
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      mode: 'ios',
      position: 'top',
      color: 'success'
    })
    toast.present()
  }


  showBannerAds() {
    AdmobAds.showBannerAd({
      adId: environment.BannerAdId,
      isTesting: true,
      adSize: BannerSize.BANNER,
      adPosition: BannerPosition.BOTTOM
    }).then(() => {
      this.presentToast('Banner is shown')
    }).catch((err) => {
      this.presentToast(err)
    })
  }

  hideBannerAds(){
    AdmobAds.hideBannerAd().then(() => {
      this.presentToast('Banner is hidden')
    }).catch((err) => {
      this.presentToast(err)
    })
  }

  resumeBannerAds(){
    AdmobAds.resumeBannerAd().then(() => {
      this.presentToast('Banner is resumed')
    }).catch((err) => {
      this.presentToast(err)
    })
  }

  removeBannerAds(){
    AdmobAds.removeBannerAd().then(() => {
      this.presentToast('Banner is removed')
    }).catch((err) => {
      this.presentToast(err)
    })
  }

  async loadInterstitialAd(): Promise<boolean> {
    try {
      await AdmobAds.loadInterstitialAd({
        adId: environment.InterstitialAdsId,
        isTesting: true,
      });
      return true;
    } catch (err:any) {
      this.presentToast(err.message)
      return false;
    }
  }
  
 
  async showInterstitialAds(): Promise<boolean> {
    try {
      await AdmobAds.showInterstitialAd();
      return true
    } catch (err:any) {
      this.presentToast(err.message);
      return false
    }
  }
  
  async loadRewardedInterstialAd(): Promise<boolean> {
    try {
      await AdmobAds.loadRewardedInterstitialAd({
        adId: environment.RewardedInterstialAdsId,
        isTesting: true,
      });
      return true;
    } catch (err: any) {
      this.presentToast(err.message);
      return false;
    }
  }
  
  async showloadRewardedInterstialAds(): Promise<boolean> {
    try {
      await AdmobAds.showRewardedInterstitialAd();
      return true;
    } catch (err: any) {
      this.presentToast(err.message);
      return false;
    }
  }
  
  async loadRewardedVideoAd(): Promise<boolean> {
    try {
      await AdmobAds.loadRewardedVideoAd({
        adId: environment.RewardedVideoAddId,
        isTesting: true,
      });
      return true;
    } catch (err: any) {
      this.presentToast(err.message);
      return false;
    }
  }
  
  async showloadRewardedVideoAds(): Promise<boolean> {
    try {
      await AdmobAds.showRewardedVideoAd();
      return true;
    } catch (err: any) {
      this.presentToast(err.message);
      return false;
    }
  }
  
async openToast(message: string,type:string) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 3000,
    mode: 'ios',
    position: 'top',
    color: type
  })
  toast.present()
}
 
}
