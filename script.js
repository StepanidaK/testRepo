const personalMovieDB = {

    count: 0, 
    movies: {}, 
    actors: {},
    genres: [],
    private: false,
    start: function() {

        personalMovieDB.count  = +prompt("Сколько фильмов вы уже посмотрели?");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
           
            personalMovieDB.count  = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    }, 

    rememberMyFilms: function() {

        for (let i = 0; i < 2; i++){
    
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
                console.log(i)
            }
        }
    
    }, 

    detectPersonalLevel: function() {

        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель")
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман")
        } else {"Произошла ошибка"}
    
    }, 

    showMyDB: function(hidden) {

        if(!hidden){
            console.log(personalMovieDB)
        }
    
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.private){

            personalMovieDB.private = false;
        } else {

            personalMovieDB.private = true;
        }

    },

    writeYourGenres: function() {

        for (let i = 1; i <= 3; i++){
    
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {

                console.log("Вы ввели некорректные данные");
                i--;

            } else {

                personalMovieDB.genres[i-1] = genre;
            }

            personalMovieDB.genres.forEach((item, index) => {

                console.log(`Любимый жанр #${index+1} - это ${item}`)

            })

           
        }
    }
    

}












