const form = document.querySelector(".contents-area");

const customerName = document.querySelector("#customer-name");
const customerTel = document.querySelector("#customer-tel");
const customerMail = document.querySelector("#customer-mail");
const customerStylist = document.querySelector("#customer-stylist");
const customerDate = document.querySelector("#customer-date");
const customerTime = document.querySelector("#customer-time");
const customerMessage = document.querySelector("#customer-message");

const savedName = sessionStorage.getItem("customerName");
if(savedName) {
    customerName.value = savedName;
}
const savedTel = sessionStorage.getItem("customerTel");
if(savedTel) {
    customerTel.value = savedTel; 
}
const savedMail = sessionStorage.getItem("customerMail");
if(savedMail) {
    customerMail.value = savedMail;
}
const savedStylist = sessionStorage.getItem("customerStylist");
if (savedStylist) {
    customerStylist.querySelectorAll("option").forEach((option) => {
        if (option.textContent === savedStylist) {
            option.selected = true;
        }
    });
}
const savedDate = sessionStorage.getItem("customerDate");
if(savedDate) {
    customerDate.querySelectorAll("option").forEach((option) => {
        if(option.textContent === savedDate) {
            option.selected = true;
        }
    });
}
const savedTime = sessionStorage.getItem("customerTime");
if(savedTime) {
    customerTime.querySelectorAll("option").forEach((option) => {
        if(option.textContent === savedTime) {
            option.selected = true;
        }
    });
}
const savedMessage = sessionStorage.getItem("customerMessage");
if(savedMessage) {
    customerMessage.value = savedMessage;
}

const savedMenu = sessionStorage.getItem("customerMenu");
if(savedMenu) {
    const menus = JSON.parse(savedMenu);
    const menuCheckboxes = document.querySelectorAll('input[name="menu"]');
    menuCheckboxes.forEach((checkbox) => {
    if(menus.includes(checkbox.value)) {
        checkbox.checked = true;
        }
    });
}


form.addEventListener("submit",(event)=> {
    event.preventDefault();
    const stylistText = customerStylist.options[customerStylist.selectedIndex].textContent;
    const dateText = customerDate.options[customerDate.selectedIndex].textContent;
    const timeText = customerTime.options[customerTime.selectedIndex].textContent;
    const checkedMenus = document.querySelectorAll('input[name="menu"]:checked');
    const menus = [];
    checkedMenus.forEach((menu) => {
        menus.push(menu.value);
    });

    sessionStorage.setItem("customerName",customerName.value);
    sessionStorage.setItem("customerTel",customerTel.value);
    sessionStorage.setItem("customerMail",customerMail.value);
    sessionStorage.setItem("customerStylist",stylistText);
    sessionStorage.setItem("customerDate",dateText);
    sessionStorage.setItem("customerTime",timeText);
    sessionStorage.setItem("customerMessage",customerMessage.value);
    sessionStorage.setItem("customerMenu", JSON.stringify(menus));

    window.location.href = "confirm.html";
});
