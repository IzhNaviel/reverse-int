module.exports = function reverse (n) {
const nToString = n.toString();
const reverseNum = parseInt(nToString.split('').reverse().join(''));
    
return reverseNum    
}
