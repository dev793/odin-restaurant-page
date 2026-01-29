function createHomePage() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Randy's Restaurant";
    content.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "Come on down to the hottest new restaurant in town!"
    content.appendChild(description);

    const quote = document.createElement("p");
    quote.textContent = "Randy's has the best food! The atmosphere and customer service make you feel like you are sitting in a fancy restaurant, eating delicious food! This is exactly the kind of place that I like to return to again and again.";
    content.appendChild(quote);

    const person = document.createElement("p");
    person.textContent = "- A Satisfied Customer";
    content.appendChild(person);
}

export { createHomePage };