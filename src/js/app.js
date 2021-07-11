const { shell } = require("electron");
const username = require("username");

const mainTitle = document.querySelector(".title");
const topTitle = document.querySelector(".top-title h2");
topTitle.innerHTML = mainTitle.innerHTML;

const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-bar");
const mainCont = document.querySelector(".main-container");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("animate");
  sideBar.classList.toggle("show");
  mainCont.classList.toggle("shrink");
  videoHide.classList.remove("play-it");
});

const tabs = document.querySelectorAll(".main-container .tabs");
const sideBtn = document.querySelectorAll(".menu a");

function showPages(pageIndex) {
  sideBtn.forEach(function (node) {
    node.style.backgroundColor = "";
  });
  sideBtn[pageIndex].style.backgroundColor = "#2c3e50";
  tabs.forEach(function (node) {
    node.style.bottom = "100%";
  });
  tabs[pageIndex].style.bottom = "0";
}
showPages(0);

const usName = document.querySelector(".user-name");

(async () => {
  usName.innerHTML = "Hello" + " " + (await username());
})();

const musicToggle = document.querySelector(".music-toggle");
const musicControl = document.querySelector(".music-control");

musicToggle.addEventListener("click", () => {
  musicControl.classList.toggle("show");
});

const aboutBtn = document.querySelector(".about-btn");
const aboutPage = document.querySelector(".about-page");
const hideAbout = document.querySelector(".hide-about");

aboutBtn.addEventListener("click", () => {
  aboutPage.classList.add("show");
});
hideAbout.addEventListener("click", () => {
  aboutPage.classList.remove("show");
});

const facebookLink = document.querySelector(".fb");
const instagramLink = document.querySelector(".ig");
const youtubeLink = document.querySelector(".yt");
const websiteLink = document.querySelector(".ws");

const githubLink = document.querySelector(".gh");

const facebookMainLink = document.querySelector(".fb-main");
const instagramMainLink = document.querySelector(".ig-main");
const youtubeMainLink = document.querySelector(".yt-main");
const websiteMainLink = document.querySelector(".ws-main");
const codepenLink = document.querySelector(".cp");

facebookLink.addEventListener("click", () => {
  shell.openExternal("https://www.facebook.com/abdelmalek.tammal/");
});
instagramLink.addEventListener("click", () => {
  shell.openExternal("https://www.instagram.com/adamski_setups/");
});
youtubeLink.addEventListener("click", () => {
  shell.openExternal(
    "https://www.youtube.com/channel/UCxP3N9RP-lCJeTi04hazsZw"
  );
});
websiteLink.addEventListener("click", () => {
  shell.openExternal("https://malicktammal.netlify.app/");
});

githubLink.addEventListener("click", () => {
  shell.openExternal("https://www.facebook.com/abdelmalek.tammal/");
});
codepenLink.addEventListener("click", () => {
  shell.openExternal("https://codepen.io/ADAMSKIDZ");
});

facebookMainLink.addEventListener("click", () => {
  shell.openExternal("https://www.facebook.com/abdelmalek.tammal/");
});
instagramMainLink.addEventListener("click", () => {
  shell.openExternal("https://www.instagram.com/adamski_setups/");
});
youtubeMainLink.addEventListener("click", () => {
  shell.openExternal(
    "https://www.youtube.com/channel/UCxP3N9RP-lCJeTi04hazsZw"
  );
});
websiteMainLink.addEventListener("click", () => {
  shell.openExternal("https://forest-player.netlify.app/");
});
