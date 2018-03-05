import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-resetarsenha',
  templateUrl: 'resetarsenha.html',
})
export class ResetarsenhaPage {

  	constructor(private toastCtrl: ToastController) {
	}

	private resetarsenha(){
		let toast = this.toastCtrl.create({
			message: 'Email para recuperação de senha enviado!',
			duration: 3000
	  	});
	  	toast.present();
	}
	  

  	

}
