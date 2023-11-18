// DOM
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const blackBorder = document.querySelector(".dashed");
const tile9Light = document.querySelector(".column");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const tiles = document.querySelectorAll(".tile");
const blueBorders = document.querySelectorAll(".border");
const body = document.querySelector("body");
const sea = document.querySelector(".tile-sea");
const seaWeed1 = document.querySelector(".sea-weed1");
const seaWeed2 = document.querySelector(".sea-weed2");
const bubbles = document.querySelectorAll(".bubble");
const bubbleTwos = document.querySelectorAll(".bubble-1");
// light theam

light.addEventListener("click", function () {
  body.style.backgroundColor = "aliceblue";
  // body.remove("sae");
  header.classList.remove("header-footer-dark");
  footer.classList.remove("header-footer-dark");
  blackBorder.classList.remove("tile-5-dark");
  tile9Light.classList.remove("tile-9-dark");
  tiles.forEach((tile) => {
    tile.classList.remove("tile-dark");
  });
  blueBorders.forEach((border) => {
    border.classList.remove("tile-4-6-dark");
  });

  body.classList.add("body-light");
  header.classList.add("header-footer-light");
  footer.classList.add("header-footer-light");
  blackBorder.classList.add("tile-5-light");
  tile9Light.classList.add("tile-9-light");
  tiles.forEach((tile) => {
    tile.classList.add("tile-light");
  });
  blueBorders.forEach((border) => {
    border.classList.add("tile-4-6-light");
  });
});

// dark theam

dark.addEventListener("click", function () {
  body.style.backgroundColor = " rgb(50, 47, 47)";
  // body.remove("sae");
  header.classList.add("header-footer-dark");
  footer.classList.add("header-footer-dark");
  blackBorder.classList.add("tile-5-dark");
  tile9Light.classList.add("tile-9-dark");
  tiles.forEach((tile) => {
    tile.classList.add("tile-dark");
  });
  blueBorders.forEach((border) => {
    border.classList.add("tile-4-6-dark");
  });
  seaWeed1.classList.add("display-none");
  seaWeed2.classList.add("display-none");
  bubbles.forEach((bubble) => {
    bubble.classList.add("display-none-sea");
  });
  bubbleTwos.forEach((bubbleTwo) => {
    bubbleTwo.classList.add("display-none-sea");
  });
});

// sae theam

sea.addEventListener("click", function () {
  body.style.backgroundColor = "rgb(118, 214, 214)";
  seaWeed1.classList.remove("display-none");
  seaWeed2.classList.remove("display-none");
  bubbles.forEach((bubble) => {
    bubble.classList.remove("display-none-sea");
  });
  bubbleTwos.forEach((bubbleTwo) => {
    bubbleTwo.classList.remove("display-none-sea");
  });
});
