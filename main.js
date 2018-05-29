'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin')
  app.quit();
});

app.on('ready', () => {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow(
    {
      title: 'sad',
      width: 320, 
      minWidth: 320,
      height: 130,
      minHeight: 130
    }
  );
  mainWindow.loadURL('file://' + __dirname + '/src/html/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

