function createHomePage() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.textContent = "Randy's Restaurant";
    description.textContent = "Come on down to the hottest new restaurant in town!"

    content.appendChild(title);
    content.appendChild(description);
}

export { createHomePage };