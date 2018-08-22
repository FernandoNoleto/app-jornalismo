import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesquisaPage } from '../pesquisa/pesquisa';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-texto',
  templateUrl: 'texto.html',
})
export class TextoPage {

	@ViewChild(Content) content: Content;
	private scrollParam = 100;

	constructor(public navCtrl: NavController) {
	}

	abrirQuestionario(){
		this.navCtrl.push(PesquisaPage);

	}

	scroll(){
		this.content.scrollTo(0, this.scrollParam, 200);
		this.scrollParam += 100;
	}


}
