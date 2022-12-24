const sumAll = function(num1, num2) {
    console.log(typeof num2)
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR'
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    if (num1 > num2) {
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }
    let answer = 0;
    for (let i = num1; i <= num2; i++) {
        // console.log(i)
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
