import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-show-usuario',
  templateUrl: './show-usuario.component.html',
  styleUrls: ['./show-usuario.component.css']
})
export class ShowUsuarioComponent {
  @Input()
  user2:Usuario = {
    firstName: ' ',
    lastName: '',
    maidenName: '',
    age:0 ,
    gender: '',
    email: '',
    phone: '',
    id:0
  };
  user = {
    firstName: 'Terry',
    lastName: 'Medhurst',
    maidenName: 'Smitham',
    age: 50,
    gender: 'male',
    email: 'atuny0@sohu.com',
    phone: '+63 791 675'
  };

}
