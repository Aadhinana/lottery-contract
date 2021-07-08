// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public owner;
    uint public minimumContribution;
    address[] participants;

    constructor(uint _minimum) {
        owner = msg.sender;
        minimumContribution = _minimum;
    }

    modifier onlyOwner(){
      require(owner == msg.sender, "Only the contract Owner can perform this action!");
      _;
    }

    function getTotalAmount() public view returns (uint256) {
        return address(this).balance;
    }
    
    function getAllParticipants() public view returns(address[] memory){
        return participants;
    }

    // Enrolls you into the lottery draw
    function participate() payable public {
      require(msg.value >= minimumContribution, "The amount sent is less than the Minimum Contribution");
      participants.push(msg.sender);
    }

    function random() private view returns(uint){
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, participants )));
    }

    function pickWinner() public onlyOwner view returns(address){
        require(participants.length > 1, "Only one participant has entered so far!");
        uint index = random() % participants.length;
        return participants[index];
    }
    function sendMoney(address payable _to) public onlyOwner{
        _to.transfer(address(this).balance);
    }
}
