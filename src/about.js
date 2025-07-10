import { setupNavigation } from './navigation.js';

import './style.css';
// import imgPastaMeatballs1 from "./images/pasta_meatballs.png";
// import imgOvenPizza2 from "./images/oven-pizza.jpg";
// import imgPenneBroccoli3 from "./images/penne_broccoli.png";
// import imgSaladDish4 from "./images/salad-dish.jpg";
// import imgCiabattaBread5 from "./images/ciabatta-bread.jpg";
// import imgWineBottleGlass6 from "./images/wine-bottle-glass.jpg";
   
console.log("In about.js test message!");

function addContent() {
    const content = document.querySelector("#content");

    // TOP DIV
    const topDiv = document.createElement("div");
    topDiv.className = "home-images";

    const dummyContent1 = document.createElement("p");
    dummyContent1.textContent = "ABOUT ALBERTO'S - START";

    topDiv.appendChild(dummyContent1);
    
    // MIDDLE DIV
    const middleDiv = document.createElement("div");
    middleDiv.id = "home-middle";

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Alberto's Eatery";

    const para1 = document.createElement("p");
    para1.textContent = "Authentic Italian flavors, crafted with passion. Enjoy handmade pasta, wood-fired pizzas, and classic dishes made from family recipes. Fresh ingredients, warm hospitality—just like Nonna's kitchen.";

    const para2 = document.createElement("p");
    para2.textContent = "Buon appetito!";

    middleDiv.appendChild(h1);
    middleDiv.appendChild(para1);
    middleDiv.appendChild(para2);

    // BOTTOM DIV
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "home-images";

    const dummyContent2 = document.createElement("p");
    dummyContent2.textContent = "ABOUT ALBERTO'S - END";

    bottomDiv.appendChild(dummyContent2);

    content.appendChild(topDiv);
    content.appendChild(middleDiv);
    content.appendChild(bottomDiv);
   
}

document.addEventListener('DOMContentLoaded', () => {
    addContent();
    setupNavigation(); 
});
