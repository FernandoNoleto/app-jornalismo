import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

	user: Observable<firebase.User>;

  	constructor(private angularFireAuth: AngularFireAuth) {
		this.user = angularFireAuth.authState;
	}

	createUser(user: User) {
		return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
	}
	
	signIn(user: User) {
		return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
	}

	signOut() : Promise<void> {
        if (this.angularFireAuth.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
                var provider = this.angularFireAuth.auth.currentUser.providerData[i];
            }
        }
        return this.signOutFirebase();
    }
	
	/*
	signInWithFacebook() {
		return this.facebook.login(['public_profile', 'email'])
		  .then((res: FacebookLoginResponse) => {
			//https://developers.facebook.com/docs/graph-api/reference/user
			//Ao logar com o facebook o profile do usuario é automaticamente atualizado.
			return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
		});
	}
	*/
	
	
	private signOutFirebase() {
		return this.angularFireAuth.auth.signOut();
	}
	
	resetPassword(email: string) {
		return this.angularFireAuth.auth.sendPasswordResetEmail(email);
	}
	  

}
