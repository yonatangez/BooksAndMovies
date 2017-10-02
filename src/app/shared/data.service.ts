import {Injectable} from '@angular/core';
import {IBook} from '../book-list/book';
import {IMovie} from '../movie-list/movie';
import {Observable} from 'rxjs/Rx';

// Our http service.
import { Http, Response } from '@angular/http';



@Injectable()
export class DataService{
  constructor(private http: Http) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get('http://localhost:8081/allBooks').map(response => response.json() as IBook[])

}
  getMovie():IMovie[]{
    return[
    {
      "movieName":"The Shawshank Redemption",
      "year":1994,
      "rating":9.2,
    },
    {
      "movieName":"The Godfather",
      "year":1972,
      "rating":9.2,
    },
    {
      "movieName":"The Godfather: Part II",
      "year":1974,
      "rating":9.0,
    },
    {
      "movieName":"The Dark Knight",
      "year":2008,
      "rating":8.9,
    },
    {
      "movieName":"12 Angry Men",
      "year":1957,
      "rating":8.9,
    },
    {
        "movieName":"Schindler's List",
        "year":1993,
        "rating":8.9,
      },
      {
        "movieName":"Inception",
        "year":2010,
        "rating":8.7,
      },
      {
        "movieName":"The Matrix",
        "year":1999,
        "rating":8.7,
      },
      {
        "movieName":"Pulp Fiction",
        "year":1994,
        "rating":8.9,
      },
      {
        "movieName":"The Silence of the lambs",
        "year":1991,
        "rating":8.6,
      },
      {
        "movieName":"American Beauty",
        "year":1999,
        "rating":8.4,
      },
      {
        "movieName":"Psycho",
        "year":1960,
        "rating":8.5,
      },
      {
        "movieName":"Léon: The Professional",
        "year":1994,
        "rating":8.6,
      },
      {
        "movieName":"Modern Times",
        "year":1936,
        "rating":8.5,
      },
      {
        "movieName":"American History X",
        "year":1998,
        "rating":8.5,
      },
  ];
  }
}
