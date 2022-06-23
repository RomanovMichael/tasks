
// Самостоятельная работа 

const mixedArray = [43, 13, 74, 14, 66, 15, 22, 4];

const isEven = (num) => {
    return num.filter(number => number % 2 == 0)
}
console.log(isEven(mixedArray));


///Воркшоп 

const isItEven = num => {
    return num % 2 == 0;
}
const filterArray = (arrayToFilter, filetrFn) => {
    const filteredArray = [];
    arrayToFilter.forEach(num => {
        if (filetrFn(num)) {
            filteredArray.push(num);
        }
    });
    return filteredArray;
}

console.log(filterArray(mixedArray, isItEven));