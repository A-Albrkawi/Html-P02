// DOM
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const blackBorder = document.querySelector(".dashed");
const tile9Light = document.querySelector(".column");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const tiles = document.querySelectorAll(".tile");
const blueBorders = document.querySelectorAll(".border");
const bodyLight = document.querySelector("body");

// light theam

light.addEventListener("click", function () {
  bodyLight.style.backgroundColor = "white";
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

    bodyLight.classList.add("body-light");
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
  bodyLight.style.backgroundColor = " rgb(50, 47, 47)";
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
});

