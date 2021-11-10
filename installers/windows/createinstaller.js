const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, '../../builds/kr8s-win-win32-ia32'),
    authors: 'Team Kr8s',
    noMsi: true,
    outputDirectory: path.join(outPath, '../../builds'),
    exe: 'kr8s-win.exe',
    setupExe: 'KR8S',
    setupIcon: path.join(rootPath, '../../src/assets/css/imgs/kr8s.ico')
  })
}