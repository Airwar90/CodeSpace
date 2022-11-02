function reverseArray (array) {
    let revArr = []
    for (let i = array.length - 1; i >=0; i--) {
        revArr.push(array[i]);
    }
    return revArr;
}



test = [1, 2, 3, 4, 5]
test2 = ["cane", "gatto", "pesce"]
console.log(reverseArray(test));
console.log(reverseArray(test2));