import { getData } from "../services/getData.js";
import { addMoviesFavorites } from "./addMovies.js";
import { cardsHTML } from "./cardsHTML.js";
import { createPagination } from "./pagination.js";

function toGetData() {
    getData('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1')
        .then(data => { renderCards(data), createPagination(Math.ceil(250 / data.films.length), 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page='), getTrailer() })
}

function renderCards(data) {
    data.films.filter(i => {
        if (i.rating !== 'null') {
            cardsHTML('.movies-list', i)
        }
    });
    addMoviesFavorites();
    receiveDetailedInf();
}

function generateCards(data) {
    data.films.forEach(item => {
        document.querySelector('.movies-list').innerHTML = ''
    })
    renderCards(data)
    getTrailer()
}

function receiveDetailedInf() {
    document.querySelectorAll('.movies-list__wrapper').forEach(item => {
        item.addEventListener('mouseover', () => {
            let id = item.parentElement.querySelector('.movies-list__heading').getAttribute('data-id')
            let description = item.parentElement.querySelector('.description');
            getData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`)
                .then(data => { getDescription(data, description) })
        })
    })
}

function getDescription(data, description) { description.innerHTML = data.description }

function getTrailer() {
    document.querySelectorAll('.movies-list__cursor').forEach(item => {
        item.addEventListener('click', () => {
            let value = item.parentElement.parentElement.querySelector('.movies-list__heading').getAttribute('data-id')
            getData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${value}/videos`)
                .then(data => { getUrl(data.items) })
        })
    })
}

function getUrl(data) {
    let urlArr = []
    data.forEach(item => {
        let url = item.url
        urlArr.push(url)
    })
    urlArr = urlArr.filter(item => {
        if (item.includes('kinopoisk')) {
            location.href = item
        }
    })
}
export { generateCards, getDescription, getTrailer, toGetData }