const { app, BrowserWindow } = require('electron')
const {autoUpdater} = require('electron-updater')
const path = require('path')
const log = require('electron-log');

log.transports.file.resolvePath = () => path.join('C:/Users/HP/Desktop/programacion/electron/pruebas', '/logs/main.log');
log.info("App version = " + app.getVersion())

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}


autoUpdater.on('checking-for-update',()=>{
  log.info("checking-for-update");
})

autoUpdater.on('update-available',(info) => {
  log.info("update-available")
})

autoUpdater.on('update-not-available',(info)=>{
  log.info("update-not-available");
})

autoUpdater.on('error',(err)=>{
  log.info("error in auto updater "+ err);
})

autoUpdater.on('download-progress',(progress)=>{
  log.info("progress ")
  log.info(progress);
})

autoUpdater.on('update-downloaded',(info)=>{
  log.info("update-downloaded")
})

app.whenReady().then(() => {
  createWindow()  
  autoUpdater.checkForUpdatesAndNotify()
})


