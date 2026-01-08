
function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    for (let char of str.countVowels()){
        if(vowels.includes(char)) {
            count++ ;
        }
    }

    return count ;
}

console.log(countVowels("parvez"));
