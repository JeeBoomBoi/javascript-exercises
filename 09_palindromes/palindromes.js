const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "")
    let i = 0;
    let j = processedString.length - 1;
    while (i < j / 2) {
        if (processedString[i] != processedString[j])
            return false;
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
