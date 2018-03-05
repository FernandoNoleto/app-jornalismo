import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { CriarcontaPage } from '../criarconta/criarconta';
import { ResetarsenhaPage } from '../resetarsenha/resetarsenha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    //autenticacao: FirebaseAuthState;
    email: string;
    senha: string;

    constructor(private navCtrl: NavController, private afa: AngularFireAuth) {

	}
	
	criarconta(){
		this.navCtrl.push(CriarcontaPage);
	}
	resetarsenha(){
		this.navCtrl.push(ResetarsenhaPage);
	}

  

}