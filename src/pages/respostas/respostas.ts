import { Component } from '@angular/core';
// import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { Storage } from '@ionic/storage';
// import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-respostas',
  templateUrl: 'respostas.html',
})
export class RespostasPage {

	// respostas: Array<boolean> = new Array();
	private informacoes: any = null;

	constructor(private storage: Storage) {
		
		// this.informacoes = questionarioPrvd.respostas();
		storage.get('respostas').then((value) => {
			this.informacoes = value;
		});
		

	}

	printarInformacoes(){
		console.log(this.informacoes);
	}
	  

	  

 
}
