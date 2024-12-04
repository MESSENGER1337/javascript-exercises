const reverseString = function(word) {
    let newWord = word.split('');
    let reversed = newWord.reverse();
    let result = reversed.join('');
    return result;

};

reverseString('123! abc! Hello, Odinite.')
// Do not edit below this line
module.exports = reverseString;


// npm test reverseString.spec.js