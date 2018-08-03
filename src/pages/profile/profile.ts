import { EditPage } from './../edit/edit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
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
    console.log('ionViewDidLoad ProfilePage');
  }
  editProfile(){
    console.log("name: "+ this.name);
    console.log("location "+ this.location);
    console.log("contact: "+ this.contact);
    console.log("email: "+ this.email);
    console.log("linkedIn: "+ this.linkedIn);
    console.log("facebook: "+ this.facebook);
    console.log("gitHubAcc: "+ this.gitHubAcc);
    this.navCtrl.push(EditPage);
  }
getProfile(){
  console.log("name: "+ this.name);
    console.log("location "+ this.location);
    console.log("contact: "+ this.contact);
    console.log("email: "+ this.email);
    console.log("linkedIn: "+ this.linkedIn);
    console.log("facebook: "+ this.facebook);
    console.log("gitHubAcc: "+ this.gitHubAcc);
    this.navCtrl.push(RegisterPage);
}
}
