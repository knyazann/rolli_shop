
window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'plus') {
        const counter = event.target.closest('.counter-wrapper').querySelector('[data-counter]')
        let details = event.target.closest('.details-wrapper')
        if (details == null) {
            details = event.target.closest('.cart-item__details')
        }
        const price = details.querySelector('.price__currency')
        const priceCur = parseInt(price.innerHTML) / parseInt(counter.innerHTML)
        price.innerHTML = priceCur * (parseInt(counter.innerHTML)+1) + ' ₽'

        counter.innerText = ++counter.innerText
    }

    if (event.target.dataset.action === 'minus') {
        const counter = event.target.closest('.counter-wrapper').querySelector('[data-counter]')

        let details = event.target.closest('.details-wrapper')
        if (details == null) {
            details = event.target.closest('.cart-item__details')
        }

        if (parseInt(counter.innerText) > 1) {
        const price = details.querySelector('.price__currency')
        const priceCur = parseInt(price.innerHTML) / parseInt(counter.innerHTML)
        price.innerHTML = priceCur * (parseInt(counter.innerHTML)-1)+ ' ₽'

        counter.innerText = --counter.innerText}
    }

})