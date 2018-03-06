import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-resetarsenha',
  templateUrl: 'resetarsenha.html',
})
export class ResetarsenhaPage {

	emaill: string;

  	constructor(
		private toastCtrl: ToastController,
		private authPrvd: AuthProvider
		) {
	}

	private resetarsenha(){
		let toast = this.toastCtrl.create({
			message: 'Preencha o campo email',
			duration: 3000
	  	});
		if(this.emaill != null){
			this.authPrvd.resetPassword(this.emaill);
			toast.setMessage('Email para recuperação de senha enviado!')
		}
		toast.present();
	  	
	}
	  

  	

}
