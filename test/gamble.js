var Gamble = artifacts.require("./Gamble.sol")

contract('Gamble', function(accounts) {
  it('runs', () => {
    return Gamble.deployed().then(instance => {
      return assert.equal(1, 1)
    })
  })
})
