import products from "../API/product.js";
import { addToCart } from "./addToCart.js";
import featureQuantityToggle from "./productQuantityToggle.js";

const feature = document.querySelector("#featurePlant");
const featureTemplate = document.querySelector("#feature-template");
console.log(featureTemplate);

const showFeaturePlantContainer = () => {
  if (!products) {
    return false;
  }
  const indoorProduct = products.filter((product) => product.featured === "true");

  indoorProduct.forEach((currProduct) => {
    const { id, name, category, price, description, featured, image } = currProduct;

    const productClone = document.importNode(featureTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent = `₹ ${price}`;
    productClone.querySelector(".productDescription").textContent = description;


    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        featureQuantityToggle(event, id);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id);
      });

    feature.append(productClone);
  });

};


showFeaturePlantContainer();



