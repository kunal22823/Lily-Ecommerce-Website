import { getProductNames } from "./showAddToCart.js";

export const populateProDetails=()=>{
    const productNames = getProductNames();
    console.log(productNames);
    
    // const productListTextarea = document.getElementById("productList");

    // productListTextarea.value = productNames.join('\n');
}
populateProDetails();