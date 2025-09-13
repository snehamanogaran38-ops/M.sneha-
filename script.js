// Example: Greeting message based on time

const now = new Date();

const hour = now.getHours();

const greeting = hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");

    const greet = document.createElement("p");

    greet.textContent = greeting;

    header.appendChild(greet);

});