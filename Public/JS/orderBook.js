
const userDetails = JSON.parse(localStorage.getItem('userDetails'));

// Check if userDetails exist before trying to access them
if (userDetails) {
    document.getElementById("firstname").value = userDetails.firstname;
    document.getElementById("lastname").value = userDetails.lastname;
    document.getElementById("contact").value = userDetails.contact;
    document.getElementById("email").value = userDetails.email;
}




