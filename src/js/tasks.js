const { ipcRenderer, ipcMain } = require("electron");
const ipc = ipcRenderer;


//! close and minimize buttons function
const closeBtn = document.querySelector(".close");
const minimizeBtn = document.querySelector(".minimize");

closeBtn.addEventListener("click", () => {
  ipc.send("close-the-app");
});
minimizeBtn.addEventListener("click", () => {
  ipc.send("minimize-the-app");
});


//! function to set the app as default app
const videoHide = document.querySelector(".video-show");
var data = ipcRenderer.sendSync("get-file-data");
setTimeout(() => {
  if (data === null) {
    console.log("There is no file");
    videoHide.classList.remove("play-it");
  } else if (data === ".") {
    videoHide.classList.remove("play-it");
  } else {
    console.log(data);
    videoHide.classList.add("play-it");
  }
}, 2500);


// ! add algorithm to take long time to load in the first time app launch

let splashScreen = localStorage.getItem("splashScreen");

const showSplashScreen = () => {
  ipc.send("showSplash");
  localStorage.setItem("splashScreen", "show");
};
const hideSplashScreen = () => {
  ipc.send("hideSplash");
  ipcMain.removeListener;
  localStorage.setItem("splashScreen", "hide");
};

function loading() {
  splashScreen = localStorage.getItem("splashScreen");
  if (splashScreen !== "show") {
    showSplashScreen();
  } else {
    hideSplashScreen();
  }
}
loading();
