const cards = document.querySelectorAll('.card')
const ingredient = document.querySelectorAll('.recipe_showhide')
const showHide = document.querySelectorAll('.showhide_btn')

for(let card of cards) {
    card.addEventListener('click', function() {
        const idCard = card.getAttribute('id')
        window.location.href = `/recipe/${idCard}`
    })
}