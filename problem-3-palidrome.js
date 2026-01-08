
function isPalindrome(str){

    let reversed = str.split("").reversed().join("");
    return str === reversed;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));


