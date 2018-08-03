import { DetailsPage } from './../pages/details/details';
import { RegisterPage } from './../pages/register/register';
import { EditPage } from './../pages/edit/edit';
import { ProfilePage } from './../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfileProvider } from '../providers/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    EditPage,
    RegisterPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    EditPage,
    RegisterPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileProvider
  ]
})
export class AppModule {}
