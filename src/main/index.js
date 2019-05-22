import { app, BrowserWindow } from 'electron'
import localstorage from 'electron-localstorage'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  //  查询是否有保存窗口配置信心
  const windowConfig = localstorage.getItem('WINDOWCONFIG') && JSON.parse(localstorage.getItem('WINDOWCONFIG'))
  const [width,height,x,y] = [windowConfig.size && windowConfig.size[0],windowConfig.size && windowConfig.size[1],windowConfig.position && windowConfig.position[0],windowConfig.position && windowConfig.position[1]]
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    x: x ? x : '',
    y: y ? y : '',
    width: width ? width : 1002,
    height: height ? height : 670,
    minWidth:1002,
    minHeight:670,
    useContentSize: true,
    titleBarStyle:'hiddenInset'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  //  存入窗口配置信息
  localstorage.setItem('WINDOWCONFIG',JSON.stringify({size:mainWindow.getSize(),position:mainWindow.getPosition()}))
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
