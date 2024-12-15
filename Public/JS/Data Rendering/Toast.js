export function toastMsg(op, proName) {
    // Create a new div element
    const msgToast = document.createElement("div");
    msgToast.classList.add("Toast");
  
    // Set the text content based on the operation
    if (op === "add") {
      msgToast.textContent = `${proName} Added To Cart`;
    } else {
      msgToast.textContent = `${proName} Removed From The Cart`;
    }
  
    // Append the message toast to the body
    document.body.appendChild(msgToast);
  
    // Set a timeout to remove the message toast after 2 seconds
    setTimeout(() => {
      msgToast.remove();
    }, 2000);

  }
  