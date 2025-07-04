import restaurantPicture from './restaurantPicture.jpg'

const mainPage = function() {
    const getParent = document.getElementById("content")

    // adding the picture
    const picture = document.createElement("img")
    picture.src = restaurantPicture; // Webpack will handle the path
    picture.className = "restaurantPicture"
    picture.alt = "Restaurant picture"
    getParent.append(picture)


    // creating a container for the title and the words
    const wordsContainer = document.createElement("div")
    wordsContainer.className = "wordsContainer"
    getParent.append(wordsContainer)


    const title = document.createElement("div")
    title.innerText = "Tradition Served with Passion."
    title.className = "title"
    wordsContainer.appendChild(title)

    const fewWords = document.createElement("p")
    fewWords.innerText = "At Dracula's Kitchen, we honor Romania’s culinary legacy with every dish we craft. Our logo, inspired by timeless Romanian motifs, reflects the heart behind our cooking—where age-old recipes meet heartfelt dedication. ‘Tradition Served with Passion’ isn’t just our motto; it’s the essence of your dining experience."
    fewWords.className = "fewWords"
    wordsContainer.appendChild(fewWords)


}

export default mainPage