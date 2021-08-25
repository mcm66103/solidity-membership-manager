pragma solidity ^0.6.0;

contract Membership {
    bool public status; // active or inactive
    
    uint public startDate;
    uint public endDate;

    constructor(uint _length) public {
        startDate = now;
        endDate = startDate + _length * 1 days;
        status = false;
    }

    // Check that the end date has not passed.
    modifier checkEndDate {
        require(now <= endDate);
        _;
    }
}