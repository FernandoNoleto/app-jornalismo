import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { EditarQuestaoPage } from '../editar-questao/editar-questao';
import { AlertController } from 'ionic-angular';
import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { ToastAlertProvider } from '../../providers/toast-alert/toast-alert';
import { AdicionartextoPage } from '../adicionartexto/adicionartexto';


export class meusQuestionarios{
	nomeDosQuestionarios: Array<string> = new Array();
}

export class questionario{
	questoes: Array<questao> = new Array();
	texto: string;
}

export class questao{
	enunciado: string;
	alternativas: Array<string> = new Array();
}

@Component({
  selector: 'page-criar-questionario',
  templateUrl: 'criar-questionario.html',
})
export class CriarQuestionarioPage {
	qtd_de_alternativas: number = 0;
	qtd_de_questoes: number = 0;
	questao: questao = new questao();
	questionario: questionario = new questionario();
	texto: string;
	texto_adicionado: boolean = false;
	
	//q: questao = new questao();
	//meusQuestionarios: meusQuestionarios = new meusQuestionarios();

	constructor(
		private navCtrl: NavController,
		private alertCtrl: AlertController,
		private modalCtrl: ModalController,
		private questionariosPrvd: ModelQuestionarioProvider,
		private toastAlertPrvd: ToastAlertProvider
	) { }

	adicionar_questao(){
		if(this.qtd_de_alternativas == 0){
			this.toastAlertPrvd.alerta("ERRO!", "Por favor, insira a quantidade de alternativas que a questão irá conter");
			return;
		}

		let modal = this.modalCtrl.create(EditarQuestaoPage, {qtd_de_alternativas: this.qtd_de_alternativas});

		modal.onDidDismiss((data) => {
			if(data!=undefined){
				this.questionario.questoes.push(data);
				this.qtd_de_questoes +=1;
			}
			console.log('data:. ',data);
		});
		modal.present();
	}

	adicionar_texto(){
		// this.navCtrl.push(AdicionartextoPage);
		if(this.texto != null){
			this.questionario.texto = this.texto;
			this.texto_adicionado = true;
		}
		else
			this.toastAlertPrvd.alerta('Texto vazio!','Por favor, insira o texto-base da questão...');
	}




	finalizar_questionario(){
		if(this.questionario.questoes.length != 0){
			console.log('antes de salvar:', this.questionario);
			this.questionario.questoes.sort();
			this.questionariosPrvd.salvarQuestionario(this.questionario);
		}
		else{
			this.toastAlertPrvd.alerta("ERRO!", "Seu questionário está vazio! Adicione algumas questões para continuar...");
			console.log('questionario vazio!');
		}
		
	}

	
	  
  

}
