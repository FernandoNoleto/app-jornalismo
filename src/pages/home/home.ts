import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { User } from '../../providers/auth/user';
//import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AutenticacaoPage } from '../autenticacao/autenticacao';
import { PesquisaPage } from '../pesquisa/pesquisa';
import { RespostasPage } from '../../pages/respostas/respostas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public pessoa: string;
	public logado: boolean;
	// private email: string;
	
	constructor(private navCtrl: NavController, private angFireAuth: AngularFireAuth,){
		try {
            if(this.angFireAuth.auth.currentUser == null){
                this.logado = false;
            }
            else{
                //this.nome = this.angFireAuth.auth.currentUser.displayName;
                // this.email = this.angFireAuth.auth.currentUser.email;
                this.logado = true;
                //this.naologado = false;
            }
                
        } catch (error) {
            console.log(error);
        }

	}

	prosseguir(){
		if (this.pessoa == "entrevistador"){
			this.navCtrl.push(AutenticacaoPage);
		}
		else if(this.pessoa == "entrevistado"){
			this.navCtrl.push(PesquisaPage);
		}
    }
    
    printar_informacoes(){
        this.navCtrl.push(RespostasPage);
        
    }
}