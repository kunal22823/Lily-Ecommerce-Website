import { getCartProductFromLS } from "./getCartData.js";
import { toastMsg } from "./Toast.js";

export const addToCart = (event, id) => {
  let arrLocalStoragePro = getCartProductFromLS();

  const currProElem = document.querySelector(`#card${id}`);

  let quantity = currProElem.querySelector(".productQuantity").innerText;
  let price = currProElem.querySelector(".productPrice").innerText;
  let proName = currProElem.querySelector(".productName").innerText;
  let image = currProElem.querySelector(".productImage").src;

  price = price.replace("₹", "");

  let exitingProduct = arrLocalStoragePro.find((currPro) => currPro.id === id);

  if (exitingProduct && quantity > 1) {
    quantity = Number(exitingProduct.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updateCart = { id, quantity, price, proName, image };
    updateCart = arrLocalStoragePro.map((curPro) => {
      return curPro.id === id ? updateCart : curPro;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
    toastMsg("add", proName);
  }

  if (exitingProduct && quantity == 1) {
    alert("Product Already In Cart !");
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStoragePro.push({ id, quantity, price, proName, image });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStoragePro));

  toastMsg("add",proName);

  // console.log(quantity, price);
};
