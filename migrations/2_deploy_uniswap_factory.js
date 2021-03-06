// declare library
var SafeMath = artifacts.require("./Library/SafeMath.sol");
var IUniswapFactory = artifacts.require("./interfaces/IUniswapFactory.sol");
var IERC20 = artifacts.require("./interfaces/IERC20.sol");

// declare contract
var UniswapFactory = artifacts.require("./uniswap/UniswapFactory.sol");
var ERC20 = artifacts.require("./tokens/ERC20.sol");

module.exports = function(deployer, network, accounts) {
  
  var wallet = require("../config/accountsConfig.js").wallets();
  var admin = wallet[network].admin;

  console.log(" wallet config:", wallet[network]);
  console.log(" network:", network);
  console.log(" accounts:", accounts);
  
  deployer.then(async ()=>{
    // deploy library first
    // await deployer.deploy(SafeMath);
    // await deployer.deploy(IERC20);    

    // deploy UniswapFactory
    // await deployer.link(SafeMath, UniswapFactory);
    let uniswapFactory = await deployer.deploy(UniswapFactory);
    // let erc20 = await deployer.deploy(ERC20, {from: admin});
  })
  
}  
