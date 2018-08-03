import { DetailsPage } from './../details/details';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name:string;
location:string;
contact:number;
email:string;
linkedIn:string;
facebook:string;
gitHubAcc:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  getProfile(){
    
      this.navCtrl.push(ProfilePage);
  }
  getCodeTribes(){
    
    this.navCtrl.push(DetailsPage);
}
}
