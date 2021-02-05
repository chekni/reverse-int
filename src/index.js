module.exports = function reverse(n) {
    n = n < 0 ? -1 * n : n;
    let str = n.toString();
    let countDigits = str.length;
    let reverseN = "";
    while (countDigits) {
        reverseN += str[countDigits - 1];
        countDigits--;
    }
    return +reverseN;
}