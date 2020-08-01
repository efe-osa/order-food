/**
 * 
 * @param {*} e MouseEvent
 */
function toggleFoodMenu() {
    const menu= document.querySelector('#menu-card')
    const isOpen = menu.classList.contains('open-modal')
    menu.classList.toggle('open-modal', !isOpen)

    document.querySelector('body').classList.toggle('darken-bg ', !isOpen)
    
    const viewMealImgButton = document.querySelector('.view-meal-img__btn')
    viewMealImgButton.addEventListener('click', function (event) {
        return toggleMealImg(event)
    })
}

function toggleMealImg() {
    const image =  document.querySelector('.menu-item__img-box img')
    const imageBox =  document.querySelector('.menu-item__img-box')
    
    const isImgOpen = image.classList.contains('expand')
    const isImgBoxOpen = imageBox.classList.contains('expand')
    imageBox.classList.toggle('collapse',isImgBoxOpen)
    imageBox.classList.toggle('expand',!isImgBoxOpen)
    image.classList.toggle('collapse',isImgBoxOpen)
    image.classList.toggle('expand', !isImgBoxOpen)
    
    imageBox.addEventListener('click', (e) => {
        imageBox.classList.add('collapse')
        imageBox.classList.add('collapse')
        imageBox.remove('expand')
        image.remove('expand')
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