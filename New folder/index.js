"use strict";

const pricing = document.querySelector(".pricing");
const priceDura = document.querySelector(".price-duration");
const priceEl = document.querySelector(".price");
const pageView = document.querySelector(".amount-per-views");
const slider = document.querySelector(".slidercontainer");
const toggle = document.querySelector(".switch");
const checkbox = document.getElementById("#toogle-me");
const viewPages = ["10k", "50k", "100k", "500k", "1M"];
const pricePerMonth = [8, 12, 16, 24, 36];
let price = priceEl.textContent;

slider.addEventListener("input", function (e) {
  for (let i = 0; i < viewPages.length; i++) {
    if (e.target.value == i + 1) {
      pageView.textContent = viewPages[i];
      priceEl.textContent = pricePerMonth[i].toFixed(2);
      price = priceEl.textContent;
    }
  }
  // console.log(viewPages[i], [i]);
  // console.log(e.target.value);
});

toggle.addEventListener("input", function (e) {
  toggle.classList.toggle("toggle-active");
  console.log(e.target.checked);
  if (e.target.checked) {
    let discount = price - 0.25 * price;
    priceEl.textContent = discount.toFixed(2);
  } else {
    priceEl.textContent = price;
  }
});
