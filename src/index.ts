
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Vibrancy, TitleBarStyle } from './types'
import { app, Menu, BrowserWindow } from 'electron'

let vibrancy: Vibrancy = 'light'
const titleBarStyle: TitleBarStyle = 'hidden'

const windows: BrowserWindow[] = []

const toggleVibrancy = () => {
  vibrancy = vibrancy === 'dark' ? 'light' : 'dark'
  windows.forEach(_ => _.setVibrancy(vibrancy))
}

app.on('ready', () => {
  windows.push(new BrowserWindow({ titleBarStyle, vibrancy }))

  Menu.setApplicationMenu(
    Menu.buildFromTemplate([
      {
        label: 'View',
        submenu: [{ label: 'Toggle Vibrancy', click: toggleVibrancy }]
      }
    ])
  )
})
