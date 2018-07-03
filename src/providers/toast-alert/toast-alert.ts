import { Injectable } from '@angular/core';
import { ToastController, AlertController} from 'ionic-angular';

@Injectable()
export class ToastAlertProvider {

  	constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  	public alerta(titulo: any, subtitulo: any){
		let alert = this.alertCtrl.create({
			title: titulo,
			message: subtitulo,
			buttons: ['Ok']
		});
		alert.present();
	}

	public toast(mensagem: any, duracao: any, botaoFechar: any, position?: any){
		let toast = this.toastCtrl.create({
			message: mensagem,
			duration: duracao,
			showCloseButton: botaoFechar,
			closeButtonText: "fechar",
			position: position
		});
		toast.present();
	}

}
