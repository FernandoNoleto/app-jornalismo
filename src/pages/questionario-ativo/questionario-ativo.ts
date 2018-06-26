import { Component } from '@angular/core';
import { /*NavController,*/ NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';


@Component({
  selector: 'page-questionario-ativo',
  templateUrl: 'questionario-ativo.html',
})
export class QuestionarioAtivoPage {

	questionario: any;
	valor: any;
	ativado: boolean = false;

  	constructor(
		private navParams: NavParams,
		private toastCtrl: ToastController,
		private storage: Storage,
		private questionarioPrvd: ModelQuestionarioProvider
	) {
		this.questionario = this.navParams.data;
		//console.log('param: '+this.questionario);
		
		this.storage.get(this.questionario).then((value) => {
			console.log('value: '+value);
			//this.valor = value;
		});
		
		//console.log('quest ativ:. '+q);
		this.storage.get('questionario-ativado').then((value) => {
			if(this.questionario == value)		
		 		this.ativado = true;
		})
		

	}

	todasAsChaves(){
		console.log(this.storage.keys());
	}

	public ativarQuestionario(){
		console.log(this.questionario);
		this.questionarioPrvd.ativarQuestionario(this.questionario);
		this.ativado = true;
		this.storage.get('questionario-ativado').then((value) => {
			console.log('quest ativ:. '+value);
		})
	}



  

}
