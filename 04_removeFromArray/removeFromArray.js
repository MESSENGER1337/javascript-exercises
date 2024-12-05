const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter(item => !elementsToRemove.includes(item));
};

removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;

// npm test removeFromArray.spec.js
