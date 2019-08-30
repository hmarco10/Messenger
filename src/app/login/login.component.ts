import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    [x: string]: any;
    operation: string = 'login';
    email: string = null;
    password: string = null;
    nick: string = null;

    constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthenticationService, private userService:UserService) { }
    
    
    ngOnInit() {    
    }

    onLogin(): void {
      
        this.authService.loginWithEmail(this.email, this.password)
          .then((res) => {
            this.router.navigate(['/profile'])
          }).catch(err => alert('El Usuario no existe!'));
      }

    onLogout() {
        this.authService.logOut();
      }

      register(){
          this.authenticationService.regiterWithEmail(this.email, this.password).then(
             function onFulfilled (data){
                  const user = {
                      uid:data.user.uid,
                      email: this.email,

                  };
                  this.userService.createUser(user).then(function onFulfilled(data2){
                    alert('Registrado Correctamente');
                    console.log(data2);
                  }).catch(function onRejected (error){
                    alert('Ocurrio un Error');
                    console.log(error);
                  });
                  
          /*}).catch(onrejected: (error)=>{
              alert('Ocurrio un Error');
              console.log(error);*/
          
          });
      }

}