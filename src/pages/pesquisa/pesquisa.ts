import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


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
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {

	nomeQuest: string = "";
	informacoes: questionario = new questionario();
	// questoes: Array<questao> = new Array();
	lista: Array<number> = new Array();

  	constructor(private storage: Storage) {

	  	this.storage.get('questionario-ativado').then((value) => {
			console.log('value buscado:. ', value);
			if(value == null){
				this.informacoes = null;
				return;
			}
			this.storage.get(value).then((val) => {
				this.informacoes = val;
			});
		});
		
		
	}

	/*
	printarQuestionario(){
		console.log(this.questoes);
		console.log(this.questoes[0].enunciado);
	}
	*/

	atualizar_informacoes(){
		return;
		
		//console.log(this.informacoes.questoes.alternativas.marcacao);
		//var questao: questao = this.informacoes.questoes.pop();
		//var alternativa: alternativa = questao.alternativas.pop();
		//console.log('update: ', alternativa.marcacao);
	}

	finalizar_questionario(){
		console.log("-----------------------------");
		console.log(this.informacoes.questoes);
	}

	printar_informacoes(){
		console.log("-----------------------------");
		console.log(this.informacoes.questoes);
		//console.log(this.informacoes.questoes.alternativas.marcacao);
	}


 
}
