import products from "../API/product.js";
import { addToCart } from "./addToCart.js";
import flowerQuantityToggle from "./productQuantityToggle.js";

const flw = document.querySelector("#flw");
const flwtemplate = document.querySelector("#flw-template");

const showFlowerContainer = () => {
  if (!products) {
    return false;
  }

  const flowerProducts = products.filter(
    (product) => product.category === "Flower"
  );

  flowerProducts.forEach((currProduct) => {
    const { id, name, category, price, description, featured, image } =
      currProduct;

    const productClone = document.importNode(flwtemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent = `₹ ${price}`;
    productClone.querySelector(".productDescription").textContent = description;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        flowerQuantityToggle(event, id);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id);
      });

    flw.append(productClone);
  });
};

showFlowerContainer();
