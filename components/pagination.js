import { getData } from "../services/getData.js"
import { generateCards } from "./toGetData.js"

function createPagination(count, link) {
    for (let i = 1; i < count; i++) {
        document.querySelector('.pagination__item').innerHTML += `
        <a href="#" class="pagination__link">${i}</a>
        `
    }
    renderLinkPagination(link)
}

function renderLinkPagination(link) {
    document.querySelectorAll('.pagination__link').forEach(item => {
        item.addEventListener('click', () => {
            getData(`${link}${item.textContent}`)
            .then(data => generateCards(data))
        })
    })
}

export {createPagination, renderLinkPagination}