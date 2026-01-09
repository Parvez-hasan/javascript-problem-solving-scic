
function removeDupli(arr) {
    let unique = [];

    for (let item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}


