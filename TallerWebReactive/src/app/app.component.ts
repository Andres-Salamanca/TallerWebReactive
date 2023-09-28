import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable, forkJoin, from, map, mergeMap, of, scan } from 'rxjs';
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

    this.http.get(this.ROOT_URL + '/users/filter?key=username&value=' + this.searchQuery).pipe(
      mergeMap((userInfo: any) => {
        if (!userInfo || !userInfo.users || userInfo.users.length === 0) {
          console.log("No existe");
          this.encontrado = false;
          return of(0);
        } else {
          this.encontrado = true;
          this.usuario = userInfo;
          console.log(this.usuario);
          this.usuarioEnviar = {
            id: this.usuario["users"][0]["id"],
            firstName: this.usuario["users"][0]["firstName"],
            lastName: this.usuario["users"][0]["lastName"],
            email: this.usuario["users"][0]["email"],
            maidenName: this.usuario["users"][0]["maidenName"],
            gender: this.usuario["users"][0]["gender"],
            age: this.usuario["users"][0]["age"],
            phone: this.usuario["users"][0]["phone"],
          }
          console.log(this.usuarioEnviar);
          return this.http.get<Post>(
            this.ROOT_URL + '/posts/user/' + this.usuario["users"][0]["id"]);
        }
      }),
      map((posts: any) => {
        // Here, you can process the list of posts as needed
        console.log(posts["posts"]);
        this.publicaciones = posts["posts"];
    
        // Extract post IDs and return as an array
        const postIDs = posts["posts"].map((post: any) => post.id);
    
        return {
          posts: posts["posts"],
          postIDs: postIDs, // Add this line to include post IDs in the result
        };
      }),
      mergeMap((postInfo: any) => {
        // Create an array of observables for each post ID
        const commentRequests: Observable<Comment[]>[] = postInfo.postIDs.map((postID: number) =>
          this.http.get<Comment[]>(this.ROOT_URL + `/comments/post/${postID}`)
        );
    
        // Merge the observables into a single observable
        return forkJoin(commentRequests).pipe(
          map((commentsList: Comment[][]) => {
            // Here, you can process the commentsList as needed
            console.log("Comments for each post:", commentsList);
    
            // Add the comments to the postInfo object
            return {
              posts: postInfo.posts,
              postIDs: postInfo.postIDs,
              comments: commentsList,
            };
          })
        );
      })
    ).subscribe((finalData: any) => {
      console.log("final")
      console.log(finalData);
      // finalData contains posts, postIDs, and comments for each post
    });

    

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
