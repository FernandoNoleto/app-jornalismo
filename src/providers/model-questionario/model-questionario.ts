import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';


export class meusQuestionarios {
	private nomeDosQuestionarios: Array<string> = new Array();

	setMeusQuesionarios(nomeDosQuestionarios){
		this.nomeDosQuestionarios.push(nomeDosQuestionarios);
		//this.nomeDosQuestionarios = nomeDosQuestionarios;
	}

	getMeusQuestionarios(){
		return this.nomeDosQuestionarios;
	}
}

export class questionario{
	private questoes: Array<questao> = new Array();
	
	setQuestoes(questoes){
		this.questoes = questoes;
	}

	getQuestoes(){
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
		this.enunciado = enunciado;
	}

	getEnunciado(){
		return this.enunciado;
	}
	

}

@Injectable()
export class ModelQuestionarioProvider {

	private meusQuestionarios: meusQuestionarios = new meusQuestionarios();
	public teste: any;

	constructor(
		private storage: Storage,
		private alertCtrl: AlertController,
		private toastCtrl: ToastController
	) {}
	
	/************************Funções disponíveis para outras classes****************************/

	public salvarQuestionario(questionario){
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
					this.alerta('Questionario não salvo!', 'Você precisa dar um nome ao seu questionario');
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

	public recuperarTodosOsQuestionarios(){
		this.storage.get('meusQuestionarios').then((value) => {
			//console.log('value: '+value);
			this.teste = value;
			//return value;
		});
		console.log('teste: '+this.teste);
		return this.teste;
	}

	public limpar(){
		this.storage.clear();
	}

	public remover(){
		var nomes: Array<string> = new Array();
		nomes = this.meusQuestionarios.getMeusQuestionarios();
		nomes.forEach(element => {
			this.storage.remove(element);	
		});
		this.storage.remove('meusQuestionarios');
	}

	public todasAsChaves(){
		console.log(this.storage.keys());
	}

	public recuperarTodosQuestionario(){
		return this.meusQuestionarios.getMeusQuestionarios();
	}



	/***********************************Funcionamento Interno***********************************/
	private salvarQuestionarioOficial(questionario: any, nomeQuestionario: string){
		this.storage.set(nomeQuestionario, questionario);//guardando o questionario
		this.adicionarNaListaDeQuestionarios(nomeQuestionario);//guardando o nome do questionario na lista de todos os questionarios
	}

	private adicionarNaListaDeQuestionarios(nome: string){
		this.meusQuestionarios.setMeusQuesionarios(nome);
		try {
			this.storage.set('meusQuestionarios', this.meusQuestionarios.getMeusQuestionarios());
			console.log('meus questionarios: '+this.meusQuestionarios.getMeusQuestionarios());
			let toast = this.toastCtrl.create({
                message: 'Questionário salvo com sucesso!',
				showCloseButton: true,
				duration: 3000
            });
            toast.present();
		} catch (error) {
			this.alerta('Erro ao tentar salvar o questionario!', error);
		}
		
	}

	public alerta(titulo: any, subtitulo: any){
		let alert = this.alertCtrl.create({
			title: titulo,
			subTitle: subtitulo,
			buttons: ['Ok']
		});
		alert.present();
	}

	/***********************************Getters e Setters***************************************/

	setMeusQuestionarios(meusQuestionarios){
		//this.meusQuestionarios = meusQuestionarios;
		this.meusQuestionarios.setMeusQuesionarios(meusQuestionarios);
	}

	getMeusQuestionarios(){
		return this.meusQuestionarios;
	}

	

}
