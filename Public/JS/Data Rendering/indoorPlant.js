import products from "../API/product.js";
import { addToCart } from "./addToCart.js";
import indoorQuantityToggle from "./productQuantityToggle.js";

const idp = document.querySelector("#idp");
const idptemplate = document.querySelector("#idp-template");
// console.log(idptemplate);

const showIndoorContainer = () => {
  if (!products) {
    return false;
  }

  const indoorProduct = products.filter(
    (product) => product.category === "Indoor"
  );

  indoorProduct.forEach((currProduct) => {
    const { id, name, category, price, description, featured, image } =
      currProduct;

    const productClone = document.importNode(idptemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent = `₹ ${price}`;
    productClone.querySelector(".productDescription").textContent = description;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        indoorQuantityToggle(event, id);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id);
      });

    idp.append(productClone);
  });
};

showIndoorContainer();
