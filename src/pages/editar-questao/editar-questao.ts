import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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



    constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.qtd_de_questoes = this.navParams.data;
		for (var i = 0; i < this.qtd_de_questoes; i++){
			this.lista.push(i);
		}
	}
	
	qtdquestoes(){
		console.log(this.lista.length);
	}

	confirmar_questao(){
		this.questao.enunciado = this.enunciado;
		this.navCtrl.pop();
	}

	teste(){
		console.log(this.questao);
	}

  

}
