import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { CriarcontaPage } from '../criarconta/criarconta';
import { ResetarsenhaPage } from '../resetarsenha/resetarsenha';
import { HomePage } from '../home/home';
import { CriarQuestionarioPage } from '../criar-questionario/criar-questionario';
import { MeusQuestionariosPage } from '../meus-questionarios/meus-questionarios';
import { ModelQuestionarioProvider } from '../../providers/model-questionario/model-questionario';
import { RespostasPage } from '../respostas/respostas';

@Component({
  selector: 'page-autenticacao',
  templateUrl: 'autenticacao.html',
})
export class AutenticacaoPage {

	nome: string;
	email: string;
	logado: boolean = false;
    user: User = new User();
 	@ViewChild('form') form: NgForm;

	constructor(
		private navCtrl: NavController,
		private toastCtrl: ToastController,
		private carregarCtrl: LoadingController,
		private afa: AngularFireAuth,
		private auth: AuthProvider,
		private questionarioPrvd: ModelQuestionarioProvider
	) {
		try {
            if(this.afa.auth.currentUser == null){
                this.logado = false;
            }
            else{
                this.nome = this.afa.auth.currentUser.displayName;
				this.email = this.afa.auth.currentUser.email;
				this.email = this.email.substr(0, this.email.indexOf('@'));
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
				this.navCtrl.pop();
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

	signOut(){
		let carregando = this.carregarCtrl.create({
            content: "Saindo...",
            duration: 500
        });

        this.auth.signOut();
        carregando.present();
        this.navCtrl.setRoot(HomePage);
	}
	
	nome_usuario(){
		console.log(this.afa.auth.currentUser.email);
	}

	criar_novo_questionario(){
		this.navCtrl.push(CriarQuestionarioPage);
	}

	abrirMeusQuestionarios(){
		this.navCtrl.push(MeusQuestionariosPage);
	}

	todasAsChaves(){
		this.questionarioPrvd.todasAsChaves();
	}

	abrirResultados(){
		this.navCtrl.push(RespostasPage);
	}


}
