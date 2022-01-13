import { raitingCheck } from "./raitingCheck.js"
// import { getDescription } from "./toGetData.js"

//${test(i.description)}
function cardsHTML(list, i) {
    document.querySelector(list).innerHTML += `
    <li class="movies-list__item">
    <div class="movies-list__wrapper">
        <img src="${i.posterUrl}" class="movies-list__img">
        <div class="movies-list__cursor"></div>
        <p class="description"></p>
    </div>
    <div class="movies-list__info">
        <h4 class="movies-list__heading" data-id="${i.filmId}">${i.nameRu}</h4>
        <p class="movies-list__genre">${i.genres.map(item => `  ${item.genre}`) } </p>
        <div class="movies-list__average movies-list__average--${raitingCheck(i.rating)}">${i.rating}</div>
        <button class="movies-list__favorites">
        <?xml version="1.0" ?><svg class="movies-svg" data-tooltip="Добавить в избранное" width="35px" height="35px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M43.62,52a2,2,0,0,1-1.09-.33L26,40.83,9.47,51.67a2,2,0,0,1-2,.09,2,2,0,0,1-1-1.76V2a2,2,0,0,1,2-2H43.62a2,2,0,0,1,2,2V50a2,2,0,0,1-1,1.76A2,2,0,0,1,43.62,52ZM26,36.44a2.1,2.1,0,0,1,1.1.32L41.62,46.3V4H10.38V46.3L24.9,36.76A2.1,2.1,0,0,1,26,36.44Z"/></svg>
    </button>
    </div>
</li>
    `
}
//onclick="location.href='/public/about-film.html'"
export {cardsHTML}