import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
//import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-criarconta',
  templateUrl: 'criarconta.html',
})
export class CriarcontaPage {

  	constructor(private toastCtrl: ToastController/*public navCtrl: NavController, public navParams: NavParams*/) {
  	}
	  
	private criarconta(){

		

		let toast = this.toastCtrl.create({
		  	message: 'Conta criada!',
		  	duration: 3000
		});
		toast.present();
	}

}
