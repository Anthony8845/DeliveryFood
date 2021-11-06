const renderItem = (data) => {
    console.log(data)
}

fetch('./db/partners.json')
.then((response) => response.json())
.then((data) => {
    renderItem(data)
})
.catch((error) => {
    console.log(error)
})