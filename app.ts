import * as electron from "electron";
import { join } from 'path'
let app = electron.app
let mainWin: electron.BrowserWindow;
const homePath = join(__dirname, 'home.html')

app.on('ready', () => {
    mainWin = new electron.BrowserWindow({
        width: 500,
        height: 300,
        frame: true,
        backgroundColor: '#222222',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });
    mainWin.setTitle('Rogauracore-gui')
    mainWin.loadFile(homePath);
    mainWin.setMenuBarVisibility(false)
    mainWin.on('closed', function () {
        console.log('byebye')
    });
});

app.on('window-all-closed', function () {
    app.quit();
});