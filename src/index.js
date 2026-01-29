import "./styles.css";
import { createHomePage } from "./home-page.js";
import { createMenuPage } from "./menu-page.js";
import { createAboutPage } from "./about-page.js";

console.log("Hello world!");

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

const pageCreators = {
    Home: createHomePage,
    Menu: createMenuPage,
    About: createAboutPage,
}

buttons.forEach(btn => { 
    btn.addEventListener("click", (event) => {
        content.innerHTML = "";
        pageCreators[event.target.textContent]()
    });
})

createHomePage();