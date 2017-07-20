var contract;

(function() {
  'use strict'

  var metaMaskIsInstalled = () => {
    return typeof web3 !== 'undefined'
  }

  document.getElementById('bet-vfb').addEventListener('click', () => {
    contract.betOnVfb({
      value: 10000000000000000000,
      from: web3.eth.coinbase
    }, (err, succ) => {
      console.log(err, succ)
    })
  });

  document.getElementById('bet-fcb').addEventListener('click', () => {
    contract.betOnFcb({
      value: 10000000000000000000,
      from: web3.eth.coinbase
    }, (err, succ) => {
      console.log(err, succ)
    })
  });

  document.getElementById('finalize').addEventListener('click', () => {
    contract.payout(document.getElementById('winner').value, {
      from: web3.eth.coinbase
    }, () => {
      document.getElementById('status').innerHTML = 'Finalized'
    })
  });

  window.onload = () => {
    if (metaMaskIsInstalled()) {
      contract = web3.eth.contract(__ABI__).at('__ADDRESS__');
    } else {
      document.getElementById('status').innerHTML =
        'Your browser does not support the app. Please install MetaMask'
    }
  }
})()