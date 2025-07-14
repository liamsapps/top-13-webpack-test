// import { setupNavigation } from './navigation.js';
// import { setupMenuNavigation } from './menuNavigation.js';
import { addContent } from './menu.js';

// import './style.css';

console.log("In desserts.js test message!");

function addDessertsContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "DESSERTS";

    content.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Dessert #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const dessert_1_Title = document.createElement("h2");
    // dessert_1_Title.className = "item-left";
    dessert_1_Title.textContent = "DARK CHOCOLATE TART";
        
    const dessert_1_Desc = document.createElement("p");
    // dessert_1_Desc.className = "item-left";
    dessert_1_Desc.textContent = "";
    
    const dessert_1_Price = document.createElement("p");
    // dessert_1_Price.className = "item-left-price";
    dessert_1_Price.textContent = "$10";
    
    menuItem1.appendChild(dessert_1_Title);
    menuItem1.appendChild(dessert_1_Desc);
    // menuItem1.appendChild(dessert_1_Price);
    menuPrice1.appendChild(dessert_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Dessert #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const dessert_2_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    dessert_2_Title.textContent = "TIRAMISU & ESPRESSO";
        
    const dessert_2_Desc = document.createElement("p");
    // dessert_2_Desc.className = "use-line-break";
    // dessert_2_Desc.textContent = "Parmesan Reggiano, homemade croutons\nPancetta on request";
    dessert_2_Desc.textContent = "";
    
    
    const dessert_2_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    dessert_2_Price.textContent = "$10";
    
    menuItem2.appendChild(dessert_2_Title);
    menuItem2.appendChild(dessert_2_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice2.appendChild(dessert_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    // Dessert #3
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    const menuPrice3 = document.createElement("div");
    menuPrice3.className = "menu-item";
    
    const dessert_3_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    dessert_3_Title.textContent = "VANILLA CRÈME BRÛLÉE";
        
    const dessert_3_Desc = document.createElement("p");
    // salad_1_Desc.className = "item-left";
    dessert_3_Desc.textContent = "";
    
    const dessert_3_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    dessert_3_Price.textContent = "$10";
    
    menuItem3.appendChild(dessert_3_Title);
    menuItem3.appendChild(dessert_3_Desc);    
    menuPrice3.appendChild(dessert_3_Price);
    
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuPrice3);

    // Dessert #4
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    const menuPrice4 = document.createElement("div");
    menuPrice4.className = "menu-item";
    
    const dessert_4_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    dessert_4_Title.textContent = "LEMON MERINGUE PIE";
        
    const dessert_4_Desc = document.createElement("p");
    // salad_1_Desc.className = "item-left";
    dessert_4_Desc.textContent = "";
    
    const dessert_4_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    dessert_4_Price.textContent = "$10";
    
    menuItem4.appendChild(dessert_4_Title);
    menuItem4.appendChild(dessert_4_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice4.appendChild(dessert_4_Price);
    
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuPrice4);

    // Dessert #5
    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    const menuPrice5 = document.createElement("div");
    menuPrice5.className = "menu-item";
    
    const dessert_5_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    dessert_5_Title.textContent = "BROWNIE & ICE CREAM";
        
    const dessert_5_Desc = document.createElement("p");
    // salad_1_Desc.className = "item-left";
    dessert_5_Desc.textContent = "";
    
    const dessert_5_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    dessert_5_Price.textContent = "$10";
    
    menuItem5.appendChild(dessert_5_Title);
    menuItem5.appendChild(dessert_5_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice5.appendChild(dessert_5_Price);
    
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuPrice5);

    content.appendChild(menuItems);

    
}

// document.addEventListener('DOMContentLoaded', () => {
//     addContent();
//     // setupNavigation();
//     // setupMenuNavigation();
//     addDessertsContent();
// });

addContent();
// setupNavigation();
// setupMenuNavigation();
addDessertsContent();
