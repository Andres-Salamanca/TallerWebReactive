import { Component } from '@angular/core';

@Component({
  selector: 'app-search-usuairo',
  templateUrl: './search-usuairo.component.html',
  styleUrls: ['./search-usuairo.component.css']
})
export class SearchUsuairoComponent {
  searchQuery: string = '';
onSubmit() {
  console.log('Búsqueda realizada:', this.searchQuery);
}

}
