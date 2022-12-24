const reverseString = function(word) {
    answer = ''
    for (let i = word.length - 1; i >= 0; i--) {
        answer += word[i]
    }
    return answer

    // return word.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
