const sumAll = function (start, end) {

    if (
        typeof start !== "number" ||
        typeof end !== "number" ||
        start < 0 ||
        end < 0 ||
        !Number.isInteger(start) ||
        !Number.isInteger(end)
    ) {
        return "ERROR"; // Return "ERROR" for invalid inputs
    }

    if (start > end) {
        [start, end] = [end, start]; // Swap using array destructuring
    }
    
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;

};
sumAll(123, 1);
// Do not edit below this line
module.exports = sumAll;


// npm test sumAll.spec.js
