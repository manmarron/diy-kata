const numberToReversedDigits = number => {


     let numArray = number.toString(10).replace(/\D/g, '0').split("").reverse().map(Number);
        return numArray;

};

module.exports = numberToReversedDigits;
