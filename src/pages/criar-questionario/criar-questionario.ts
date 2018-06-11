import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditarQuestaoPage } from '../editar-questao/editar-questao';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';


export class meusQuestionarios{
	nomeDosQuestionarios: Array<string> = new Array();
}

export class questionario{
	questoes: Array<questao> = new Array();
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
	qtd_de_alternativas: number;
	qtd_de_questoes: number = 0;
	questao: questao;
	gamba: boolean = false; //leve gamba para evitar que a função aux dê push 2 vezes no questionario.questoes

	q: questao = new questao();
	questionario: questionario = new questionario();
	meusQuestionarios: meusQuestionarios = new meusQuestionarios();

	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private toastCtrl: ToastController,
		private nativeStorage: NativeStorage,
		private storage: Storage
	) { }

	adicionar_questao(){
		if(this.qtd_de_alternativas != undefined){
			this.navCtrl.push(EditarQuestaoPage, {
				callback: this.myCallbackFunction,
				aalternativas: this.qtd_de_alternativas
			});
			this.gamba = false;
		}
		else{
			let alert = this.alertCtrl.create({
				title: 'Número de alternativas inválidas',
				subTitle: 'Por favor, selecione o número de alternativas da questão',
				buttons: ['Ok']
			});
			alert.present();
		}
	}

	finalizar_questionario(){
		console.log(this.questionario);
		this.alerta('teste', this.questionario);
		this.toast(this.questionario);
		this.nomeDoQuestionario();//Aqui eu chamo o armazenar()
		//this.armazenar(nome);
		//this.recuperar();
		//this.navCtrl.pop();
	}

	myCallbackFunction = (_params) => {
 		return new Promise((resolve, reject) => {
     		this.questao = _params;
			this.aux();
			//resolve();
 		});
	}

	aux(){
		if(this.gamba == false)
			this.questionario.questoes.push(this.questao);
		
		this.gamba = true;
		this.qtd_de_questoes = this.questionario.questoes.length;
	}

	armazenar(nomeQuestionario: string){
		this.storage.set(nomeQuestionario, this.questionario);//guardando o questionario
		this.adicionarNaListaDeQuestionarios(nomeQuestionario);//guardando o nome do questionario na lista de todos os questionarios
		this.alerta('armazenar', this.questionario);
	}

	recuperar(){
		
		this.storage.get('name').then((val) => {
			this.alerta('Recuperar', val);
		});
		//this.alerta('recuperar', this.questionario);
	}

	alerta(titulo: any, subtitulo: any){
		let alert = this.alertCtrl.create({
			title: titulo,
			subTitle: subtitulo,
			buttons: ['Ok']
		});
		alert.present();
	}

	toast(mensagem: any) {
		let toast = this.toastCtrl.create({
		  	message: mensagem,
		  	duration: 4000,
		  	position: 'bottom'
		});
	  
		toast.onDidDismiss(() => {
		  	console.log('Dismissed toast');
		});
	  
		toast.present();
	}

	nomeDoQuestionario(){
		var nome: string;

		let prompt = this.alertCtrl.create({
			title: 'Novo questionário',
			message: "Dê um nome ao seu questionário",
			inputs: [{
				name: 'title',
				placeholder: 'Nome'
			}],
			buttons: [{
				text: 'Cancelar',
				handler: data => {
					nome = null;
					console.log('Cancel clicked');
				}
			},
			{
				text: 'Salvar',
				handler: data => {
					console.log('Save clicked');
					nome = data.title;
					this.armazenar(nome);
				}
			}
			]
		});
		prompt.present();
		
	}

	adicionarNaListaDeQuestionarios(nome: string){
		this.meusQuestionarios.nomeDosQuestionarios.push(nome);
		this.storage.set('meusQuestionarios', this.meusQuestionarios);
	}
	  
  

}
