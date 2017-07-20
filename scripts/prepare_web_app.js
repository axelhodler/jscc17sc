const fs = require('fs')

const gamble = require('./../build/contracts/Gamble')

const networkId = Object.keys(gamble.networks)[0]
const address = gamble.networks[networkId].address
const abi = JSON.stringify(gamble.abi)

const appFilePath = 'ui/app.js'
let ui = fs.readFileSync(appFilePath).toString()
const configuredApp = ui.replace('__ADDRESS__', address).replace('__ABI__', abi)
fs.writeFileSync(appFilePath, configuredApp);