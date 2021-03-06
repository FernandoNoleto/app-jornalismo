import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { CriarcontaPage } from '../pages/criarconta/criarconta';
//import { ResetarsenhaPage } from '../pages/resetarsenha/resetarsenha';
//import { AutenticacaoPage } from '../pages/autenticacao/autenticacao';
//import { PesquisaPage } from '../pages/pesquisa/pesquisa';
//import { CriarQuestionarioPage } from '../pages/criar-questionario/criar-questionario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

