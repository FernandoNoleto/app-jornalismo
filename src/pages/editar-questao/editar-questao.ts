import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';


export class questao{
	enunciado: string;
	alternativas: Array<string> = new Array();
}

@Component({
  selector: 'page-editar-questao',
  templateUrl: 'editar-questao.html',
})
export class EditarQuestaoPage {

	qtd_de_alternativas: number;
	lista: Array<number> = new Array();
	questao: questao = new questao();


	constructor(
		public navParams: NavParams,
		private toastCtrl: ToastController,
		private viewCtrl: ViewController
	) {
		
		this.qtd_de_alternativas = navParams.get('qtd_de_alternativas');
		for (var i = 0; i < this.qtd_de_alternativas; i++){
			this.lista.push(i);
		}
	}

	fechar(){
		this.viewCtrl.dismiss();
	}
	
	confirmar_questao(){
		let toast = this.toastCtrl.create({
			message: 'Questão adicionada!',
			duration: 2000,
			showCloseButton: true,
			closeButtonText: "fechar"
		});
		toast.present();
		this.viewCtrl.dismiss(this.questao);
		// console.log('confirmar questao:. ',this.questao);
	}

  

}
