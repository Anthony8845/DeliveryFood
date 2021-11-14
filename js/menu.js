const menu = () => {
        
    const cardsMenu = document.querySelector('.cards-menu')



    const changeTitle = (restaurant) => {
        const restaurantTitle = document.querySelector('.restaurant-title')
        restaurantTitle.textContent = restaurant.name
    }

    const changeStars = (restaurant) => {
        const restaurantTitle = document.querySelector('.rating')
        restaurantTitle.textContent = restaurant.stars
    }

    const changePrice = (restaurant) => {
        const restaurantPrice = document.querySelector('.price')
        
        restaurantPrice.textContent ='От ' + restaurant.price + ' ₽'
    }

    const changeCategory = (restaurant) => {
        const restaurantTitle = document.querySelector('.category')
        restaurantTitle.textContent = restaurant.kitchen
    }

    const cartArray = localStorage.getItem('cart') ? 
                    JSON.parse(localStorage.getItem('cart')) : []

    const addToCart = (cartItem) => {
        if (cartArray.some((item) => item.id === cartItem.id)) {
            cartArray.map((item) => {
                if (item.id === cartItem.id) {
                    item.count++
                }

                return item
            })
        }else{
            cartArray.push(cartItem)
        }
        

        localStorage.setItem('cart', JSON.stringify(cartArray))

    }

    const renderItem = (data) => {
        data.forEach(({description, id, image, name, price}) => {
            
            const card = document.createElement('div')

            card.classList.add('card')
            
            card.innerHTML = `
                <img src="${image}" alt="${image}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">${name}</h3>
                    </div>
                    <div class="card-info">
                        <div class="ingredients">
                        ${description}
                        </div>
                    </div>
                    <div class="card-buttons">
                        <button class="button button-primary button-add-cart">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>
            `
            card.querySelector('.button-card-text').addEventListener('click', () => {
              
               addToCart({name, price, id, count: 1})
            })
            cardsMenu.append(card)
        });
        

        
    }

    if (localStorage.getItem('restaurant')) {
        const restaurant = JSON.parse(localStorage.getItem('restaurant'))

        changeTitle(restaurant)
        changePrice(restaurant)
        changeStars(restaurant)
        changeCategory(restaurant)

        fetch(`./db/${restaurant.products}`)
            .then((response) => response.json())
            .then((data) => {
                renderItem(data)
            })
            .catch((error) => {
                console.log(error)
        })
    }else{
        window.location.href = '/'
    }

}


menu()