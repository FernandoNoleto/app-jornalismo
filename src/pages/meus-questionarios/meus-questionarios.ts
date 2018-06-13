import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';


@Component({
  	selector: 'page-meus-questionarios',
  	templateUrl: 'meus-questionarios.html',
})
export class MeusQuestionariosPage {

	Questionarios;
	vazio: boolean;

  	constructor(private navCtrl: NavController, private questionariosPrvd: ModelQuestionarioProvider) {
		
		this.Questionarios = questionariosPrvd.recuperarTodosQuestionarios();
		//console.log(this.Questionarios);
		
	}

	valores(){
		var capeta = this.questionariosPrvd.recuperarTodosQuestionarios();
		console.log(capeta);
	}

	abrirQuestionario(questionario){
		console.log(questionario);
	}

	
	  


}
