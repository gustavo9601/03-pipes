import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

  /*
  * ...args:any[]  // usamos los parametros rest
  * que soporta recibir n cantidad de elmentos del tipo definido
  * */
  // paramtro todas, si no se envia, sera siempore true
  transform(value:string, todas:boolean = true):string {

    value = value.toLocaleLowerCase();
    let nombres = value.split(" ");

    if(todas){
      for(let i in nombres){
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(" ");
  }
}
