### Lottery Contract

This is an blockcahin application of Lottery.

---

`Lottery` represents the whole contract having
 - `owner` who owns or runs the lottery
 - `minimumContribution` that is required to participate
 - `participants[]` to hold the participants

- `getTotalAmount` that has the total price pool so far
- `getAllParticipants` returns addresses of participants
- `participate` that lets you participate in the lottery. Send along Wei of atleaset `minimumContribution` to enroll.
- `pickWinner` to be called by owner to pick winners.
- `sendMoney` called by owner upon picking the winner.

---

- [x] Owner would create a new lottery with some Minimum Contribution to be allowed.
- [x] Anyone should be able to send money to be enrolled in the lottery
- [x] Owner will be the one to pick Winners 
- [ ] Write appropiate Tests to validate the above
- [ ] A front end to interact much more easily with the contract
- [ ] Conside moving to Hardhat? Not sure.
---

Using Truffle for development.