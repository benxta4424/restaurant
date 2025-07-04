import './style.css'
import mainPage, { show } from './homePage';
import { about } from './about';


// home button
document.getElementById("homePage").addEventListener("click", ()=> {
    mainPage()
}) 

document.getElementById("about").addEventListener("click", ()=> {
    about()
})