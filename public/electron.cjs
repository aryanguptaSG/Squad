"use strict";
const path = require("path");
const { BrowserWindow, app, dialog, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 1e3,
    minHeight: 700,
    minWidth: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableremotemodule: true
    }
  });
  win.loadURL(
    isDev ? "http://localhost:5173" : `file://${path.join(__dirname, "../build/index.html")}`
  );
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
};
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.on("openDialogForDirectroy", (event, args) => {
  dialog.showOpenDialog(
    {
      title: "Select Directory",
      message: "Select Directory",
      //pass 'openDirectory', 'openFile' to strictly open directories
      properties: ["openDirectory"]
    }
  ).then((result) => {
    if (!result.canceled) {
      event.reply("directorySelected", result.filePaths[0]);
    } else {
      console.log("Cancled btao kya kre");
    }
  });
});
ipcMain.on("openDialogForDataSet", (event, args) => {
  dialog.showOpenDialog(
    {
      title: "Select DataSet",
      message: "Select DataSet",
      //pass 'openDirectory', 'openFile' to strictly open directories
      properties: ["openFile"],
      filters: [
        { name: "DataSet", extensions: [args] }
      ]
    }
  ).then((result) => {
    if (!result.canceled) {
      event.reply("datasetSelected", result.filePaths[0]);
    } else {
      console.log("Cancled btao kya kre");
    }
  });
});
