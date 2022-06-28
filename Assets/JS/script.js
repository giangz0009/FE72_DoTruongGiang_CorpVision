const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
//-------- Searching Show Function
const header = $("header.header");
const headerSearch = header.querySelector(".header-search");
const headerOpenSearchBtn = headerSearch.querySelector(".btn.btn--open");
const headerCloseSearchBtn = headerSearch.querySelector(".btn.btn--close");
const headerSearchInput = headerSearch.querySelector("form > input");

headerOpenSearchBtn.onclick = () => {
  if (!header.classList.contains("searching")) {
    header.classList.add("searching");
    headerSearchInput.focus();
  }
};

headerCloseSearchBtn.onclick = () => {
  if (header.classList.contains("searching")) {
    header.classList.remove("searching");
  }
};

// -------- Toggle Switch for Dark and Light Theme
const localThemeKey = "themeType";
const htmlElement = $("html");
const themeCheckBox = header.querySelector(".header-theme #themeCheckbox");
let isDarkTheme = getLocalTheme(localThemeKey) || false;

renderTheme();

themeCheckBox.onchange = function () {
  isDarkTheme = this.checked;
  setLocalTheme(localThemeKey, isDarkTheme);
  renderTheme();
};

function getLocalTheme(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalTheme(key, value) {
  let stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

function renderTheme() {
  if (isDarkTheme) {
    htmlElement.dataset.theme = "dark";
  } else {
    htmlElement.dataset.theme = "light";
  }
}

// Handle Event ScrollY
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
const vhHalf = Math.floor(vh / 2);
const btnToTop = $(".btn-to-top");
document.onscroll = () => {
  const scrollY = document.documentElement.scrollTop || window.scrollY;
  if (scrollY > vhHalf) {
    if (!header.classList.contains("scrolling")) {
      header.classList.add("scrolling");
    }
    if (!btnToTop.classList.contains("show")) {
      btnToTop.classList.add("show");
    }
  } else {
    if (header.classList.contains("scrolling")) {
      header.classList.remove("scrolling");
    }
    if (btnToTop.classList.contains("show")) {
      btnToTop.classList.remove("show");
    }
  }
};

// Handle Header Open Nav On Mobile
const headerNavBtn = header.querySelector(".navbar-toggler");

headerNavBtn.onclick = () => {
  header.classList.toggle("open-nav");
  var pp = document.querySelectorAll("p");
};
