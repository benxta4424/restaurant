import { show } from "./homePage"
import menu from "./menu.jpg"
import menu2 from "./menu2.jpg"
import menu3 from "./dracula.png"


export function menuFunction() {
    const getParent = document.getElementById("content")
    getParent.innerHTML = ""

    const imageContainer = document.createElement("div")
    imageContainer.className = "menuContainer"

    const image = document.createElement("img")
    image.src = menu
    image.alt = "Image menu1"
    image.className = "firstMenu"

    const imageTwo = document.createElement("img")
    imageTwo.src = menu2
    imageTwo.alt = "Image menu2"
    imageTwo.className = "secondMenu"

    const imageThree = document.createElement("img")
    imageThree.src = menu3
    imageTwo.alt = "Image menu3"
    imageThree.style.width = "350px"
    imageThree.style.height = "200px"

    imageContainer.appendChild(image)
    imageContainer.appendChild(imageTwo)
    imageContainer.appendChild(imageThree)

    getParent.appendChild(imageContainer)

    show()
}