import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TallerWebReactive';
  usuario:any;
  usuario$:Observable<any> = new Observable();
  ROOT_URL: string = 'https://dummyjson.com';
  mensajeErrror = " ";
  
  constructor(private http:HttpClient){}
  searchQuery: string = '';
  ngOnInit(){}
  @Input()
  usuarioEnviar!:Usuario;
  encontrado!: boolean ;
  onSubmit() {

    console.log('Búsqueda realizada:', this.searchQuery);
    this.http.get(this.ROOT_URL+'/users/filter?key=username&value=' + this.searchQuery).subscribe((userInfo: any)=>{
      //this.usuario = userInfo;
      //console.log(this.usuario["users"][0])
      if (!userInfo || !userInfo.users || userInfo.users.length === 0) {
        console.log("No existe");
        this.encontrado = false;
      } else {
        this.encontrado = true;
        this.usuario = userInfo;
        console.log(this.usuario);
        this.usuarioEnviar = {
            id:0,
            firstName:this.usuario["users"][0]["firstName"],
            lastName:this.usuario["users"][0]["lastName"],
            email:this.usuario["users"][0]["email"],
            maidenName:this.usuario["users"][0]["maidenName"],
            gender:this.usuario["users"][0]["gender"],
            age:this.usuario["users"][0]["age"],
            phone:this.usuario["users"][0]["phone"],

        } 

        console.log(this.usuarioEnviar );
        
      }
    });
  }


}
