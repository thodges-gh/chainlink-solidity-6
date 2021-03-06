let MyContract = artifacts.require('MyContract')

module.exports = (deployer, network) => {
  // Local (development) networks need their own deployment of the LINK
  // token and the Oracle contract
  if (!network.startsWith('live')) {
    // Being lazy, do nothing...
  } else {
    // For live networks, use the 0 address to allow the ChainlinkRegistry
    // contract automatically retrieve the correct address for you
    deployer.deploy(MyContract, '0x0000000000000000000000000000000000000000')
  }
}
