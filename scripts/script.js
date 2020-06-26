const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards) {
    card.addEventListener('click', function() {

        const idImage = card.querySelector('img').getAttribute('id')
        const title = card.children[1].textContent
        const autor = card.children[2].textContent

        modalOverlay.classList.add('active')
        
        modal.querySelector('img').src = `/img/${idImage}.png`
        modal.querySelector('p').innerHTML = title
        modal.querySelector('h2').innerHTML = autor
    })
}

document.querySelector('.material-icons').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})