import './style.css'
import mainPage, { show } from './homePage';


// home button
mainPage()
document.getElementById("homePage").addEventListener("click", show)