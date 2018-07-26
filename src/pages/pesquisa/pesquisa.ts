import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastAlertProvider } from '../../providers/toast-alert/toast-alert';
import { Storage } from '@ionic/storage';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


export class meusQuestionarios{
	nomeDosQuestionarios: Array<string> = new Array();
}

export class alternativa{
	texto: string;
	marcacao: boolean = false;
}

export class questao{
	enunciado: string;
	alternativas: Array<alternativa> = new Array();
}

export class questionario{
	questoes: Array<questao> = new Array();
}

@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {
	
	nomeQuest: string = "";
	informacoes: questionario = new questionario();
	altMarcadas: Array<{alt: any, marcado: boolean}> = new Array();
	questoes: Array<questao> = new Array();
	alternativas: Array<alternativa> = new Array();
	

  	constructor(private storage: Storage, private toastAlertPrvd: ToastAlertProvider, private navCtrl: NavController) {

	  	this.storage.get('questionario-ativado').then((value) => {
			// console.log('value buscado:. ', value);
			if(value == null){
				this.informacoes = null;
				return;
			}
			this.storage.get(value).then((val) => {
				this.informacoes = val;
				this.informacoes.questoes.forEach(element => {
					this.questoes.push(element);
					// this.altMarcadas.push({alt: '', marcado: false});
				});
			});
		});

		// this.altMarcadas.push({alt: '', marcado: false});

		this.informacoes.questoes.forEach(element => {
			element.alternativas.forEach(e => {
				this.altMarcadas.push({alt: 'aa', marcado: false});
			});
		});
	}

	

	atualizar_informacoes(alt: any){
		console.log(this.informacoes.questoes);
		// for (let i = 0; i < this.altMarcadas.length; i++) {
		// 	console.log('element: ', i);
			
		// }
		// console.log(alt);
	}

	inf(){
		console.log(this.altMarcadas);
		//console.log(this.altMarcadas);
		// var v = this.altMarcadas.entries();
		// console.log(JSON.parse(this.altMarcadas));
		// console.log('tam: ', this.altMarcadas.length);
	}

	finalizar_questionario(){
		console.log("-----------------------------");
		console.log(this.altMarcadas);
		console.log("-----------------------------");


		try{
			this.storage.set('respostas', this.altMarcadas);
			this.toastAlertPrvd.toast('Suas respostas foram armazenadas!', 3000, true);
			this.navCtrl.pop();
		}
		catch(erro){
			console.log('erro: ', erro);
		}
		
	}

	printar_informacoes(){
		console.log("-----------------------------");
		console.log(this.altMarcadas);
		this.storage.get('respostas').then((value) => {
			console.log('value:. ', value);
			// this.toastAlertPrvd.toast('alt: '+this.altMarcadas + ' v: '+value, 5000, true, 'bottom');
		});

	}


 
}
