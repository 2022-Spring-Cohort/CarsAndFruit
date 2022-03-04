import fruits from "./fruits.js";

let containerEl = document.querySelector(".container");

let listEl = document.createElement("ul");
containerEl.appendChild(listEl);


function addfruit(fruit){
    let fruitItemEl = document.createElement("li");
    fruitItemEl.innerHTML="<h2>"+fruit.name +"</h2>";
    fruitItemEl.innerHTML +="<p>Family: " + fruit.family+ "</p>"
    fruitItemEl.style.backgroundColor= fruit.name;
    listEl.appendChild(fruitItemEl);
}

fruits.forEach(addfruit);