import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-questionario-ativo',
  templateUrl: 'questionario-ativo.html',
})
export class QuestionarioAtivoPage {

	questionario: any;
	valor: any;

  	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private storage: Storage
	) {
		this.questionario = this.navParams.data;
		console.log('param: '+this.questionario);
		
		this.storage.get(this.questionario).then((value) => {
			console.log('value: '+value);
			//this.valor = value;
		});

	}



  

}
