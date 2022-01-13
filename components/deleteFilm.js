function deleteFilm() {
    document.querySelectorAll('.movies-list__favorites').forEach(item => {
        item.addEventListener('click', () => {
            let heading = item.parentElement.querySelector('.movies-list__heading').textContent;
            let moviesArr = JSON.parse(localStorage.getItem('movies'));

            moviesArr = moviesArr.filter(item => item.heading !== heading)

            localStorage.setItem('movies', JSON.stringify(moviesArr))

            location.reload()
        })
    })
}
export {deleteFilm}