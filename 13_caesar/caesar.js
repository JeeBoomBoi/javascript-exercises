const caesar = function (string, shift) {
    return string
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => ((n % m) + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
}

// let ans = ''
// for (let i = 0; i < string.length; i++) {
//     if (!isAlpha(string[i])) {
//         ans += string[i];
//     }
//     else {
//         let charCode = string.charCodeAt(i) + offset;
//         if (string[i] == string[i].toUpperCase()) {
//             ans += String.fromCharCode(((charCode) <= 90) ? charCode : charCode % 90 + 64);
//         } else {
//             ans += String.fromCharCode(((charCode) <= 122) ? charCode : charCode % 122 + 96);
//         }   
//     }
// }
// console.log(String.fromCharCode("W".charCodeAt(0) - 5))
// return ans;

let isAlpha = function (ch) {
    return /^[A-Z]$/i.test(ch);
}

// Do not edit below this line
module.exports = caesar;
