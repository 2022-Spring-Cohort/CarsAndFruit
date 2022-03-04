import Rectangle from "./Rectangle.js";
import {
    Cars
} from "./Cars.js";

const p = new Rectangle(5, 10);

// // We can also add values like this
console.log(p.area());
console.log(p.volume(3));
let containerEl = document.querySelector(".container");

Cars.forEach(car => {
    let carDivEl = document.createElement("div");
    carDivEl.classList.add("carDiv");
    carDivEl.style.backgroundColor = car.color;
    let carColorEl = document.createElement("h3");
    carColorEl.innerText = "Color: " + car.color;
    let studentDriverEl = document.createElement("h3");
    studentDriverEl.innerText = "Driver: " + car.studentDriver;
    carDivEl.appendChild(studentDriverEl);
    carDivEl.appendChild(carColorEl);
    containerEl.appendChild(carDivEl);
});

// let buttonEl = document.querySelector(".CarButton");
// buttonEl.addEventListener("click", Car.honk);