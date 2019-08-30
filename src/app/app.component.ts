import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //permite que funcione en usa sola pagina(single page aplication)
  selector: 'app-root',
  templateUrl: './app.component.html',
  //es un archivo css para cada componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzinger';
  constructor(public router: Router){
    
  }
}
