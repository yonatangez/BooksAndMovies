import { Component,OnInit,OnDestroy } from '@angular/core';
import  {IBook} from "./book";
import {DataService} from "../shared/data.service";

@Component({
  selector:'book-list',
  moduleId:module.id,
  templateUrl: 'book-list.component.html',
  styleUrls:['book-list.component.css'],
})
export class BookListComponent  implements OnInit ,OnDestroy{
  imageWidth:number=50;
  imageMargin:number=10;
  showImage:boolean=true;
  filterByBookName:string="";
  books:IBook[];
  constructor(private _dataService:DataService){};

  toggleImage():void{this.showImage=!this.showImage};
  ngOnInit():void{
    console.log('Initializing BookListComponent......');
      this._dataService.getBooks().subscribe(books => {
        console.log('got books back')
        this.books = books
      })
  }
  ngOnDestroy():void{
    console.log('bye bye BookListComponent......');
  }
}
