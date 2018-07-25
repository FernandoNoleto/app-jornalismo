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

export class p{
	alt: any; marcacao: any
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
	tudo: Array<{alt: any, marcacao: any}> = new Array();
	// tudo: Array<p> = new Array();

	constructor(private storage: Storage, private toastAlertPrvd: ToastAlertProvider) {
		var i = 0;
		
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
				
				while(/*this.informacoes.questoes != null*/ i < this.informacoes.questoes.length){
					// console.log(this.informacoes.questoes[i]);
					var x = this.informacoes.questoes[i];
					// this.alternativas.push
					// console.log(x.alternativas);
					x.alternativas.forEach(element => {
						console.log(element);
						this.aux.push(element);
					});
					i++;
				}
				this.printarInformacoes();
			});
		});

		

		this.storage.get('respostas').then((value) => {
			if(value == null){
				this.inf = null;
				return;
			}
			console.log(value);
			this.inf = value;
		});

		

	}

	teste: Array<{alt: any, marcacao: any}> = new Array();

	printarInformacoes(){

		var i = 0;

		this.informacoes.questoes.forEach(element => {
			element.alternativas.forEach(e => {
				//console.log(i);	i++;
				this.tudo.push({alt: this.inf[i], marcacao: this.aux[i]});	
			});
		});

		// this.teste.push({alt: 'afa', marcacao: 'ag'});

		
		// this.tudo.push({alt: 'aa', marcacao: 'bb'});
		// this.tudo.push({alt: 'cc', marcacao: 'dd'});
		// var a = this.informacoes.questoes;
		// console.log(this.informacoes.questoes.length);
		// while(i < this.informacoes.questoes.length){
		// 	console.log(i);	
		// 	this.tudo.push({alt: this.inf[i], marcacao: this.aux[i]});
		// 	i++;
		// }

		// console.log(this.tudo);

		// this.tudo.forEach(element => {
		// 	console.log(element);
		// 	this.teste.push(element.alt, element.marcacao);
		// });



		// console.log(this.questoes);
		
		// var i = 0;
		// while(/*this.informacoes.questoes != null*/ i < this.informacoes.questoes.length){
		// 	// console.log(this.informacoes.questoes[i]);
		// 	var x = this.informacoes.questoes[i];
		// 	// this.alternativas.push
		// 	// console.log(x.alternativas);
		// 	x.alternativas.forEach(element => {
		// 		console.log(element);
		// 		this.aux.push(element);
		// 	});
		// 	i++;
		// }

		// for (let i = 0; i < this.tudo.length; i++) {
		// 	console.log(this.tudo[i]);
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


		// this.storage.get('respostas').then((value) => {
		// 	if(value == null){
		// 		this.inf = null;
		// 		return;
		// 	}
		// 	console.log(value);
		// 	this.inf = value;
		// });

	}

	asf(){
		// let q of informacoes.questoes
		// let alt of q.alternativas

		// this.inf.forEach(element => {
		// 	console.log(element);
		// });

		// this.informacoes.questoes.forEach(element => {
		// 	element.alternativas.forEach(ele => {
		// 		console.log(this.altMarcadas[ele]);
		// 	});
		// });

	}
	  

	  

 
}
