import { finalCartTotal } from "./finalCartTotal.js";
import { getCartProductFromLS } from "./getCartData.js";

export const cartIncrementDecrement = (event, id, price) => {
  const currCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currCardElement.querySelector(".productQuantity");
  const productPrice = currCardElement.querySelector(".productPrice");
  const productName = currCardElement.querySelector(".productName").innerText;
  const productImage = currCardElement.querySelector(".productImage").src;

  let quantity = 1;
  let lsprice = 0;

  let lsProductData = getCartProductFromLS();
  let existProd = lsProductData.find((curElem) => curElem.id === id);

  if (existProd) {
    quantity = existProd.quantity;
    lsprice = existProd.price;
  } else {
    lsprice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    quantity += 1;
  }
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  lsprice = price * quantity;
  //converting into number and gives only 2 numbers after decimal
  lsprice = Number(lsprice.toFixed(2));

  let updateCart = { id, quantity, price: lsprice, proName: productName, image: productImage };
  updateCart = lsProductData.map((curPro) => {
    return curPro.id === id ? updateCart : curPro;
  });
  localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

  productQuantity.innerText = quantity;
  productPrice.innerText = `₹ ${lsprice}`;

  finalCartTotal();
  
};
