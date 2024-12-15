const productQuantityToggle = (event, id) => {
    const currCardElement = document.querySelector(`#card${id}`);
    let productQuantity = currCardElement.querySelector(".productQuantity");
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  
    if (event.target.className === "cartIncrement") {
      quantity += 1;
    }
    if (event.target.className === "cartDecrement") {
      if (quantity > 1) {
        quantity -= 1;
      }
    }
  
    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
  };

export default productQuantityToggle;