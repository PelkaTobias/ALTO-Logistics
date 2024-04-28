const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themetoggler = document.querySelector(".theme-toggler");
const lightmode = document.querySelector("#light-mode");


// SHOW SIDEBAR
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})


// CLOSE SIDEBAR
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})

// CHANGE THEME
themetoggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themetoggler.querySelector("span:nth-child(2)").classList.toggle("active");
    themetoggler.querySelector("span:nth-child(1)").classList.toggle("active");
})

// Beim Start als aktiv markieren
lightmode.classList.add("active");

// Eventlistener hinzufügen, um die Klasse "inactive" beim Knopfdruck hinzuzufügen
themetoggler.addEventListener("click", () => {
    lightmode.classList.toggle("inactive");
});


durations.forEach(duration => {
    const tr = document.createElement("tr");
    const trContent = `
            <td>${duration.productName}</td>
            <td>${duration.productNumber}</td>
            <td>${duration.shippingmethod}</td>
            <td>${duration.duration}</td>
            <td>${duration.day}</td>
            <td>${duration.month}</td>
            <td class="primary">Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});

import { durations } from './durations.js';
