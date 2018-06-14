import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

export class questionario{
	questoes: Array<questao>;
}

export class questao{
	enunciado: string;
	alternativas: Array<string> = new Array();
}

@Component({
  selector: 'page-editar-questao',
  templateUrl: 'editar-questao.html',
})
export class EditarQuestaoPage {

	qtd_de_questoes: number;
	lista: Array<number> = new Array();

	enunciado: string = "";
	questao: questao = new questao;
	callback: any;



    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
		this.callback = this.navParams.get("callback");
		this.qtd_de_questoes = this.navParams.get("aalternativas");
		//console.log(this.qtd_de_questoes);
		for (var i = 0; i < this.qtd_de_questoes; i++){
			this.lista.push(i);
		}
	}
	
	qtdquestoes(){
		console.log(this.lista.length);
	}

	confirmar_questao(){
		//console.log(this.questao);
		this.ionViewWillLeave();
		this.navCtrl.pop();
		let toast = this.toastCtrl.create({
			message: 'Questão adicionada!',
			duration: 2000
		});
		toast.present();
	}

	ionViewWillLeave() {
		this.callback(this.questao).then(()=>{
		   this.navCtrl.pop();
	   	});
	   //this.navCtrl.pop();
	}

  

}
