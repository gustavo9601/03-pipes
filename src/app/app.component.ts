import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Gustavo ADoLfO Marquez PrIeTo';


  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Wolverine",
    clave: "Logan",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  }



  video = "JGwWNGJdvx8";

  valorDePromesa = new Promise((result, reject) => {
    setTimeout(()=>result('Llego la data'), 3500);
  });

  fecha = new Date();

  activar:boolean = true;

}
