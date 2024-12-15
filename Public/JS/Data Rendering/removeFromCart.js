import { finalCartTotal } from "./finalCartTotal.js";
import { getCartProductFromLS } from "./getCartData.js";
import { toastMsg } from "./Toast.js";

export const removeFromCart = (id) => {
    let cartProducts = getCartProductFromLS();

    // Find the product to get its name
    const removedProduct = cartProducts.find((currPro) => currPro.id === id);
    const productName = removedProduct ? removedProduct.proName : "Product";

    // Filter out the product by ID
    cartProducts = cartProducts.filter((currPro) => currPro.id !== id);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    // Remove the product's HTML element after clicking the remove button
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();

        // Show the toast message with the product name
        toastMsg("delete", productName);
    }

    // Update the final cart total
    finalCartTotal();
};
