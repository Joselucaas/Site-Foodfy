const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener('click', function() {
        const idCard = card.getAttribute('id')
        window.location.href = `/recipe/${idCard}`
    })
}

const showHideCnt = document.querySelectorAll('.recipe_showhide')
const showHide = document.querySelectorAll('.showhide_btn')

for (let i = 0; i < showHide.length; i++) {
    showHide[i].addEventListener('click', function() {
        if(showHide[i].innerHTML == 'Esconder') {
            showHideCnt[i].classList.add('hidden')
            showHide[i].innerHTML = 'Mostrar'
        } else {
            showHideCnt[i].classList.remove('hidden')
            showHide[i].innerHTML = 'Esconder'
        }
    })
}