// import { setupNavigation } from './navigation.js';
// import { setupMenuNavigation } from './menuNavigation.js';
import { addContent } from './menu.js';

// import './style.css';
// import './salads.css';

console.log("In salads.js test message!");

function addSaladContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "SALADS";

    content.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Salad #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const salad_1_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    salad_1_Title.textContent = "GREENS & VEGETABLES";
        
    const salad_1_Desc = document.createElement("p");
    // salad_1_Desc.className = "item-left";
    salad_1_Desc.textContent = "Greens, radicchio and vegetables";
    
    const salad_1_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    salad_1_Price.textContent = "$8 / $12";
    
    menuItem1.appendChild(salad_1_Title);
    menuItem1.appendChild(salad_1_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice1.appendChild(salad_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Salad #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const salad_2_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    salad_2_Title.textContent = "CÉSAR";
        
    const salad_2_Desc = document.createElement("p");
    // salad_2_Desc.className = "use-line-break";
    // salad_2_Desc.textContent = "Parmesan Reggiano, homemade croutons\nPancetta on request";
    salad_2_Desc.textContent = "Parmesan Reggiano, homemade croutons (Pancetta on request)";
    
    
    const salad_2_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    salad_2_Price.textContent = "$9 / $15";
    
    menuItem2.appendChild(salad_2_Title);
    menuItem2.appendChild(salad_2_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice2.appendChild(salad_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    // Salad #3
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    const menuPrice3 = document.createElement("div");
    menuPrice3.className = "menu-item";
    
    const salad_3_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    salad_3_Title.textContent = "KALE";
        
    const salad_3_Desc = document.createElement("p");
    // salad_1_Desc.className = "item-left";
    salad_3_Desc.textContent = "Chicory, broccoli, asparagus, apples, roasted pecans, pecorino and buttermilk vinaigrette";
    
    const salad_3_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    salad_3_Price.textContent = "$18";
    
    menuItem3.appendChild(salad_3_Title);
    menuItem3.appendChild(salad_3_Desc);    
    menuPrice3.appendChild(salad_3_Price);
    
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuPrice3);

    // Salad #4
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    const menuPrice4 = document.createElement("div");
    menuPrice4.className = "menu-item";
    
    const salad_4_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    salad_4_Title.textContent = "ENDIVES";
        
    const salad_4_Desc = document.createElement("p");
    // salad_1_Desc.className = "item-left";
    salad_4_Desc.textContent = "Endive, radicchio, walnuts, blue cheese, herbs and apples";
    
    const salad_4_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    salad_4_Price.textContent = "$18";
    
    menuItem4.appendChild(salad_4_Title);
    menuItem4.appendChild(salad_4_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice4.appendChild(salad_4_Price);
    
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuPrice4);

    // Salad #5
    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    const menuPrice5 = document.createElement("div");
    menuPrice5.className = "menu-item";
    
    const salad_5_Title = document.createElement("h2");
    // salad_1_Title.className = "item-left";
    salad_5_Title.textContent = "ROQUETTE";
        
    const salad_5_Desc = document.createElement("p");
    // salad_1_Desc.className = "item-left";
    salad_5_Desc.textContent = "Arugula, cherry tomatoes, roasted seeds and parmesan cheese";
    
    const salad_5_Price = document.createElement("p");
    // salad_1_Price.className = "item-left-price";
    salad_5_Price.textContent = "$9 / $15";
    
    menuItem5.appendChild(salad_5_Title);
    menuItem5.appendChild(salad_5_Desc);
    // menuItem1.appendChild(salad_1_Price);
    menuPrice5.appendChild(salad_5_Price);
    
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuPrice5);

    content.appendChild(menuItems);   
}

// document.addEventListener('DOMContentLoaded', () => {
//     addContent();
//     // setupNavigation();
//     // setupMenuNavigation();
//     addSaladContent();
// });


addContent();
// setupNavigation();
// setupMenuNavigation();
addSaladContent();
