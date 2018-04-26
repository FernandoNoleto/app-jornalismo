import { Component } from '@angular/core';
import { NavController, NavParams, List } from 'ionic-angular';
import { EditarQuestaoPage } from '../editar-questao/editar-questao';

export class questionario{
	questoes: Array<questao>;
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
	qtd_de_questoes: number;

	q: questao = new questao();

  	constructor(public navCtrl: NavController) {
		this.qtd_de_questoes = 0;
		this.qtd_de_questoes = this.q.alternativas.length;
  	}

	adicionar_questao(){
		if(this.qtd_de_alternativas != undefined)
			this.navCtrl.push(EditarQuestaoPage, this.qtd_de_alternativas);
		else
			console.log("Insira algum numero");
	}
  

}
