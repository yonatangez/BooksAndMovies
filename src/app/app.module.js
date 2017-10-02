"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./welcome/welcome.component');
var book_list_component_1 = require('./book-list/book-list.component');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var book_filter_pipe_1 = require('./book-list/book-filter.pipe');
var movie_filter_pipe_1 = require('./movie-list/movie-filter.pipe');
var star_component_1 = require('./shared/star.component');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, ng2_bootstrap_1.CarouselModule.forRoot(), router_1.RouterModule.forRoot([{ path: "#/welcome", component: welcome_component_1.WelcomeComponent }, { path: '#/books', component: book_list_component_1.BookListComponent }, { path: '#/movies', component: movie_list_component_1.MovieListComponent }], { useHash: true })],
            declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, book_list_component_1.BookListComponent, movie_list_component_1.MovieListComponent, book_filter_pipe_1.BookFilterPipe, movie_filter_pipe_1.MovieFilterPipe, star_component_1.StarComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map