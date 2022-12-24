const repeatString = function(word, number) {
    let answer = "";
    if (number < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < number; i++) {
        answer += word;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
