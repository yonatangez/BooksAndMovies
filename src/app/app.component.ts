import { Component } from '@angular/core';

import {DataService} from './shared/data.service'

@Component({
  selector: 'my-app',
  template: `
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand">{{name}}</a>
        <ul class="nav navbar-nav">
           <li><a [routerLink]="['/#/welcome']">Home</a>
           <li><a [routerLink]="['/#/books']">Books</a></li>
           <li><a [routerLink]="['/#/movies']">Movies</a></li>
        </ul>
      </div>
    </nav>
</div>
<div class='container'>
<router-outlet></router-outlet>
</div>`,
providers:[DataService],
})
export class AppComponent  {
    name :string = 'Books&Movies';
 }
