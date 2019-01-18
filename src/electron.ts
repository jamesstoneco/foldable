// source: https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c

import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  //   mainWindow.loadFile(path.join(__dirname, "../index.html"));

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true
    });
  mainWindow.loadURL(startUrl);
  //   mainWindow.loadURL("http://localhost:3000");
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => {
    mainWindow.destroy();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
