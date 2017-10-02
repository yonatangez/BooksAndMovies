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
// Our http service.
var http_1 = require('@angular/http');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getBooks = function () {
        return this.http.get('http://localhost:8081/allBooks').map(function (response) { return response.json(); });
    };
    DataService.prototype.getMovie = function () {
        return [
            {
                "movieName": "The Shawshank Redemption",
                "year": 1994,
                "rating": 9.2,
            },
            {
                "movieName": "The Godfather",
                "year": 1972,
                "rating": 9.2,
            },
            {
                "movieName": "The Godfather: Part II",
                "year": 1974,
                "rating": 9.0,
            },
            {
                "movieName": "The Dark Knight",
                "year": 2008,
                "rating": 8.9,
            },
            {
                "movieName": "12 Angry Men",
                "year": 1957,
                "rating": 8.9,
            },
            {
                "movieName": "Schindler's List",
                "year": 1993,
                "rating": 8.9,
            },
            {
                "movieName": "Inception",
                "year": 2010,
                "rating": 8.7,
            },
            {
                "movieName": "The Matrix",
                "year": 1999,
                "rating": 8.7,
            },
            {
                "movieName": "Pulp Fiction",
                "year": 1994,
                "rating": 8.9,
            },
            {
                "movieName": "The Silence of the lambs",
                "year": 1991,
                "rating": 8.6,
            },
            {
                "movieName": "American Beauty",
                "year": 1999,
                "rating": 8.4,
            },
            {
                "movieName": "Psycho",
                "year": 1960,
                "rating": 8.5,
            },
            {
                "movieName": "Léon: The Professional",
                "year": 1994,
                "rating": 8.6,
            },
            {
                "movieName": "Modern Times",
                "year": 1936,
                "rating": 8.5,
            },
            {
                "movieName": "American History X",
                "year": 1998,
                "rating": 8.5,
            },
        ];
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map