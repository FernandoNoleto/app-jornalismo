import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

export class meusQuestionarios {
	private nomeDosQuestionarios: Array<string> = new Array();

	setMeusQuesionarios(nomeDosQuestionarios){
		nomeDosQuestionarios = nomeDosQuestionarios;
	}

	getMeusQuestionarios(){
		return this.nomeDosQuestionarios;
	}
}

export class questionario{
	private questoes: Array<questao> = new Array();
	
	setQuestoes(questoes){
		questoes = questoes;
	}

	getMeusQuestionarios(){
		return this.questoes;
	}
}

export class questao{
	private enunciado: string;
	private alternativas: Array<string> = new Array();
	
	setAlternativas(alternativas){
		this.alternativas = alternativas;
	}
	
	getAlternativas(){
		return this.alternativas;
	}

	setEnunciado(enunciado){
		enunciado = enunciado;
	}

	getEnunciado(){
		return this.enunciado;
	}
	

}

@Injectable()
export class ModelQuestionarioProvider {

	private meusQuestionarios: meusQuestionarios = new meusQuestionarios();

	constructor(
		private storage: Storage,
		private alertCtrl: AlertController
	) {}
	
	/************************Funções disponíveis para outras classes****************************/

	public salvarQuestionario(questionario: questionario){
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
					this.salvarQuestionarioOficial(questionario, nome);
				}
			}
			]
		});
		prompt.present();
		
	}

	public recuperarQuestionario(){

	}

	public recuperarTodosQuestionario(){
		return this.meusQuestionarios.getMeusQuestionarios();
	}


	/***********************************Funcionamento Interno***********************************/
	private salvarQuestionarioOficial(questionario: questionario, nomeQuestionario: string){
		this.storage.set(nomeQuestionario, questionario);//guardando o questionario
		this.adicionarNaListaDeQuestionarios(nomeQuestionario);//guardando o nome do questionario na lista de todos os questionarios
	}

	private adicionarNaListaDeQuestionarios(nome: string){
		this.meusQuestionarios.getMeusQuestionarios().push(nome);
		this.storage.set('meusQuestionarios', this.meusQuestionarios);
	}

	private alerta(titulo: any, subtitulo: any){
		let alert = this.alertCtrl.create({
			title: titulo,
			subTitle: subtitulo,
			buttons: ['Ok']
		});
		alert.present();
	}

	/***********************************Getters e Setters***************************************/

	setMeusQuestionarios(meusQuestionarios){
		this.meusQuestionarios = meusQuestionarios;
	}

	getMeusQuestionarios(){
		return this.meusQuestionarios;
	}

	

}
