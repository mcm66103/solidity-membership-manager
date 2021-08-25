# solidity-membership-manager
Ethereum smart contracts for managing membership.

## Initial setup 
- [Install Ganache](https://www.trufflesuite.com/ganache) for local ethereum blockchain.
- Install truffle

In your terminal...

```bash
npm install -g truffle
```

## Running tests
- [Start Ganache](https://www.trufflesuite.com/docs/ganache/quickstart)
- `truffle develop`
- `test`

## User Stories

### As a member...
- [x] I want to know my membership status
- [] I want to know when my membership ends
- [] I want to know when my next payment is due
- [] I want to make payments to keep my membership active

### As an administrator...
- [] I want to set up new memberships
    - [] and set the price
    - [] and set the term (monthly/quarterly/yearly)
- [] I want to receive funds for paid memberships