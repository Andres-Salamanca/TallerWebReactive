import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUsuairoComponent } from './usuario/search-usuairo/search-usuairo.component';
import { ShowUsuarioComponent } from './usuario/show-usuario/show-usuario.component';
import { PostUsuarioComponent } from './usuario/post-usuario/post-usuario.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsuairoComponent,
    ShowUsuarioComponent,
    PostUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
