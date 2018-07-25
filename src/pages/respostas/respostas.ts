import { Component } from '@angular/core';
// import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { Storage } from '@ionic/storage';
import { ToastAlertProvider } from '../../providers/toast-alert/toast-alert';
import { updateNodeContext } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';
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
	questoes: Array<questao> = new Array();
	inf = [];
	alternativas: Array<alternativa> = new Array();
	aux: Array<alternativa> = new Array();

	/*----------------------- */

	nomeQuest: string = "";
	// informacoes: questionario = new questionario();
	// questoes: Array<questao> = new Array();
	lista: Array<number> = new Array();
	// altMarcadas: Array<boolean> = new Array();
	// aux: [string, boolean];
	altMarcadas = {};
	// altMarcadas: Object;
	// teste: Array<boolean> = new Array();
	// questoes: Array<questao> = new Array();
	// alternativas: Array<alternativa> = new Array();

	constructor(private storage: Storage, private toastAlertPrvd: ToastAlertProvider) {

		/*this.storage.get('questionario-ativado').then((value) => {
			// console.log('value buscado:. ', value);
			if(value == null){
				this.informacoes = null;
				return;
			}
			this.storage.get(value).then((val) => {
				this.informacoes = val;
				this.informacoes.questoes.forEach(element => {
					this.questoes.push(element);
				});
			});
		});
		*/


		//var alternativas: Array<any> = new Array();
		this.storage.get('questionario-ativado').then((value) => {
			// console.log('value buscado:. ', value);
			if(value == null){
				this.informacoes = null;
				return;
			}
			this.storage.get(value).then((val) => {
				this.informacoes = val;
				this.informacoes.questoes.forEach(element => {
					this.questoes.push(element);
				});
			});
		});
		

	}

	printarInformacoes(){
		
		// var i = 0;
		// while(/*this.informacoes.questoes != null*/ i < this.informacoes.questoes.length){
		// 	// console.log(this.informacoes.questoes[i]);
		// 	var x = this.informacoes.questoes[i];
		// 	// this.alternativas.push
		// 	// console.log(x.alternativas);
		// 	x.alternativas.forEach(element => {
		// 		// console.log(element);
		// 		this.aux.push(element);
		// 	});
		// 	i++;
		// }
		
		

		// this.aux.forEach(element => {
		// 	console.log('element', element);
		// });
		
		
		
		// --------------------------------- //
		
		// var i = 0;
		// while(/*this.informacoes.questoes != null*/ i < this.informacoes.questoes.length){
		// 	// console.log(this.informacoes.questoes[i]);
		// 	var x = this.informacoes.questoes[i].alternativas;
		// 	// this.alternativas.push
		// 	// console.log(x.alternativas);
		// 	x.forEach(element => {
		// 		console.log(element);
		// 		// this.aux.push(element);
		// 	});
		// 	i++;
		// }
		
		

		// this.aux.forEach(element => {
		// 	console.log('element', element);
		// });
		
		
		// --------------------------------- //




		

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
		// let q of informacoes.questoes
		// let alt of q.alternativas

		// this.informacoes.questoes.forEach(element => {
		// 	element.alternativas.forEach(ele => {
		// 		console.log(this.altMarcadas[ele]);
		// 	});
		// });

	}
	  

	  

 
}
