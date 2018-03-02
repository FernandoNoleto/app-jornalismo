import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    //autenticacao: FirebaseAuthState;
    email: string;
    senha: string;

    constructor(private afa: AngularFireAuth) {

	}
	
	

  

}