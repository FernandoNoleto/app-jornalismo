import { Component } from '@angular/core';
// import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { Storage } from '@ionic/storage';
import { ToastAlertProvider } from '../../providers/toast-alert/toast-alert';
// import { updateNodeContext } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';
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

	enunciado: string = "";
	// informacoes: questionario = new questionario();
	controlador: boolean = false;
	informacoes: questionario = null;
	questoes: Array<questao> = new Array();
	inf = [];
	alternativas: Array<alternativa> = new Array();
	aux: Array<alternativa> = new Array();

	/*----------------------- */

	nomeQuest: string = "";
	lista: Array<number> = new Array();
	altMarcadas = {};
	tudo: Array<{alt: any, marcacao: any}> = new Array();
	

	constructor(
		private storage: Storage,
		private toastAlertPrvd: ToastAlertProvider
	) {
		var i = 0;
		
		this.storage.get('respostas').then((value) => {
			if(value == null){
				console.log('value == null');
				this.inf = null;
				this.informacoes = null;
				this.controlador = false;
				return;
			}
			this.controlador = true;
			console.log(value);
			this.inf = value;
		});
		
		this.storage.get('questionario-ativado').then((value) => {
			// console.log('value buscado:. ', value);
			if(value == null){
				this.informacoes = null;
				return;
			}
			this.storage.get(value).then((val) => {
				this.informacoes = val;
				// this.enunciado = this.informacoes.questoes;
				// var aux = this.informacoes.questoes;
				console.log('val: ', val)
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

	}

	// teste: Array<{alt: any, marcacao: any}> = new Array();

	printarInformacoes(){

		var i = 0;

		if(this.controlador){
			console.log('entrou');
			this.informacoes.questoes.forEach(element => {
				element.alternativas.forEach(e => {
					// console.log(this.inf[i]);
					if(this.inf[i] == undefined)
						this.tudo.push({alt: false, marcacao: this.aux[i]});	
					else
						this.tudo.push({alt: this.inf[i], marcacao: this.aux[i]});
					i++;
				});
			});
		}

	}

	removerResposta(){
		// this.questPrvd.remover();
		// this.questPrvd.limpar();
		this.storage.remove('respostas');
		// this.storage.cl
		this.toastAlertPrvd.toast('Todas as respostas foram removidas!', 3000, true);
		this.informacoes = null;
		this.controlador = false;
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
