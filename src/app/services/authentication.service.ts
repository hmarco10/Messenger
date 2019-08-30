import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(private afsAuth: AngularFireAuth) {
    }
    registerWithEmail(email: string, passw:string) {
      //return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
      return new Promise ((resolve,reject)=>{
        this.afsAuth.auth.signInWithEmailAndPassword(email,passw)
        .then(userData => resolve (userData),
        err => reject (err));
      });
    }
    loginWithEmail(email: string, pass:string) {
      return new Promise ((resolve,reject)=>{
        this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
        .then(userData => resolve (userData),
        err => reject (err));
      });
    }

    getStatus() {
      return this.afsAuth.authState;
    }

    logOut() {
      return this.afsAuth.auth.signOut();
    }
}
