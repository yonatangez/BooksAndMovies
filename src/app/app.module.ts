import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import{CarouselModule} from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import {WelcomeComponent }  from './welcome/welcome.component';
import { BookListComponent }  from './book-list/book-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BookFilterPipe }  from './book-list/book-filter.pipe';
import { MovieFilterPipe }  from './movie-list/movie-filter.pipe';
import { StarComponent }  from './shared/star.component';

import {HttpModule} from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,CarouselModule.forRoot(),RouterModule.forRoot([{path:"#/welcome",component:WelcomeComponent},{path:'#/books',component:BookListComponent},{path:'#/movies',component:MovieListComponent}],{useHash:true})],
  declarations: [ AppComponent,WelcomeComponent,BookListComponent,MovieListComponent,BookFilterPipe,MovieFilterPipe,StarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

