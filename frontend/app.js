// Import the contract ABI and metadata that is compile
// Cannot import .json files with import so work around that.
import contract from "./contract.js";

let web3;
async function setup() {
  // Check if using modern browsers
  let provider;
  if (window.ethereum) {
    provider = window.ethereum;
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      // User denied account access...
      console.error("User denied account access");
    }
  }
  // Legacy dapp browsers or older version of metamask...
  else if (window.web3) {
    provider = window.web3.currentProvider;
  }
  // If no injected web3 instance is detected, fall back to Ganache
  else {
    provider = new Web3.providers.HttpProvider("http://localhost:7545");
  }
  web3 = new Web3(provider);
  console.log(web3.version);

  getAccounts();
  getContract();
}

setup();

async function getAccounts() {
  console.log(await web3.eth.getAccounts());
}

// Contract definition will take ABI and ADDR
async function getContract() {
  let instance = new web3.eth.Contract(
    contract.abi,
    "0xeD91dae3c4EaF4c43B42c28FB48626EDA05654c5"
  );
  console.log(instance.methods);
}
