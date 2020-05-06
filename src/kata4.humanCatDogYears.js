const humanCatDogYears = number => {
const catYrs = (number - 2) * 4 + 24
const dogYrs = (number - 2) * 5 + 24
const yrOne = 15
const yrTwo = 24


if (number > 3){
    return array_num = [number, catYrs, dogYrs];
}
else if(number === 1){
    return array_num = [number, yrOne, yrOne];
}
else if (number === 2) {
    return array_num = [number, yrTwo, yrTwo];
} else {
    return "Please provide a whole number not minus or decimal"
};
};


module.exports = humanCatDogYears;
