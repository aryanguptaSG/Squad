const path = require("path")
const { BrowserWindow, app, dialog, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1200,
        height: 1000,
        minHeight: 700,
        minWidth: 1200,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableremotemodule: true,
        },
    });

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:5173'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }

}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});


ipcMain.on("openDialogForDirectroy", (event, args) => {
    dialog.showOpenDialog(
        {
            title: 'Select Directory',
            message: 'Select Directory',
            //pass 'openDirectory', 'openFile' to strictly open directories
            properties: ['openDirectory']
        }
    ).then(result => {
        if (!result.canceled) {
            event.reply("directorySelected", result.filePaths[0]);
        }
        else {
            console.log("Cancled btao kya kre");
        }
    })
})


ipcMain.on("openDialogForDataSet", (event, args) => {
    dialog.showOpenDialog(
        {
            title: 'Select DataSet',
            message: 'Select DataSet',
            //pass 'openDirectory', 'openFile' to strictly open directories
            properties: ['openFile'],
            filters: [
                { name: 'DataSet', extensions: [args] }
            ]
        }
    ).then(result => {
        if (!result.canceled) {
            event.reply("datasetSelected", result.filePaths[0]);
        }
        else {
            console.log("Cancled btao kya kre");
        }
    })
})