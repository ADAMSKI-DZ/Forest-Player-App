const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const path = require("path");
const ipc = ipcMain;

let mainWindow = null;
const iconPath = path.join(__dirname, "data/icon.png");

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    resizable: false,
    show: false,
    icon: iconPath,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //devTools: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  let splashScreen = new BrowserWindow({
    width: 500,
    height: 500,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    icon: iconPath,
    webPreferences: {
      devTools: false,
    },
  });
  //globalShortcut.register("CmdOrCtrl+R", () => {});
  splashScreen.loadURL(`file://${__dirname}/src/splash.html`);
  mainWindow.webContents.on("did-finish-load", () => {
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.close();
      }
      mainWindow.show();
    }, 2000);
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipc.on("close-the-app", () => {
  mainWindow.close();
});
ipc.on("minimize-the-app", () => {
  mainWindow.minimize();
});

ipcMain.on("get-file-data", function (event) {
  var data = null;
  if (process.platform == "win32" && process.argv.length >= 2) {
    var openFilePath = process.argv[1];
    data = openFilePath;
  }
  event.returnValue = data;
});
