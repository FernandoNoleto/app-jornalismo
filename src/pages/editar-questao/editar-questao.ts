import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-editar-questao',
  templateUrl: 'editar-questao.html',
})
export class EditarQuestaoPage {

	qtd_de_questoes: number;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.qtd_de_questoes = this.navParams.data;
	}
	
	qtdquestoes(){
		console.log(this.qtd_de_questoes);
	}

  

}
