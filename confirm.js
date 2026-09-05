const customerName = sessionStorage.getItem("customerName");
const customerTel = sessionStorage.getItem("customerTel");
const customerMail = sessionStorage.getItem("customerMail");
const customerStylist = sessionStorage.getItem("customerStylist");
const customerDate = sessionStorage.getItem("customerDate");
const customerTime = sessionStorage.getItem("customerTime");
const customerMessage = sessionStorage.getItem("customerMessage");
const customerMenu = JSON.parse(sessionStorage.getItem("customerMenu"));

const confirmName = document.querySelector("#confirm-name");
const confirmTel = document.querySelector("#confirm-tel");
const confirmMail = document.querySelector("#confirm-mail");
const confirmStylist = document.querySelector("#confirm-stylist");
const confirmDate = document.querySelector("#confirm-date");
const confirmTime = document.querySelector("#confirm-time");
const confirmMessage = document.querySelector("#confirm-message");
const confirmMenu = document.querySelector("#confirm-menu");
confirmMenu.textContent = customerMenu.join("/");

confirmName.textContent = customerName; 
confirmTel.textContent = customerTel;
confirmMail.textContent = customerMail;
confirmStylist.textContent = customerStylist;
confirmDate.textContent = customerDate;
confirmTime.textContent = customerTime;
confirmMessage.textContent = customerMessage;

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", () => {
    window.location.href = "booking.html";
})
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", ()=> {
    window.location.href = "complite.html";
})