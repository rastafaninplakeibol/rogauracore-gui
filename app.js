"use strict";
exports.__esModule = true;
var electron = require("electron");
var path_1 = require("path");
var app = electron.app;
var mainWin;
var homePath = path_1.join(__dirname, 'home.html');
app.on('ready', function () {
    mainWin = new electron.BrowserWindow({
        width: 500,
        height: 700,
        frame: true,
        backgroundColor: '#222222',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: path_1.join(__dirname, '/ciak.png')
    });
    mainWin.setTitle('Rogauracore-gui');
    mainWin.loadFile(homePath);
    mainWin.setMenuBarVisibility(false);
    mainWin.on('closed', function () {
        console.log('byebye');
    });
});
app.on('window-all-closed', function () {
    app.quit();
});
