import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {

	questionario: any = "";

  	constructor(/*public navCtrl: NavController, public navParams: NavParams, */private storage: Storage) {

		var nomeDosQuestionarios: Array<string> = new Array();

	  	this.storage.get('questionario-ativado').then((value) => {
			this.questionario = value;
		});
		this.storage.get('meusQuestionarios').then((value) => {
			console.log('meus questionarios:. '+value);
			nomeDosQuestionarios = value;
			var pop = nomeDosQuestionarios.pop();
			console.log('pop:. '+ pop);
			this.storage.get(pop).then((val) => {
				console.log('quest:. '+val);
			})
		});
	}

 
}
