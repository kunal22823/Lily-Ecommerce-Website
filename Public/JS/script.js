
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const logout = document.getElementById("logout");
const login = document.getElementById("login");
const register = document.getElementById("register");


if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const userDetails = JSON.parse(localStorage.getItem('userDetails'));

if (userDetails && userDetails.firstname) {  
  document.getElementById('welcomeMessage').innerText = `${userDetails.firstname}`;
  logout.style.display = 'block';  // Show the logout button
  login.style.display = 'none';
  register.style.display = 'none';
  
} else {
  logout.style.display = 'none';
  login.style.display = 'block';
  register.style.display = 'block';// Hide the logout button
}

logout.addEventListener('click', () => {
  localStorage.removeItem('userDetails');
  localStorage.removeItem('cartProductLS');
  alert('Logged out!');
  window.location.reload();
});
























