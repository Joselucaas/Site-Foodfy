const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards){
    card.addEventListener("click", function(){
        const imageId = card.querySelector('img').getAttribute("id")

        const title = card.children[1].textContent
        const autor = card.children[2].textContent

        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `img/${imageId}.png`

        modal.querySelector('h1').innerHTML = title
        modal.querySelector('p').innerHTML = autor

    })
}


document.querySelector('.material-icons').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})