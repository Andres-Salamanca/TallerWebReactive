import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable, map, mergeMap, of } from 'rxjs';
import { Usuario } from './model/usuario';
import { Post } from './model/post';

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

  searchQuery: string = '';
  
  @Input()
  publicaciones: Post[] = [];

  ngOnInit(){}

  @Input()
  usuarioEnviar!:Usuario;

  encontrado!: boolean ;
  
  constructor(private http:HttpClient){}




  onSubmit() {

    console.log('Búsqueda realizada:', this.searchQuery);

    this.http.get(this.ROOT_URL+'/users/filter?key=username&value=' + this.searchQuery).pipe(
      mergeMap((userInfo: any)=>{
        if (!userInfo || !userInfo.users || userInfo.users.length === 0) {
          console.log("No existe");
          this.encontrado = false;
          return of(0);
        } else {
          this.encontrado = true;
          this.usuario = userInfo;
          console.log(this.usuario);
          this.usuarioEnviar = {
              id:this.usuario["users"][0]["id"],
              firstName:this.usuario["users"][0]["firstName"],
              lastName:this.usuario["users"][0]["lastName"],
              email:this.usuario["users"][0]["email"],
              maidenName:this.usuario["users"][0]["maidenName"],
              gender:this.usuario["users"][0]["gender"],
              age:this.usuario["users"][0]["age"],
              phone:this.usuario["users"][0]["phone"],
          } 
          console.log(this.usuarioEnviar );
          return this.http.get<Post>(
            this.ROOT_URL + '/posts/user/' + this.usuario["users"][0]["id"]);

          
        }
        
      }
      ),map((posts: any) => {
        // Here, you can process the list of posts as needed  
        console.log(posts["posts"]);
        this.publicaciones.push(posts["posts"])
        return posts;
      })
    ).subscribe((postInfo: any) => (console.log(postInfo) ));

    console.log(this.publicaciones)

    // this.http.get(this.ROOT_URL+'/users/filter?key=username&value=' + this.searchQuery).subscribe((userInfo: any)=>{
    //   //this.usuario = userInfo;
    //   //console.log(this.usuario["users"][0])
    //   if (!userInfo || !userInfo.users || userInfo.users.length === 0) {
    //     console.log("No existe");
    //     this.encontrado = false;
    //   } else {
    //     this.encontrado = true;
    //     this.usuario = userInfo;
    //     console.log(this.usuario);
    //     this.usuarioEnviar = {
    //         id:this.usuario["users"][0]["id"],
    //         firstName:this.usuario["users"][0]["firstName"],
    //         lastName:this.usuario["users"][0]["lastName"],
    //         email:this.usuario["users"][0]["email"],
    //         maidenName:this.usuario["users"][0]["maidenName"],
    //         gender:this.usuario["users"][0]["gender"],
    //         age:this.usuario["users"][0]["age"],
    //         phone:this.usuario["users"][0]["phone"],

    //     } 

    //     console.log(this.usuarioEnviar );
        
    //   }
    // });


    // this.http.get(this.ROOT_URL+'/posts/user/' + this.searchQuery)

  }


}
