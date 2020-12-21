"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один из последние просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),  
      c = prompt('Один из последние просмотренных фильмов', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

personalMovieDB.new = '';

let test = 5;

personalMovieDB.new = `Добавил строку и ${test}`;

console.log(personalMovieDB);




