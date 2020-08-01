/**
 * 
 * @param {*} e MouseEvent
 */
function toggleFoodMenu() {
    const menu= document.querySelector('#menu-card')
    const isOpen = menu.classList.contains('open-modal')
    menu.classList.toggle('open-modal', !isOpen)
    menu.classList.toggle('close-modal', isOpen)

    document.querySelector('body > div:first-child').classList.toggle('darken-bg', !isOpen)
    
    const viewMealImgButton = document.querySelector('.view-meal-img__btn')
    viewMealImgButton.addEventListener('click', function (event) {
        return toggleMealImg(event)
    })
}

function toggleMealImg() {
    const imageBox =  document.querySelector('.menu-item__img-box')
    const menu = document.querySelector('.menu')
    
    const isImgBoxOpen = imageBox.classList.contains('open-image')
    
    menu.classList.toggle('open-image', !isImgBoxOpen)
    menu.classList.toggle('close-image', isImgBoxOpen)

    imageBox.addEventListener('click', (e) => {
        menu.classList.remove('open-image')
        menu.classList.add('close-image')
    })

}

window.onload = () => {
    const viewMenuButton = document.querySelector('.view-menu__btn')
    viewMenuButton.addEventListener('click', function (event) {
        return toggleFoodMenu(event)
    })

   
}

window.onunload = () => {
    const viewMenuButton = document.querySelector('.view-menu__btn')
    const viewMealImgButton = document.querySelector('.view-meal-img__btn')
    viewMealMenuButton.removeEventListener('click')
    viewMealImgButton.removeEventListener('click')
}