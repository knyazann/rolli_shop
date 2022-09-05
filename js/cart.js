
window.addEventListener('click', function(event){

    // или так if (event.target.hasAttribute('data-cart'))
    if (event.target.dataset.cart === '') {
        const card = event.target.closest('.card')      

        const cartWrapper = document.querySelector('.cart-wrapper')
        const cart = cartWrapper.querySelector('[data-id="'+card.dataset.id+'"]')
     
        if (cart != null) {
            cart.querySelector('[data-counter]').innerHTML = parseInt(cart.querySelector('[data-counter]').innerHTML) + parseInt(card.querySelector('[data-counter]').innerHTML)
            cart.querySelector('.price__currency').innerHTML = parseInt(cart.querySelector('.price__currency').innerHTML) + parseInt(card.querySelector('.price__currency').innerHTML) + ' ₽'
        }

        else {

        const picture = card.querySelector('.product-img').cloneNode()
        picture.removeAttribute('class')
      
        let cartItem = document.createElement('div')
        cartItem.className = 'cart-item'
        cartItem.setAttribute('data-id', card.dataset.id)
        cartWrapper.appendChild(cartItem)

        let cartItemTop = document.createElement('div')
        cartItemTop.className = 'cart-item__top'
        cartItem.appendChild(cartItemTop)

        let cartItemImg = document.createElement('div')
        cartItemImg.className = 'cart-item__img'
        cartItemTop.appendChild(cartItemImg)

        cartItemImg.appendChild(picture)

        let cartItemDesc = document.createElement('div')
        cartItemDesc.className = 'cart-item__desc'
        cartItemTop.appendChild(cartItemDesc)

        let cartItemTitle = document.createElement('div')
        cartItemTitle.className = 'cart-item__title'
        cartItemTitle.innerHTML = card.querySelector('.item-title').innerHTML
        cartItemDesc.appendChild(cartItemTitle)

        let cartItemWeight = document.createElement('div')
        cartItemWeight.className = 'cart-item__weight'
        cartItemWeight.innerHTML = card.querySelector('.text-muted').innerHTML + ' / ' + card.querySelector('.price__weight').innerHTML
        cartItemDesc.appendChild(cartItemWeight)

        let cartItemDetails = document.createElement('div')
        cartItemDetails.className = 'cart-item__details'
        cartItemDetails.innerHTML = '<div class="items items--small counter-wrapper"><div class="items__control" data-action="minus">-</div><div class="items__current" data-counter="">1</div><div class="items__control" data-action="plus">+</div></div>'
        cartItemDetails.querySelector('[data-counter]').innerHTML = card.querySelector('[data-counter]').innerHTML
        cartItemDesc.appendChild(cartItemDetails)

        let cartItemPrice = document.createElement('div')
        cartItemPrice.className = 'price'
        cartItemDetails.appendChild(cartItemPrice)

        let cartItemPriceCur = document.createElement('div')
        cartItemPriceCur.className = 'price__currency'
        cartItemPrice.appendChild(cartItemPriceCur)
        cartItemPriceCur.innerHTML = card.querySelector('.price__currency').innerHTML
        }

        
        card.querySelector('.price__currency').innerHTML = parseInt(card.querySelector('.price__currency').innerHTML) / parseInt(card.querySelector('[data-counter]').innerHTML) + ' ₽'
        card.querySelector('[data-counter]').innerHTML = 1
    }
 

})