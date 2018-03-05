import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';


var config = {
  apiKey: "AIzaSyDQb13fMSrnCrM9Ak_6IGzigwYj1x-1QsE",
  authDomain: "app-jornalismo.firebaseapp.com",
  databaseURL: "https://app-jornalismo.firebaseio.com",
  projectId: "app-jornalismo",
  storageBucket: "",
  messagingSenderId: "1044381464368"
};

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { CriarcontaPage } from '../pages/criarconta/criarconta';
import { ResetarsenhaPage } from '../pages/resetarsenha/resetarsenha';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CriarcontaPage,
    ResetarsenhaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CriarcontaPage,
    ResetarsenhaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
