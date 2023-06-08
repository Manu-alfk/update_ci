const { app, BrowserWindow } = require('electron')
const {autoUpdater} = require('electron-updater')
const log = require('electron-log');
log.transports.file.resolvePath = () => path.join('C:\Users\HP\Desktop\programacion\electron\pruebas', 'logs/main.log');
log.info('Hello, log');
log.warn('Some problem appears');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()  
  autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on("update-available",() => {
  log.info("update-available")
})

//[Environment]::SetEnvironmentVariable("GH_TOKEN","token","user")