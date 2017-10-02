var express = require('express');

var app = express.createServer();
var cors = require('cors')
app.use(cors())

app.get('/allBooks', function(req, res) {

  res.send([{
    "bookName":'The Very Hungry Caterpillar',
    "authorName":'Eric Carle',
    "rating":'4.28',
    "imageUrl":'./app/img/img1.jpg',
  },
    {
      "bookName":'The Complete Maus',
      "authorName":'Art Spiegelman',
      "rating":'4.53',
      "imageUrl":'./app/img/img10.jpg',
    },
    {
      "bookName":'Where the Wild Things Are',
      "authorName":'Maurice Sendak',
      "rating":'4.22',
      "imageUrl":"./app/img/img2.jpg",
    },
    {
      "bookName":'Green Eggs and Ham',
      "authorName":'Dr. Seuss',
      "rating":'4.29',
      "imageUrl":"./app/img/img3.jpg",
    },
    {
      "bookName":'Love in the Time of Cholera',
      "authorName":'Gabriel García Márquez',
      "rating":'3.89',
      "imageUrl":"./app/img/img11.jpg",
    },
    {
      "bookName":'To Kill a Mockingbird',
      "authorName":'Harper Lee',
      "rating":'4.26',
      "imageUrl":"./app/img/img12.jpg",
    },
    {
      "bookName":'Animal Farm',
      "authorName":'George Orwell',
      "rating":'3.87',
      "imageUrl":"./app/img/img13.jpg",
    },
    {
      "bookName":'The Giver',
      "authorName":'Lois Lowry',
      "rating":'4.12',
      "imageUrl":"./app/img/img14.jpg",
    },
    {
      "bookName":'The Old Man and the Sea',
      "authorName":'Ernest Hemingway',
      "rating":'3.73',
      "imageUrl":"./app/img/img15.jpg",
    },
    {
      "bookName":'The Giving Tree',
      "authorName":'Shel Silverstein',
      "rating":'4.38',
      "imageUrl":"./app/img/img16.jpg",
    },
  ]);
});

app.get('/allMovies', function(req, res) {
  var movieA = {'name':'theLasis'};
  var movieB = {'name':'theShit'};
  var moviesArr = [];
  moviesArr.push(movieA);
  moviesArr.push(movieB);
  res.send(moviesArr);
});

app.listen(8081);
console.log('Listening on port 8081...');
