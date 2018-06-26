import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

export class meusQuestionarios{
	nomeDosQuestionarios: Array<string> = new Array();
}

export class questao{
	enunciado: string;
	alternativas: Array<string> = new Array();
}

export class questionario{
	questoes: Array<questao> = new Array();
}

@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {

	nomeQuest: string = "";
	questionario: questionario;
	questoes: Array<questao> = new Array();
	lista: Array<number> = new Array();

  	constructor(private storage: Storage) {


	  	this.storage.get('questionario-ativado').then((value) => {
			//console.log('value buscado:. ', value);
			this.nomeQuest = value;
			this.storage.get(value).then((val) => {
				this.questionario = val;
				// console.log('questionario informações:. ', val);
				this.questionario.questoes.forEach(element => {
					this.questoes.push(element);
				});
				console.log(this.questoes);
				for(var i = 0; i < this.questoes.length; i++){
					this.lista.push(i);
				}
			});
		});
		
		
		
	}

	printarQuestionario(){
		console.log(this.questoes);
		console.log(this.questoes[0].enunciado);
	}

 
}
