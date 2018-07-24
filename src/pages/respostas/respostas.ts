import { Component } from '@angular/core';
// import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { Storage } from '@ionic/storage';
import { ToastAlertProvider } from '../../providers/toast-alert/toast-alert';
// import { NavController, NavParams } from 'ionic-angular';

export class meusQuestionarios{
	nomeDosQuestionarios: Array<string> = new Array();
}

export class alternativa{
	texto: string;
	marcacao: boolean = false;
}

export class questao{
	enunciado: string;
	alternativas: Array<alternativa> = new Array();
}

export class questionario{
	questoes: Array<questao> = new Array();
}

@Component({
  selector: 'page-respostas',
  templateUrl: 'respostas.html',
})
export class RespostasPage {

	// respostas: Array<boolean> = new Array();
	//informacoes = {};
	informacoes: questionario = new questionario();
	inf: any;
	alternativas: Array<alternativa> = new Array();
	aux: Array<alternativa> = new Array();

	constructor(private storage: Storage, private toastAlertPrvd: ToastAlertProvider) {

		// this.storage.get('respostas').then((value) => {
		// 	if(value == null){
		// 		this.informacoes = null;
		// 		return;
		// 	}
		// 	console.log(value);
		// 	this.informacoes = value;
		// });

		this.storage.get('questionario-ativado').then((value) => {
			// console.log('value buscado:. ', value);
			if(value == null){
				this.informacoes = null;
				return;
			}
			this.storage.get(value).then((val) => {
				this.informacoes = val;
				// this.informacoes.questoes.forEach(element => {
				// 	this.questoes.push(element);
				// });
			});
		});
		

	}

	printarInformacoes(){
		
		var i = 0;
		while(/*this.informacoes.questoes != null*/ i < this.informacoes.questoes.length){
			// console.log(this.informacoes.questoes[i]);
			var x = this.informacoes.questoes[i];
			// this.alternativas.push
			// console.log(x.alternativas);
			x.alternativas.forEach(element => {
				// console.log(element);
				this.aux.push(element);
			});
			i++;
		}
		
		

		this.aux.forEach(element => {
			console.log(element);
		});
		
		
		
		// --------------------------------- //


		this.storage.get('respostas').then((value) => {
			if(value == null){
				this.inf = null;
				return;
			}
			console.log(value);
			this.inf = value;
		});

	}

	asf(){
		console.log(this.inf.alt1);
	}
	  

	  

 
}
