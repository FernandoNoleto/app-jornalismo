import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesquisaPage } from '../pesquisa/pesquisa';
import { Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';

export class questionario{
	questoes: Array<questao> = new Array();
}

export class questao{
	enunciado: string;
	alternativas: Array<string> = new Array();
}

@Component({
  selector: 'page-texto',
  templateUrl: 'texto.html',
})
export class TextoPage {

	@ViewChild(Content) content: Content;
	private scrollParam = 100;

	questionario: any;
	informacoes: questionario = new questionario();
	// ativado: boolean = false;
	enunciado: Array<string> = new Array();
	quest_ativado: boolean = false;

	constructor(public navCtrl: NavController, private storage: Storage) {
		this.storage.get('questionario-ativado').then((value) => {
			// console.log('value buscado:. ', value);
			if(value == null){
				this.informacoes = null;
				return;
			}
			this.storage.get(value).then((val) => {
				this.informacoes = val;
				this.quest_ativado = true;
				// this.informacoes.questoes.forEach(element => {
				// 	this.questoes.push(element);
				// 	// this.altMarcadas.push({alt: '', marcado: false});
				// });
			});
		});
	}

	abrirQuestionario(){
		this.navCtrl.push(PesquisaPage);

	}

	scroll(){
		this.content.scrollTo(0, this.scrollParam, 200);
		this.scrollParam += 100;
	}


}
