// import { setupNavigation } from './navigation.js';
// import { setupMenuNavigation } from './menuNavigation.js';
import { addContent } from './menu.js';

import './style.css';

console.log("In pasta.js test message!");

function addPastaContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "PASTA";

    content.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Pasta #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const pasta_1_Title = document.createElement("h2");
    // pasta_1_Title.className = "item-left";
    pasta_1_Title.textContent = "SPAGHETTI POMODORO";
        
    const pasta_1_Desc = document.createElement("p");
    // pasta_1_Desc.className = "item-left";
    pasta_1_Desc.textContent = "Parmesan and basil";
    
    const pasta_1_Price = document.createElement("p");
    // pasta_1_Price.className = "item-left-price";
    pasta_1_Price.textContent = "$14 / $18";
    
    menuItem1.appendChild(pasta_1_Title);
    menuItem1.appendChild(pasta_1_Desc);
    // menuItem1.appendChild(pasta_1_Price);
    menuPrice1.appendChild(pasta_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Pasta #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const pasta_2_Title = document.createElement("h2");
    // pasta_2_Title.className = "item-left";
    pasta_2_Title.textContent = "SPAGHETTI BOLOGNESE";
        
    const pasta_2_Desc = document.createElement("p");
    // pasta_2_Desc.className = "item-left";
    pasta_2_Desc.textContent = "";
    
    const pasta_2_Price = document.createElement("p");
    // pasta_2_Price.className = "item-left-price";
    pasta_2_Price.textContent = "$17 / $23";
    
    menuItem2.appendChild(pasta_2_Title);
    menuItem2.appendChild(pasta_2_Desc);
    // menuItem1.appendChild(pasta_2_Price);
    menuPrice2.appendChild(pasta_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    // Pasta #3
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    const menuPrice3 = document.createElement("div");
    menuPrice3.className = "menu-item";
    
    const pasta_3_Title = document.createElement("h2");
    // pasta_3_Title.className = "item-left";
    pasta_3_Title.textContent = "LINGUINE CARBONARA";
        
    const pasta_3_Desc = document.createElement("p");
    // pasta_3_Desc.className = "item-left";
    pasta_3_Desc.textContent = "";
    
    const pasta_3_Price = document.createElement("p");
    // pasta_3_Price.className = "item-left-price";
    pasta_3_Price.textContent = "$17 / $23";
    
    menuItem3.appendChild(pasta_3_Title);
    menuItem3.appendChild(pasta_3_Desc);
    // menuItem1.appendChild(pasta_3_Price);
    menuPrice3.appendChild(pasta_3_Price);
    
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuPrice3);

    // Pasta #4
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    const menuPrice4 = document.createElement("div");
    menuPrice4.className = "menu-item";
    
    const pasta_4_Title = document.createElement("h2");
    // pasta_4_Title.className = "item-left";
    pasta_4_Title.textContent = "LINGUINE & MUSHROOMS";
        
    const pasta_4_Desc = document.createElement("p");
    // pasta_4_Desc.className = "item-left";
    pasta_4_Desc.textContent = "";
    
    const pasta_4_Price = document.createElement("p");
    // pasta_4_Price.className = "item-left-price";
    pasta_4_Price.textContent = "$19 / $25";
    
    menuItem4.appendChild(pasta_4_Title);
    menuItem4.appendChild(pasta_4_Desc);
    // menuItem1.appendChild(pasta_4_Price);
    menuPrice4.appendChild(pasta_4_Price);
    
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuPrice4);

    // Pasta #5
    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    const menuPrice5 = document.createElement("div");
    menuPrice5.className = "menu-item";
    
    const pasta_5_Title = document.createElement("h2");
    // pasta_5_Title.className = "item-left";
    pasta_5_Title.textContent = "LINGUINE CON GAMBERI";
        
    const pasta_5_Desc = document.createElement("p");
    pasta_5_Desc.className = "use-line-break";
    pasta_5_Desc.textContent = "Crevettes, zucchini, tomatoes, garlic, oignons, \nwhite wine & fine herbes\n(3 or 5 shrimp)";
    
    const pasta_5_Price = document.createElement("p");
    // pasta_5_Price.className = "item-left-price";
    pasta_5_Price.textContent = "$19 / $25";
    
    menuItem5.appendChild(pasta_5_Title);
    menuItem5.appendChild(pasta_5_Desc);
    // menuItem1.appendChild(pasta_5_Price);
    menuPrice5.appendChild(pasta_5_Price);
    
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuPrice5);

    // Pasta #6
    const menuItem6 = document.createElement("div");
    menuItem6.className = "menu-item";
    const menuPrice6 = document.createElement("div");
    menuPrice6.className = "menu-item";
    
    const pasta_6_Title = document.createElement("h2");
    // pasta_6_Title.className = "item-left";
    pasta_6_Title.textContent = "GEPPETTO LASAGNE";
        
    const pasta_6_Desc = document.createElement("p");
    pasta_6_Desc.className = "use-line-break";
    pasta_6_Desc.textContent = "Bolognese, pomodoro, ricotta-spinach, béchamel sauce and provolone cheese \nServed with arugula or Caesar";
    
    const pasta_6_Price = document.createElement("p");
    // pasta_6_Price.className = "item-left-price";
    pasta_6_Price.textContent = "$25";
    
    menuItem6.appendChild(pasta_6_Title);
    menuItem6.appendChild(pasta_6_Desc);
    // menuItem1.appendChild(pasta_6_Price);
    menuPrice6.appendChild(pasta_6_Price);
    
    menuItems.appendChild(menuItem6);
    menuItems.appendChild(menuPrice6);

    content.appendChild(menuItems);

    
}

document.addEventListener('DOMContentLoaded', () => {
    addContent();
    // setupNavigation();
    // setupMenuNavigation();
    addPastaContent();
});