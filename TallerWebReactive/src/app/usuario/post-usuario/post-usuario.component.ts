import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-usuario',
  templateUrl: './post-usuario.component.html',
  styleUrls: ['./post-usuario.component.css']
})
export class PostUsuarioComponent {

  
  @Input()
  misPublicaiones: Post[] = [];

  @Input()
  finalData: any = {};

ngOnInit(){
  console.log("mis publi + " );
  console.log(this.misPublicaiones);
  console.log("publi");
  console.log(this.finalData);
  console.log("final");
  
  
  
}
  

}
