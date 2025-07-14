// import { setupNavigation } from './navigation.js';
// import { setupMenuNavigation } from './menuNavigation.js';
import { addContent } from './menu.js';

// import './style.css';

console.log("In wine.js test message!");

function addWineContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "WINES";
    const subMenuTitle = document.createElement("p");
    subMenuTitle.textContent = "Specials - Priced by glass";

    content.appendChild(menuTitle);
    content.appendChild(subMenuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Wine #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const wine_1_Title = document.createElement("h2");
    // wine_1_Title.className = "item-left";
    wine_1_Title.textContent = "LUNCH: RED/WHITE";
        
    const wine_1_Desc = document.createElement("p");
    wine_1_Desc.className = "use-line-break";
    wine_1_Desc.textContent = "Nari: Nero d'avola\nLatue sauvignon: airen";
    
    const wine_1_Price = document.createElement("p");
    // wine_1_Price.className = "item-left-price";
    wine_1_Price.textContent = "$6";
    
    menuItem1.appendChild(wine_1_Title);
    menuItem1.appendChild(wine_1_Desc);
    // menuItem1.appendChild(wine_1_Price);
    menuPrice1.appendChild(wine_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Wine #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const wine_2_Title = document.createElement("h2");
    // wine_2_Title.className = "use-line-break";
    // wine_2_Title.textContent = "SPECIALS:\n3-6pm & AFTER 9pm";
    wine_2_Title.textContent = "SPECIALS 3-6pm & 9-11pm";
        
    const wine_2_Desc = document.createElement("p");
    // wine_2_Desc.className = "use-line-break";
    // wine_2_Desc.textContent = "Parmesan Reggiano, homemade croutons\nPancetta on request";
    // wine_2_Desc.textContent = "Apérol Spritz / Bombay Gin / Kamouraska Vodka / Bacardi Rum";
    wine_2_Desc.textContent = "Apérol Spritz, Bombay Gin, Kamouraska Vodka, Bacardi Rum";
    
    
    const wine_2_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    wine_2_Price.textContent = "$8";
    
    menuItem2.appendChild(wine_2_Title);
    menuItem2.appendChild(wine_2_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice2.appendChild(wine_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    content.appendChild(menuItems);

    
}

// document.addEventListener('DOMContentLoaded', () => {
//     addContent();
//     // setupNavigation();
//     // setupMenuNavigation();
//     addWineContent();
// });

addContent();
// setupNavigation();
// setupMenuNavigation();
addWineContent();
