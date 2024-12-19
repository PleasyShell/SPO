const {
    app,
    BrowserWindow
} = require('electron');

let appWindow;

function createWindow() {

    appWindow = new BrowserWindow({
        width: 1920,
        height: 1080
    });
    appWindow.loadFile('dist/SPO/index.html');

    appWindow.on('closed', function () {
        appWindow = null;
    });

};

app.whenReady().then(() => {
    createWindow();
});
