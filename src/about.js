import { setupNavigation } from './navigation.js';

import imgChef from "./images/chef.jpeg";

import './style.css';
   
console.log("In about.js test message!");

function addContent() {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.id = "menu-heading";
    h1.textContent = "About Alberto's Eatery";

    content.appendChild(h1);

    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-container";

    // TOP LEFT DIV
    const topLeftDiv = document.createElement("div");
    topLeftDiv.className = "top-left-div";

    const topLeftHeading = document.createElement("h2");
    topLeftHeading.textContent = "Our Story";

    const para1 = document.createElement("p");
    para1.textContent = "Welcome to Alberto's Eatery, where passion for food meets tradition. Founded in 2010 by Chef Alberto Di Giovanni, our restaurant was born from a simple dream: to bring the authentic flavors of homemade Italian and Mediterranean cuisine to the heart of Montreal.";

    const para2 = document.createElement("p");
    para2.textContent = "What started as a small family-owned trattoria has grown into a beloved local hotspot, known for its warm hospitality, handcrafted dishes, and unforgettable dining experience.";
    
    topLeftDiv.appendChild(topLeftHeading);
    topLeftDiv.appendChild(para1);
    topLeftDiv.appendChild(para2);

    aboutContainer.appendChild(topLeftDiv);

    // TOP RIGHT DIV
    const topRightDiv = document.createElement("div");
    topRightDiv.className = "top-right-div";

    const chefImage = document.createElement("img");
    chefImage.src = imgChef;

    topRightDiv.appendChild(chefImage);

    aboutContainer.appendChild(topRightDiv);

    // BOTTOM LEFT DIV
    const bottomLeftDiv = document.createElement("div");
    bottomLeftDiv.className = "bottom-left-div";

    const bottomLeftHeading = document.createElement("h2");
    bottomLeftHeading.textContent = "Our Address";
    // const addressList = document.createElement("ul");
    const restoAddress = document.createElement("p");
    restoAddress.className = "use-line-break";
    restoAddress.textContent = "123 Happy Lane\nMontreal, QC\nH3Z4L3" 

    bottomLeftDiv.appendChild(bottomLeftHeading);
    bottomLeftDiv.appendChild(restoAddress);
    aboutContainer.appendChild(bottomLeftDiv);

    // BOTTOM RIGHT DIV
    const bottomRightDiv = document.createElement("div");
    bottomRightDiv.className = "bottom-right-div";

    const bottomRightHeading = document.createElement("h2");
    bottomRightHeading.id = "bottom-right-heading";
    bottomRightHeading.textContent = "Visit Us";

    bottomRightDiv.appendChild(bottomRightHeading);

    const daysDiv = document.createElement("div");
    daysDiv.className = "days";
    const hoursDiv = document.createElement("div");
    hoursDiv.className = "hours";
    
    const monday = document.createElement("p");
    monday.textContent = "Monday";
    const tuesday = document.createElement("p");
    tuesday.textContent = "Tuesday";
    const wednesday = document.createElement("p");
    wednesday.textContent = "Wednesday";
    const thursday = document.createElement("p");
    thursday.textContent = "Thursday";
    const friday = document.createElement("p");
    friday.textContent = "Friday";
    const saturday = document.createElement("p");
    saturday.textContent = "Saturday";
    const sunday = document.createElement("p");
    sunday.textContent = "Sunday";

    daysDiv.appendChild(monday);    
    daysDiv.appendChild(tuesday);
    daysDiv.appendChild(wednesday);    
    daysDiv.appendChild(thursday);    
    daysDiv.appendChild(friday);    
    daysDiv.appendChild(saturday);    
    daysDiv.appendChild(sunday);

    const monHours = document.createElement("p");
    monHours.textContent = "11am - 10pm";
    const tueHours = document.createElement("p");
    tueHours.textContent = "11am - 10pm";
    const wedHours = document.createElement("p");
    wedHours.textContent = "11am - 10pm";
    const thuHours = document.createElement("p");
    thuHours.textContent = "11am - 11pm";
    const friHours = document.createElement("p");
    friHours.textContent = "11am - 1am";
    const satHours = document.createElement("p");
    satHours.textContent = "11am - 1am";
    const sunHours = document.createElement("p");
    sunHours.textContent = "11am - 10pm";

    hoursDiv.appendChild(monHours);
    hoursDiv.appendChild(tueHours);
    hoursDiv.appendChild(wedHours);
    hoursDiv.appendChild(thuHours);
    hoursDiv.appendChild(friHours);
    hoursDiv.appendChild(satHours);
    hoursDiv.appendChild(sunHours);

    bottomRightDiv.appendChild(daysDiv);
    bottomRightDiv.appendChild(hoursDiv);

    aboutContainer.appendChild(bottomRightDiv);

    content.appendChild(aboutContainer)

}

document.addEventListener('DOMContentLoaded', () => {
    addContent();
    setupNavigation(); 
});
