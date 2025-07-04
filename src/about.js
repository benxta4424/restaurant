import { show } from "./homePage"

export function about() {
    const getParent = document.getElementById("content")
    getParent.innerHTML = ""

    // first section
    const firstChild = document.createElement("div")
    firstChild.className = "children"
    const firstTitle = document.createElement("span")
    firstTitle.className = "aboutTitle"
    firstTitle.innerText = "At Dracula’s Kitchen, we don’t just serve food — we serve stories."
    const firstText = document.createElement("p")
    firstText.className = "text"
    firstText.innerText = "Nestled in the city’s heart, our restaurant celebrates Romania’s rich heritage and bold flavors. We honor tradition with slow-cooked, spice-filled dishes—from smoky meats to delicate pastries—blending old recipes with modern techniques and local ingredients for a unique dining experience.";

    firstChild.appendChild(firstTitle)
    firstChild.appendChild(firstText)
    getParent.appendChild(firstChild)


    // second section
    const secondChild = document.createElement("div")
    secondChild.className = "children"
    const secondTitle = document.createElement("span")
    secondTitle.className = "aboutTitle"
    secondTitle.innerText = "Behind the scenes, our management team brings this vision to life."
    const secondText = document.createElement("p")
    secondText.className = "text"
    secondText.innerText = "We believe that a great restaurant is built on more than great food. It’s built on leadership that values consistency, creativity, and genuine connection. From front-of-house training to kitchen quality control, our management ensures that every guest feels cared for, every plate tells a story, and every visit is worth remembering." 

    secondChild.appendChild(secondTitle)
    secondChild.appendChild(secondText)
    getParent.appendChild(secondChild)


    // third section
    const thirdChild = document.createElement("div")
    thirdChild.className = "children"
    const thirdTitle = document.createElement("span")
    thirdTitle.className = "aboutTitle"
    thirdTitle.innerText = "Our commitment is real."
    const thirdText = document.createElement("p")
    thirdText.className = "text"
    thirdText.innerText = "Whether you’re here for a cozy dinner, a family gathering, or just something new — you’ll always find a warm welcome at Dracula’s Kitchen."
    
    thirdChild.appendChild(thirdTitle)
    thirdChild.appendChild(thirdText)
    getParent.appendChild(thirdChild)


    // final section
    const finalMotto = document.createElement("span")
    finalMotto.className = "finalMotto"
    finalMotto.innerText = "Come hungry. Leave enchanted."
    
    getParent.appendChild(finalMotto)
    
    show()
}
