import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController,  } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { CriarcontaPage } from '../criarconta/criarconta';
import { ResetarsenhaPage } from '../resetarsenha/resetarsenha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	//autenticacao: FirebaseAuthState;
	nome: string;
	email: string;
	logado: boolean = false;
    user: User = new User();
 	@ViewChild('form') form: NgForm;

	constructor(
		private navCtrl: NavController,
		private toastCtrl: ToastController,
		private afa: AngularFireAuth,
		private auth: AuthProvider
	) {
		try {
            if(this.afa.auth.currentUser == null){
                this.logado = false;
            }
            else{
                this.nome = this.afa.auth.currentUser.displayName;
                this.email = this.afa.auth.currentUser.email;
                this.logado = true;
            }
                
        } catch (error) {
            console.log(error);
        }


	}
	
	criarconta(){
		this.navCtrl.push(CriarcontaPage);
	}
	resetarsenha(){
		this.navCtrl.push(ResetarsenhaPage);
	}

	signIn() {
		if (this.form.form.valid) {
		  	this.auth.signIn(this.user)
			.then(() => {
				console.log('Logado!');
				this.logado = true;
			  	this.navCtrl.setRoot(HomePage);
			})
			.catch((error: any) => {
				let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
				if (error.code == 'auth/invalid-email') {
					toast.setMessage('O e-mail digitado não é valido.');
				} else if (error.code == 'auth/user-disabled') {
					toast.setMessage('O usuário está desativado.');
				} else if (error.code == 'auth/user-not-found') {
					toast.setMessage('O usuário não foi encontrado.');
				} else if (error.code == 'auth/wrong-password') {
					toast.setMessage('A senha digitada não é valida.');
				}
				toast.present();
			});
		}
	}

	/*
	signInWithEmailPage() {
		this.navCtrl.push(SigninWithEmailPage);
	}
	*/
}