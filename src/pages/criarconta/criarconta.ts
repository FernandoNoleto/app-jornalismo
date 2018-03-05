import { Component, ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../providers/auth/user';
import { NavController/*, NavParams */} from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-criarconta',
  templateUrl: 'criarconta.html',
})
export class CriarcontaPage {

	user: User = new User();
	@ViewChild('form') form: NgForm;

  	constructor(
		private toastCtrl: ToastController,
		private navCtrl: NavController,
		private auth: AuthProvider
		/*public navParams: NavParams*/) {
  	}
	  
	private criarconta(){

		if (this.form.form.valid) {
			let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

			this.auth.createUser(this.user).then((user: any) => {
				user.sendEmailVerification();
				toast.setMessage('Usuário criado!');
				toast.present();
				this.navCtrl.setRoot(HomePage);
			})
			.catch((error: any) => {
				if (error.code  == 'auth/email-already-in-use') {
				  toast.setMessage('O e-mail digitado já está em uso.');
				} else if (error.code  == 'auth/invalid-email') {
				  toast.setMessage('O e-mail digitado não é valido.');
				} else if (error.code  == 'auth/operation-not-allowed') {
				  toast.setMessage('Não está habilitado criar usuários.');
				} else if (error.code  == 'auth/weak-password') {
				  toast.setMessage('A senha digitada é muito fraca.');
				}
				toast.present();
			});
		}
	}

}
