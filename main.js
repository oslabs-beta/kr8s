const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }   
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  // Enable macOS to create a new application window on activation
  // This is a difference in behavior from macOS vs other OS
  // macOS applications continue running without any active windows
  // They will need to create a new window to display the application on activation
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Close application if all app windows are closed
// This is only needed for non-macOS systems
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit();
});