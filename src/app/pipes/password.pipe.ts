import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:any, status:boolean = true):any {

    //Converitiendo el string a * o retornado de acuerdo al boolean

    let password:string = "";

    if (status) {

      for (let i = 0; i < value.length; i++) {
        password += "*";
      }

    } else {
      password = value;
    }


    return password;
  }

}
