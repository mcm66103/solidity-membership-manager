pragma solidity ^0.6.0;

contract Membership {
    bool public status; // active or inactive
    
    uint public startDate;
    uint public endDate;

    constructor() public {
        startDate = now;
        status = false;
    }

    // Check that the end date has not passed.
    modifier checkEndDate {        
        require(now <= endDate);
        _;
    }
}