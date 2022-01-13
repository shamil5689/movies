import { getData } from "../services/getData.js";
import { createPagination } from "./pagination.js";
import { generateCards } from "./toGetData.js";

function search() {
    document.querySelector('.header-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let value = document.querySelector('.header-form__search').value
        getData(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}`)
            .then(data => { searchGenerateCards(data), createPagination(Math.ceil(data.searchFilmsCountResult / data.films.length), `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}`) })
    })
}

function searchGenerateCards(data) {
    console.log(data.films)
    document.querySelector('.pagination__item').innerHTML = ''
    generateCards(data);
    document.querySelector('.heading').textContent = 'результаты поиска'
}
export { search } 