import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { Storage } from '@ionic/storage';


@Component({
  	selector: 'page-meus-questionarios',
  	templateUrl: 'meus-questionarios.html',
})
export class MeusQuestionariosPage {

	Questionarios;
	vazio: boolean;

  	constructor(private navCtrl: NavController, private questionariosPrvd: ModelQuestionarioProvider, private storage: Storage) {
		
		//this.Questionarios = this.questionariosPrvd.recuperarTodosOsQuestionarios();
		this.storage.get('meusQuestionarios').then((value) => {
			this.Questionarios = value;
		});

		//console.log(this.Questionarios);
		
	}

	valores(){
		//var capeta = this.questionariosPrvd.recuperarTodosQuestionarios();
		//var capeta = this.questionariosPrvd.recuperarTodosOsQuestionarios();
		//console.log('capeta: '+capeta);
		//this.questionariosPrvd.alerta('capeta', capeta);
	}

	nome(){
		console.log(this.questionariosPrvd.recuperarNomeDoChaveArmazenada());
		this.questionariosPrvd.alerta('Nome dos questionarios', this.questionariosPrvd.recuperarNomeDoChaveArmazenada());
	}

	limpar(){
		this.questionariosPrvd.limpar();
	}

	abrirQuestionario(questionario){
		console.log(questionario);
	}

	
	  


}
