import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { Storage } from '@ionic/storage';


@Component({
  	selector: 'page-meus-questionarios',
  	templateUrl: 'meus-questionarios.html',
})
export class MeusQuestionariosPage {

	Questionarios: any;
	vazio: boolean = false;

  	constructor(private navCtrl: NavController, private questionariosPrvd: ModelQuestionarioProvider, private storage: Storage) {
		
		//this.Questionarios = this.questionariosPrvd.recuperarTodosOsQuestionarios();
		var tam;
		this.storage.get('meusQuestionarios').then((value) => {
			this.Questionarios = value;
			
			if(value != null){this.vazio = false}
			else{this.vazio = true}
		});

		
		
	}

	nome(){
		console.log(this.questionariosPrvd.recuperarNomeDoChaveArmazenada());
		this.questionariosPrvd.alerta('Nome dos questionarios', this.questionariosPrvd.recuperarNomeDoChaveArmazenada());
	}

	excluirQuestionarios(){
		this.questionariosPrvd.limpar();
		this.storage.get('meusQuestionarios').then((value) => {
			this.Questionarios = value;
		});
		this.vazio = true;
	}

	abrirQuestionario(questionario){
		console.log(questionario);
	}

	
	  


}
