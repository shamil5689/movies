import { deleteFilm } from "./components/deleteFilm.js";
import { raitingCheck } from "./components/raitingCheck.js";

function showFilms(arr) {
    console.log(arr)
    arr.forEach(i => {
        document.querySelector('.movies-list').innerHTML += `
        <li class="movies-list__item">
        <div class="movies-list__wrapper">
            <img src="${i.img}" class="movies-list__img">
            <div class="movies-list__cursor"></div>
        </div>
        <div class="movies-list__info">
            <h4 class="movies-list__heading">${i.heading}</h4>
            <p class="movies-list__genre">${i.genre}</p>
            <div class="movies-list__average movies-list__average--${raitingCheck(i.raiting)}">${i.raiting}</div>
            <button class="movies-list__favorites">x</button>
        </div>
    </li>
        `
    });
}

showFilms(JSON.parse(localStorage.getItem('movies')))
deleteFilm()

