import products from "../API/product.js";
import { addToCart } from "./addToCart.js";
import outdoorQuantityToggle from "./productQuantityToggle.js";

const odp = document.querySelector("#odp");
const odptemplate = document.querySelector("#odp-template");

const showOutdoorContainer = () => {
  if (!products) {
    return false;
  }

  const outdoorProducts = products.filter((product) => product.category === "outdoor");

  outdoorProducts.forEach((currProduct) => {
    const { id, name, category, price, description, featured, image } = currProduct;

    const productClone = document.importNode(odptemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent = `₹ ${price}`;
    productClone.querySelector(".productDescription").textContent = description;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        outdoorQuantityToggle(event, id);
      });

    productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        addToCart(event, id);
      });
      
    odp.append(productClone);
  });

};


showOutdoorContainer();




