const numberOfFilms  = +prompt("Сколько фильмов вы уже посмотрели?")


const personalMovieDB = {

    count: numberOfFilms, 
    movies: {}, 
    actors: {},
    genres: [],
    private: false

}

const a = prompt("Один из последних просмотренных фильмов?");

const b = +prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;

// не используем dot notation, чтобы избежать возможных проблем при добавлении свойства в объект. 
// Когда добавила a через точку в объект, то записалась, как a 





