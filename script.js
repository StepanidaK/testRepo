const numberOfFilms  = +prompt("Сколько фильмов вы уже посмотрели?")


const personalMovieDB = {

    count: numberOfFilms, 
    movies: {}, 
    actors: {},
    genres: [],
    private: false

}

for (let i=0; i < 2; i++){

    const a = prompt("Один из последних просмотренных фильмов?");

    const b = +prompt("На сколько оцените его?");

    /*Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять*/

    if (a != null && b != null && a != "" && b != "" && a.length < 50){
        
        personalMovieDB.movies[a] = b;

        console.log(personalMovieDB)

        // не используем dot notation, чтобы избежать возможных проблем при добавлении свойства в объект. 
        // Когда добавила a через точку в объект, то записалась, как a 


    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель")
} else if (personalMovieDB.count > 30){
    console.log("Вы киноман")
} else {"Произошла ошибка"}










