//interfaces que vamos a usar 
//es como una clase
export interface User {
    nick: string;
    //? indica que es parametro opcional
    subnick?: string;
    age?: number;
    email: string;
    friend: boolean;
    uid: any;
  }