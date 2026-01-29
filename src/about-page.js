function createAboutPage() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "About";
    content.appendChild(title);

    const about = document.createElement("p");
    about.textContent = "Randy has been passionate about food for a long time. He opened this restaurant so he could share that passion with you!"
    content.appendChild(about);

    const hoursSubtitle = document.createElement("h2");
    hoursSubtitle.textContent = "Opening Hours";
    content.appendChild(hoursSubtitle);

    const hours = document.createElement("p");
    hours.textContent = "Monday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm"
    content.appendChild(hours);
}

export { createAboutPage };