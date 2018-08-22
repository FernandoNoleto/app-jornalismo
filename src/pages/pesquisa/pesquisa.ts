import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastAlertProvider } from '../../providers/toast-alert/toast-alert';
import { Storage } from '@ionic/storage';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Content } from 'ionic-angular';



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

	@ViewChild(Content) content: Content;
	// public scrollAmount = 0;

	private scrollParam = 100;

	
	nomeQuest: string = "";
	informacoes: questionario = new questionario();
	altMarcadas: Array<{alt: any, marcado: boolean}> = new Array();
	questoes: Array<questao> = new Array();
	alternativas: Array<alternativa> = new Array();
	

  	constructor(
		private storage: Storage,
		private toastAlertPrvd: ToastAlertProvider,
		private navCtrl: NavController,
		private bluetooth: BluetoothSerial,
		public zone: NgZone
	) {

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
	}

	inf(){
		console.log(this.altMarcadas);
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
		});

	}

	scrollToTop(){
		// this.content.scrollToTop(300);
		// console.log("scroll");
		// console.log(this.content.isScrolling);
		// this.content.
	}

	scrollHandler(event) {
		console.log(`ScrollEvent: ${event}`)
		
		// console.log(this.scrollAmount);
		// this.zone.run(()=>{
		//   // since scrollAmount is data-binded,
		//   // the update needs to happen in zone
		//   this.scrollAmount++
		// });
		// this.zone.
		// console.log()
	}

	// testeScroll(event){
	// 	// this.gamba = false;
	// 	// console.log(event);
	// 	// console.log(event.directionY);
	// 	if(event.directionY == "up" && this.gamba==false){
	// 		// console.log("up");
	// 		this.toastAlertPrvd.alerta("nao eh possivle voltar", "asd");
	// 		this.gamba = true;
	// 	}
	// 	// this.gamba = false;
	// }

	scroll(){
		this.content.scrollTo(0, this.scrollParam, 200);
		this.scrollParam += 100;
	}

	 


	// enviar_bluetooth(){
	// 	// this.bluetooth.write(this.altMarcadas).then('success', 'failure');
	// 	console.log(this.bluetooth.list());
	// }


 
}
