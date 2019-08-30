import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends : User[];
  constructor() { 
    let usuario1: User={
      nick:'HugoMarco',
      age:26,
      email:'@gmail.com',
      friend:true,
      uid:1
    };
    let usuario3: User={
      nick:'Andrea',
      age:24,
      email:'@gmail.com',
      friend:true,
      uid:2
    };
    let usuario2:User={
      nick:'Carlos',
      age:25,
      email:'@gmail.com',
      friend:false,
      uid:3
    };
    let usuario5:User={
      nick:'Deby',
      age:19,
      email:'@xela.com',
      friend:false,
      uid:4
    };
    this.friends = [usuario1,usuario2,usuario3,usuario5];
  }
  getFriends(){
    return this.friends;
  }
}
