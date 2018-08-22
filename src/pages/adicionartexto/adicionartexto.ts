import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-adicionartexto',
  templateUrl: 'adicionartexto.html',
})
export class AdicionartextoPage {

	texto: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

  

}
