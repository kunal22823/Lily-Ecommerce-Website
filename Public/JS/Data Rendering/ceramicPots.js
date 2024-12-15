import products from "../API/product.js";
import { addToCart } from "./addToCart.js";
import indoorQuantityToggle from "./productQuantityToggle.js";

const pot = document.querySelector("#pot");
const pottemplate = document.querySelector("#pot-template");
// console.log(pottemplate);

const showPotContainer = () => {
  if (!products) {
    return false;
  }

  const indoorProduct = products.filter(
    (product) => product.category === "Pot"
  );

  indoorProduct.forEach((currProduct) => {
    const { id, name, category, price, description, featured, image } =
      currProduct;

    const productClone = document.importNode(pottemplate.content, true);

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

    pot.append(productClone);
  });
};

showPotContainer();
