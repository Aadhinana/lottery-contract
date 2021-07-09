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
  provider = new Web3.providers.HttpProvider(
    "http://localhost:7545"
  );
}
web3 = new Web3(provider);

let abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_minimum",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "minimumContribution",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getTotalAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllParticipants",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "participate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [],
    "name": "pickWinner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "sendMoney",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

console.log(web3.version)
let contract =  await web3.eth.contract(abi, "0x7a2787e93c07d78bf093E0Bcc8D69B7FB8335335")