//---------------fetching actual quantity and price from local storage
import { getCartProductFromLS } from "./getCartData.js";

export const fetchActualDataFromLS = (id,price)=>{
    let cartProducts = getCartProductFromLS();

    let exitingProduct = cartProducts.find((currPro)=>currPro.id === id);
    let quantity =1;

    if(exitingProduct){
        quantity = exitingProduct.quantity;
        price = `₹ ${exitingProduct.price}`;
    }
    return {quantity,price};

};