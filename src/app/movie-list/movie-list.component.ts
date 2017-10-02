import { Component,OnInit,OnDestroy } from '@angular/core';
import  {IMovie} from "./movie";
import {DataService} from "../shared/data.service";

@Component({
  selector:'movie-list',
  moduleId:module.id,
  templateUrl: 'movie-list.component.html',
  styleUrls:['movie-list.component.css'],
})
export class MovieListComponent implements OnInit ,OnDestroy{
  filterByMovieName:string="";
  movies:IMovie[];
  constructor(private _dataService:DataService){};
  ngOnInit():void{
    console.log('Initializing MovieListComponent......');
      this.movies = this._dataService.getMovie();
  }
  ngOnDestroy():void{
    console.log('bye bye MovieListComponent......');
  }
}
