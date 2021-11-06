const restourant = 'tanuki'

const renderItem = (data) => {
    data.forEach((elem) => {
        console.log(elem)
    });
    
    console.log(data)
}

fetch(`./db/${restourant}.json`)
.then((response) => response.json())
.then((data) => {
    renderItem(data)
})
.catch((error) => {
    console.log(error)
})