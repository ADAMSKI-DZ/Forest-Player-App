const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const closeBtn = document.querySelector(".close");
const minimizeBtn = document.querySelector(".minimize");

closeBtn.addEventListener("click", () => {
  ipc.send("close-the-app");
});
minimizeBtn.addEventListener("click", () => {
  ipc.send("minimize-the-app");
});

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
