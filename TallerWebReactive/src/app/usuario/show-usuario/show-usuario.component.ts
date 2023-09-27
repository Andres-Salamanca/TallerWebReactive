import { Component } from '@angular/core';

@Component({
  selector: 'app-show-usuario',
  templateUrl: './show-usuario.component.html',
  styleUrls: ['./show-usuario.component.css']
})
export class ShowUsuarioComponent {
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
