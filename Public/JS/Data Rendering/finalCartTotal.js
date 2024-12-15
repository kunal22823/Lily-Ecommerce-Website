import { getCartProductFromLS } from "./getCartData.js";

export const finalCartTotal = () =>{
    let SubTotal = document.querySelector(".SubTotal");
    let Total = document.querySelector(".GrandTotal");
    let gstRate = 5/100;

    let cartProducts = getCartProductFromLS();
    let i = 0;
    let totalPrice = cartProducts.reduce((accum,currPro)=>{
        let proPrice = parseInt(currPro.price) || 0;
        return accum + proPrice;
    },i)
    // console.log(totalPrice);
    let GrandTotal = (totalPrice+(totalPrice*gstRate)).toFixed();

    SubTotal.textContent = `₹ ${totalPrice}`;
    Total.textContent = `₹ ${GrandTotal}`;
    return { subtotal: totalPrice.toFixed(2), grandTotal: GrandTotal };

}