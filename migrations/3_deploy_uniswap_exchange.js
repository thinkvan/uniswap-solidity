// declare library
var SafeMath = artifacts.require("./Library/SafeMath.sol");

// declare contract
var UniswapExchange = artifacts.require("./uniswap/UniswapExchange.sol");
var ERC20 = artifacts.require("./tokens/ERC20.sol");

module.exports = function(deployer, network, accounts) {
  
  var wallet = require("../config/accountsConfig.js").wallets();
  var admin = wallet[network].admin;

  console.log(" wallet config:", wallet[network]);
  console.log(" network:", network);
  console.log(" accounts:", accounts);
  
  deployer.then(async ()=>{
    // deploy library first
    await deployer.deploy(SafeMath);

    // deploy UniswapFactory
    await deployer.link(SafeMath, UniswapExchange);

    let uniswapExchange = await deployer.deploy(UniswapExchange);
    let erc20 = await deployer.deploy(ERC20);
  })
  
}  
