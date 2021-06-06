const videoPlayer = document.querySelector(".video-player");
const videoPlayerSource = document.querySelector(".video-player-source");
const selectVideo = document.querySelector(".select-video");

selectVideo.addEventListener("click", async () => {
  let file = await dialog.showOpenDialog(mainWindow, {
    filters: [
      {
        name: "Video files",
        extensions: [
          "webm",
          "mkv",
          "flv",
          "vob",
          "gifv",
          "ogg",
          "ogv",
          "drc",
          "gif",
          "mng",
          "avi",
          "MTS",
          "M2TS",
          "mov",
          "rmvb",
          "wmv",
          "yuv",
          "viv",
          "asf",
          "mpeg",
          "amv",
          "mp4",
          "m4p",
          "m4v",
          "mpg",
          "mp2",
          "mpe",
          "mpv",
          "mpg",
          "m2v",
          "m4v",
          "svi",
          "3gp",
          "3g2",
          "mxf",
          "roq",
          "nsv",
          "flv",
          "f4v",
          "f4p",
          "f4a",
          "f4b",
        ],
      },
    ],
  });
  let video = file.filePaths[0];
  videoPlayerSource.setAttribute("src", video);
  videoPlayer.load();
  videoPlayer.play();
});

function playVideoDefault() {
  if (data === null) {
    console.log("no video to play");
  } else {
    video = data;
    videoPlayerSource.setAttribute("src", video);
    videoPlayer.load();
    videoPlayer.play();
  }
}
setTimeout(() => {
  playVideoDefault();
}, 2500);
