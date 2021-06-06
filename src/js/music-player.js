const { remote } = require("electron");
const dialog = remote.dialog;
const mainWindow = remote.getCurrentWindow();
const jsmediatags = require("jsmediatags");

const selectFile = document.querySelector(".select-file");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const restartBtn = document.querySelector(".restart-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");
const placeHolder = document.querySelector(".placeholder");
const musicTitle = document.querySelector(".music-title");
const artistTxt = document.querySelector(".artist");
const albumTxt = document.querySelector(".album");
const volumePer = document.querySelector(".pers");
const volumeControl = document.querySelector(".control");
const musicTab = document.querySelector(".music-show");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");

selectFile.addEventListener("click", async () => {
  selectFile.addEventListener("click", () => {
    audio.pause();
    audio = new Audio();
    placeHolder.classList.remove("anim");
    musicTab.classList.remove("move");
  });
  forwardBtn.addEventListener("click", () => {
    audio.currentTime = audio.currentTime + 5;
  });
  backwardBtn.addEventListener("click", () => {
    audio.currentTime = audio.currentTime - 5;
  });
  let file = await dialog.showOpenDialog(mainWindow, {
    filters: [
      {
        name: "Music files",
        extensions: [
          "3gp",
          "aa",
          "aac",
          "aax",
          "act",
          "aiff",
          "alac",
          "amr",
          "ape",
          "au",
          "awb",
          "dss",
          "dvf",
          "flac",
          "gsm",
          "iklax",
          "ivs",
          "m4a",
          "m4b",
          "m4p",
          "mmf",
          "mp3",
          "mpc",
          "msv",
          "ogg",
          "oga",
          "mogg",
          "opus",
          "org",
          "ra",
          "rm",
          "raw",
          "rf64",
          "sln",
          "tta",
          "voc",
          "vox",
          "wav",
          "wma",
          "wv",
          "webm",
          "8svx",
          "cda",
        ],
      },
    ],
  });
  let audio = new Audio(file.filePaths[0]);
  audio.play();
  playBtn.addEventListener("click", () => {
    audio.play();
    placeHolder.classList.add("anim");
    musicTab.classList.add("move");
  });
  pauseBtn.addEventListener("click", () => {
    audio.pause();
    placeHolder.classList.remove("anim");
    musicTab.classList.remove("move");
  });
  restartBtn.addEventListener("click", () => {
    audio.currentTime = 0;
  });
  placeHolder.classList.add("anim");
  musicTab.classList.add("move");
  setInterval(() => {
    sysVolume = volumeControl.value;
    volumePer.innerHTML = sysVolume;
    audio.volume = sysVolume / 100;
  });
  audio.onloadedmetadata = function progressUpdate() {
    setInterval(() => {
      const duration = audio.duration;
      const currentTime = audio.currentTime;
      const progressPer = (currentTime / duration) * 100;
      progress.style.width = progressPer + "%";
      progress.style.maxWidth = "100%";
    });
  };
  jsmediatags.read(file.filePaths[0], {
    onSuccess: (tag) => {
      let image = tag.tags.picture;
      if (image) {
        let base64String = "";
        for (let i = 0; i < image.data.length; i++) {
          base64String += String.fromCharCode(image.data[i]);
        }
        let base64 =
          "data:" + image.format + ";base64," + window.btoa(base64String);
        placeHolder.setAttribute("src", base64);
      }
      musicTitle.innerHTML = tag.tags.title;
      artistTxt.innerHTML = "Artist : " + tag.tags.artist;
      albumTxt.innerHTML = "Album : " + tag.tags.album;
      if (musicTitle.innerHTML === "undefined") {
        musicTitle.innerHTML = "Title not found";
        placeHolder.setAttribute("src", "../data/music-placeholder.png");
      }
    },
    onError: function (error) {
      alert("Please Select Valid File");
    },
  });
});
