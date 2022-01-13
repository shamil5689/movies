import { reportAddingMovie } from "./modal.js";

function addMoviesFavorites() {
    document.querySelectorAll('.movies-list__favorites').forEach(item => {
        item.addEventListener('click', () => {
            let arr = [];
            let objectFilms = {
                'img': item.parentElement.parentElement.querySelector('.movies-list__img').src,
                'heading': item.parentElement.querySelector('.movies-list__heading').textContent,
                'genre': item.parentElement.querySelector('.movies-list__genre').textContent,
                'raiting': item.parentElement.querySelector('.movies-list__average').textContent,
            }

            if (localStorage.getItem('movies')) {
                arr = JSON.parse(localStorage.getItem('movies'))
            }
            arr = arr.filter(item => item.heading !== objectFilms.heading)
            reportAddingMovie()
            arr.push(objectFilms)
            localStorage.setItem('movies', JSON.stringify(arr))
        })
    })
}

export { addMoviesFavorites }
