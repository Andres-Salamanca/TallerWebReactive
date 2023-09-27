import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-search-usuairo',
  templateUrl: './search-usuairo.component.html',
  styleUrls: ['./search-usuairo.component.css']
})
export class SearchUsuairoComponent {
  searchQuery: string = '';
 
  @Output()

  onSubmit() {
 
  }

}
