import './style.css'
import mainPage, { show } from './homePage';
import { about } from './about';
import { menu, menuFunction } from './menu';


// home button
document.getElementById("homePage").addEventListener("click", ()=> {
    mainPage()
}) 

document.getElementById("about").addEventListener("click", ()=> {
    about()
})

document.getElementById("menu").addEventListener("click", ()=> {
    menuFunction()
})