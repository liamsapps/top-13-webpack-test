import { setupNavigation } from './navigation.js';

import './style.css';
import imgPastaMeatballs1 from "./images/pasta_meatballs.png";
import imgOvenPizza2 from "./images/oven-pizza.jpg";
import imgPenneBroccoli3 from "./images/penne_broccoli.png";
import imgSaladDish4 from "./images/salad-dish.jpg";
import imgCiabattaBread5 from "./images/ciabatta-bread.jpg";
import imgWineBottleGlass6 from "./images/wine-bottle-glass.jpg";
   
console.log("In home.js test message!");

function addContent() {
    const content = document.querySelector("#content");
    
    // TOP DIV
    const topDiv = document.createElement("div");
    topDiv.className = "home-images";

    const image1 = document.createElement("img");
    image1.src = imgPastaMeatballs1;
    const image2 = document.createElement("img");
    image2.src = imgOvenPizza2;
    const image3 = document.createElement("img");
    image3.src = imgPenneBroccoli3;

    topDiv.appendChild(image1);
    topDiv.appendChild(image2);
    topDiv.appendChild(image3);
    
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

    const image4 = document.createElement("img");
    image4.src = imgSaladDish4;
    const image5 = document.createElement("img");
    image5.src = imgCiabattaBread5;
    const image6 = document.createElement("img");
    image6.src = imgWineBottleGlass6;   

    bottomDiv.appendChild(image4);
    bottomDiv.appendChild(image5);
    bottomDiv.appendChild(image6);

    content.appendChild(topDiv);
    content.appendChild(middleDiv);
    content.appendChild(bottomDiv);
    
}

document.addEventListener('DOMContentLoaded', () => {
    addContent();
    setupNavigation(); 
});
