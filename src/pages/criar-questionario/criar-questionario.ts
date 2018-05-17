import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditarQuestaoPage } from '../editar-questao/editar-questao';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';



export class questionario{
	questoes: Array<questao> = new Array();
}

export class questao{
	enunciado: string;
	alternativas: Array<string> = new Array();
}

@Component({
  selector: 'page-criar-questionario',
  templateUrl: 'criar-questionario.html',
})
export class CriarQuestionarioPage {
	qtd_de_alternativas: number;
	qtd_de_questoes: number = 0;
	questao: questao;
	gamba: boolean = false; //leve gamba para evitar que a função aux dê push 2 vezes no questionario.questoes

	q: questao = new questao();
	questionario: questionario = new questionario();

	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private nativeStorage: NativeStorage
	) { }

	adicionar_questao(){
		if(this.qtd_de_alternativas != undefined){
			this.navCtrl.push(EditarQuestaoPage, {
				callback: this.myCallbackFunction,
				aalternativas: this.qtd_de_alternativas
			});
			this.gamba = false;
		}
		else{
			let alert = this.alertCtrl.create({
				title: 'Número de alternativas inválidas',
				subTitle: 'Por favor, selecione o número de alternativas da questão',
				buttons: ['Ok']
			});
			alert.present();
		}
	}

	finalizar_questionario(){
		//console.log(this.questao)
		console.log(this.questionario);
		this.armazenar();
		this.recuperar();
		//this.navCtrl.pop();
	}

	myCallbackFunction = (_params) => {
 		return new Promise((resolve, reject) => {
     		this.questao = _params;
			this.aux();
			//resolve();
 		});
	}

	aux(){
		if(this.gamba == false)
			this.questionario.questoes.push(this.questao);
		
		this.gamba = true;
		this.qtd_de_questoes = this.questionario.questoes.length;
	}

	armazenar(){
		var funfou = false;
		let alert;
		//console.log(questionario);
		this.nativeStorage.setItem('myitem', {property: questionario, anotherProperty: questionario})
  			.then(() => console.log("funfou"),
    		error => funfou = false);
		
		
	}

	recuperar(){
		
		var inf: any;

		this.nativeStorage.getItem('myitem')
		.then(
		data => console.log(data),
		error => console.error(error));
		
		//this.alerta(inf);  
	}

	alerta(data: any){
		let alert = this.alertCtrl.create({
			title: 'Recuperar',
			subTitle: data,
			buttons: ['Ok']
		});
		alert.present();
	}
  

}
