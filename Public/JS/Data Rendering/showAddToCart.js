import products from "../API/product.js";
import { cartIncrementDecrement } from "./cartIncrementDecrement.js";
import { fetchActualDataFromLS } from "./fetchActualDataFromLS.js";
import { finalCartTotal } from "./finalCartTotal.js";
import { getCartProductFromLS } from "./getCartData.js";
import { removeFromCart } from "./removeFromCart.js";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currPro) => {
  return cartProducts.some((currElem) => currElem.id === currPro.id);
});
console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProducts = () => {
  filterProducts.forEach((currPro) => {
    const { id, name, category, price, image } = currPro;
    
    const productClone = document.importNode(templateContainer.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    const lsActucalData = fetchActualDataFromLS(id, price);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent =
      lsActucalData.price;
    productClone.querySelector(".productQuantity").textContent =
      lsActucalData.quantity;

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeFromCart(id));

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        cartIncrementDecrement(event, id,price,name,image);
      });

    cartElement.append(productClone);
  });
};

export const getProductNames = () => {
  // filterProducts to get name
  return filterProducts.map(pro => pro.name);
};

showCartProducts();
finalCartTotal();
