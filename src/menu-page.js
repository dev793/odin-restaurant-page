function createMenuPage() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    content.appendChild(title);

    const menu = document.createElement("h2");
    menu.textContent = "Mains";
    content.appendChild(menu);

    const menuItem = document.createElement("p");
    menuItem.textContent = "Food - $10"
    content.appendChild(menuItem);
}

export { createMenuPage };