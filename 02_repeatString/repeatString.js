const repeatString = function (word, times) {
    if (times < 0) return 'ERROR';
    let result = '';
    for (let i = 0; i < times; i++) {
        result += word;
    }
    return result;
};

repeatString('odin', 300)

// Do not edit below this line
module.exports = repeatString;


// npm test repeatString.spec.js