import { Component, elementDef } from '@angular/core';
import { /*NavController,*/ NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';

export class questionario{
	questoes: Array<questao> = new Array();
}

export class questao{
	enunciado: string;
	alternativas: Array<string> = new Array();
}


@Component({
  selector: 'page-questionario-ativo',
  templateUrl: 'questionario-ativo.html',
})
export class QuestionarioAtivoPage {

	questionario: any;
	informacoes: questionario = new questionario();
	ativado: boolean = false;
	enunciado: Array<string> = new Array();;

  	constructor(
		private navParams: NavParams,
		private toastCtrl: ToastController,
		private storage: Storage,
		private questionarioPrvd: ModelQuestionarioProvider
	) {
		this.questionario = this.navParams.data;
		//console.log('param: ', this.questionario);
		
		this.storage.get(this.questionario).then((value) => {
			console.log('value: ', value);
			this.informacoes = value;
		});

		
		//console.log('quest ativ:. '+q);
		this.storage.get('questionario-ativado').then((value) => {
			if(this.questionario == value)		
		 		this.ativado = true;
		});
		

	}

	informacao(){
		console.log('informacoes ', this.informacoes);
		console.log('informacoes.questoes ', this.informacoes.questoes);
	}

	todasAsChaves(){
		console.log(this.storage.keys());
	}

	public ativarQuestionario(){
		console.log(this.questionario);
		this.questionarioPrvd.ativarQuestionario(this.questionario);
		this.ativado = true;
		this.storage.get('questionario-ativado').then((value) => {
			console.log('quest ativ:. ', value);
		})
	}



  

}
